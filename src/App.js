import logo from "./logo.svg";
//import "./App.scss";
import "./sass/main.scss";
import burger from "./img/burger.png";
import gal1 from "./img/gallery-img-1.jpeg";
import gal2 from "./img/gallery-img-2.jpeg";
import gal3 from "./img/gallery-img-3.jpeg";
import gal4 from "./img/gallery-img-4.jpeg";
import gal5 from "./img/gallery-img-5.jpeg";
import gal6 from "./img/gallery-img-6.jpeg";
import leftImg1 from "./img/nav-img-1.jpeg";
import leftImg2 from "./img/nav-img-2.jpeg";
import leftImg3 from "./img/nav-img-3.jpeg";

function App() {
  return (
    <div className="App">
      {/* <!--Navbar--> */}
      <nav className="navbar">
        <input type="checkbox" id="check" className="checkbox" hidden />
        <div className="hamburger-menu">
          <label htmlFor="check" className="menu">
            <div className="menu-line menu-line-1"></div>
            <div className="menu-line menu-line-2"></div>
            <div className="menu-line menu-line-3"></div>
          </label>
        </div>

        <div className="navbar-navigation">
          <div className="navbar-navigation-left">
            <img src={leftImg1} className="left-img left-img-1" />
            <img src={leftImg2} className="left-img left-img-2" />
            <img src={leftImg3} className="left-img left-img-3" />
          </div>

          <div className="navbar-navigation-right">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Home
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  About Us
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Gallery
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Reservation
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Services
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!--End of Navbar--> */}
      <header className="header">
        <div className="brand">
          <a href="#" className="logo">
            <i className="fas fa-utensils"></i>
          </a>
          <div>
            {" "}
            <h1 className="main-name">Georgia</h1>
            <p className="sub-name">Restaurant</p>
          </div>
        </div>
        <div className="header-banner">
          <h1 className="main-heading">Welcome</h1>
          <h3 className="sub-heading">Try Great Georgian Dishes</h3>
          <button type="button" className="main-btn">
            Reservation
          </button>
        </div>
        {/*------ Header */}
      </header>
      {/* --About Us-- */}
      <section className="about-us">
        <div className="about-us-left">
          <img src={burger} alt="burgerImg" width="500px" />
        </div>

        <div className="about-us-right">
          <h1 className="main-heading">About Us</h1>
          <h3 className="sub-heading">Introduce To Georgian Dishes</h3>
          <div className="stars">
            <i className="fas fa-star-of-life star"></i>
            <i className="fas fa-star-of-life star"></i>
            <i className="fas fa-star-of-life star"></i>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            commodi placeat nihil animi, id dicta, rem recusandae ex earum
            cupiditate unde eius aliquid dolore voluptatibus delectus hic
            inventore similique dolores. Veritatis sit dicta et impedit
            repellendus quo aspernatur, eum vitae quia quos vero natus totam,
            sint nisi doloribus, quibusdam reiciendis?
          </p>
          <div className="stars">
            <i className="fas fa-star-of-life star"></i>
            <i className="fas fa-star-of-life star"></i>
            <i className="fas fa-star-of-life star"></i>
          </div>
          <button type="button" className="main-btn">
            Read More
          </button>
        </div>
      </section>
      {/*  --End of About Us-- */}
      {/* <!--Gallery--> */}
      <section className="gallery">
        <div className="cards-wrapper">
          <div className="card">
            <div className="card-overlay">
              <h1 className="card-overlay-heading">Food Name</h1>
              <p className="card-overlay-paragraph">Price: $30.00</p>
              <button type="button" className="card-overlay-btn">
                Order Now
              </button>
            </div>
            <img src={gal1} width="600px" className="card-img" />
          </div>
          <div className="card">
            <div className="card-overlay">
              <h1 className="card-overlay-heading">Food Name</h1>
              <p className="card-overlay-paragraph">Price: $30.00</p>
              <button type="button" className="card-overlay-btn">
                Order Now
              </button>
            </div>
            <img src={gal2} width="600px" className="card-img" />
          </div>
          <div className="card">
            <div className="card-overlay">
              <h1 className="card-overlay-heading">Food Name</h1>
              <p className="card-overlay-paragraph">Price: $30.00</p>
              <button type="button" className="card-overlay-btn">
                Order Now
              </button>
            </div>
            <img src={gal3} width="600px" className="card-img" />
          </div>
          <div className="card">
            <div className="card-overlay">
              <h1 className="card-overlay-heading">Food Name</h1>
              <p className="card-overlay-paragraph">Price: $30.00</p>
              <button type="button" className="card-overlay-btn">
                Order Now
              </button>
            </div>
            <img src={gal4} width="600px" className="card-img" />
          </div>
          <div className="card">
            <div className="card-overlay">
              <h1 className="card-overlay-heading">Food Name</h1>
              <p className="card-overlay-paragraph">Price: $30.00</p>
              <button type="button" className="card-overlay-btn">
                Order Now
              </button>
            </div>
            <img src={gal5} width="600px" className="card-img" />
          </div>
          <div className="card">
            <div className="card-overlay">
              <h1 className="card-overlay-heading">Food Name</h1>
              <p className="card-overlay-paragraph">Price: $30.00</p>
              <button type="button" className="card-overlay-btn">
                Order Now
              </button>
            </div>
            <img src={gal6} width="600px" className="card-img" />
          </div>
        </div>
      </section>
      {/*  <!--End of Gallery--> */}

      {/*  <!--Footer--> */}
      <footer className="footer">
        <div className="footer-header">
          <a href="#" className="logo">
            <i className="fas fa-utensils"></i>
          </a>
          <div>
            <h1 className="main-name">Georgia</h1>
            <p className="sub-name">Restaurant</p>
          </div>
        </div>

        <div className="footer-social-media">
          <ul className="social-media">
            <li className="social-media-item">
              <a href="#" className="social-media-link">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a href="#" className="social-media-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a href="#" className="social-media-link">
                <i className="fab fa-google-plus-square"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a href="#" className="social-media-link">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright">
          <p className="footer-copyright-paragraph">
            &copy; Copyright. Restaurant "Georgia". All Rights Reserved
          </p>
        </div>
      </footer>
      {/* <!--End of Footer--> */}
    </div>
  );
}

export default App;
