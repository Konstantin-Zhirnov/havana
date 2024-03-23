import React from 'react'

import styles from './Contacts.module.css'

const Email = () => (
  <a href="mailto:amramcueva1971@gmail.com" className={styles.email}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#FFFFFF"
      className={styles.email_icon}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  </a>
)

export { Email }
