import axios from "axios";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
 
export const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      return jwt_decode(tokens.access);
    }
    return null;
  });
 
  const navigate = useNavigate();
 
  const login = async (payload) => {
    const apiResponse = await axios.post(
      "http://localhost:8000/api/login/",
      payload
    );
    console.log(apiResponse.data);
    if (apiResponse.data.access){
        localStorage.setItem("tokens",  JSON.stringify(apiResponse.data));
        setUser(jwt_decode(apiResponse.data.access));
        navigate("/");
    }
    
  };
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
 

export default AuthContext;