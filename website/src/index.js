import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';


export default class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
        <Layout />
       </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));