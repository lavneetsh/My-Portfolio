import React, { useState } from "react";
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
import quiz from "../img/quiz.jpg";
import bikerental from "../img/bike-rental.jpg";
import dice from "../img/Dice.jpg";
import "../Components/Projects/projectss.css";
import random from "../img/random.jpg";

function Carousell() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // const items = [
  //   {
  //     id: "1",
  //     name: "Bike Rental",
  //     link: "https://bikerental-isa.netlify.app/",
  //     image: "../img/bike-rental.jpg",
  //     alt: "First Slide",
  //   },
  //   {
  //     id: "2",
  //     name: "MERN Projects",
  //     link: "https://bikerental-isa.netlify.app/",
  //     image: "../img//MERN.jpg",
  //     alt: "Second Slide",
  //   },
  //   {
  //     id: "3",
  //     name: "Dice",
  //     link: "https://bikerental-isa.netlify.app/",
  //     image: "../img/Dice.jpg",
  //     alt: "Third Slide",
  //   },
  // ];

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block" src={bikerental} alt="First slide" />

          <Carousel.Caption>
            <h3 className="label">
              <div className="frame">
                <a href="https://bikerental-isa.netlify.app/">
                  <button className="custom-btn btn-1">Bike Rental</button>
                </a>
              </div>
            </h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={quiz} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="label">
              <div className="frame">
                <a href="https://lavneetsh.github.io/project-3_quiz-app/">
                  <button className="custom-btn btn-1">Quiz app</button>
                </a>
              </div>
            </h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={dice} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="label">
              <div className="frame">
                <a href="https://github.com/Rushabh-Nahata/dice-project">
                  <button className="custom-btn btn-1">Dice</button>
                </a>
              </div>
            </h3>
            {/* <p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

// render(<ControlledCarousel />);
export default Carousell;

// <Carousel activeIndex={index} onSelect={handleSelect}>
// <h1>Hello</h1>
// {items.map((item) => {
//   return (

//     <div>Rushabh
//       <Carousel.Item key={item.id}>Nahata

//         <img className="d-block" src={item.image} alt={item.alt} />
//         <Carousel.Caption>
//           <h3 className="label">
//             <div className="frame">
//               <a href="https://bikerental-isa.netlify.app">Rushabh
//                 <button className="custom-btn btn-1">{item.name}</button>
//               </a>
//             </div>
//           </h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </div>
//   );
// })}

// </Carousel>
