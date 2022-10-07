import { Link } from "react-router-dom";
import { WhatWeDoIcon } from "../../components/Icons";
import steponeicon from "../../assets/images/steponeicon.png";
import { OurModelTractions } from "../../components/Tractions";
import { Navbar19 } from "../../components/Navbar";

const OurModelPage = () => {
  return (
    <>
      <Navbar19 />
      <WhatWeDo />
      <HowWeDoIt />
      <OurModelTractions />
    </>
  );
};
const WhatWeDo = () => {
  return (
    <div className="container-fluid p-5 WhatWeDoBg">
      <div className="row ">
        <div className="col-lg-10 col-md-6 col-sm-12 col-xs-12 m-auto ">
          <div className="col d-lg-flex d-md-flex">
            <div className="col">
              {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
              <h3 className="">What We Do</h3>
              <p>
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining comapny building with venture
                funding.The Venture Studio model for entrepreneurship, combining
                comapny building with venture funding. The Venture Studio model
                for entrepreneurship, combining comapny building with venture
                funding.The Venture Studio model for entrepreneurship, combining
                comapny building with venture funding.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const HowWeDoIt = () => {
  return (
    <div className="container p-5 ">
      <div className="row ">
        <div className="col-lg-10 col-md-6 col-sm-12 col-xs-12 m-auto ">
          <div className="col d-lg-flex d-md-flex">
            <div className="col">
              <h3 className="">How We Do It</h3>
              <p>
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining comapny building with venture
                funding.The Venture Studio model for entrepreneurship, combining
                comapny building with venture funding. The Venture Studio model
                for entrepreneurship, combining comapny building with venture
                funding.The Venture Studio model for entrepreneurship, combining
                comapny building with venture funding.
              </p>
            </div>
          </div>
        </div>
        <div className="row py-3 d-flex justify-content-around">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <img
              src={steponeicon}
              className="p-3 w-50"
              // width="70px"
              // height="70px"
              alt="..."
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto ">
            <div className="col d-lg-flex d-md-flex">
              <div className="col">
                {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
                <h3 className="">Step 1</h3>
                <p>
                  The Venture Studio model for entrepreneurship, combining
                  comapny building with venture funding.The Venture Studio model
                  for entrepreneurship, combining comapny building with venture
                  funding.The Venture Studio model for entrepreneurship,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto ">
            <div className="col d-lg-flex d-md-flex">
              <div className="col">
                {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
                <h3 className="">Step 2</h3>
                <p>
                  The Venture Studio model for entrepreneurship, combining
                  comapny building with venture funding.The Venture Studio model
                  for entrepreneurship, combining comapny building with venture
                  funding.The Venture Studio model for entrepreneurship,
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto ">
            <img
              src={steponeicon}
              className="p-3 w-50"
              // width="70px"
              // height="70px"
              alt="..."
            />
          </div>
        </div>
        <div className="row py-3">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto ">
            <img
              src={steponeicon}
              className="p-3 w-50"
              // width="70px"
              // height="70px"
              alt="..."
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto ">
            <div className="col d-lg-flex d-md-flex">
              <div className="col">
                {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
                <h3 className="">Step 3</h3>
                <p>
                  The Venture Studio model for entrepreneurship, combining
                  comapny building with venture funding.The Venture Studio model
                  for entrepreneurship, combining comapny building with venture
                  funding.The Venture Studio model for entrepreneurship,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto ">
            <div className="col d-lg-flex d-md-flex">
              <div className="col">
                {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
                <h3 className="">Step 4</h3>
                <p>
                  The Venture Studio model for entrepreneurship, combining
                  comapny building with venture funding.The Venture Studio model
                  for entrepreneurship, combining comapny building with venture
                  funding.The Venture Studio model for entrepreneurship,
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto ">
            <img
              src={steponeicon}
              className="p-3 w-50"
              // width="70px"
              // height="70px"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurModelPage;
