const fetch = require('node-fetch');

exports.getStatus = async (req, res) => {

		const getCheckins =  async () => {

			const url =  process.env.FOURSQUARE;
			
			//fetching the data
			const result = await fetch(url);

			//parsing the checkins
			const locationData =  await result.json();
			
			//current and previous locations
			const locations = { 
				"current": {
							"city": locationData.response.checkins.items[0].venue.location.city, 
							"state": locationData.response.checkins.items[0].venue.location.state, 
							"venue": locationData.response.checkins.items[0].venue.name
						},
				
				"previous": { 
							"city": locationData.response.checkins.items[1].venue.location.city,
							"state": locationData.response.checkins.items[1].venue.location.state, 
							"venue": locationData.response.checkins.items[1].venue.name
						}
				}
				return locations
			}

		const getBook = async (bookID) => {
			//Google Books API volume request
			const url = 'https://www.googleapis.com/books/v1/volumes/'+ bookID;
			
			//fetching the data
			const result = await fetch(url);

			//parsing the book object
			const bookData =  await result.json();
			const authorsList = [...bookData.volumeInfo.authors].slice(',').join(" and ");

			//Combining book object
			const book = {
				"title": bookData.volumeInfo.title,
				"authors": authorsList,
				"cover": bookData.volumeInfo.imageLinks.small,
				"url": bookData.volumeInfo.previewLink
			}
			
			return book;	
			}

		const getCodingTime = async () => {
			//Wakatime API stats request

			const url = process.env.WAKATIME;
			
			//fetching the data
			const result = await fetch(url);

			//parsing weekly total
			const codingData =  await result.json();
			const codingTime = {
				"weekly": codingData.data.human_readable_total,
				"dailyAverage": codingData.data.human_readable_daily_average,
				"language": codingData.data.languages[0].name,
				"languageRunnerUp": codingData.data.languages[1].name
			}
			
			return codingTime;	
			}

		const getFitbitHR = async () => {

			const opts = {
			  	method: 'GET',
				headers: {"Authorization" : process.env.FITBIT }
			};

			const url = 'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json';
			const HRdata = await fetch(url, opts);
			const heartrateData =  await HRdata.json();
			const fitbitHR = heartrateData['activities-heart'][0].value.restingHeartRate;

			return fitbitHR;
		}

		const getFitbitSteps = async () => {
			
			const opts = {
			  	method: 'GET',
				headers: {"Authorization" : process.env.FITBIT }
			};

			// Requesting today's steps
			const url = `https://api.fitbit.com/1/user/-/activities/date/today.json`;
			const stepsRawData = await fetch(url, opts);
			const stepsData =  await stepsRawData.json();
			const fitbitSteps = stepsData.summary.steps;
			
			return fitbitSteps;
		}

		const locations = await getCheckins();
		const book = await getBook('mDzDBQAAQBAJ');
		const codingTime = await getCodingTime();
		const fitbitHR = await getFitbitHR();
		const fitbitSteps = await getFitbitSteps();

	
	res.render('status', {locations, book, codingTime, fitbitHR, fitbitSteps});
};
