import { Link } from "react-router-dom";
import { ProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import Data2 from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import { Navbar4 } from "../../components/Navbar";

const ManagedServicesPage = () => {
  return (
    <>
      <Navbar4 />
      {/* <Services /> */}
      <HowItWorks />
    </>
  );
};

const HowItWorks = () => {
  return (
    <div className="container-fluid py-5 pe-3 howItWorksBg">
      <div className="row mx-5">
        <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 m-auto ">
          <div className="col d-lg-flex d-md-flex">
            <div className="col">
              {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
              <p>How It Works</p>
              <h2 className="">We are builders funding the next generation</h2>
            </div>
          </div>
          {/* <div className="col d-lg-flex d-md-flex ">
            <div className="col">
              <i
                className="bi bi-bookmarks iconCol"
                style={{ fontSize: "28px" }}
              ></i>
              <h3>PROJECT DELIVERY</h3>
              <p>We build at 8thGearWe build at 8thGear We build at 8thGear</p>
            </div>
          </div> */}
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex align-items-center">
          <p>
            We at 8thGear are helpmates to your business and because we believe
            in the uniqueness of every individual and business, we tailor our
            solutions to suit your needs and aspirations. We are not only our
            client’s brand ambassadors but their biggest fan. solutions to suit
            your needs and aspirations. We are not only our client’s brand
            ambassadors but their biggest fan. solutions to suit your needs and
            aspirations. We are not only our client’s brand ambassadors but
            their biggest fan.
          </p>
        </div>
      </div>
    </div>
  );
};

// const Services = () => {
//   return (
//     <div className="container-fluid text-center  pt-5">
//       <div className="row">
//         <h3 className="mb-5">Services</h3>
//         {Data2.ProjectDeliveryImages.map((ProjectDeliveryImage) => {
//           return (
//             <ProjectDeliveryManagedServicesCard {...ProjectDeliveryImage} />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
export default ManagedServicesPage;
