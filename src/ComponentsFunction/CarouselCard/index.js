import React from "react";

function CarouselCard({ children, itemIndex, onClickPrevSlide, onClickNextSlide }) {

    const carouselId = "carousel__slide" + itemIndex;

    const [currentStyle, setCurrentStyle] = React.useState();

    React.useEffect(() => {

        setCurrentStyle({
            fontSize: 20,
            opacity: 1,
            transition: 'all 1s ease',
        });
        return () => {
            setCurrentStyle({
                fontSize: 60,
                opacity: 0,
                transition: 'all 1s ease',
            });
            console.log("Deleting - ItemID: %s", itemIndex)
        }
    }, []);


    return (
        <li id={carouselId}
            tabIndex="0"
            className="carousel__slide"
            style={currentStyle}>

            <div className="carousel__snapper">
                {children}
            </div>

            <button onClick={onClickPrevSlide}
                className="carousel__prev">Previous slide</button>

            <button onClick={onClickNextSlide}
                className="carousel__next">Next slide</button>
        </li>
    );
}



export { CarouselCard };