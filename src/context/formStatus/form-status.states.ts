import { z } from 'zod'

export const formSchema = z.object({
  contactPerson: z.string().min(5).max(50),
  customerType: z.enum(['direct', 'wholesale'], {
    required_error: 'You need to select a notification type.',
  }),
  customerNumber: z.string().optional(),
  companyName: z.string().min(2).max(100),
  project: z.string().min(2).max(100),
  deliveryDate: z.date(),
  deliveryMethod: z.enum(['standard', 'express', 'overnight']),
  ordererName: z.string().min(2).max(50),
  ordererPhone: z.string().min(10).max(15),
  ordererEmail: z.string().email(),
  deliveryAddress: z.string().min(5).max(100),
  postalCode: z.string().min(4).max(10),
  place: z.string().min(2).max(50),
  dedicatedContactPersonCheck: z.boolean().optional(),
  dedicatedContactPersonName: z.string().min(5).max(50).optional(),
  dedicatedContactPersonPhone: z.string().min(10).max(15).optional(),
  orderLines: z.array(
    z.object({
      articleNumber: z.string().min(5).max(50),
      productName: z.string().min(5).max(50),
      colorNumber: z.string().min(5).max(50),
      quantity: z.string().min(1).max(50),
      variable: z.string().min(5).max(50).optional(),
      specialPrice: z.number().min(1).max(100).optional(),
    }),
  ),
})

export type FormSchema = z.infer<typeof formSchema>

export interface FormStatus {
  formData: FormSchema
  setFormStatus: (value: FormStatus) => void
}

export const initialFormStatus: FormStatus = {
  formData: {
    contactPerson: '',
    customerType: 'direct',
    customerNumber: '',
    companyName: '',
    project: '',
    deliveryDate: new Date(),
    deliveryMethod: 'standard',
    ordererName: '',
    ordererPhone: '',
    ordererEmail: '',
    deliveryAddress: '',
    postalCode: '',
    place: '',
    dedicatedContactPersonCheck: false,
    dedicatedContactPersonName: '',
    dedicatedContactPersonPhone: '',
    orderLines: [],
  },
  setFormStatus: () => {},
}
