import React from 'react'
import { Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'

import { StoreProvider } from '@/app/context'

import { Header } from '@/app/components/Header'
import { WhatsApp } from '@/app/components/WhatsApp'

import './globals.css'

const PlayfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Havana classic car tours',
  description: 'Havana classic car tours',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={PlayfairDisplay.className}>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <WhatsApp />
        </StoreProvider>
      </body>
    </html>
  )
}
