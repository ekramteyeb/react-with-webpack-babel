
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return(
    <div className='app'>
      <h1>React applications can be started using :</h1>
        <li>npx create-react-app</li>
        <li>using webpack and bable</li>
      <p>*******This app is bundled and compiled using webpack and babel</p>
    </div>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);