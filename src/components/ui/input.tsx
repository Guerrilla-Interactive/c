import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, children, ...props }, ref) => {
    return (
      <>
        <div className="relative ">
          <div
            dx-tooptip="Icon"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >
            {children}
          </div>
          <input
            type={type}
            className={cn(
              'focus-visible:ring-[#222222]est flex h-10 w-full   rounded-md  bg-[#222222] py-6  text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#3333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              children ? 'pl-14' : 'pl-6',
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </>
    )
  },
)
Input.displayName = 'Input'

export { Input }
