import { createContext, useContext, useReducer } from "react";

export const UserDataContext = createContext();

export const UserData = ({ initialState, reducer, children }) => {
  return (
    <UserDataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserDataContext.Provider>
  );
};

export const UserDataValue = () => useContext(UserDataContext);
