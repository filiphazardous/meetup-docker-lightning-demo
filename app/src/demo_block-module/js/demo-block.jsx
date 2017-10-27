import React from 'react';
import ReactDOM from 'react-dom';
import UserData from './user/userData.jsx';

let appElement = document.getElementById('demo-block');
let userId = JSON.parse(appElement.getAttribute('data-uid'));

ReactDOM.render(
  <UserData id={userId} />,
  appElement,
);