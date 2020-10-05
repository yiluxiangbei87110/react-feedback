import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Feedback from '../src';
import './App.css';
import '../example/App.css';
describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div className="App">
        <Feedback
          hoverActiveClass="feedback-hover"
          clickActiveClass="feedback-click"
          disabled={false}
        >
          <div onClick={() => console.log('clicked')}>
            <p>hello hello hello hello hello</p>
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
      </div>,

      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
