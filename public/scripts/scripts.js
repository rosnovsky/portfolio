// -----------------
// FOURSQUARE API
// -----------------
const getCheckins = async () => {
		//forusquare API URL
		const url = `https://api.foursquare.com/v2/users/self/checkins?oauth_token=YBMN154PRDHFF01BVVIG4UN3ONTXQQG3VK30IKR3BHXAFTNO&v=20170505`;
		
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
		return locations;	
	}

// -----------------
// Google Books API
// -----------------
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

// -----------------
// WAKATIME API
// -----------------

const getCodingTime = async () => {
	//Wakatime API stats request

	const url = 'https://wakatime.com/api/v1/users/rosnovsky/stats/last_7_days?api_key=d7ecb2e7-fc89-4faf-a778-874a5742e251';
	
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

// -----------------
// FITBIT HEARTRATE
// -----------------

const opts = {
	  	method: 'GET',
		headers: {"Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjZQUzUiLCJhdWQiOiIyMjhITEIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IHJociBycHJvIiwiZXhwIjoxNDk1NDA1NDk2LCJpYXQiOjE0OTQ4MDA2OTZ9.oMhqWKL1A0OzJqWdYy45sAOvzSG0pR_1jED4FCpszpM"}
	};

const getFitbitData = async () => {

	const url = 'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json';
	const HRdata = await fetch(url, opts);
	const heartrateData =  await HRdata.json();
	const restingHR = heartrateData['activities-heart'][0].value.restingHeartRate;

	return restingHR;
}

// -----------------
// FITBIT STEPS
// -----------------

const getFitbitSteps = async () => {

	// Setting up today's date
	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1; //January is 0!
	const yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = yyyy+'-'+mm+'-'+dd;

	// Requesting today's steps
	const url = `https://api.fitbit.com/1/user/-/activities/date/${today}.json`;
	const stepsRawData = await fetch(url, opts);
	const stepsData =  await stepsRawData.json();
	const steps = stepsData.summary.steps;
	
	return steps;
}

// ----------------
// FUNCTION CALLS
// ---------------

getCodingTime()
	.then(codingTime => {
			document.querySelector('.wakatime').innerHTML=`
			<h3>Side projects last 7 days</h3> 
			<p><strong>${codingTime.weekly}</strong> of coding, <strong>${codingTime.dailyAverage}</strong> a day.<br /><br />
			#1 language: <strong>${codingTime.language}</strong><br /><br />
			Runner up: <strong>${codingTime.languageRunnerUp}</strong>
			</p>`;
		});

getBook("mDzDBQAAQBAJ")
	.then(book => {
			document.querySelector('.book').innerHTML=`
			<h3>Current Book</h3>
			<p><a href="${book.url}"><img width="100px" src="${book.cover} alt="${book.title} by ${book.authors}" title="${book.title} by ${book.authors}" /></a></p>`;
		});

getCheckins()
	.then(locations => {
			document.querySelector('.checkins').innerHTML=`
			<h3>Latest location</h3>
			<p>${locations.current.venue} <br />(${locations.current.city}, ${locations.current.state})</p>`
		});

getFitbitData()
	.then(restingHR => {
		document.querySelector('.heartrate').innerHTML=`
			<p>Resting HR: <strong>${restingHR}</strong></p>`
	});

getFitbitSteps()
	.then(steps => {
		document.querySelector('.steps').innerHTML=`
			<p>Steps today: <strong>${steps}</strong></p>`
	});
