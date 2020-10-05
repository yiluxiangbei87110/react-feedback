import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import Feedback from '../.';

const App = () => {
  return (
    <div className="App">
      <Feedback
        hoverActiveClass="feedback-hover"
        clickActiveClass="feedback-click"
        disabled={false}
      >
        <div onClick={() => console.log('clicked')}  style={{border:'solid red 1px'}}>
          <p>hello hello hello hello hello113</p>
        </div>
      </Feedback>
      <br />
      <br />
      <br />
      <Feedback
        hoverActiveClass="feedback-hover"
        clickActiveClass="feedback-click"
        disabled={false}
      >
        <button>react feedback button </button>
      </Feedback>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
