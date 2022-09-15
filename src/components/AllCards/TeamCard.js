//TeamsCard
//AdvisoryBoardCard

import React from "react";
import ReactDOM from "react-dom";
import { ArrowRightIcon } from "../Icons";
import data from "../../data/8thGerains.json";
<<<<<<< HEAD
// import TeamImage from "../../assets/images/Teamone.png";
=======
import field from "../../data/advisory.json";
>>>>>>> 9e0b95d7d6664a661e25050632f929a3c3442d65

export const TeamCard = (props) => {
  const { image, name, title, text } = props;
  return (
<<<<<<< HEAD
    <>
      <div className="card-deck">
        <div class="card ">
          <img src={image} class=" Teampic " alt="Teamimage" />
          <div class="card-body ">
            <figure class="text-center">
              {/* <blockquote class="blockquote"> */}
              <p className="Text mb-3">{name}</p>
              {/* </blockquote> */}
              <figcaption class="card-text mt-1">{title}</figcaption>
            </figure>
            <a href="#" class="nav-link active link">
              {text}
              <ArrowRightIcon />
              {/* <svg
=======
    <div className="card-deck Team">
      <div class="card teamcard">
        <img src={image} class="card-img-top Teampic " alt="Teamimage" />
        <div class="card-body teamcardbody">
          <figure class="text-center">
            <p className="Text mb-3">{name}</p>

            <figcaption class="card-text mt-1">{title}</figcaption>
          </figure>
          <a href="#" class="nav-link active link">
            {text}
            <svg
>>>>>>> 9e0b95d7d6664a661e25050632f929a3c3442d65
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const Gerians = () => {
  return (
    <div className="container ">
      <div className="row ">
        {data.teamcard.map((card) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-5" key={card.id}>
              <TeamCard {...card}></TeamCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AdvisoryBoardCard = (props) => {
  const { image } = props;
  return (
    // <div className="card-deck">
    <div class="card advisorcard">
      <img src={image} class=" img-fluid Boardimage" alt="Teamimage" />
    </div>
    // </div>
  );
};
export const AdvisoryTeamPic = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {field.advisoryimage.map((card) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-5" key={card.id}>
              <AdvisoryBoardCard {...card}></AdvisoryBoardCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
