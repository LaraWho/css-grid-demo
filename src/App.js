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
          <div className="item">grid-area: left-side</div>
          <div className="item">grid-area: top-right </div>
          <div className="item">item</div>
          <div className="item">item</div>

        </div>
      </section>
      <section id='section-2'>
        <div className='grid-container'>
          <div className="item">grid-area: left-side</div>
          <div className="item">grid-area: right-side</div>

        </div>
      </section>
      <section id='section-3'>
        <div className='grid-container'>
          <div className="item content-header">header</div>
          <div className="item content-left">content-left</div>
          <div className="item content-mid">main</div>
          <div className="item content-right">content-right</div>
          <div className="item content-footer">footer</div>

        </div>
      </section>
      <section id='section-4'>
        <div className='grid-container'>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>

        </div>
      </section>


      <p id='github-link'><a href="https://github.com/nathan-08/css-grid-demo"><i class="fab fa-github"></i> GitHub</a></p>
      </div>
    );
  }
}

export default App;
