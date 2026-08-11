import React, { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {

  const [user, setUser] = useState({
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development",
  });

  return (
    <UserContext.Provider value={{user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;