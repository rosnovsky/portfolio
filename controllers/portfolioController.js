const fetch = require('node-fetch');

exports.getPortfolio = async (req, res) => {
	const year = new Date().getFullYear();

	const getBooks = async (bookID) => {
		//Google Books API volume request
		const url = 'https://www.googleapis.com/books/v1/users/109765411434313905037/bookshelves/3/volumes';
		
		//fetching the data
		const result = await fetch(url);

		//parsing the book object
		const shelfData =  await result.json();
		const booksData = shelfData.items;
		const booksOnShelf = shelfData.totalItems;
		let books = new Array;

		for (i=0; i<booksOnShelf; i++) {
			let bookData = booksData[i];
			let authorsList = [...bookData.volumeInfo.authors];
	
			if(authorsList.length >= 3){
				authorsList = [...bookData.volumeInfo.authors].slice(',').join(", ");
			}
			else {
				authorsList = [...bookData.volumeInfo.authors].slice(',').join(" and ");	
			}

			let book = {
				"title": bookData.volumeInfo.title,
				"authors": authorsList,
				"cover": bookData.volumeInfo.imageLinks.thumbnail,
				"url": bookData.volumeInfo.previewLink
			}
	

			
			books[i] = book; 			
			console.log(books);
		}
		return books;
	}

	const books = await getBooks();

	res.render('index', { title : "Artem Rosnovskiy — Web Developer", year, books });
};

exports.getResume = (req, res) => {
	res.download('./public/artem-rosnovskiy-full-stack.pdf');
};
