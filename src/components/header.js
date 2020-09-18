import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./header.module.css"

const Header = props => {
  return (
    <div className={styles.banner}>
      <FontAwesomeIcon icon={props.icon} size="5x" />
      <h1 className={styles.mainTitle}>Mason</h1>
      <h3 className={styles.subtitle}>new HTML template</h3>
    </div>
  )
}

export default Header
