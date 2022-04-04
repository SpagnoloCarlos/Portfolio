import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';

const Slideshow = (props) => {
  return (
    <div>
      <Slide easing="ease">
        {props.images.map((item, index) => {
          return (
            <div key={index} className="each-slide">
              <div style={{ backgroundImage: `url(${item})` }} />
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;
