import React from 'react';

const Footer = function Footer(props) {
  return <div className="row footer"><p>Copyright © <span className="currentYear">{props.currentYear}</span> Artem Rosnovskiy.<br/> Online since 1996.</p></div>;
}

export default Footer;
