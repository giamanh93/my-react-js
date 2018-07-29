import React from 'react';
import { render } from 'react-dom';
import Home from './component/Home';
import Main from './component/Main';
import Footer from './component/Footer';
// import Search from './component/Search';
import 'bootstrap';
import 'jquery';
import './styles.scss';

const App = () => {
  return (
      <div>
          <Home />
          <Main />
          <Footer />
      </div>

  );
}

render(<App />, document.getElementById('app'));
