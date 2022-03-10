import React from "react";

class ClassCarouselCard extends React.Component {
   
    constructor(props) {
        super(props);
        this.carouselId = "carousel__slideClass"+ props.itemIndex;
    }
  
    render() { 
        return (  
            <li id={this.carouselId}
            tabIndex="0"
            className="carousel__slide">

            <div className="carousel__snapper">
                {this.props.children}
            </div>

            <button onClick={this.props.onClickPrevSlide}
                className="carousel__prev">Previous slide</button>

            <button onClick={this.props.onClickNextSlide}
                className="carousel__next">Next slide</button>
            </li>
        );
    }
}
 
export default ClassCarouselCard;