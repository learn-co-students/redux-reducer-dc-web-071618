export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [...state.friends, action.friend]
      };
    // let goodFriends = [...state.friends];
    // goodFriends.push(action.friend);
    //
    // return {
    //   friends: goodFriends
    // };
    // break;
    case "REMOVE_FRIEND":
      const badFriendIndex = state.friends.findIndex(f => f.id === action.id);
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, badFriendIndex),
          ...state.friends.slice(badFriendIndex + 1)
        ]
      };
      // let badFriends = [...state.friends];
      // let index = badFriends.indexOf(
      //   badFriends.find(f => {
      //     return f.id === action.id;
      //   })
      // );
      // badFriends.splice(index, 1);
      //
      // return {
      //   friends: badFriends
      // };
      break;
    default:
      return state;
  }
}
