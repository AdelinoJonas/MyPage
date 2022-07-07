import './style.css';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Front from '../../components/FrontEnd';
import Back from '../../components/BackEnd';

function Projects() {

  // const handleClick = (direction) => {

  // };

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
      <Back/>
    </div>
  );
}

export default Projects;
