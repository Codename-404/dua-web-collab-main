import React, { useState, useContext, useReducer, useEffect } from "react";
import { initialSettings, settingsReducer, settingsActions } from "../Context Reducer/settingsReducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialSettings);

  const applySettings = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <AppContext.Provider
      value={{
        settingsActions,
        ...state,
        applySettings,
      }}>
      {children}
    </AppContext.Provider>
  );
};

// Global Context to access from anywhere
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
