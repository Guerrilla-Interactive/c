import { useState } from 'react'

import type { FormStatus } from './form-status.states'
import { initialFormStatus } from './form-status.states'

export const useFormStatus = (): [FormStatus, (status: FormStatus) => void] => {
  const [formStatus, setFormStatus] = useState<FormStatus>(initialFormStatus)

  return [formStatus, setFormStatus]
}
