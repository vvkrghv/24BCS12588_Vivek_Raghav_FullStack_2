import { createContext, useContext } from "react";

const StudentContext = createContext();

const student = {
  name: "Priya Nair",
  email: "priya@gmail.com",
  year: "3rd Year",
};

export function StudentProvider({ children }) {
  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}

export function useUser() {
  return useContext(StudentContext);
}