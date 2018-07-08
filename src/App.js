import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className='header'>
      <h1>
      css grid demo
      </h1>
      </header>
      <section id='section-1'>
        <div className='grid-container'>
          <div className="item">grid area: left-side</div>
          <div className="item">gird area: top-right </div>
          <div className="item">item</div>
          <div className="item">item</div>

        </div>
      </section>
      <section id='section-1'>
        <div className='grid-container'>
          <div className="item">grid area: left-side</div>
          <div className="item">gird area: top-right </div>
          <div className="item">item</div>
          <div className="item">item</div>

        </div>
      </section>
      <section id='section-1'>
        <div className='grid-container'>
          <div className="item">grid area: left-side</div>
          <div className="item">gird area: top-right </div>
          <div className="item">item</div>
          <div className="item">item</div>

        </div>
      </section>
      <section id='section-1'>
        <div className='grid-container'>
          <div className="item">grid area: left-side</div>
          <div className="item">gird area: top-right </div>
          <div className="item">item</div>
          <div className="item">item</div>

        </div>
      </section>


      <p id='github-link'><a href="#"><i class="fab fa-github"></i> GitHub</a></p>
      </div>
    );
  }
}

export default App;
