import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import OtherPage from './OtherPage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import './../styles/app.scss'; // or `.scss` if you chose scss

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route name="home" exact path="/" component={HomePage} />
        <Route name="other" exact path="/other" component={OtherPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
