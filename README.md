# react-feedback

In the development, mouse hover and click often need to give different feedback to improve the user experience, so react feedback is generated.

## Installation

`npm install --save react-feedback`

## Development

```
npm install
npm start
```

## Usage

```js
import Feedback from 'react-feedback';
import 'custome.css';

<Feedback
    hoverActiveClass="feedback-hover"
    clickActiveClass="feedback-click"
    disabled={false}
    >
    <div onClick={() => console.log('clicked')}  style={{border:'solid red 1px'}}>
        <p>hello hello hello hello hello113</p>
    </div>
</Feedback>

<Feedback
    hoverActiveClass="feedback-hover"
    clickActiveClass="feedback-click"
    disabled={false}
    >
    <button>react feedback button </button>
</Feedback>


```

## props


| name        | description          | type   | default    |
|-------------|------------------------|--------|------------|
| hoverActiveClass | className applied to child when hoverd | string |  |
| clickActiveClass | className applied to child when clicked | string |  |
| disabled     |      Don't allow styles work             | boolean | false |

## Test 

```
npm run test

```


## License

react-feedback is released under the MIT license.
