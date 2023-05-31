import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

const myelement = <h1>hello!</h1>;
const myelement2=<h1>React is {50+50} times better with JSX</h1>;
const myelement3=(
  <ul>
    <li>Football</li>
    <li>Volleyball</li>
    <li>Basketball</li>
  </ul>
)
const myelement4 =(
  <div>
    <p>I am an engineer</p>
    <p>I am an engineer too</p>
  </div>
);
const myelement5=(
  <>
    <p>I am an engineer</p>
    <p>I am an engineer too</p>
  </>
);
const myelment6=(
  <input type="text"/>
);
const myElement7 = <h1 className="myclass">Hello World</h1>;
const x=5;
let text = "Goodbye";
if(x<10){
  text="hello";
}
const myelement8=<h1>{text}</h1>
root.render(myelement8);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
