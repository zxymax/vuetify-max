import * as types from './mutation-types'

export const changeCount = ({commit}, value)=>{
	commit(types.SET_COUNT, value)
}

export const CREATE_MEETUP = ({commit}, payload) =>{
  const meetup = {
    title: payload.title,
    location: payload.location,
    imageUrl: payload.imageUrl,
    description: payload.description,
    date: payload.date,
    id: '12121313131'
  }
  commit('CREATE_MEETUP', meetup)
}
