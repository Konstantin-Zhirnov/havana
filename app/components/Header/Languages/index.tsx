'use client'

import React from 'react'

import { LanguageType, StoreContext } from '@/app/context'

import styles from './Languages.module.css'

const languages: LanguageType[] = ['En', 'Es', 'Fr', 'Ge']

const Languages: React.FC = () => {
  const store = React.useContext(StoreContext)

  if (!store) throw new Error('useStore must be used within a StoreProvider')

  const { state, dispatch } = store
  const handleClick = (item: LanguageType) => () => {
    dispatch({ type: 'SET_LANGUAGE', payload: item })
  }
  return (
    <div className={styles.container}>
      {languages.map((item) => (
        <button
          key={item}
          className={`${styles.btn} ${state.language === item ? styles.btn_selected : ''}`}
          onClick={handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export { Languages }
