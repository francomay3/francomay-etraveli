import React, { Component } from 'react';
import Header from './Components/Header';
import M from 'materialize-css/dist/js/materialize';
import Body from './Components/Body';
import './App.css';

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query:"",
      sort:""
    }
  }

  componentDidMount(){
    // materializeCSS way of initializing the select element.
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems, {});
    });
  }

  render() { 
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}
 
export default app;
