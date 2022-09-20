import * as React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";

//Studio
import OurModelPage from "./pages/Studio/ourModel";
import PortfolioPage from "./pages/Studio/portfolio";
import InnkeeperPortfolioPage from "./pages/Studio/InnkeeperPortfolio";
import HavenPortfolioPage from "./pages/Studio/HavenPortfolio";
import MindAfrikPortfolioPage from "./pages/Studio/MindAfrikPortfolio";
import EaseSoilessPortfolioPage from "./pages/Studio/EaseSoilessPortfolio";

//Project Delivery
import ProjectDeliveryPage from "./pages/ProjectDelivery/projectDelivery";
import ProjectDeliveryGalleryPage from "./pages/ProjectDelivery/projectDeliveryGallery";
import GIZPage from "./pages/ProjectDelivery/GIZgallery";
import S4PPage from "./pages/ProjectDelivery/S4Pgallery";
import LSETFPage from "./pages/ProjectDelivery/lsetfGallery";
import FUTAPage from "./pages/ProjectDelivery/FUTAgallery";
import LSETFGalleryPage from "./pages/Events/LSETFVisitGallery";
import USADFGalleryPage from "./pages/Events/usadfGallery";

//Managed Services
import ManagedServicesPage from "./pages/Services/managedServices";
// import ManagedServicesDigitalMarketing from "./pages/Services/managedServicesDigitalMarketing";
import GrowthAsAservice from "./pages/Services/GaaS";

import TeamPage from "./pages/WhoWeAre/TeamPage";
import BlogPage from "./pages/Insights/blog";

//Events
import EventsPage from "./pages/Events/events";
import EventsGalleryPage from "./pages/Events/eventsGallery";
import DemoDayPage from "./pages/Events/demoDay";
import FounderMeetupPage from "./pages/Events/foundersMeetup";
import FoundersMeetupGalleryPage from "./pages/Events/foundersMeetupGallery";
import DemoDayGalleryPage from "./pages/Events/demoDayGallery";
// import { GalleryCards } from "./components/AllCards/MediaCards";
// import FAQ from "./pages/Insights/FAQ";
import Footer from "./components/Footer";

import { LearnMoreBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { RequestForProposalBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { ProjectDeliveryViewMoreBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { EightgeariansPopUpCard1 } from "./components/AllCards/TriggeredCards";
// import Navbar from "./components/Navbar";
// import { ManagedServicesPageTestimonialCard } from "../src/components/AllCards/TestimonialCards";
// import { Lad } from "./components/Forms";
// import { CoWorkingPageTestimonialCard } from "../src/components/AllCards/TestimonialCards";
// import { AboutUs } from "./components/AllCards/TestimonialCards";
// import Constructionpage from "./pages/constructionpage";

// import { Gerians } from "./components/AllCards/TeamCard";
// import { ManagedServicesRequestForm } from "./components/Forms/ServicesForms";

// import Constructionpage from "./pages/constructionpage";

// import Constructionpage from "./pages/constructionpage";
// import { AnimationVideoHero } from "./components/Hero/VideoHero";
// import { AboutPageHero } from "./components/Hero/VideoHero";
// import JoinTheTeamForm from "./components/Forms/EnquiresandSuggestionForm";
// import { Servicehero } from "./components/Hero/BGColorandTextHero";
// import { PortfolioHero } from "./components/Hero/BGColorandTextHero";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import Teamcard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";
// import { BookNowBtn } from "./components/Buttons/ServicesBtn";
// import { BookaSessionBtn } from "./components/Buttons/ServicesBtn";
// import { BookaFreeSessionBtn } from "./components/Buttons/ServicesBtn";
// import { OnHoverReadMoreBtn } from "./components/Buttons/ServicesBtn";
// import { AllPortfoliosLogoCard } from "./components/AllCards/MediaCards";
// import { ProjectDeliveryManagedServicesCard } from "./components/AllCards/MediaCards";
// import { ManagedServicesRequestForm } from "./components/Forms/ServicesForms";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import TeamCard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";

// import { MediaCards } from "./components/AllCards/MediaCards";
// import { GalleryGizCards } from "./components/AllCards/MediaCards";
// import { UsadfCards } from "./components/AllCards/MediaCards";
// import { FutaCards } from "./components/AllCards/MediaCards";
// import { LsetfvisitCards } from "./components/AllCards/MediaCards";
// import { LsetfCards } from "./components/AllCards/MediaCards";
// import { FounderCards } from "./components/AllCards/MediaCards";
// import { ProjectCards } from "./components/AllCards/MediaCards";
// import { DemodayCards } from "./components/AllCards/MediaCards";
// import { GalleryCards } from "./components/AllCards/MediaCards";
// import { GalleryVideoCards } from "./components/AllCards/MediaCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="our-model" element={<OurModelPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="ease-soiless" element={<EaseSoilessPortfolioPage />} />
        <Route path="innkeeper" element={<InnkeeperPortfolioPage />} />
        <Route path="mind-afrik" element={<MindAfrikPortfolioPage />} />
        <Route path="haven" element={<HavenPortfolioPage />} />
        <Route path="project-delivery" element={<ProjectDeliveryPage />} />
        <Route
          path="project-delivery-gallery"
          element={<ProjectDeliveryGalleryPage />}
        />
        <Route path="GIZ-gallery" element={<GIZPage />} />
        <Route path="S4P-gallery" element={<S4PPage />} />
        <Route path="LSETF-gallery" element={<LSETFPage />} />
        <Route path="FUTA-gallery" element={<FUTAPage />} />
        <Route path="managed-services" element={<ManagedServicesPage />} />
        {/* <Route
          path="digitalmarketing"
          element={<ManagedServicesDigitalMarketing />}
        /> */}
        <Route path="growth-as-a-service" element={<GrowthAsAservice />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="blog" element={<BlogPage />} />
        {/* <Route path="faq" element={<FAQ />} /> */}
        <Route path="events" element={<EventsPage />} />
        <Route path="events-gallery" element={<EventsGalleryPage />} />
        <Route path="demo-day" element={<DemoDayPage />} />
        <Route path="founders-meetup" element={<FounderMeetupPage />} />
        <Route
          path="founders-meetup-gallery"
          element={<FoundersMeetupGalleryPage />}
        />
        <Route path="demo-day-gallery" element={<DemoDayGalleryPage />} />
        <Route path="LSETF-visit-gallery" element={<LSETFGalleryPage />} />
        <Route path="USADF-gallery" element={<USADFGalleryPage />} />
        <Route path="pop-up" element={<EightgeariansPopUpCard1 />} />
        {/* <Route path="media" element={<GalleryCards />} /> */}

        {/* <Route path="constructionpage" element={<Constructionpage />} />
         */}

        {/* <Route path="events" element={<Events />} /> */}

        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
        {/* <Route path="button1" element={<BookNowBtn />} />
        <Route path="button3" element={<BookaFreeSessionBtn />} />
        <Route path="button4" element={<OnHoverReadMoreBtn />} /> */}
        {/* <Route path="button5" element={<AllPortfoliosLogoCard />} />
        <Route
          path="button6"
          element={<ProjectDeliveryManagedServicesCard />}
        /> */}
        {/* <Route path="button7" element={<ManagedServicesRequestForm />} /> */}
        {/* <Route path="button5" element={<AllPortfoliosLogoCard />} /> */}
        {/* <Route path="button6" element={<PortfolioPage />} /> */}
        {/* <Route
          path="button7"
          element={<ProjectDeliveryManagedServicesCard />}
        /> */}
        {/* <Route path="button8" element={<ManagedServicesPage />} />
        <Route path="button9" element={<ProjectDeliveryPage />} /> */}
        {/* <Route path="button10" element={<ManagedServicesRequestForm />} /> */}

        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
      </Routes>
      {/* <OnHoverCard /> */}
      {/* <UnderconstructionNavbar /> */}

      {/* <footer>
        <Footer />
      </footer> */}
    </BrowserRouter>
  );
}

export default App;
