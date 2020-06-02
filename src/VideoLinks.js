import React from 'react';

const VideoDsply = () => {
  return (
    <div className='iframe-container'>
      <iframe
        title='Heifetz plays Paganini'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/RPPR5Yqzapo'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoDsply;
