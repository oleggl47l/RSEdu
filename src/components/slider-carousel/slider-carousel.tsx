import './sliderStyle.css';

export const Slider = () => {
    return (
        <div className="slider" style={{paddingBottom: '20px'}}> {/* Added paddingBottom */}

            <div className="carousel-wrapper">
                <input id="slide1" type="radio" name="controls"/>
                <input id="slide2" type="radio" name="controls"/>
                <input id="slide3" type="radio" name="controls"/>
                <input id="slide4" type="radio" name="controls"/>
                <input id="slide5" type="radio" name="controls"/>

                <label htmlFor="slide1" className="nav-dot"></label>
                <label htmlFor="slide2" className="nav-dot"></label>
                <label htmlFor="slide3" className="nav-dot"></label>
                <label htmlFor="slide4" className="nav-dot"></label>
                <label htmlFor="slide5" className="nav-dot"></label>

                <label htmlFor="slide1" className="left-arrow">&lt;</label>
                <label htmlFor="slide2" className="left-arrow">&lt;</label>
                <label htmlFor="slide3" className="left-arrow">&lt;</label>
                <label htmlFor="slide4" className="left-arrow">&lt;</label>
                <label htmlFor="slide5" className="left-arrow">&lt;</label>

                <label htmlFor="slide1" className="right-arrow">&gt;</label>
                <label htmlFor="slide2" className="right-arrow">&gt;</label>
                <label htmlFor="slide3" className="right-arrow">&gt;</label>
                <label htmlFor="slide4" className="right-arrow">&gt;</label>
                <label htmlFor="slide5" className="right-arrow">&gt;</label>

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