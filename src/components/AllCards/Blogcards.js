import cardData from "../../data/blog.json";
// import Line2 from "../../assets/images/Line2.jpg";

//MainBlogCard
export const BigBlogCard = () => {
  return (
    <>
      {cardData.mainCard.map((items) => {
        const { image, title, text, date } = items;
        return (
          <>
            {/* <div className="d-flex">
              <div className="col-2 d-sm-none d-md-block  d-none d-sm-block">
                <img src={Line2} alt="" />
              </div>
              <div className="col-10"> */}

            <div className="card1 card ">
              <img src={image} className="card-img-top" alt={"img"} />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h6>{date}</h6>
                <p>{text}</p>
                <a href="#" className=" btn-primary">
                  Read More
                </a>
              </div>
            </div>

            {/* </div>
              <div className="col-2 d-sm-none d-md-block d-none d-sm-block">
                <img src={Line2} alt="" />
              </div>
            </div> */}
          </>
        );
      })}
    </>
  );
};

// subBlogCards
export const MainBlogCard = () => {
  return (
    <>
      <div className="container-fluid mx-3  ">
        <div className=" row d-flex justify-content-end mx-1 ">
          {cardData.subCards.map((items) => {
            return (
              <>
                <div
                  className=" col-lg-5 col-md-5 col-sm-12 col- xs-12 py-2  "
                  key={items.id}
                >
                  <SingleMainBlogCard {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const SingleMainBlogCard = (items) => {
  const { image, title, text } = items;
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top  img-responsive" alt={"img"} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{text}</p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

//SideBlogCard

// subBlogCards
export const SideBlogCard = () => {
  return (
    <div className="">
      <div className="">
        {cardData.sideCrads.map((items) => {
          return (
            <div className="" key={items.id}>
              <SingleSideBlogCard {...items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const SingleSideBlogCard = (items) => {
  const { image, text, date } = items;
  return (
    <>
      <div className=" card sidecard mb-3">
        <div className="row g-0 align-item-center">
          <div className="col-5">
            <img src={image} className="sideimg  img-fluid" alt={"img"} />
          </div>
          <div className="col-7">
            <h6 className="card-title ">{date}</h6>
            <p className="card-text">{text}</p>
            <a href="#" className="btn-primary ">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
