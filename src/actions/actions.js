import * as types from "../ActionTypes"

export const saveHero = (id, name) => ({type: types.SAVE_HERO, id, name })
export const editHero = (id, name) => ({type: types.EDIT_HERO, id, name})
export const addHero = hero => ({type: types.ADD_HERO, hero: { ...hero}})
