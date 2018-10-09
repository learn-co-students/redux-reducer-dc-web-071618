export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        friends: [...state.friends, action.friend]
      };
      break;
    case "REMOVE_FRIEND":
      let newArray = state.friends.filter(friend => action.id != friend.id);

      return {
        friends: newArray
      };
      break;
    default:
      return {
        friends: state.friends
      };
  }
}
