import React from 'react';
import { render } from 'react-dom';
import Home from './component/Home';
// import Search from './component/Search';
import 'bootstrap';
import 'jquery';
import './styles.scss';

const App = () => {
  return (
      <div>
          <Home />

      </div>

  );
}

render(<App />, document.getElementById('app'));
