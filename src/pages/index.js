import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="Consultant Marketing - Imagine sectiune Cine sunt" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Cine sunt</h2>
          </header>
          <p>
            Am o experienta de peste 4 ani in acest domeniu complex si in activtatea mea de consultant am reusit sa 
            ajut companiile sa isi promoveze serviciile si produsele in nisele relevante de audienta.
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="Consultant Marketing - Imagine sectiune Portofoliu." />
        </span>
        <div className="content">
          <header className="major">
            <h2>
              Serviciile mele
            </h2>
          </header>
          <p>
            Activitatea de consulatanta in marketing este o activitate care presupune mult efort si dedicare.
            Primul pas in orice proiect este sa am impreuna cu viitorul client o sesiune de analiza a produsului si serviciilor. 
          </p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa-camera-retro" />
              <h3>Branding</h3>
            </li>
            <li>
              <span className="icon major fa-pencil" />
              <h3>Promovare online</h3>
            </li>
            <li>
              <span className="icon major fa-code" />
              <h3>Articole de blog</h3>
            </li>
            <li>
              <span className="icon major fa-coffee" />
              <h3>Analiza de piata</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="Consultant Marketing - Imagine sectiune Scop." />
        </span>
        <div className="content">
          <header className="major">
            <h2>Ce imi propun</h2>
          </header>
          <p>
            Cred ca tarie ca un proiect va avea success doar prin dedicare si seriozitate. 
            Activitatea de consultanta in marketing se poate face doar printr-un parneriat cu clientul.
            Deciziile care vor asigura o promovare eficienta se pot lua intr-un singur mod: 
            impreuna cu clientul si pe baza unei analize atente a pietei.  
          </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Contact</h2>
        </header>
        <p>
          <a href="mailto:hello@websitemarket.ro">hello [ @ ] websitemarket.ro</a>    
        </p>
        <p>
          Hai pe net in cateva ore cu o investitie minima. 
          <br />
          Cu <a href="https://websitemarket.ro">WebsiteMarket</a> este posibil.
        </p>
    
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
