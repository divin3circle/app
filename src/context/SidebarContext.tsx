import { createContext, useReducer } from 'react';
import reducer from '../reducer/sidebarReducer';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';
export const initialState = {
  isSidebarOpen: false,
};

export var sidebarState = false;

export const SidebarContext = createContext({
  ...initialState,
  toggleSidebar: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleSidebar = () => {
    sidebarState = state.isSidebarOpen;
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  return (
    <SidebarContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node,
};
