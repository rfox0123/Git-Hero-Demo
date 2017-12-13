import React, { Component } from "react";
import { connect } from "react-redux";
import { saveHero } from "../../actions/actions";
import { bindActionCreators } from "redux";

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: this.props.hero
    };
  }

  componentWillMount() {}
    
  
  handleSubmit = event => {
    var hero = this.state.hero;
    this.props.onSave(hero.id, hero.name)
    this.props.history.goBack();
    event.preventDefault();
  };

  handleInputChange = event => {
    this.setState({
      hero: {
        ...this.state.hero,
      name: event.target.value
      }
    });
  };
  render() {
    if (!this.props.hero) {
      return <div>Loading.......</div>;
    }
    return (
      <div>
        <div>
          <h2>{this.props.hero.name}</h2>
          <label>id: </label>
          {this.props.hero.id}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>name: </label>
          <input type="text" value={this.state.hero.name} onChange={this.handleInputChange}/>
          <input className="button" type="submit" value="Submit" />
        </form>
        <img src={this.props.hero.avatar}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const heroid = parseInt(props.match.params.heroid)
  return {
    hero: state.heroes.find(hero => hero.id === heroid)
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveHero, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroForm);


  // const HeroForm = props => (
  //   <div>
  //     <div>
  //   <h1>{this.state.title}</h1>
  //     <div>
  //       <label>id: </label> {this.state.selectedHero.id}
  //   </div>
  //   <form onSubmit={() => props.handleSubmit()}>
  //   <label>Name:</label>
  //   <input id="input" type="text" value = {this.state.selectedHero.name}
  //   onChange ={this.handleChange}/>
  // <input type="button" value="Submit" onClick = {() => props.handleSubmit()}/>
  // <br/>
  // <ul className="heroes">
  // <HeroesList heroes={this.state.heroes} selectedHero={this.selectHero}/>
  // </ul>
  // </form>
  // </div>
  // </div>
  // )