import React from 'react';
import './Team.css';

function Team() {
  return (
    <main className='team-main'>
      <article className='team-history'>
        <div className='team-presentation'>
          <h2 className='team-h2'>Présentation de l'équipe</h2>
          <p>
            Party of a simple adventure with friends in April 2015, The
            Traveling Taste Buds became a business in November 2020. Following
            the many cooking recipes that have reached us on our contact form on
            the first site, the idea came to us of creating a second site which
            allow us to list thousands of different recipes.
          </p>
        </div>
      </article>

      <article className='team-content'>
        <img
          src='https://avatars0.githubusercontent.com/u/43884584?s=400&u=bbba901f0fa0cd299a051b09a9a416d1ae28622c&v=4'
          alt='Cédric Priouret'
          title='Cédric Priouret'
        />
        <h3>Cédric Priouret</h3>
        <p className='left-text'>
          Chef for 25 years in renowned restaurants (The Golden Wave in
          St-Tropez, Alain Ducasse in Paris but also Jean Georges in New-York
          and Club Gascon in London). Due to health problems, I stopped working
          in the kitchen. I now devote myself 100% to the management of the site
          Travelers Taste Buds.
        </p>
        <div className='social-icons-team'>
          <li>
            <a href='https://github.com/CedricPriouret'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/cedricpriouret/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </div>
      </article>
      <article className='team-content'>
        <img
          src='http://cedricpriouret.fr/images/matisse.png'
          alt='Matisse Famularo'
          title='Matisse Famularo'
        />
        <h3>Matisse Famularo</h3>
        <p className='right-text'>
          I am the Web Development Manager of the site. Before becoming a
          developer, I was a pastry chef; I also take care of all the dessert
          recipes.
        </p>
        <div className='social-icons-team'>
          <li>
            <a href='https://github.com/MatisseFMLR'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/matisse-famularo/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </div>
      </article>
      <article className='team-content'>
        <img
          src='https://avatars3.githubusercontent.com/u/69692885?s=400&u=0dbddc8ee11014caec923ac20214d25ac258d58d&v=4'
          alt='Justine Pain'
          title='Justine Pain'
        />
        <h3>Justine Pain</h3>
        <p className='left-text'>
          I am the owner of the restaurant "Furia de Mar" in Lisbon, Portugal.
          Portuguese gastronomy specialist (they nickname me "The King of Cod")
          It is with real pleasure that I joined the team of "Traveling Taste
          Buds" to transmit my knowledge and my passion.
        </p>
        <div className='social-icons-team'>
          <li>
            <a href='https://github.com/PainJustine'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/painjustine/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </div>
      </article>
      <article className='team-content'>
        <img
          src='https://avatars0.githubusercontent.com/u/58628260?s=400&u=99e744fb2817df5e35345d876f2f3fb6f6df6eb3&v=4'
          alt='Cyrille Fabre'
          title='Cyrille Fabre'
        />
        <h3>Cyrille Fabre</h3>
        <p className='right-text'>
          I am part of the starting team of the creation of the site 1 of the
          Traveling Taste Buds. I am always in contact with my friends Floran,
          Justine and Corentin who have created a training school to become a
          cook : the &#8220;Delicious Cook School&#8220;. Sometimes,they advise
          me and give me their opinion. I take care of the promotion of the site
          and social networks.
        </p>
        <div className='social-icons-team'>
          <li>
            <a href='https://github.com/Cissou13'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/cyrille-fabre-bbb46b78/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </div>
      </article>
    </main>
  );
}

export default Team;
