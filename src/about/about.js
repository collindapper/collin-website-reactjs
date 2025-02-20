import React from 'react';

import './about.css';
import { Slide } from 'react-awesome-reveal';

class About extends React.Component {

  render() {

    return (
      <React.Fragment>
        <div className="container">
          
          <div className="row aboutRow mt-3 mb-5">
            
            <div className="col-12 col-lg-4 mx-auto mb-md-auto mt-3 mt-md-3">
            <Slide direction='left' triggerOnce>
              <p className="heading display-3 fontPrimary"><strong>EDUCATION</strong></p>
              </Slide>
            </div>
            
            <div className="col-12 col-lg-8 my-md-auto pt-md-4 ps-md-5">
            <Slide direction='right' triggerOnce>
              <h1 className="fontPrimary title">Western Governors University</h1>
              <h3 className="fontPrimary">Bachelor of Science, Computer Science</h3>
              <p className="bodySection fontSecondary"><secondary>November 2023 - Present</secondary></p>
              <br />

              <h1 className="fontPrimary title">Altcademy</h1>
              <h3 className="fontPrimary">Full-Stack Web Development</h3>
              <p className="bodySection fontSecondary"><secondary>November 2021 - September 2022</secondary></p>
              <br />

              <h1 className="fontPrimary title">University of Nevada, Reno</h1>
              <h3 className="fontPrimary">Bachelor of Science in Finance. Minor in Economics</h3>
              <p className="bodySection fontSecondary"><secondary>January 2018 - August 2020</secondary></p>
              <br />

              <h1 className="fontPrimary title">San Joaquin Delta College</h1>
              <h3 className="fontPrimary">Associates in Math and Science(AA-S)/Associates in Business Administration(AS-T)</h3>
              <p className="bodySection fontSecondary"><secondary>June 2015 - December 2017</secondary></p>
              <br />
            </Slide>
            </div>
          </div>

          <div className="row aboutRow mt-3 mt-md-5">
            <div className="col-12 col-lg-4 mx-auto mt-md-3">
            <Slide direction='left' triggerOnce>
              <p className="heading display-3 fontPrimary"><strong>EXPERIENCE</strong></p>
            </Slide>
            </div>

            <div className="col-12 col-lg-8 my-md-auto pt-md-4 ps-md-5">
            <Slide direction='right' triggerOnce>
              <h1 className="fontPrimary title">IT Equipment Coordinator - Amazon.com</h1>
              <h5 className="fontSecondary">Responsible for utilizing IT skills to provide assistance to the operations team by maintaining IT inventory, coordinating ordering, delivery, and audits of assets assigned to the IT department, and maintaining general standardized housekeeping of all IT areas.</h5>
              <br/>
              <h5 className="fontSecondary title">
              - Allocate, maintain, and troubleshoot thin clients, PCs, scanners, portable handheld terminals, and other IT equipment used in Amazon Operations facilities.<br/>
              <br/>
              - Handle support requests and procedures across the network.<br/>
              <br/>
              - Allocate, maintain, and troubleshoot thin clients, PCs, scanners, portable handheld terminals, and other IT equipment used in Amazon Operations facilities.<br/>
              <br/>
              - Handle support requests and procedures across the network.<br/>
              <br/>
              - Responsible for RMA and repair process for all devices on-site.<br/>
              <br/>
              - Support Junior and Senior Technicians with daily projects and activities.</h5>
              <br/>
              <p className="bodySection fontSecondary"><secondary>October 2023 - Present</secondary></p>
              <br />

              <h1 className="fontPrimary title">Flow Process Assistant, Operations - Amazon.com</h1>
              <h5 className="fontSecondary">Develop and Implement efficient work-flow practices to increase productivity and operation performance, while maintaining the highest safety and quality standards for my team.</h5>
              <br/>
              <h5 className="fontSecondary title">
              - Standardize flow processes to streamline operation growth.<br/>
              <br/>
              - Develop tools to track and analyze cost and production trends<br/>
              <br/>
              - Analyze cost and production trends to properly plan headcount in both direct and indirect roles.<br/>
              <br/>
              - Create performance goals and objectives to achieve customer demand and ensure accuracy and quality.<br/>
              <br/>
              - Bridge the gap between the Reliability and Maintenance Engineers and Operation Leadership to ensure all conveyance and equipment is in proper working condition to prevent any delays in operation work-flows.</h5>
              <br/>
              <p className="bodySection fontSecondary"><secondary>October 2022 - October 2023</secondary></p>
              <br />


              <h1 className="fontPrimary title">Full-Stack Developer Student - Altcademy</h1>
              <h5 className="fontSecondary">Drafted, Wire-framed, and wrote well-designed, testable and efficient code using the best software development practice.
                Developed website layouts and user interfaces using standard HTML and CSS, as well as, integrating data from various
                back-end services and databases</h5>
                <br/>
              <h5 className="fontSecondary">
                - Developed three user-friendly websites using React JS and JavaScript, along with several other programming
                languages, libraries and frameworks.<br/>
                <br/>
                -  Created a full-stack, ReactJS and Ruby on Rails, social media website. Personally created the Front-End and
                layout, as well as, creating the API and API endpoints. The build allows users to create a profile, see other users
                posts, as well as post messages and images to their own feeds.<br/>
                <br/>
                - Created a full-stack, ReactJS and Ruby on Rails, online marketplace.Developed the Front-End and layout, as well
                as, creating the API and API endpoints. The build allows users to create properties via listings (add, edit, delete
                and create property listings), and book trips off of other users listings via Stripe web-hook for transactions.</h5>
                <br/>
              <p className="bodySection fontSecondary"><secondary>November 2021 - September 2022</secondary></p>
              <br />

              <h1 className="fontPrimary title">Manager I, Operations - Amazon.com</h1>
              <h5 className="fontSecondary">Lead a team of hourly workforce and engaged my team during their shifts to maintain the highest levels of safety, quality,
              attendance, and performance. Maintained our customer expectations to ensure customer orders were delivered at the
              correct place and time.</h5>
              <br/>
              <h5 className="fontSecondary">
              - Coach, manage, and develop a team of 200 Amazon associates<br/>
              <br/>
              - Communicate policies to my team and act as the primary information source for the team<br/>
              <br/>
              - maintaining compliance, consistency, and taking corrective action when needed<br/>
              <br/>
              - Create, manage, and support recognition programs<br/>
              <br/>
              - Support all safety programs and OSHA compliance to ensure a safe work environment for all associates<br/>
              <br/>
              - Ensure procedures are followed for building security and product loss prevention<br/>
              <br/>
              - Develop tools to track and analyze cost and production trends<br/>
              <br/>
              - Partner with the management team to establish and maintain quality control standards<br/>
              <br/>
              - Develop performance goals and objectives to achieve customer demand and ensure accuracy and quality</h5>
              <br/>
              <p className="bodySection fontSecondary"><secondary>April 2021 - April 2022</secondary></p>
              <br />
            </Slide>
            </div>
          </div>

          
        </div>
      </React.Fragment>
    )
  }
}

export default About;