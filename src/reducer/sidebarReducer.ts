const sidebarReducer = (
  state: { isSidebarOpen: any },
  action: { type: string },
) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    // console.log('TOGGLE_SIDEBAR');
    // console.log('state.isSidebarOpen', state.isSidebarOpen);
    return {
      ...state,
      isSidebarOpen: !state.isSidebarOpen,
    };
  }

  throw new Error(`No matching ${action.type} action type`);
};

export default sidebarReducer;
