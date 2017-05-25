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
					"city" : locationData.response.checkins.items[0].venue.location.city, 
					"state": locationData.response.checkins.items[0].venue.location.state, 
					"venue": locationData.response.checkins.items[0].venue.name,
					"lat" : locationData.response.checkins.items[0].venue.location.lat,
					"lng" : locationData.response.checkins.items[0].venue.location.lng,
					
					//TODO
					//Address should be taken from Google Places search for the nearest Google Place

					"address" : locationData.response.checkins.items[0].venue.location.formattedAddress[0] + ", " + locationData.response.checkins.items[0].venue.location.formattedAddress[1]
					}
				}
			return locations
			}

		// const getBook = async (bookID) => {
		// 	//Google Books API volume request
		// 	const url = 'https://www.googleapis.com/books/v1/users/109765411434313905037/bookshelves/3/volumes';
			
		// 	//fetching the data
		// 	const result = await fetch(url);

		// 	//parsing the book object
		// 	const shelfData =  await result.json();
		// 	const bookData = shelfData.items[0];
			

		// 	let authorsList = [...bookData.volumeInfo.authors];
			
		// 	if(authorsList.length >= 3){
		// 		authorsList = [...bookData.volumeInfo.authors].slice(',').join(", ");
		// 	}
		// 	else {
		// 		authorsList = [...bookData.volumeInfo.authors].slice(',').join(" and ");	
		// 	}
			

		// 	//Combining book object
		// 	const book = {
		// 		"title": bookData.volumeInfo.title,
		// 		"authors": authorsList,
		// 		"cover": bookData.volumeInfo.imageLinks.thumbnail,
		// 		"url": bookData.volumeInfo.previewLink
		// 	}
			
		// 	return book;	
		// 	}

		// const getCodingTime = async () => {
		// 	//Wakatime API stats request

		// 	const url = process.env.WAKATIME;
			
		// 	//fetching the data
		// 	const result = await fetch(url);

		// 	//parsing weekly total
		// 	const codingData =  await result.json();
		// 	const codingTime = {
		// 		"weekly": codingData.data.human_readable_total,
		// 		"dailyAverage": codingData.data.human_readable_daily_average,
		// 		"language": codingData.data.languages[0].name,
		// 		"languageRunnerUp": codingData.data.languages[1].name
		// 	}
			
		// 	return codingTime;	
		// 	}

		// const getFitbitHR = async () => {

		// 	const opts = {
		// 	  	method: 'GET',
		// 		headers: {"Authorization" : process.env.FITBIT }
		// 	};

		// 	const url = 'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json';
		// 	const HRdata = await fetch(url, opts);
		// 	const heartrateData =  await HRdata.json();
		// 	let fitbitHR = heartrateData['activities-heart'][0].value.restingHeartRate;

		// 	if (!fitbitHR || fitbitHR == 0 || fitbitHR == "undefined") {
		// 		fitbitHR = "Server Update in progress";
		// 	}

		// 	return fitbitHR;
		// }

		// const getFitbitSteps = async () => {
			
		// 	const opts = {
		// 	  	method: 'GET',
		// 		headers: {"Authorization" : process.env.FITBIT }
		// 	};

		// 	// Requesting today's steps
		// 	const url = `https://api.fitbit.com/1/user/-/activities/date/today.json`;
		// 	const stepsRawData = await fetch(url, opts);
		// 	const stepsData =  await stepsRawData.json();
		// 	const fitbitSteps = stepsData.summary.steps;
			
		// 	return fitbitSteps;
		// }

		const locations = await getCheckins();
		// const book = await getBook();
		// const codingTime = await getCodingTime();
		// const fitbitHR = await getFitbitHR();
		// const fitbitSteps = await getFitbitSteps();

		const mapUrl = "https://maps.googleapis.com/maps/api/staticmap?maptype=terrain&center=" + locations.current.lat + "," + locations.current.lng + "&zoom=9&size=640x150&scale=4&markers=color:red%7Clabel:R%7C" + locations.current.lat+ "," + locations.current.lng + "&key=" + process.env.GOOGLE_MAPS;

		const year = new Date().getFullYear();
	
	res.render('index', {locations, mapUrl, title : "Artem Rosnovskiy — Web Developer", year });
};

exports.getResume = (req, res) => {
	res.download('./public/artem-rosnovskiy-web-developer.pdf');
};

// AIzaSyBUL0eVSBbhebCIVdzzNaN79gh0q-BjieQ
