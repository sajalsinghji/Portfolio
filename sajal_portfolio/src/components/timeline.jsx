import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Software Engineer At Adobe <span>2018-present</span></h2>
                        <p>I joined the Adobe Inc as a Software Engineer. Development of Speech to text services which is used to create a transcription file with the provided audio file
that will be integrated on PrePro desktop and mobile apps. I wrote the back-end effort of integrating Azure
service to convert a provided voice file to text file, managing integrating and setting up the azure service, closely
working with the Azure team and then writing Spring micro-services to call the azure service for sending the
voice file and receiving and saving the file. Services are being integrated and managed by in house cloud tech
devops team.</p>
                      </div>
                    </div>
                  </article>
                  </div>
                  </div>
                  </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Software Engineer At Naukri.com <span>2017-2018</span></h2>
                        <p>I Worked with a team that developed a Microservice framework to replace the legacy monolithic services
including resdex service which handles more than 5 million calls daily, and other user profile services. Worked
on the team of 5 was responsible for developing services which help in storing, updating and making sure the
services are highly scable and available.</p>
                      </div>
                    </div>
                  </article>
                  </div>
                  </div>
                  </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Software Engineer At Samsung Electronics <span>2014-2017</span></h2>
                        <p>I joined the Samsung Electronics as an Intern and after interning for 6 months got an opportunity as a permanent employee as a Software Engineer. As a intern worked on tizen development team, primarily was focused on the bug fixing of the for the smart tv
software, performed debugging and helped Korean team with the bug fixing. As a part of the Samsung smart tv cloud team, created, maintained and helped in multiple release cycle for the tizen
smart tv developer api, reference can be found here https://developer.samsung.com/SmartTV/develop/api-references/
samsung-product-api-reference.</p>
                      </div>
                    </div>
                  </article>
                  </div>
                  </div>
                  </div>                  
              <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at Galgotia's <span>2010-2014</span></h2>
                        <p>I am pursuing my under-graduation studies with major in I.T.(Information &  Technology). I have taken courses like DSA, OOPs, Computer Networks, over the years and have better understanding of these subjects.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
