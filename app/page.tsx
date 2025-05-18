'use client'

import React from 'react'
import { StoreContext } from '@/app/context'

import { Hero } from './components/Hero'
import { Havana } from './components/Havana'
import { Introduction } from './components/Introduction'

import { TextAndImage } from './components/TextAndImage'
import { Galery } from './components/Galery'
import { Text } from './components/Text'
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
    firstText_1,
    firstText_2,
    firstText_3,
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
    textTitle,
    conclusionTitle,
  } = state

  return (
    <>
      <Hero scrollFirst={scrollFirst} scrollSecond={scrollSecond} />

      <Havana havanaTitle={havanaTitle} havanaText={havanaText} />

      <Introduction introductionTitle={introductionTitle} introductionText={introductionText} />

      <TextAndImage text_1={firstText_1} text_2={firstText_2} text_3={firstText_3} />

      <Galery />

      <Text text={secondText} title={textTitle} />

      <Conclusion conclusion={conclusion} title={conclusionTitle} />

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
