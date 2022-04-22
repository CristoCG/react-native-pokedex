import react, { createContext, useState } from "react";

export const AuthContext = createContext({
  user: undefined,
});

export function AuthProvider(props) {
  const { children } = (props[(auth, setAuth)] = useState(undefined));

  const valueContext = {
    auth,
  };

  return (
      <AuthContext.Provider value={valueContext}>
          {children}
      </AuthContext.Provider>
  );
}
