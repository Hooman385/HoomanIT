"use client"

import { DirectionProvider } from '@radix-ui/react-direction';



function Direction({children}) {
  return (
    <DirectionProvider dir="rtl">
        {children}
    </DirectionProvider>
  )
}

export default Direction