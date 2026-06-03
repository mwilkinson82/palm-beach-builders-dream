/// <reference types="npm:@types/react@18.3.1" />
import { template as contactConfirmation } from './contact-confirmation.tsx'
import { template as contactNotification } from './contact-notification.tsx'
import { template as styleBookConfirmation } from './style-book-confirmation.tsx'
import { template as styleBookNotification } from './style-book-notification.tsx'

export interface TemplateEntry {
  component: (props: any) => any
  subject: string | ((data: any) => string)
  displayName?: string
  previewData?: Record<string, unknown>
  to?: string
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-confirmation': contactConfirmation,
  'contact-notification': contactNotification,
  'style-book-confirmation': styleBookConfirmation,
  'style-book-notification': styleBookNotification,
}