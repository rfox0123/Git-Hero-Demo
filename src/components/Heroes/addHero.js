import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addHero } from "../../actions/actions";


class AddHero extends Component {
    state = {
            hero:{},
            error: undefined
        }

    handleSubmit= event => {
        console.log("button working");
        event.preventDefault();
        fetch(
            `https://api.github.com/users/${this.refs.userInput.value}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0`
        ).then(res => {
            if(res.status !== 200){
                throw Error(res.statusText);
            }
            return res.json()})
         .then(payload => {
             console.log(payload)
             this.setState({
                 hero: {
                   name: payload.name,
                   bio: payload.bio,
                   id: payload.id,
                   email: payload.email,
                   avatar: payload.avatar_url
                 },
                 error: undefined
                })

         })
        .catch(err => {
          this.setState({
              hero: {},
              error: err
          })
        })

    }

    muchoSavo = event => {
        console.log(this.props);
        console.log(this.state);
        this.props.addHero(this.state.hero);
        this.props.history.push("/heroes");
    }

    render(){
        const hero = this.state.hero;
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                 <input ref="userInput" type="text"/>
                 <button>Search</button>
               </form>
               <br />
               {hero.name && 
                 (<div>
                 <label>Name: {hero.name}</label>
                 <br />
                 <span>ID: {hero.id}</span>
                 <br />
                 <span>Bio: {hero.bio}</span>
                 <br />
                 <img src={hero.avatar}/>
                 <hr />
                 <button onClick={this.muchoSavo}>Add Hero</button>
                 </div>)
                 }
                 {this.state.error && (
                     <div>
                       <p style={{color: "red", fontsize: 30}}>
                        {this.state.error.message}
                       </p>
                     </div>
                 )}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addHero: bindActionCreators(addHero, dispatch)
  });

export default connect(null, mapDispatchToProps)(AddHero);