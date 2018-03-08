const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', async (req, res, next) => {	

	try{
		getLocation = async () => {
			const url = env.production.FOURSQUARE;

			const result = await fetch(url);
			const locationResult = await result.json();
			const locationData = {
					"venue": locationResult.response.checkins.items[0].venue.name,
					"city": locationResult.response.checkins.items[0].venue.location.city,
					"state": locationResult.response.checkins.items[0].venue.location.state
					
				};	

				return locationData; 
			
			}
	} catch(err) {
	return res.status(500).send()
}


try {
	 getBook = async () => {
		const url = "https://www.googleapis.com/books/v1/users/109765411434313905037/bookshelves/3/volumes";

		const result = await fetch(url);
		const bookResult = await result.json();
		const bookData = {
				"author": bookResult.items[0].volumeInfo.authors,
				"title": bookResult.items[0].volumeInfo.title,
				"cover": bookResult.items[0].volumeInfo.imageLinks.thumbnail,
				"url": bookResult.items[0].volumeInfo.previewLink
			};
		
			return bookData;
		};
	} catch (err) {
		return res.status(500).send()
	}

		try {
		 getCode = async () => {
			const url = env.production.WAKATIME;
	
			const result = await fetch(url);
			const codeResult = await result.json();
			const codeData = {
				
				weekly: codeResult.data.human_readable_total,
			};
				
				return codeData;
			};
		} catch (err) {
			return res.status(500).send()
		}

	const book = await getBook();
	const location = await getLocation();
	const coding = await getCode();


	res.json(
		{
			location,
			book, 
			coding
		});
});

module.exports = router;
