'use client'

import React from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Contacts } from './Contacts'
import { Logo } from './Logo'
import { Languages } from './Languages'

import styles from './Header.module.css'

const Header: React.FC = () => {
  const [scroll, setScroll] = React.useState(0)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScroll(latest)
  })
  return (
    <header className={`${styles.container} ${scroll ? styles.scroll : ''}`}>
      <Wrapper classes={styles.header}>
        <Contacts />
        <Logo scroll={scroll} />
        <Languages />
      </Wrapper>
    </header>
  )
}

export { Header }
