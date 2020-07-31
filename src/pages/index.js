import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';
import Five from '../components/mailingForm'

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import pic04 from '../assets/images/bg-cta.jpg'


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Nutritional Technology
              </h1>
              <p>
              Using the culinary powers of food to rebuild and strengthen the nervous system.
              Bringing back balance and attaining greater spiritual heights
              </p>
                <a target="_blank" href="http://41.185.8.137/~xic02/alchemyofremembrance/" className="btn btn-outline btn-xl">
                  Join the Course
                </a>
            </div>
          </div>
          {/**<div className="col-lg-5 my-auto">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>*/}
                </div>
              </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Healthy Foundations
            </h2>
            <p>
              This is a 6 week course where  you will dive into the art and science of nutrition.
              Learning the intricate relationship between food and our state of being.
              IxCacao is both a superfood and a Hand Maiden
              who will support you during your deep study of how the body works physically and energetically.
            </p>
            {/**<div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Course Outline</h2>
          <p className="text-muted">
            Getting to know your body, one week at a time
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <img src={demo1} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Week 1: The Nervous System</h3>
                    <p className="text-muted">
                      Understanding of the how the nervous system works and its importance.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Week 2: The Subtle Energies</h3>
                    <p className="text-muted">
                      A look into the basic energetic make up of our physical being and how it relates to nutrition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Week 3: Neurochemicals</h3>
                    <p className="text-muted">
                      Learning the basics of our brain chemicals and how nutrition can keep it in balance for our well being.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Week 4: Hormones</h3>
                    <p className="text-muted">
                      Learning the basics of hormones and how nutrition can keep it in balance for our well being.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Week 5: Personalised Lifestyle</h3>
                    <p className="text-muted">
                      Getting to know your unique constitution to tailor a lifestyle that supports you.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Week 6: Sacredness of Food</h3>
                    <p className="text-muted">
                      Using prayer/ceremony in food preparation to deepen & heal our relationship with food.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">

          <p>
            In the pursuit of embodiment, one of the fundamental practices we engage in, is eating food for sustenance.
            How do we relate to food? What is true nourishment? What is sustenance?
            Understanding these deeper truths as well as healing our relationship with food is a master key to
            fully expressing our spiritual nature as a human being. It is a deeply healing part in our embodiment
            process. These principals are to be addressed and understood. They are calling for us to approach it
            with full consciousness, which is what this teaching brings to you.
          </p>
          <p>
            This 6 week course you will dive into the art and science of nutrition. Learning the intricate
            relationship between food and our state of being. IxCacao is both a superfood and a Hand Maiden
            who will support you during your deep study of how the body works physically and energetically.
          </p>
          <p>
            You will learn the tools that will transform your daily food into
            medicine which can heal and unlock the hidden potentials within.
          </p>
          <p>
            The practices and information in this course are the building blocks to a personalised
            lifestyle that will support your needs in life. Additional to the primary teachings, is an
            optional offering of one-on-one sessions with Gabriel that will focus deeper on the specific
            practices and foods that harmonise with your unique constitution.
          </p>
          <p>
            Lastly, we will be exploring the sacredness of food through conscious ceremony/prayer.
            This is an important and forgotten nutrient that has a powerful impact on how we prepare and
            receive the medicine of our food.
          </p>

        </div>
      </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
          <h2>
            Who Am I?
          </h2>
          <p style={{ color: 'white' }}>
          My name is Matthew Bloemetje. We were designed to be extraordinary
          and I am just a regular human being on the path of becoming an extraordinary being.
          I am a graduated, yet ever learning Sangoma and Cacao Kuchina.
          </p>
          <br />
          <p style={{ color: 'white' }}>
          My ancestral name is Gabriel.
          As a facilitator, I have been blessed to unlock the ancient knowledge about nutrition and body-work healing.
          I have a complex understanding about the inner and outer workings of the body and brain and how to best optimize their functioning.
          </p>
            <a target="_blank" href="http://41.185.8.137/~xic02/alchemyofremembrance/" className="btn btn-outline btn-xl">
              Join the Course
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <Five/>
      {/**<h2>
        We
        <i className="fas fa-heart"></i>
        new friends!
      </h2>
      <Social />*/}
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
