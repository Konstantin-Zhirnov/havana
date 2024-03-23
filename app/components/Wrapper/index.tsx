import React from 'react'

import styles from './Wrapper.module.css'

interface IProps {
  children: React.ReactNode
  classes?: any
}

const Wrapper: React.FC<IProps> = ({ children, classes }) => (
  <div className={`${styles.wrapper} ${classes ? classes : ''}`}>{children}</div>
)

export { Wrapper }
