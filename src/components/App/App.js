import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import Heroes from '../Heroes/Heroes';
// import Dashboard from "../Dashboard"
import HeroForm from "../Heroes/HeroForm";
import AddHero from "../Heroes/addHero"

class App extends Component {
  
  render() {
      return (
        <Router>
        <div>
        <h1>Git Heroes</h1>
          <nav> 
            <NavLink exact to="/" activeClassName="active">
              Dashboard 
            </NavLink>
            <NavLink to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
            <NavLink to="/AddHeroes" activeClassName="active">
              Add Heroes
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/Heroes" component={Heroes} />
          <Route path={"/heroes/details/:heroid"} component={HeroForm} />
          <Route path="/AddHeroes" component={AddHero} />
        </div>
        </Router>
      );
  };
}


export default App;



// <Route path="/dashboard" Component={Dashboard} />
// state= {
//   title: "Git Heroes",
//   heroes: [],
//   selectedHero: {
//     name: "",
//     id: undefined
//   }
// };

// componentWillMount(){
//   getHeroes.then(payload => {
//     this.setState({
//       heroes: payload
//     });
//   }).catch(error => {
//     console.warn("No")
//   });

// }

// selectHero = (hero) => {
//   this.setState({
//     selectedHero: {
//       name: hero.name,
//       id: hero.id
//     }
//   })
// }


// handleChange = event => {
//   this.setState({
//     selectedHero: {
//       ...this.state.selectedHero,
//       name: event.target.value
//     }
//   })
// };  

// handleSubmit = event => {
//   const selectedHero = this.state.selectedHero;
//   const heroIndex = this.state.heroes.map(o => o.id).indexOf(selectedHero.id);
//   if (heroIndex !== -1){
//   const heroes = this.state.heroes;
  
//   console.log(document.getElementById('input').value);
//   console.log(this.state.selectedHero);

//   this.setState({
//       heroes:[...heroes.slice(0, heroIndex), {...selectedHero}, ...heroes.splice(heroIndex + 1, heroes.length)]
//   }) ;
//   console.log(this.state);
// }
// }
