import React from 'react';
import './Home.css';

class How extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='container-how'>
        <h1 className='titre-how'>
          Vous souhaitez vivre une expérience hors du commun ?
        </h1>
        <p className='texte-how'>
          Nous vous proposons des émotions en version audible. Alors,
          installez-vous confortablement, et isolez-vous à l'aide d'un casque ou
          d'écouteurs pour profiter d'une expérience optimale
        </p>
        <h2 className='chapitre-how'>Pourquoi nous choisir?</h2>
        <p className='texte-how'>
          Nous sommes les seuls acteurs sur le marché à proposer ce type de
          prestations.
        </p>
        <p className='texte-how'>
          Vous avez un coup de mou ? Nous pouvons vous proposer une bonne dose
          de motivation et positivité. <br /> Vous avez peur ? Alors le courage
          sera l'élément parfait pour vous permettre d'affronter vos plus
          grandes craintes
        </p>
        <h2 className='chapitre-how'>
          Alors, qu'attendez-vous pour franchir le pas ?
        </h2>
      </section>
    );
  }
}

export default How;
