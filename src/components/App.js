import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ButtonAddFemale from './ButtonAddFemale';
import ButtonAddMale from './ButtonAddMale';
import ModelsList from './ModelsList'

const APIFemale='https://randomuser.me/api/?gender=female';
const APIMale='https://randomuser.me/api/?gender=male';

class App extends Component {
   state={
     users: []
   }

  handleAddFemaleModel=()=>{
    fetch(APIFemale)
    .then(response=>{
      if(response.ok){
        return response
      }
      throw Error ("Błąd!")
    })
    .then(response => response.json())
    .then(data=>{
      const user= data.results
      this.setState(prevState=>({
        users: prevState.users.concat(user)
      }))
    })
    .catch(error => console.log(error))
  }

  handleAddMaleModel=()=>{
    fetch(APIMale)
    .then(response=>{
      if(response.ok){
        return response
      }
      throw Error ("Błąd!")
    })
    .then(response => response.json())
    .then(data=>{
      const user= data.results
      this.setState(prevState=>({
        users: prevState.users.concat(user)
      }))
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
      <Header></Header>
      <ButtonAddFemale click={this.handleAddFemaleModel}></ButtonAddFemale>
      <ButtonAddMale click={this.handleAddMaleModel}></ButtonAddMale>
      <ModelsList users={this.state.users}></ModelsList>
        
      </div>
    );
  }
}

export default App;
