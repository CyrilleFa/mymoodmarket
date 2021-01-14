import React from 'react';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <h1>Bibliothèque de sons</h1>
        <p>Vos sons téléchargés :</p>
      </main>
    );
  }
}

export default Library;
