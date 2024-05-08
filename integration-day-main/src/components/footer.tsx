import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  className?: string
}

export const Footer = ({ className }: Props) => {
  const today = new Date()
  return (
    <footer
      className={cn(
        'bg-inherit py-1 text-center font-inter text-sm',
        className ? className : '',
      )}
    >
      {today.getFullYear()} © Todos os direitos reservados.{' '}
    </footer>
  )
}
