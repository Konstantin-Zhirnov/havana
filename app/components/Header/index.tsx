'use client'

import { useState } from 'react'
import cn from 'classnames'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Contacts } from './Contacts'
import { Logo } from './Logo'
import { Languages } from './Languages'

import styles from './Header.module.css'

export const Header = () => {
  const [scroll, setScroll] = useState(0)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScroll(latest)
  })

  return (
    <header className={cn(styles.container, { [styles.scroll]: scroll })}>
      <Wrapper classes={styles.header}>
        <Contacts />

        <Logo scroll={scroll} />

        <Languages />
      </Wrapper>
    </header>
  )
}
