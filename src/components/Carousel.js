import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Carousel({slides}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }

    console.log(slides)

    return(
        <div className=" w-[43vw] bg-black bg-opacity-20 rounded-2xl p-10 mt-10" >
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.image} alt={`Slide ${index}`} className="rounded-xl" />
                        <div className="text-white text-center text-4xl mt-5 font-extrabold">
                            {slide.title}
                        </div>
                        <div className="text-white my-2">
                            {slide.text}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel