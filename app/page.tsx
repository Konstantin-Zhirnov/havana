'use client'

import React from 'react'
import { StoreContext } from '@/app/context'

import { Hero } from './components/Hero'
import { Havana } from './components/Havana'
import { Introduction } from './components/Introduction'

import { TextAndImage } from './components/TextAndImage'
import { Conclusion } from './components/Conclusion'
import { Images } from './components/Images'
import { Booking } from './components/Booking'

export default function Home() {
  const store = React.useContext(StoreContext)
  if (!store) throw new Error('useStore must be used within a StoreProvider')
  const { state } = store

  const {
    scrollFirst,
    scrollSecond,
    havanaTitle,
    havanaText,
    introductionTitle,
    introductionText,
    firstText,
    secondText,
    conclusion,
    bookingTitle,
    bookingName,
    bookingEmail,
    bookingNationality,
    bookingTravelers,
    bookingDate,
    bookingTime,
    bookingAddress,
    bookingAdditional,
    bookingGuide,
    bookingButton,
  } = state

  return (
    <>
      <Hero scrollFirst={scrollFirst} scrollSecond={scrollSecond} />

      <Havana havanaTitle={havanaTitle} havanaText={havanaText} />

      <Introduction introductionTitle={introductionTitle} introductionText={introductionText} />

      <TextAndImage position="first" custom={2} text={firstText} />

      <TextAndImage position="second" custom={1} text={secondText} />

      <Conclusion conclusion={conclusion} />

      <Images />

      <Booking
        bookingTitle={bookingTitle}
        bookingName={bookingName}
        bookingEmail={bookingEmail}
        bookingNationality={bookingNationality}
        bookingTravelers={bookingTravelers}
        bookingDate={bookingDate}
        bookingTime={bookingTime}
        bookingAddress={bookingAddress}
        bookingAdditional={bookingAdditional}
        bookingGuide={bookingGuide}
        bookingButton={bookingButton}
      />
    </>
  )
}
