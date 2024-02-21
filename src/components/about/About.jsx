// src/components/About.jsx

import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <h2>About the Author</h2>
      <img src="author-avatar.jpg" alt="Author Avatar" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed id justo nec risus ultricies dignissim. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Integer nec ex nec odio eleifend congue. Nullam nec felis
        vitae libero ultricies tincidunt. Donec nec nisl sit amet magna
        ultricies rhoncus. Nulla facilisi. Sed id justo nec risus ultricies
        dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Integer nec ex nec odio eleifend
        congue. Nullam nec felis vitae libero ultricies tincidunt. Donec nec
        nisl sit amet magna ultricies rhoncus.
      </p>
    </div>
  );
};

export default About;
