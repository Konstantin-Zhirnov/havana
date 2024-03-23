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

  const getFirstText = () => {
    switch (state.language) {
      case 'En':
        return 'Havana'
      case 'Es':
        return 'La Habana'
      case 'Fr':
        return 'La Havane'
      case 'Ge':
        return 'Havanna'
    }
  }

  const getSecondText = () => {
    switch (state.language) {
      case 'En':
        return 'classic car tours'
      case 'Es':
        return 'tours en coche clásico'
      case 'Fr':
        return 'tours en voiture classique'
      case 'Ge':
        return 'oldtimer-Touren'
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={`${styles.container_h1} ${scroll ? styles.scroll : ''}`}>{getFirstText()}</h1>
      <h2 className={styles.container_h2}>- {getSecondText()} -</h2>
    </div>
  )
}

export { Logo }
