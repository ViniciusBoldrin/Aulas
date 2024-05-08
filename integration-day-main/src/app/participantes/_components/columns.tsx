'use client'

import { type Participant } from '@/types/participant'
import { type ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Participant>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'company',
    header: 'Empresa',
    accessorFn: (participant) => {
      switch (participant.company) {
        case 'grupo-otg':
          return 'Grupo OTG'
        case 'tylty-company':
          return 'Tylty Company'
        case 'r10':
          return 'R10 Score'
        case 'otg-comunicacoes':
          return 'OTG Comunicações'
        case 'fluma':
          return 'Fluma'
        case 'convidados':
          return 'Convidados'
        default:
          return participant.company
      }
    },
  },
  {
    accessorKey: 'department',
    header: 'Setor',
  },
  {
    accessorKey: 'shirtSize',
    header: 'Tamanho da camiseta',
    accessorFn: (participant) => participant.shirtSize?.toUpperCase(),
  },
  {
    accessorKey: 'createdAt',
    header: 'Data de inscrição',
    accessorFn: (participant) =>
      new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(participant.createdAt),
  },
]
