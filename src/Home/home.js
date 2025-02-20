import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import TextTransition, { presets } from 'react-text-transition';
import './home.css';

const TEXTS = ['Computer Science Student', 'Trained IT Professional', 'Future Software Developer'];

  function Home() {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    return (
      <React.Fragment>
        {/* HERO SECTION */}
        <div className="HomeBody mb-5">
          <div id="ex1" className="row heroSection container mx-auto mt-5 d-flex align-content-center justify-content-center">
<<<<<<< HEAD
            <Fade left>
            <div id="ex1-layer" className="d-flex col-12 col-sm-5 avatar shadow-lg"></div>
            </Fade>

            <Fade right>
            <div className="col-12 col-sm-6 my-auto py-4 ms-md-5 introCard">
=======
            <div id="ex1-layer" className="d-flex col-12 col-md-5 avatar shadow-lg"></div>
            <div className="col-12 col-md-6 my-auto py-4 ms-md-5 introCard">
              <Fade direction='right'>
>>>>>>> 59c18e5f7830f16533ea50a372a7e14a4df73384
              <p className="display-1 text-center heading fontPrimary">Collin Dapper</p>
              <h2 className="subHeading fontSecondary mb-auto text-center"><TextTransition className='justify-content-center align-items-center' springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition></h2>
              <div className="divider mt-3 mb-2 w-50 mx-auto"></div>
              <div className="d-flex justify-content-center mt-2">
                <a className="nav-link text-black text-center navIcons mx-3 px-3" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin homeLink display-6"></i></a>
                <a className="nav-link text-black  text-center navIcons mx-3 px-3" href="https://github.com/collindapper" target="_blank" rel="noreferrer"><i className="fa-brands fa-github homeLink display-6"></i></a>
              </div>
              </Fade>
            </div>
          </div>
        </div>

        {/* About Me Section */}
 
        <div className="d-flex row container justify-content-around mx-auto aboutTilesContainer">
          <div className="d-flex arrow bounce mt-5 mb-3">
            <h4 className="text-center fontPrimary me-2">About Me</h4>
            <i className="fa-solid fa-chevron-down mt-1 arrowDown"></i>
          </div>

          <div className='text-center mb-5'>
            <h1 className='fontSecondary text-center'>Computer Science student with a passion for scripting and programming, knowledgeable IT professional and certified Full-Stack Web developer, seeking internships and apprenticeships in Software Development Engineering.</h1>
            <div className="divider mt-5 w-75 mx-auto"></div>
          </div>
          

          <div className="d-flex col-12 col-lg-4 aboutTiles justify-content-center mt-3 mb-5">
            <i className="fab fa-js-square aboutIconsJs display-4 d-flex justify-content-center"></i>
            <h4 className="my-5 py-5 fontSecondary tileInfo text-center">Adaptive, creative, and certified Junior Software Developer and trained IT professional with proficiency in Back-end programming languages, JavaScript and Ruby.</h4>
          </div>
          <div className="d-flex col-12 col-lg-3 aboutTiles justify-content-center mt-3 mb-5">
            <i className="fa-brands fa-react aboutIconsReact display-4 d-flex justify-content-center"></i>
            <h4 className="my-5 py-5 fontSecondary tileInfo text-center">knowledgeable in front-end programming languages and frameworks such as: HTML, CSS, and ReactJS.</h4>
          </div>
          <div className="d-flex col-12 col-lg-4 aboutTiles justify-content-center mt-3 mb-5">
            <i className="fa-brands fa-square-github aboutIconsGithub display-4 d-flex justify-content-center"></i>
            <h4 className="my-5 py-5 fontSecondary tileInfo text-center">Familiar with concepts of computing and database use, as well as, conducting user research and collaborating with developers to build dynamic websites.</h4>
          </div>

          <div className="divider mt-3 w-75 mx-auto"></div>
        </div>

        {/* Certifications Section */}
        <div className="d-flex row container mx-auto">
            <div className="d-flex arrow bounce mt-5 mb-3">
              <h4 className="text-center fontPrimary me-2">Certifications</h4>
              <i className="fa-solid fa-chevron-down mt-1 arrowDown"></i>
            </div>

            <div className="column">
              <img src={require('../certImages/Full-Stack Deployment Certification.jpg')} alt='Full-Stack Deployment' />
            </div>
            
            <div className="column">
              <img src={require('../certImages/JavaScript Certification.jpg')} alt='JavaScript' />
            </div>
            <a role='button' className="viewProjects button rounded mt-4 py-2 text-center fontSecondary" href='/skills'>View all certifications</a>
          </div>

          {/* Projects Section */}
          <div className="d-flex row container mx-auto mt-5">
            <div className="d-flex arrow bounce mt-5 mb-3">
              <h4 className="text-center fontPrimary me-2">Projects</h4>
              <i class="fa-solid fa-chevron-down mt-1 arrowDown"></i>
            </div>

            <div className="column">
              <img src={require('../images/Airbnb.jpg')} alt='Airbnb' />
              <img src={require('../images/currency converter.jpg')} alt='Currency Converter' />
            </div>
            
            <div className="column">
              <img src={require('../images/IP Finder v1.png')} alt='IP Finder' />
              <img src={require('../images/Twitter.png')} alt='Twitter' />
            </div>
            <a role='button' className="viewProjects button rounded mt-4 py-2 text-center fontSecondary" href='/projects'>View all projects</a>
          </div>
        
      </React.Fragment>
    )
  }


export default Home;
