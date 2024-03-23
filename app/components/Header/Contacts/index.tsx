import { Email } from './Email'
import { Phone } from './Phone'

import styles from './Contacts.module.css'

const Contacts = () => (
  <div className={styles.container}>
    <Email />
    <Phone />
  </div>
)

export { Contacts }
