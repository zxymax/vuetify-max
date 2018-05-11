import * as types from './mutation-types'

const mutations = {
	[types.SET_COUNT](state, payload){
		state.count = payload
	},
  [types.CREATE_MEETUP](state, payload){
    state.loadedMeetups.push(payload)
  },
  [types.SET_PAGES](state){
  	state.pages = state.pagination.rowsPerPage ? Math.ceil(state.meetups.length / state.pagination.rowsPerPage) : 0
  }
        
}


export default mutations
