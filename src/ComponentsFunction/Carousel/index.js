import React from "react";
import { CarouselCard } from "../CarouselCard";
import { EmptyCarousel } from "../EmptyCarousel";
import './Carousel.css';

function Carousel({ children }) {

    //Children Management 
    const [itemSlide, setItemSlide] = React.useState([]);

    // Index Management
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const maxItemNumber = React.Children.count(children) || 0;

    React.useEffect(() => {
        setItemSlide(children);
    }, [children]);

    const onClickPrevSlide = () => {
        const lastIndex = (currentSlide <= 0 ? maxItemNumber - 1 : currentSlide - 1); 
        setCurrentSlide(lastIndex);
    }

    const onClickNextSlide = () => {
        const nextIndex = (currentSlide >= maxItemNumber - 1 ? 0 : currentSlide + 1);
        setCurrentSlide(nextIndex);
    }


    return (
        <section className="carousel" aria-label="Gallery">
            {(maxItemNumber > 0) &&
                <ol className="carousel__viewport">


                    <CarouselCard
                        key={currentSlide}
                        itemIndex={currentSlide}
                        onClickPrevSlide={onClickPrevSlide}
                        onClickNextSlide={onClickNextSlide}>
                        {itemSlide[currentSlide]}
                    </CarouselCard>


                </ol>
            }

            {(maxItemNumber === 0) && <EmptyCarousel />}
        </section>
    );

    // 
    /*return (
        <section className="carousel" aria-label="Gallery">
            {(maxItemNumber > 0) &&
                <ol className="carousel__viewport">
                    {
                        React.Children.map(children, (child, index) => (
                            <CarouselCard
                                itemIndex={index}
                                onClickPrevSlide={onClickPrevSlide}
                                onClickNextSlide={onClickNextSlide}>
                                {child}
                            </CarouselCard>
                        ))
                    }
                </ol>
            }

            {(maxItemNumber === 0) && <EmptyCarousel />}
        </section>
    );*/
}

export { Carousel };