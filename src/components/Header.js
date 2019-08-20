import React from 'react';
import Scroll from './Scroll';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1>
          Consultant Marketing
        </h1>
        <p>
          Site de prezentare - <a href="https://websitemarket.ro">Comanda site</a>
        </p>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Mai mult
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
