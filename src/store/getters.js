export const count = state=> state.count
export const loadedMeetups = state =>{
  return state.loadedMeetups.sort((meetupA, meetupB)=>{
    return meetupA.date > meetupB.date
  })
}
export const loadedMeetup = state =>{
  return (meetupId) => {
    return state.loadedMeetups.find((meetup)=>{
      return meetup.id === meetupId
    })
  }
}

export const featureMeetups = (state, getters) =>{
  return getters.loadedMeetups.slice(0, 5)
}
