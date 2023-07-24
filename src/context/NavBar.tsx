import { useState, createContext, ReactNode } from "react";

interface NavBarContextInterface {
  toggleNavBar: () => void;
  isNavbarOpen: boolean;
  setNavBarToFalse: () => void;
}

interface isNavbarOpenProps {
  children: ReactNode;
}

export const NavBarContext = createContext({} as NavBarContextInterface);


export function NavBarContextProvider({ children }: isNavbarOpenProps) {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);


  function toggleNavBar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  function setNavBarToFalse() {
    setIsNavbarOpen(false);
  }

  return (
    <NavBarContext.Provider
      value={{
        isNavbarOpen,
        toggleNavBar,
        setNavBarToFalse,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
}