import React from "react";
import "./carousel.css";

import Carousel from "react-elastic-carousel";

export const Slider = () => {
  return (
    <div className="App">
      <Carousel itemsToShow={1} initialActiveIndex={3} isRTL >
        <div className="slider-div"><img src ={"asset/image/sliderbg.png"}/></div>
        <div className="slider-div"><img src ={"asset/image/sliderbg.png"}/></div>
        <div className="slider-div"><img src ={"asset/image/sliderbg.png"}/></div>
        
      
      </Carousel>
    </div>
  );
}
