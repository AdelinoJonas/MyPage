import './style.css';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Front from '../../components/FrontEnd';

function Projects() {
  // const [slideStack, setSlideStack] = useState([]);

  // const sliderItems = [
  //   {
  //     title: "BACK-END"
  //   },
  //   {
  //     title: "FRONT-END"
  //   },


  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  //   } else {
  //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  //   }
  // };

  // ];
  return (
    <div className="containerProject">
      <section className='lineRow'>
        <Carousel showStatus="none">
          <div>
          <h1 className='titleProjects'>FRONT-END</h1>
          </div>
          <div>
          <h1 className='titleProjects'>BACK-END</h1>
          </div>
        </Carousel>
      </section>
      <Front/>
    </div>
  );
}

export default Projects;
