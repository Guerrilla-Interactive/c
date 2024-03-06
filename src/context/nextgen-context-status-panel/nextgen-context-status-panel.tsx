'use client'

import Link from 'next/link'
import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'

import { Fixed, Flex, FlexCol, FlexRow } from '@/lib/nextgen-core-ui'
import { cn } from '@/lib/utils'

import { useGlobalContext } from '../global-context'
import TogglePanel from './utilities/toggle-panel.component'

type Tab = 'generalData' | 'formStatus'

interface GeneralData {
  pathname: string
}

interface FormStatus {
  [key: string]: boolean | string | number | object // You should replace this with a more specific type based on your actual form status structure.
}

const evaluateStatus = (key: string, value: unknown): boolean => {
  return value === true || key.includes('true')
}

interface DataCellProps {
  data: GeneralData | FormStatus | string | number | boolean // Adjust this type based on your needs.
  level?: number
}

const DataCell: FC<DataCellProps> = ({ data, level = 0 }) => {
  const prevDataRef = useRef(data)
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    if (JSON.stringify(prevDataRef.current) !== JSON.stringify(data)) {
      setIsChanged(true)
      const timeoutId = setTimeout(() => setIsChanged(false), 1000)
      prevDataRef.current = data
      return () => clearTimeout(timeoutId)
    }
  }, [data])

  const dataStyle = isChanged
    ? { backgroundColor: 'yellow', transition: 'background-color 0.3s ease' }
    : {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stringifyObject = (obj: any, depth = 0, indent = 0): string => {
    // Consider replacing any with a more specific type or handling method.
    if (depth > 3 || obj === null || typeof obj !== 'object') {
      return JSON.stringify(obj)
    }

    const indentString = ' '.repeat(indent)
    const entries: string[] = Object.entries(obj).map(([key, value]) => {
      const stringValue: string =
        typeof value === 'object'
          ? stringifyObject(value, depth + 1, indent + 2)
          : JSON.stringify(value)
      return `\n${indentString}${key}: ${stringValue}`
    })

    return `{${entries.join(', ')}\n${indentString}}`
  }

  if (Array.isArray(data)) {
    return (
      <div style={{ paddingLeft: level * 2 }}>
        {data.map((item, index) => (
          <div key={index} style={{ paddingLeft: level * 10 }}>
            <pre>{stringifyObject(item, 0, level * 2 + 2)}</pre>
          </div>
        ))}
      </div>
    )
  }

  if (typeof data === 'object') {
    return (
      <pre style={{ paddingLeft: level * 10 }}>
        {stringifyObject(data, 0, level * 2 + 2)}
      </pre>
    )
  }

  return <span>{data != null ? data.toString() : 'null'}</span>
}
DataCell.displayName = 'DataCell' // Add display name

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataRow: FC<{ data: Record<string, any> }> = React.memo(({ data }) => {
  return (
    <>
      {Object.keys(data).map((key) => (
        <FlexRow
          className="scrollbar-hide max-h-[300px] justify-between gap-x-2 overflow-scroll border-b border-b-gray-400 border-opacity-20 py-4"
          key={key}
        >
          <FlexRow className="gap-x-4">
            <FlexCol>{key}:</FlexCol>
          </FlexRow>
          <FlexRow className="min-w-[12rem] gap-x-2">
            <FlexCol>
              <DataCell data={data[key]} />
            </FlexCol>
            {typeof data[key] === 'boolean' ? (
              <StatusCircle status={data[key]} />
            ) : null}
          </FlexRow>
        </FlexRow>
      ))}
    </>
  )
})
DataRow.displayName = 'DataRow' // Add display name

export const NextgenContextStatusPanel: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('generalData')
  const { pathname, formStatus } = useGlobalContext()

  if (process.env.NODE_ENV === 'production') return null

  const renderContent = {
    generalData: <DataRow data={{ pathname: pathname }} />,
    formStatus: <DataRow data={formStatus as unknown as FormStatus} />,
  }

  return (
    <Fixed bottom right className="bottom-12 right-12 !z-[999] w-fit">
      <TogglePanel title="Nextgen Context">
        {/* Other component content */}
      </TogglePanel>
    </Fixed>
  )
}
NextgenContextStatusPanel.displayName = 'NextgenContextStatusPanel' // Add display name

type StatusCircleProps = {
  status: boolean
}

const StatusCircle: FC<StatusCircleProps> = ({ status }) => {
  const circleClass = status ? 'bg-green-500' : 'bg-red-500'

  return <div className={`h-4 w-4 rounded-full ${circleClass}`} />
}
StatusCircle.displayName = 'StatusCircle' // Add display name
