'use client'

import React, { createContext, useReducer, ReactNode, Dispatch } from 'react'

export type LanguageType = 'En' | 'Es' | 'Fr' | 'Ge'

export interface StateType {
  language: LanguageType
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
}

export function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload }
    default:
      return state
  }
}

export const StoreContext = createContext<StoreContextType | undefined>(undefined)

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}
