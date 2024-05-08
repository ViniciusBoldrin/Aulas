import { z } from 'zod'

export const PresenceValidator = z.object({
  name: z.string().min(8),
  homeOffice: z.boolean(),
  company: z.string(),
  department: z.string(),
  shirtSize: z.string(),
})

export type PresenceValidator = z.infer<typeof PresenceValidator>
