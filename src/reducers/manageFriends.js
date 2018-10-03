export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      // return { friends: state.friends.push(action.friend) };
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      return {
        //to remove something from an array, use FILTER!
        friends: state.friends.filter(friend => friend.id !== action.id)
      };
    default:
      return state;
  }
}
