// import React from 'react';
// const AboutUs = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>Coursera Inc. is a U.S.-based massive open online course provider founded in 2012 by Stanford University computer science professors Andrew Ng and Daphne Koller. Coursera works with universities and other organizations to offer online courses, certifications, and degrees in a variety of subjects.</p>
//         </div>
//     )
// };
// export default AboutUs;

import React, { Component } from 'react';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
        lectus ipsum. Phasellus at odio nec velit dignissim egestas. Curabitur
        sit amet ex sit amet ligula commodo congue ut non metus.
      </p>
      <p>
        Nullam non justo ac odio iaculis vestibulum. Donec interdum vehicula
        purus, a euismod nulla euismod sed. Sed nec libero luctus, cursus elit
        eget, posuere justo.
      </p>
    </div>
  );
};

export default AboutUs;