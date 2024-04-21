import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Carousels() {
    return (
      <Carousel>
        <div>
          <img src="https://github.com/atulya15/image/blob/main/ms1.jpeg?raw=true" />
        </div>
        <div>
          <img src="https://github.com/atulya15/image/blob/main/ms2.jpeg?raw=true" />
        </div>
      </Carousel>
    );
}
