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
            <div id="ex1-layer" className="d-flex col-12 col-md-5 avatar shadow-lg"></div>
            <div className="col-12 col-md-6 my-auto py-4 ms-md-5 introCard">
              <Fade direction='right'>
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
            <i className="fa-brands fa-python aboutIconsJs display-4 d-flex justify-content-center"></i>
            <div className="my-5 py-5 tileInfo">
              <h2 className="fontSecondary text-center"><strong>Full-Stack Development</strong></h2>
              <h4 className="fontSecondary text-center">I design and build responsive, user-friendly web applications from front to back, using JavaScript, React, Python, and modern frameworks to deliver clean, maintainable code.</h4>
            </div>
          </div>
          <div className="d-flex col-12 col-lg-3 aboutTiles justify-content-center mt-3 mb-5">
            <i className="fa-brands fa-amazon aboutIconsReact display-4 d-flex justify-content-center"></i>
            <div className="my-5 py-5 tileInfo">
              <h2 className="fontSecondary text-center"><strong>Project Ownership & Leadership</strong></h2>
              <h4 className="fontSecondary text-center">I take initiative in guiding projects from concept to completion, balancing technical execution with clear direction to ensure goals are met and teams stay aligned.</h4>
            </div>
          </div>
          <div className="d-flex col-12 col-lg-4 aboutTiles justify-content-center mt-3 mb-5">
            <i className="fa-brands fa-linux aboutIconsGithub display-4 d-flex justify-content-center"></i>
            <div className="my-5 py-5 tileInfo">
              <h2 className="fontSecondary text-center"><strong>IT & Systems Expertise</strong></h2>
              <h4 className="fontSecondary text-center"> Experienced with Windows and Linux environments, Git workflows, and troubleshooting technical issues, I bring a strong foundation in systems and support to keep projects running smoothly.</h4>
            </div>
          </div>

          <div className="divider mt-3 w-75 mx-auto"></div>
        </div>

        {/* Projects Section */}
          <div className="d-flex row container mx-auto mt-5">
            <div className="d-flex arrow bounce mt-5 mb-3">
              <h4 className="text-center fontPrimary me-2">Projects</h4>
              <i className="fa-solid fa-chevron-down mt-1 arrowDown"></i>
            </div>

            <div className="column">
              <img src='/images/sysHealthImg.png' alt='System Health Tool' />
              <img src='/images/currency converter.jpg' alt='Currency Converter' />
            </div>
            
            <div className="column">
              <img src='/images/IP Finder v1.png' alt='IP Finder' />
              <img class='pt-5' src='/images/sshTool.jpeg' alt='SSH Tool' />
            </div>
            <a role='button' className="viewProjects button rounded mt-4 py-2 text-center fontSecondary" href='/projects'>View all projects</a>
          </div>
        
        {/* Certifications Section */}
        <div className="d-flex row container mx-auto">
            <div className="d-flex arrow bounce mt-5 mb-3">
              <h4 className="text-center fontPrimary me-2">Certifications</h4>
              <i className="fa-solid fa-chevron-down mt-1 arrowDown"></i>
            </div>

            <div className="column">
              <img src='/certImages/linux.png' alt='Linux Certification' />
            </div>
            
            <div className="column">
              <img src='/certImages/Full-Stack Deployment Certification.jpg' alt='Full-Stack Deployment' />
            </div>
            <a role='button' className="viewProjects button rounded mt-4 py-2 text-center fontSecondary" href='/skills'>View all certifications</a>
          </div>

        
      </React.Fragment>
    )
  }


export default Home;
