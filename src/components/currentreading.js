import React from 'react';

const CurrentReading = (props) => {
  return (
    <div>
    <div className="row">
      <div className="twelve columns">
        <h4>Current Reading</h4>
      </div>
    </div>

    <div className="row books">
      <div className="three columns book">
        <a href="http://amzn.to/2kNy9od" target="_blank"><img src="images/51zFTdNilAL.jpg" alt="Eloquent JavaScript: A Modern Introduction to Programming" className="bookCoverWide" />
        <p className="bookTitle">Eloquent JavaScript: A Modern Introduction to Programming</p></a>
      </div>
      
      <div className="three columns book">
        <a href="http://amzn.to/2klA7O5" target="_blank"><img src="images/41EOlL+w6KL.jpg" alt="Blink" className="bookCover" />
        <p className="bookTitle">Blink: The Power of Thinking Without Thinking</p></a>
      </div>

      <div className="three columns book">
        <a href="http://amzn.to/2l2ArhX" target="_blank"><img src="images/51KWpTOBMcL.jpg" alt="Team of Rivals: The Political Genius of Abraham Lincoln" className="bookCover" />
        <p className="bookTitle">Team of Rivals: The Political Genius of Abraham Lincoln</p></a>
      </div>

      <div className="three columns book">
        <a href="http://amzn.to/2l2xcaq" target="_blank"><img src="images/41BQZYCzzqL.jpg" alt="Dreamland" className="bookCover" />
        <p className="bookTitle">Dreamland: Adventures in the Strange Science of Sleep</p></a>
      </div>

    </div>
    </div>
           )
}


export default CurrentReading;
