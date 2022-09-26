import data from "../../data/portfolioHero.json";
//ManagedServicesHero
//PortfoliosandTeamPageHero
// founderMeetupAndDemoday

export const ManagedServicesHero = () => {
  return (
    <div className="container-fluid pt-5 pb-4">
      <div className="row mx-lg-4 mx-md-4 mt-4 justify-content-center">
        <div className="col-lg-7 text-center">
          <h3 className="">The Venture Studio Model</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            fuga facilis optio officiis obcaecati reiciendis, vitae distinctio
            voluptates nostrum ut. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptatum fuga facilis optio officiis obcaecati
            reiciendis, vitae distinctio voluptates nostrum ut
          </p>
        </div>
      </div>
    </div>
  );
};

// portfolio component start

const PortfolioHeroSingle = (props) => {
  const { text } = props;
  return (
    <div className="container-fluid PortfolioHeroBg py-5 px-lg-5 px-md-5">
      <div className="row my-lg-5 mx-lg-3 px-5 justify-content-center ">
        <div className="col-lg-8 d-none d-lg-block d-md-block d-sm-none">
          <h3 className="text-center">{text}</h3>
        </div>
        <div className="col-lg-7 d-lg-none d-md-none d-sm-block d-xs-block">
          <h4 className="text-center">{text}</h4>
        </div>
      </div>
    </div>
  );
};

export const PortfolioHero = () => {
  return (
    <div className="PortfolioHero">
      {data.portFolioHero.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <PortfolioHeroSingle {...portFolio}></PortfolioHeroSingle>
          </div>
        );
      })}
    </div>
  );
};
export const FoundersMeetupHero = () => {
  return (
    <div className="PortfolioHero">
      {data.founderMeetup.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <PortfolioHeroSingle {...portFolio}></PortfolioHeroSingle>
          </div>
        );
      })}
    </div>
  );
};
export const DemoDayHero = () => {
  return (
    <div className="PortfolioHero">
      {data.demoDay.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <PortfolioHeroSingle {...portFolio}></PortfolioHeroSingle>
          </div>
        );
      })}
    </div>
  );
};
export const OurTeamHero = () => {
  return (
    <div className="PortfolioHero">
      {data.ourTeam.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <PortfolioHeroSingle {...portFolio}></PortfolioHeroSingle>
          </div>
        );
      })}
    </div>
  );
};
