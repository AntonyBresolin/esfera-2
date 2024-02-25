import { createContext } from "react"

import App from "../App"

export const AuthContext = createContext()

export const Authenticate = () => {

  return (
    <AuthContext.Provider value={{/* auth, login, logout */ }}>
      <App />
    </AuthContext.Provider>
  )
}