import { headUp, url } from './functions';

url()
  .then(res => console.log('Response from url', res))
  .catch(error => console.log('error', error));
headUp('working');
