import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      console.log("Loaded User from Local Storage:", storedUser); // Debugging log
      if (storedUser) setUser(JSON.parse(storedUser));
    } catch (error) {
      console.log("Invalid JSON in localStorage:", error);
      localStorage.removeItem("user");
    }
  }, []);


  const login = (userData) => {
    console.log("User Data Received:", userData); // Debugging log
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
