import React, { Component } from 'react';
import './App.css';

//Semanitv UI
// das muss man in der index.js Datei noch einfügen: import 'semantic-ui-css/semantic.min.css'
import {form, button} from 'semantic-ui-react';

//firebase Funktion
import {sendDataFunktionPut} from './Firebase';




export class Form extends Component {

  constructor(props) {
    super(props);

   this.state = {
        essen: '',
        adresse:'',
        valueWasser:'select',
        valueNachtisch:'select'

    } 
  }

  changeWasser = (event) => {
    this.setState({valueWasser: event.target.value})
  }

  changeNachtisch = (event) => {
    this.setState({valueNachtisch: event.target.value})
  }


  handleChangeAdresse= (event) => {
    this.setState({ adresse: event.target.value });
}

handleChangeEssen = (event) => {
  this.setState({ essen: event.target.value });
}

//e.preventDefault(); Es wird verhindert, dass die Seite neu geladen wird. 
zweiFunktionen = (e) => {
  e.preventDefault();
  sendDataFunktionPut(this.state.essen, this.state.adresse, this.state.valueWasser, this.state.valueNachtisch)
  console.log("wurd ausgeführt")
  }

  render() {

  //className="hidden" damit wird die checkbox ausgeschaltet, also nicht mehr auswählbar  

    return (
      <div className="formCont">
      <form className="ui form">
      <div className="field">
      <label>Getränke</label>
      <select className="ui fluid dropdown" onChange={this.changeWasser} value={this.state.value}>
        <option value="Wasser">Wasser</option>
        <option value="Cola">Cola</option>
        <option value="Fante">Fanta</option>
      </select>
    </div>
    <div>
    <label>Nachtisch</label>
      <select className="ui fluid dropdown" onChange={this.changeNachtisch} value={this.state.value}>
        <option value="Schokolade">Schokolade</option>
        <option value="Eis">Eis</option>
        <option value="Kuchen">Kuchen</option>
      </select>
    </div>
  <div className="field">
    <label>Essen</label>
    <input type="Essen" name="essen" style={{width:"100%", height:50}}
    onChange={this.handleChangeEssen}
    />
  </div>
  <div className="field">
  <label>Adresse</label>
      <input type="Adresse" name="adresse"  style={{width:"100%", height:50}}
      onChange={this.handleChangeAdresse}
      />
  </div>
  <button className="ui button" type="submit" onClick={this.zweiFunktionen}>Submit</button>
</form>


      </div>
    )
  }
}

export default Form;
