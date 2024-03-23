'use client'

import { Hero } from './components/Hero'
import { Havana } from './components/Havana'
import { Introduction } from './components/Introduction'
import { Divider } from './components/Divider'
import { TextAndImage } from './components/TextAndImage'
import { Conclusion } from './components/Conclusion'
import { Images } from './components/Images'
import { Booking } from './components/Booking'
import React from 'react'
import { StoreContext } from '@/app/context'

export default function Home() {
  const store = React.useContext(StoreContext)

  if (!store) throw new Error('useStore must be used within a StoreProvider')

  const { state } = store

  return (
    <>
      <Hero language={state.language} />

      <Havana language={state.language} />

      <Introduction language={state.language} />

      <TextAndImage position="first" custom={2} language={state.language} />

      <TextAndImage position="second" custom={1} language={state.language} />

      <Conclusion language={state.language} />

      <Images />

      <Booking language={state.language} />
    </>
  )
}
