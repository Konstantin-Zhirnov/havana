import { FC, useContext } from 'react'
import cn from 'classnames'

import { StoreContext } from '@/app/context'

import styles from './Logo.module.css'

interface IProps {
  scroll: number
}

export const Logo: FC<IProps> = ({ scroll }) => {
  const store = useContext(StoreContext)

  if (!store) throw new Error('useStore must be used within a StoreProvider')

  const { state } = store

  return (
    <div className={styles.container}>
      <h1 className={cn(styles.container_h1, { [styles.scroll]: scroll })}>{state.logoFirst}</h1>

      <h2 className={styles.container_h2}>- {state.logoSecond} -</h2>
    </div>
  )
}
