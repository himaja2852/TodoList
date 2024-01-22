import React, { useState } from 'react';
import { Carousel, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css'; // Import your CSS file here

const Template = () => {
  console.log('Rendering Template component...');
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    console.log(`Scrolling to section: ${section}`);

    setActiveSection(section);
    const targetSection = document.querySelector(`#${section}`);
    console.log(targetSection);


    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else {
      console.error(`Section with ID '${section}' not found`);

    }
  };
  const handleNavClick = (section) => {
    console.log(`Navigating to section: ${section}`);
    scrollToSection(section);
  };

  const renderNavLinks = () => {
    console.log('Rendering navigation links...');
    const sections = ['home', 'about', 'services', 'page1', 'page2', ]; // Add more sections as needed

    return sections.map((section) => (
      <Nav.Link
        key={section}
        onClick={() => {
          console.log(`Nav link clicked: ${section}`);
          handleNavClick(section);
        }}
        className={activeSection === section ? 'active' : ''}
      >
        {section}
      </Nav.Link>
    ));
    
  };

  console.log(renderNavLinks);

  return (
    <div className="Template">
      {/* Your new navbar code here */}
      <Navbar bg="light" expand="lg" fixed="top">
        <div className="container">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>
                Services
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection('menu')} className={activeSection === 'menu' ? 'active' : ''}>
                Menu
              </Nav.Link>
              
             
              <NavDropdown title="Pages" id="basic-nav-dropdown">
  <NavDropdown.Item onClick={() => scrollToSection('chef')}>Our Chef</NavDropdown.Item>
  <NavDropdown.Item onClick={() => scrollToSection('contact')}>Contact</NavDropdown.Item>

  {/* Add more pages as needed */}
</NavDropdown>




            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>


      {/* Your Carousel code here */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`Images/Pizza2.jpg`}

            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Dominos pizza</h3>
            <p>Explore our amazing varaites pizzas.</p>
            <p><a href="/" className="btn btn-warning mt-3">Learn More</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'Images/Pizza3.jpg'}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Discover Quality</h3>
            <p>Quality food that make a difference.</p>
            <p><a href="/" className="btn btn-warning mt-3">Learn More</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'Images/Pizza4.jpg'}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Exclusive Offers</h3>
            <p>Don't miss out on our exclusive deals.</p>
            <p><a href="/" className="btn btn-warning mt-3">Learn More</a></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Your About section code here */}
      <section id="about" className="about-section-padding mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-img">
                <img src={'Images/about.jpg'} alt="About Domino's Pizza" />
              </div>
              <div className="about-text mt-3">
                <h2>We Provide the Best Quality Foods</h2>
                <p>Established in 2001, Domino's Pizza takes pride in 23 years of unwavering commitment to quality and service. Guided by our mantra – "Hustle, Loyalty, Respect" – we've become a trusted name in the food industry. Our menu evolution, technological innovations, and dedication to customer satisfaction define our journey. Thank you for being part of it. Here's to many more years of delivering delicious experiences with passion and integrity.</p>
                <a href="/" className="btn btn-warning">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your services section code here */}

      <section id="services" className="services section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>Discover the excellence of our quality food and the expertise of our chefs.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-award-fill"></i>
                  <h3 className="card-title">Chef</h3>
                  <p className="lead">Master Chef's impressive 25 years of experience; they must have a wealth of knowledge in creating fusion dishes. Fusion cuisine is all about combining different culinary traditions and flavors to create unique and exciting taste experiences.</p>
                  <button className="btn btn-warning text-dark">Read more</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-patch-check"></i>
                  <h3 className="card-title">Quality food</h3>
                  <p className="lead">Master Chef's impressive 25 years of experience; they must have a wealth of knowledge in creating fusion dishes. Fusion cuisine is all about combining different culinary traditions and flavors to create unique and exciting taste experiences.</p>
                  <button className="btn btn-warning text-dark">Read more</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-cart2"></i>
                  <h3 className="card-title">Online order</h3>
                  <p className="lead">Master Chef's impressive 25 years of experience; they must have a wealth of knowledge in creating fusion dishes. Fusion cuisine is all about combining different culinary traditions and flavors to create unique and exciting taste experiences.</p>
                  <button className="btn btn-warning text-dark">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Your menu code here */}
      <section id="menu" className="menu-section-padding">

        <div className="row">
          {/* First Image */}
          {/* First Image */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img
                    src={'Images/panner.jpg'}
                    alt="Panner Delight Pizza"
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
                <h3 className="card-title">Panner Delight Pizza</h3>
                <p className="lead">
                panner, onion, tamato, capcisum
                </p>
                      {/* Numerical rating section */}
      <div className="rating">
        <p className="lead">Rating: 4.5</p>
      </div>
      {/* Price section */}
      <div className="price">
        <p className="lead">Price: ₹249</p>
      </div>

                {/* Green five-star rating */}
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-success">
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
                </div>
                <button className="btn bg-warning text-dark">Learn More</button>
              </div>
            </div>
          </div>

          {/* Second Image */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img
                    src={'Images/spicy.jpg'}
                    alt="Spicy Pizza"
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
                <h3 className="card-title">Spicy Pizza</h3>
                <p className="lead">
                 cheese, onion, tamato, capcisum, jalapenos
                </p>
                      {/* Numerical rating section */}
      <div className="rating">
        <p className="lead">Rating: 4.5</p>
      </div>
      {/* Price section */}
      <div className="price">
        <p className="lead">Price: ₹200</p>
      </div>

                {/* Green five-star rating */}
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-success">
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
                </div>
                <button className="btn bg-warning text-dark">Learn More</button>
              </div>
            </div>
          </div>

          {/* Third Image */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img
                    src={'Images/bbq.jpg'}
                    alt="bbq Pizza"
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
                <h3 className="card-title">bbq pizza</h3>
                <p className="lead">
                 BBQ sauce, tamato, cheese
                </p>
                      {/* Numerical rating section */}
      <div className="rating">
        <p className="lead">Rating: 4.5</p>
      </div>
      {/* Price section */}
      <div className="price">
        <p className="lead">Price: ₹300</p>
      </div>

                {/* Green five-star rating */}
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-success">
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
                </div>
                <button className="btn bg-warning text-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img
                    src={'/Images/cheesepizza.jpg'}
                    alt="Cheese Pizza"
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
                <h3 className="card-title">Cheese Pizza</h3>
                <p className="lead">
                 cheese
                </p>
                      {/* Numerical rating section */}
      <div className="rating">
        <p className="lead">Rating: 4.5</p>
      </div>
      {/* Price section */}
      <div className="price">
        <p className="lead">Price: ₹150</p>
      </div>

                {/* Green five-star rating */}
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-success">
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
                </div>
                <button className="btn bg-warning text-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img
                    src={'Images/barbeque.jpg'}
                    alt="Barbeque Pizza"
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
                <h3 className="card-title">Barbeque Pizza</h3>
                <p className="lead">
                  cheese, bbq sauce, onion
                </p>
                      {/* Numerical rating section */}
      <div className="rating">
        <p className="lead">Rating: 4.5</p>
      </div>
      {/* Price section */}
      <div className="price">
        <p className="lead">Price: ₹249</p>
      </div>

                {/* Green five-star rating */}
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-success">
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
                </div>
                <button className="btn bg-warning text-dark">Learn More</button>
              </div>
            </div>
          </div>

          {/* Sixth Image (Chicken Pizza) */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img
                    src={'Images/chicken.jpg'}
                    alt="Chicken Pizza"
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
                <h3 className="card-title">Chicken Pizza</h3>
                <p className="lead">
                  Grilled chicken, cheese
                </p>
                      {/* Numerical rating section */}
      <div className="rating">
        <p className="lead">Rating: 4.5</p>
      </div>
      {/* Price section */}
      <div className="price">
        <p className="lead">Price: ₹250</p>
      </div>

                {/* Green five-star rating */}
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-success">
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
                </div>
                <button className="btn bg-warning text-dark">Learn More</button>
              </div>
            </div>
          </div>
        </div>



      </section>


      {/* (our chefs) */}
      <section id="chef" className="chef section-padding">
        {/* ... rest of the code ... */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>our chef</h2>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src={'Images/chef1.jpg'}
                    alt="chef1" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Abdul</h3>
                  <p className="card-text">He creates new types of pizzas</p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagramtext-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src={'Images/chef2.jpg'}
                    alt="chef2" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Rehnana</h3>
                  <p className="card-text">she is good for making home based pizzas</p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagramtext-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src={'Images/chhef3.jpg'}
                    alt="chhef3" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Mery</h3>
                  <p className="card-text">She is good for making delicious pizza for customer requirements</p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagramtext-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src={'Images/chef4.jpg'}
                    alt="chef4" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">kal nal</h3>
                  <p className="card-text">He is best for making varitey of bbq pizzas</p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagramtext-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* contact section */}


<section id="contact" className="contact section-padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header text-center pb-5">
          <h2>Contact Us</h2>
          <p>Have a question or want to get in touch? Fill out the form below.</p>
        </div>
      </div>
    </div>

    <div className="row m-0">
      <div className="col-12 p-0 pt-4 pb-4">
        {/* Add the form tag here */}
        <form>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <input type="text" className="form-control" required placeholder="Your Full Name" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <input type="email" className="form-control" required placeholder="Your Email Here" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <textarea className="form-control" rows={5} required placeholder="Your Query"></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-warning btn-lg btn-block mt-3">
                Send Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

{/* Footer section */}
<footer className="bg-dark p-2 text-center">
  <div className="container">
    <p className="text-white">All Right Reserved @Dominos pizza</p>
  </div>
</footer>
          </div>

        </div>

      </section>
    </div>
  );
};


 
          





export default Template;