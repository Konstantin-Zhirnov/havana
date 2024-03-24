import React from 'react'

import { StoreContext } from '@/app/context'

import styles from './Logo.module.css'

interface IProps {
  scroll: number
}
const Logo: React.FC<IProps> = ({ scroll }) => {
  const store = React.useContext(StoreContext)
  if (!store) throw new Error('useStore must be used within a StoreProvider')
  const { state } = store

  return (
    <div className={styles.container}>
      <h1 className={`${styles.container_h1} ${scroll ? styles.scroll : ''}`}>{state.logoFirst}</h1>
      <h2 className={styles.container_h2}>- {state.logoSecond} -</h2>
    </div>
  )
}

export { Logo }
