import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function HeroCarousel() {
  return (
    <Carousel controls={false} indicators={true} className="carousel">
      <Carousel.Item>
        <div
          className="d-block w-100 carousel-content"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)),url(/images/coworkingNew/slide_1.JPG)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            textAlign: "left",
          }}
        >
          <h3>Coworking</h3>
          <p>
            Unlock your full potential in a vibrant coworking space. <br />
            Surround yourself with motivated individuals and <br /> watch your
            ideas soar!
          </p>
          <div className="d-flex gap-2 py-2 buttons mx-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeA2I8k49p0dqyJMU2nqvxfgGegoQkk1MFC_SPBFTGYeYnbtQ/viewform"
              alt="book a coworking space"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <span className="px-2">
                  <img
                    src="/images/coworkingNew/space.svg"
                    alt=""
                    className="h-2"
                  />
                </span>
                Book a Space
              </Button>
            </a>

            <a
              href=" https://tr.ee/KQtVKuPQqh"
              alt="book a podcast session"
              target="_blank"
            >
              <Button>
                <span>
                  <img src="/images/coworkingNew/microscope.png" alt="" />
                </span>
                Book a Session
              </Button>
            </a>
          </div>

          <img
            src="/images/coworkingNew/slide_1_short.PNG"
            alt="Overlay"
            className="overlay-image"
          />
          <img
            src="/images/coworkingNew/slide_2_short.PNG"
            alt="Overlay2"
            className="overlay-image2"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)),url(/images/coworkingNew/slide_2.JPG)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            textAlign: "left",
          }}
        >
          <h3>Coworking</h3>
          <p>
            Looking for the perfect work environment? <br />
            Our coworking spaces offer the ideal blend of productivity &
            community. <br /> Experience the power of collaboration!
          </p>
          <div className="d-flex gap-2 py-2 buttons mx-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeA2I8k49p0dqyJMU2nqvxfgGegoQkk1MFC_SPBFTGYeYnbtQ/viewform"
              alt="book a coworking space"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <span className="px-2">
                  <img
                    src="/images/coworkingNew/space.svg"
                    alt=""
                    className="h-2"
                  />
                </span>
                Book a Space
              </Button>
            </a>

            <a
              href=" https://tr.ee/KQtVKuPQqh"
              alt="book a podcast session"
              target="_blank"
            >
              <Button>
                <span>
                  <img src="/images/coworkingNew/microscope.png" alt="" />
                </span>
                Book a Session
              </Button>
            </a>
          </div>

          <img
            src="/images/coworkingNew/slide_2_short.PNG"
            alt="Overlay"
            className="overlay-image "
          />
          <img
            src="/images/coworkingNew/slide_3_short.PNG"
            alt="Overlay2"
            className="overlay-image2"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)),url(/images/coworkingNew/slide_3.JPG)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            textAlign: "left",
            color: "white",
          }}
        >
          <h3>Podcast</h3>
          <p>
            Step into the world of podcasting with our state-of-the-art studio.{" "}
            <br />
            From professional equipment to a comfortable atmosphere, <br />
            we provide everything you need to bring your podcast to life.
          </p>
          <div className="d-flex gap-2 py-2 buttons mx-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeA2I8k49p0dqyJMU2nqvxfgGegoQkk1MFC_SPBFTGYeYnbtQ/viewform"
              alt="book a coworking space"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <span className="px-2">
                  <img
                    src="/images/coworkingNew/space.svg"
                    alt=""
                    className="h-2"
                  />
                </span>
                Book a Space
              </Button>
            </a>

            <a
              href=" https://tr.ee/KQtVKuPQqh"
              alt="book a podcast session"
              target="_blank"
            >
              <Button>
                <span>
                  <img src="/images/coworkingNew/microscope.png" alt="" />
                </span>
                Book a Session
              </Button>
            </a>
          </div>

          <img
            src="/images/coworkingNew/slide_3_short.PNG"
            alt="Overlay"
            className="overlay-image"
          />
          <img
            src="/images/coworkingNew/slide_4_short.PNG"
            alt="Overlay"
            className="overlay-image2"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)),url(/images/coworkingNew/slide_4.JPG)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            textAlign: "left",
          }}
        >
          <h3>Coworking</h3>
          <p>
            A workspace that helps you concentrate on work with a good internet
            speed <br /> and a conducive environment.{" "}
          </p>
          <div className="d-flex gap-2 py-2 buttons mx-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeA2I8k49p0dqyJMU2nqvxfgGegoQkk1MFC_SPBFTGYeYnbtQ/viewform"
              alt="book a coworking space"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <span className="px-2">
                  <img
                    src="/images/coworkingNew/space.svg"
                    alt=""
                    className="h-2"
                  />
                </span>
                Book a Space
              </Button>
            </a>

            <a
              href=" https://tr.ee/KQtVKuPQqh"
              alt="book a podcast session"
              target="_blank"
            >
              <Button>
                <span>
                  <img src="/images/coworkingNew/microscope.png" alt="" />
                </span>
                Book a Session
              </Button>
            </a>
          </div>

          <img
            src="/images/coworkingNew/slide_4_short.PNG"
            alt="Overlay"
            className="overlay-image"
          />
          <img
            src="/images/coworkingNew/slide_1_short.PNG"
            alt="Overlay2"
            className="overlay-image2"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
