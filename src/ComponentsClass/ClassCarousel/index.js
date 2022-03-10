import React from "react";
import ClassCarouselCard from "../ClassCarouselCard";
import ClassEmptyCarousel from "../ClassEmptyCarousel";
import './Carousel.css';

class ClassCarousel extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        }

        this.maxItemNumber = React.Children.count(props.children) || 0;
        
    }

    onClickPrevSlide = () => {
        const lastIndex = (this.state.currentSlide <= 0 ? this.maxItemNumber - 1 : this.state.currentSlide - 1);
        window.location.href = "#carousel__slideClass" + lastIndex;
        this.setState({ currentSlide: lastIndex });
    }

    onClickNextSlide = () => {
        const nextIndex = (this.state.currentSlide >= this.maxItemNumber - 1 ? 0 : this.state.currentSlide + 1);
        window.location.href = "#carousel__slideClass" + nextIndex;
        this.setState({ currentSlide: nextIndex });
    }

    render() {
        return (
            <section className="carousel" aria-label="Gallery">
                {(this.maxItemNumber > 0) &&
                    <ol className="carousel__viewport">
                        {
                            React.Children.map(this.props.children, (child, index) => (
                                <ClassCarouselCard
                                    itemIndex={index}
                                    onClickPrevSlide={this.onClickPrevSlide}
                                    onClickNextSlide={this.onClickNextSlide}>
                                    {child}
                                </ClassCarouselCard>
                            ))
                        }
                    </ol>
                }

                {(this.maxItemNumber === 0) && <ClassEmptyCarousel />}
            </section>
        );
    }
}

export default ClassCarousel;