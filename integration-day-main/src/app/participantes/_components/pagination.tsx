'use client'

import { Button } from '@/components/ui/button'
import { type PageDetails } from '@/types/participant'
import { useRouter } from 'next/navigation'

export function ParticipantsPagination({
  currentPage,
  totalPages,
}: PageDetails) {
  const router = useRouter()
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => router.push(`/participantes?page=${currentPage - 1}`)}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => router.push(`/participantes?page=${currentPage + 1}`)}
        disabled={currentPage === totalPages}
      >
        Próximo
      </Button>
    </div>
  )
}
