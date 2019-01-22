import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/ContactPage';
import Home from './components/Home';
import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MainMenu />
          </header>
          <section className="hero is-info">
            <div className="hero-body has-text-centered">
              <div className="container">
                <h1 className="title">Warn on Dirty</h1>
              </div>
            </div>
          </section>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
