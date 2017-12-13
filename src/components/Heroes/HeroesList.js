import React from 'react';




const HeroesList = props => (
        <ul className="heroes">
        {props.heroes.map(hero => (
            <li key={hero.id} onClick={() => props.handleChange(hero)}>
            <span className="badge">{hero.id}</span>
            {hero.name}
            </li>
         ))}
        </ul>
    );
            
      
export default HeroesList;