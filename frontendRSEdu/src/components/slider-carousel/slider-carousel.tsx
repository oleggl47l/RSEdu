import './sliderStyle.css';
import { useState} from "react";

export const Slider = () => {
    // useEffect(() => {
    //     const slides = document.querySelectorAll('.carousel ul li') as NodeListOf<HTMLLIElement>;
    //     const radios = document.querySelectorAll('[name="controls"]') as NodeListOf<HTMLInputElement>;
    //     const totalSlides = slides.length;
    //
    //     let currentSlide = 0;
    //
    //     const goToSlide = (index: number) => {
    //         slides.forEach((slide, i) => {
    //             slide.style.left = `${100 * (i - index)}%`;
    //         });
    //     };
    //
    //     const updateSlider = () => {
    //         goToSlide(currentSlide);
    //     };
    //
    //     const handleRadioChange = (e: Event) => {
    //         const target = e.target as HTMLInputElement;
    //         currentSlide = parseInt(target.id.split('slide')[1]) - 1;
    //         updateSlider();
    //     };
    //
    //     radios.forEach(radio => {
    //         radio.addEventListener('change', handleRadioChange);
    //     });
    //
    //     // Automatically reset to the first slide when reaching the last one
    //     setInterval(() => {
    //         currentSlide = (currentSlide + 1) % totalSlides;
    //         radios[currentSlide].checked = true;
    //         updateSlider();
    //     }, 5000); // Adjust the interval as needed
    //
    //     return () => {
    //         radios.forEach(radio => {
    //             radio.removeEventListener('change', handleRadioChange);
    //         });
    //     };
    // }, []);



    const [currentSlide, setCurrentSlide] = useState(1);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider" style={{ paddingBottom: '20px' }}>
            <div className="carousel-wrapper">
                <input id="slide1" type="radio" name="controls" checked={currentSlide === 1} />
                <input id="slide2" type="radio" name="controls" checked={currentSlide === 2} />
                <input id="slide3" type="radio" name="controls" checked={currentSlide === 3} />
                <input id="slide4" type="radio" name="controls" checked={currentSlide === 4} />
                <input id="slide5" type="radio" name="controls" checked={currentSlide === 5} />

                <label htmlFor="slide1" className="nav-dot" onClick={() => handleSlideChange(1)}></label>
                <label htmlFor="slide2" className="nav-dot" onClick={() => handleSlideChange(2)}></label>
                <label htmlFor="slide3" className="nav-dot" onClick={() => handleSlideChange(3)}></label>
                <label htmlFor="slide4" className="nav-dot" onClick={() => handleSlideChange(4)}></label>
                <label htmlFor="slide5" className="nav-dot" onClick={() => handleSlideChange(5)}></label>

                <label htmlFor="slide1" className="left-arrow" onClick={() => handleSlideChange(currentSlide === 1 ? 5 : currentSlide - 1)}>&lt;</label>
                <label htmlFor="slide2" className="left-arrow" onClick={() => handleSlideChange(currentSlide === 1 ? 5 : currentSlide - 1)}>&lt;</label>
                <label htmlFor="slide3" className="left-arrow" onClick={() => handleSlideChange(currentSlide === 1 ? 5 : currentSlide - 1)}>&lt;</label>
                <label htmlFor="slide4" className="left-arrow" onClick={() => handleSlideChange(currentSlide === 1 ? 5 : currentSlide - 1)}>&lt;</label>
                <label htmlFor="slide5" className="left-arrow" onClick={() => handleSlideChange(currentSlide === 1 ? 5 : currentSlide - 1)}>&lt;</label>

                <label htmlFor="slide1" className="right-arrow" onClick={() => handleSlideChange(currentSlide === 5 ? 1 : currentSlide + 1)}>&gt;</label>
                <label htmlFor="slide2" className="right-arrow" onClick={() => handleSlideChange(currentSlide === 5 ? 1 : currentSlide + 1)}>&gt;</label>
                <label htmlFor="slide3" className="right-arrow" onClick={() => handleSlideChange(currentSlide === 5 ? 1 : currentSlide + 1)}>&gt;</label>
                <label htmlFor="slide4" className="right-arrow" onClick={() => handleSlideChange(currentSlide === 5 ? 1 : currentSlide + 1)}>&gt;</label>
                <label htmlFor="slide5" className="right-arrow" onClick={() => handleSlideChange(currentSlide === 5 ? 1 : currentSlide + 1)}>&gt;</label>

                <div className="carousel">
                    <ul>
                        <li>
                            <img
                                src="https://img.goodfon.ru/original/8000x5238/6/2d/robot-march-alex-steven-martin-by-alex-steven-martin-art-rob.jpg"/>
                        </li>
                        <li>
                            <img
                                src="https://previews.123rf.com/images/izakowski/izakowski2204/izakowski220400196/185209415-cartoon-illustration-of-robots-and-droids-comic-characters-group.jpg"/>
                        </li>
                        <li>
                            <img
                                src="https://thumbs.dreamstime.com/b/cartoon-robots-conceptual-fantasy-characters-group-vector-illustration-funny-151608393.jpg"/>
                        </li>
                        <li>
                            <img
                                src="https://thumbs.dreamstime.com/b/funny-robots-cartoon-characters-group-illustration-fantasy-science-151512700.jpg"/>
                        </li>
                        <li>
                            <img
                                src="https://indasil.club/uploads/posts/2022-11/1669302924_39-indasil-club-p-robot-detskii-risunok-pinterest-40.jpg"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
