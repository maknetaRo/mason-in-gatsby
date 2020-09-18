import React from "react"
import Header from "../components/header"
import "../utils/fontawesome"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header icon={"film"} />
      {children}
    </div>
  )
}

export default Layout
