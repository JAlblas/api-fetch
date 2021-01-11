import './style.css';
import request from './request';

const img = document.querySelector('img');
const button = document.querySelector('button');
const searchTextField = document.querySelector('#search-text');

request(searchTextField.value);

button.addEventListener("click", function() {
  request(searchTextField.value);
});