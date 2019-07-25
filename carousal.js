import React from 'react';

class Slider extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        images: this.props.imgArray,
        currentIndex: 0,
        translateValue: 0
      };
    }
  
    goToPrevSlide = () => {
      if (this.state.currentIndex === 0) return;
  
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }));
    };
  
    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (this.state.currentIndex === this.state.images.length - 3) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }
  
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -this.slideWidth()
      }));
    };
  
    slideWidth = () => {
      return document.querySelector(".slide").clientWidth;
    };
  
    render() {
      return (
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: "transform ease-out 0.45s"
            }}
          >
            {this.state.images.map((image, i) => <Slide key={i} image={image} />)}
          </div>
            
        <img src={require('./assets/left-image-scroll.svg')} alt="not found" onClick={this.goToPrevSlide} className="backArrow arrow" />
        <img src={require('./assets/right-image-scroll.svg')} alt="not found" onClick={this.goToNextSlide} className="nextArrow arrow"/>
         
        </div>
      );
    }
  }
  
  const Slide = ({ image }) => {
    
    return (<div className="slide"><img  src={image} alt="not found"/></div>);
  };
  
  
  export default Slider;