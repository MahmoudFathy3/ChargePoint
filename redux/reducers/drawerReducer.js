const initialState = {
  isDrawerOpen: false,
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    default:
      return state;
  }
};

export default drawerReducer;
