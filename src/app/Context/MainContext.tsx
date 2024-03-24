"use client"
// Import React and necessary hooks
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
// created by Sohel Rahaman (MERN Stack Developer)

// Define a type for the context value
interface MainContextType {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  toggleDarkMode: () => void;
}

// Initialize the context with the default value (undefined in this case)
// This requires asserting the default value with `as MainContextType` to match the expected type
export const MainContext = createContext<MainContextType>({} as MainContextType);

// Define a type for the props of MainContextProvider, which expects children of type ReactNode
interface MainContextProviderProps {
  children: ReactNode;
}

// MainContextProvider component
const MainContextProvider: React.FC<MainContextProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Use TypeScript to define the state type

  // Function to toggle dark mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Context value now strongly typed
  let contextValue: MainContextType = { isDarkMode, setIsDarkMode, toggleDarkMode };

  return (
    <MainContext.Provider value={contextValue}>
      {children}
    </MainContext.Provider>
  );
}

// Export MainContextProvider
export default MainContextProvider;
