const fetch = require('node-fetch');

exports.getPortfolio = async (req, res) => {
	const year = new Date().getFullYear();

	const getBook = async (bookID) => {
		//Google Books API volume request
		const url = 'https://www.googleapis.com/books/v1/users/109765411434313905037/bookshelves/3/volumes';
		
		//fetching the data
		const result = await fetch(url);

		//parsing the book object
		const shelfData =  await result.json();
		const bookData = shelfData.items[0];
		

		let authorsList = [...bookData.volumeInfo.authors];
		
		if(authorsList.length >= 3){
			authorsList = [...bookData.volumeInfo.authors].slice(',').join(", ");
		}
		else {
			authorsList = [...bookData.volumeInfo.authors].slice(',').join(" and ");	
		}
		

		//Combining book object
		const book = {
			"title": bookData.volumeInfo.title,
			"authors": authorsList,
			"cover": bookData.volumeInfo.imageLinks.thumbnail,
			"url": bookData.volumeInfo.previewLink
		}
		
		return book;	
		}

	const book = await getBook();

	res.render('index', { title : "Artem Rosnovskiy — Web Developer", year, book });
};

exports.getResume = (req, res) => {
	res.download('./public/artem-rosnovskiy-full-stack.pdf');
};
