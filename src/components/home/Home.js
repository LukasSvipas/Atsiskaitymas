import {useState, useEffect} from "react";
import {Carousel} from "react-bootstrap";
import Slide from "../slide/Slide";
const Home = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        try {
            fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
                .then(response => response.json())
                .then(data => setSlide(data))
        } catch (msg) {
            console.log(msg)
        }
    }, [])


    console.log(slide)


    return (
        <Carousel>
            {slide?.map(slides=>(<Slide
                quote={slides.quote}
                author={slides.author}/>))}
        </Carousel>
)
}
export default Home