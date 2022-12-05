import {CarouselItem} from "react-bootstrap";
import {Carousel} from "react-bootstrap";
const Slide=(props)=> {

    return (
        <CarouselItem>

        <Carousel.Caption>
        <h3>{props.quote}</h3>
    <p>{props.author}</p>
</Carousel.Caption>
</CarouselItem>
    )
}
export default Slide