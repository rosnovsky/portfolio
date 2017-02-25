import React, { Component } from 'react';
import './skeleton.css';
import './App.css';


function Year(props) {
  return <p>Copyright © <span className="currentYear">{props.year}</span> Artem Rosnovskiy.<br/> Online since 1996.</p>;
}
const year = new Date().getFullYear();
const copyright = <Year year={year} />;

class App extends Component {
  render(props) {
    return (

<div className="container">
  <div className="row">
    <nav>
      <ul>
        <li><a href="https://github.com/rosnovsky" target="_blank">github</a></li>
        <li><a href="https://linkedin.com/in/rosnovsky" target="_blank">linkedin</a></li>
        <li><a href="https://facebook.com/rosnovsky" target="_blank">facebook</a></li>
        <li><a href="https://twitter.com/rosnovsky" target="_blank">twitter</a></li>
      </ul>
    </nav>
  </div>

  <div className="row title">
    <h1>Artem Rosnovskiy</h1>
    <h3>Front-End Developer</h3>
  </div>

  <div className="row content">
    <div className="six columns">
      <h4>Hi there!</h4>
      <p>Thanks for stopping by. I design and develop and manage easy-to-use, clear user interfaces for web sites and applications, both web and iOS/Android. I fully embrace mobile-first, device-specific designs, latest standards and best practices in producing and developing interfaces and websites. At this moment, I work in a position of a Web Producer and Assistant Manager at <img src="images/intel_logo.png" height="22px" alt="Intel Logo" /> as a contractor.</p> Previously, I engaged with organizations like NASA, CBS, The New York Times, Zendesk, Helpscout, and more.
      <p><a href="artem-rosnovskiy-front-end.pdf">Download my updated resumé</a> and drop me a line at <a href="mailto:artem.rosnovsky@gmail.com" className="email">artem.rosnovsky@gmail.com</a>. I’m <span className="available">tentatively open</span> for new opportunities.</p>
    </div>
    
    <div className="six columns">
      <h4>Skills &amp; Expertise</h4>
      <p><strong>Web dev</strong>: HTML5, CSS3, Javascript, jQuery, Gulp, Webpack, npm, Sass, Bootstrap, git, Ubuntu, Apache, nginx, PHP, MySQL, SSL</p>
      <p><strong>Design and Media</strong>: Adobe Photoshop, Illustrator, AfterEffects, Premier Pro, Dreamweaver, Flash (including some ActionScript), Audition, Sketch by Bohemian, Adobe Experience Manager (AEM)</p>
      <p><strong>In Progress</strong>: ES6, React, Node.js, Angular 2, MongoDB, Swift, WebOps</p>
    </div>
  </div>

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

  <div className="row footer">
    {copyright}
  </div> 
</div>
      );
  }
}

export default App;
