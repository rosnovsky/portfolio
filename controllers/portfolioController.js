exports.getPortfolio = (req, res) => {
	const year = new Date().getFullYear();
	res.render('index', { title : "Artem Rosnovskiy — Web Developer", year });
};

exports.getResume = (req, res) => {
	res.download('./public/artem-rosnovskiy-full-stack.pdf');
};
