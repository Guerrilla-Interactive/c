'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import React, { createContext, useContext } from 'react'

import { useFormStatus } from './formStatus/form-status.hooks'
import type { FormStatus } from './formStatus/form-status.states'
import { initialFormStatus } from './formStatus/form-status.states'

export interface GlobalContext {
  pathname: string | null
  formStatus: FormStatus
}

const initialGlobalContext: GlobalContext = {
  pathname: null,
  formStatus: initialFormStatus,
}

const GlobalContextData = createContext<GlobalContext>(initialGlobalContext)

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname()
  const [formStatus] = useFormStatus()

  return (
    <GlobalContextData.Provider value={{ pathname, formStatus }}>
      {children}
    </GlobalContextData.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContextData)
