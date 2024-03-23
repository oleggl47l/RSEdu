import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globalStyle.css';

import {Navbar} from './components/navbar/navbar.tsx';
import {Slider} from './components/slider-carousel/slider-carousel.tsx';
import {DwnldUpdtCard} from "./components/сards/dwnldUpdtCard.tsx";
import {NewsCard} from "./components/сards/newsCard.tsx";
import {Footer} from "./components/footer/footer.tsx";

function App() {

    return (
        <>
            <Navbar/>
            <Slider/>
            <DwnldUpdtCard/>
            <NewsCard/>
            <Footer/>
        </>
    )
}

export default App
