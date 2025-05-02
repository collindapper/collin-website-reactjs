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
              <p className="bodySection fontSecondary"><secondary>Graduation Date: November 2026</secondary></p>
              <br />

              <h1 className="fontPrimary title">Altcademy</h1>
              <h3 className="fontPrimary">Full-Stack Web Development</h3>
              <p className="bodySection fontSecondary"><secondary>Certification Date: September 2022</secondary></p>
              <br />

              <h1 className="fontPrimary title">University of Nevada, Reno</h1>
              <h3 className="fontPrimary">Bachelor of Science in Finance. Minor in Economics</h3>
              <p className="bodySection fontSecondary"><secondary>Graduation Date: August 2020</secondary></p>
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
              - Allocate, maintain, and troubleshoot thin clients, PCs, scanners, portable handheld terminals, and various IT equipment across Amazon Operations facilities, ensuring smooth day-to-day operations.<br/>
              <br/>
              - Handle and resolve technical support requests across the network, providing timely solutions to minimize system downtime and improve operational efficiency.<br/>
              <br/>
              - Oversee the RMA and repair process for all on-site devices, managing device returns and repairs to ensure quick resolution and maintain equipment functionality.<br/>
              <br/>
              - Support Junior and Senior Technicians in daily projects and technical tasks, fostering team collaboration and enhancing overall productivity in the IT department.<br/>
              <br/>
              - Skills: Bash/Shell Command Line, Windows OS, Troubleshooting, Debugging, Microsoft Outlook, Slack, ServiceNow.</h5>
              <br/>
              <p className="bodySection fontSecondary"><secondary>October 2023 - Present</secondary></p>
              <br />

              <h1 className="fontPrimary title">Flow Process Assistant & Manager I, Operations - Amazon.com</h1>
              <h5 className="fontSecondary">Develop and Implement efficient work-flow practices to increase productivity and operation performance, while maintaining the highest safety and quality standards for my team.</h5>
              <br/>
              <h5 className="fontSecondary title">
              - Developed and implemented tools to track and analyze cost and production trends, providing actionable insights to drive operational efficiency and cost optimization.<br/>
              <br/>
              - Analyzed cost and production trends to effectively plan headcount for both direct and indirect roles, ensuring optimal staffing levels to meet production goals.<br/>
              <br/>
              - Created and set performance goals to align with customer demand, ensuring operational accuracy, quality, and timely delivery.<br/>
              <br/>
              - Facilitated communication between Reliability & Maintenance Engineers and Operations Leadership, ensuring all equipment and conveyance systems were in proper working condition to prevent operational delays and disruptions.<br/>
              <br/>
              - Led initiatives to implement performance goals and objectives that supported customer demand while maintaining high standards of accuracy and quality.<br/>
              <br/>
              - Skills: Management, Team Leadership, Data Analysis (Grafana, iGraphs, Microsoft Excel), Cost Optimization, Operational Planning.</h5>
              <br/>
              <p className="bodySection fontSecondary"><secondary>April 2021 - October 2023</secondary></p>
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
            </Slide>
            </div>
          </div>

          
        </div>
      </React.Fragment>
    )
  }
}

export default About;