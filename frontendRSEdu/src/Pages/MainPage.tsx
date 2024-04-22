import {Slider} from "../components/slider-carousel/slider-carousel.tsx";
import {DwnldUpdtCard} from "../components/сards/dwnldUpdtCard.tsx";
import {NewsCard} from "../components/сards/newsCard.tsx";

export default function MainPage() {
    return (
        <div>
            <Slider/>
            <DwnldUpdtCard/>
            <NewsCard/>
        </div>
    )
}