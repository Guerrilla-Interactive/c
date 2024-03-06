import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { CalendarCheck } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface DatePickerProps {
  selectedDate: Date | undefined
  onDateChange: (date: Date | undefined) => void
}

export function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-full justify-start py-6 text-left font-normal text-[#3333333] hover:text-white active:opacity-70',
            !selectedDate && '',
          )}
        >
          <CalendarCheck className="mr-4" />
          {selectedDate ? (
            format(selectedDate, 'PPP')
          ) : (
            <span>Ønsket leveringsdato</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-1 w-full p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
