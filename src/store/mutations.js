import * as types from './mutation-types'

const mutations = {
	[types.SET_COUNT](state, payload){
		state.count = payload
	},
  [types.CREATE_MEETUP](state, payload){
    state.loadedMeetups.push(payload)
  }
}


export default mutations
