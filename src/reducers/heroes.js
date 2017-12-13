import * as types from "../ActionTypes"


export default function heroes(state = [], action) {
    switch (action.type) {
      case types.SAVE_HERO:
         const heroIndex = state.map(o => o.id).indexOf(action.id);
         return [
             ...state.slice(0, heroIndex),
             {...state[heroIndex], name: action.name },
             ...state.slice(heroIndex +1, state.length)
         ];
      case types.ADD_HERO:
        return [...state, { ...action.hero }];
      default:
        return state;
    }
}