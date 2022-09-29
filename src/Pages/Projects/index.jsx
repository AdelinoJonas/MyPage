import "./style.css";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Front from "../../components/FrontEnd";
import Back from "../../components/BackEnd";
import prev from "../../images_all/projects/prev.png";
import next from "../../images_all/projects/next.png";

function Projects() {
  const [currentStack, setCurrentStack] = useState({
    name: "FRONT-END",
    stack: <Front />,
  });

  const stacks = [
    {
      name: "FRONT-END",
      stack: <Front />,
    },
    {
      name: "BACK-END",
      stack: <Back />,
    },
  ];

  function nextStack(currentStack) {
    const stackList = stacks.map((item) => item.name);

    const positionCurrentStack = stackList.indexOf(currentStack.name);

    const positionNextStack = stackList.indexOf(currentStack.name) + 1;

    const next = stackList[positionNextStack];

    const nextObject = stacks.filter((item) => {
      const stackPosition = item.name.indexOf(next) + 1;
      return stackPosition;
    });

    const lastItemInArray = stacks.length === positionCurrentStack + 1;

    if (lastItemInArray) {
      setCurrentStack(stacks[0]);
    } else {
      setCurrentStack(nextObject[0]);
    }
  }

  function prevStack(currentStack) {
    const stackList = stacks.map((item) => item.name);

    const positionCurrentStack = stackList.indexOf(currentStack.name);

    const positionNextStack = stackList.indexOf(currentStack.name) + 1;

    const next = stackList[positionNextStack];

    const nextObject = stacks.filter((item) => {
      const stackPosition = item.name.indexOf(next) + 1;
      return stackPosition;
    });

    const lastItemInArray = stacks.length === positionCurrentStack + 1;

    if (lastItemInArray) {
      setCurrentStack(stacks[0]);
    } else {
      setCurrentStack(nextObject[0]);
    }
  }

  return (
    <div className="containerProject">
      <section className="lineRow">
        <img
          src={prev}
          alt="arrow left"
          className="arrows"
          onClick={() => prevStack(currentStack)}
        />
        <h1 className="titleProjects">{currentStack.name}</h1>
        <img
          src={next}
          alt="arrow right"
          className="arrows"
          onClick={() => nextStack(currentStack)}
        />
      </section>
      {currentStack.stack}
    </div>
  );
}

export default Projects;
