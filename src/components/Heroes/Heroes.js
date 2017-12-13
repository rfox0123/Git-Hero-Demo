import React, {Component} from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux"
import "./Heroes.css";
import HeroesList  from "./HeroesList";


class Heroes extends Component {
    state= {
        title: "Git Heroes",
        hero: [],
        selectedHero: {
          name: "",
          id: undefined
        }
      }

    ComponentWillMount() {}
      
    handleChange = hero => {
      this.setState({
        selectedHero:{
          ...hero
        }
      });
    };

      render() {
          return(
              <div>
              <HeroesList heroes={this.props.heroes} handleChange={this.handleChange}/>
              {this.state.selectedHero.id && (
                <div>
                   <h2>{this.state.selectedHero.name}</h2>
                   <Link to={`/heroes/details/${this.state.selectedHero.id}`}>
                     <button>Details</button>
                   </Link>  
                </div>
              )}
              </div>
          );
    }
}

const mapStateToProps = state => ({ heroes: state.heroes })

 
export default connect(mapStateToProps)(Heroes);



