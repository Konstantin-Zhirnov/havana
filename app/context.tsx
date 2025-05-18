'use client'

import React, { createContext, useReducer, ReactNode, Dispatch } from 'react'
import { text } from './text'

export type LanguageType = 'En' | 'Es' | 'Fr' | 'Ge'

export interface StateType {
  language: LanguageType
  logoFirst: string
  logoSecond: string
  scrollFirst: string
  scrollSecond: string
  havanaTitle: string
  havanaText: string
  introductionTitle: string
  introductionText: string
  firstText_1: string
  firstText_2: string
  firstText_3: string
  secondText: string
  conclusion: string
  bookingTitle: string
  bookingName: string
  bookingEmail: string
  bookingNationality: string
  bookingTravelers: string
  bookingDate: string
  bookingTime: string
  bookingAddress: string
  bookingAdditional: string
  bookingGuide: string
  bookingButton: string
  textTitle: string
  conclusionTitle: string
}

export type ActionType = { type: 'SET_LANGUAGE'; payload: LanguageType }

interface StoreProviderProps {
  children: ReactNode
}

interface StoreContextType {
  state: StateType
  dispatch: Dispatch<ActionType>
}

export const initialState: StateType = {
  language: 'En',
  logoFirst: 'Havana',
  logoSecond: 'classic car tours',
  scrollFirst: 'scroll down',
  scrollSecond: 'for more',
  havanaTitle: 'About Havana',
  havanaText:
    'Welcome to the vibrant streets of Havana, where every corner exudes a sense of nostalgia and an air of vintage allure. Stepping into this enchanting city feels like a journey back in time where classic cars from the past reign supreme on the roads, adding an unparalleled charm to its already mesmerizing atmosphere. Havana, the capital of Cuba, is a destination unlike any other, boasting a rich tapestry of history, culture, and architecture.',
  introductionTitle: 'Havana Classic Car Tours',
  introductionText:
    'One of the most iconic ways to immerse oneself in the spirit of Havana is through a tour with Havana Classic Cars. You will enjoy a relaxing ride, travel with ease with an experience driver and witness authentic Cuban culture and lifestyle.',
  firstText_1:
    'The principal driver of Havana Classic Cars is Cuevas, who was born in Havana and has driven these streets as a taxi driver for over 25 years.',
  firstText_2:
    'All of the Drivers of Havana Classic Cars have been selected for their safe driving skills, knowledge of Havana and the surrounding areas, and their friendly personalities. All have some English language skills and where necessary they can arrange for a translator to join your tour. Guided by these knowledgeable locals these tours offer a fascinating journey through Havana’s most iconic landmarks and hidden gems.',
  firstText_3:
    'As you are exploring the colonial architecture of Old Havana, Cruising along the famous Malecon seaside promenade, and walking through the Historic Harbour Fort overlooking Havana Harbour, you will come to love this beautiful Island city.',
  secondText:
    'During a tour with Havana Classic Cars you will do more than just siteseeing. You will be engaging with Cuba’s rich cultural heritage and connecting with its warm and welcoming people. From chatting with local drivers about their beloved vehicles to sampling authentic Cuban cuisine at roadside eateries, your interactions will offer a deeper understanding of this fascinating destination.',
  conclusion:
    'Whether it is a quick trip around the City, a pick up at the Airport or Cruise Ship terminal, or a journey farther afield to the City of Matanzas or the farming valley of Vinales, Havana Classic Cars can put together a ride or tour to suit your needs. If you have a larger group other cars and guides can be arranged.',
  bookingTitle: 'Booking Information',
  bookingName: 'Full Name:',
  bookingEmail: 'Email:',
  bookingNationality: 'Nationality:',
  bookingTravelers: 'Number of travelers:',
  bookingDate: 'Pick Up Date:',
  bookingTime: 'Pick Up Time:',
  bookingAddress: 'Pick Up Address:',
  bookingAdditional: 'Additional information or Request:',
  bookingGuide: 'Include the guide service on the route.',
  bookingButton: 'Booking',
  textTitle: 'More Than Just Sightseeing',
  conclusionTitle: 'Your Custom Experience',
}

export function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload, ...text.get(action.payload) }
    default:
      return state
  }
}

export const StoreContext = createContext<StoreContextType | undefined>(undefined)

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}
