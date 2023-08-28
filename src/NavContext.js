import { createContext, useState } from "react";

export const NavContext = createContext(null);

export function NavContextProvider({ children }) {
  const sharedState = useState(null);

  return (
    <NavContext.Provider value={sharedState}>
      {children}
    </NavContext.Provider>
  );
}