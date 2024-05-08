import { z } from 'zod'
import { columns } from './_components/columns'
import { ParticipantsTable } from './_components/participants-table'
import { getPaginatedParticipants } from '@/server/queries'

interface ParticipantsPageProps {
  searchParams: Record<string, string | string[] | undefined>
}

export default async function ParticipantsPage({
  searchParams,
}: ParticipantsPageProps) {
  const { limit, page } = z
    .object({
      limit: z.coerce.number().default(10),
      page: z.coerce.number().default(1),
    })
    .parse(searchParams)

  const data = await getPaginatedParticipants({ limit, page })

  return (
    <div>
      <ParticipantsTable
        columns={columns}
        data={data.participants}
        paginationInfo={data.pagesDetails}
      />
    </div>
  )
}
