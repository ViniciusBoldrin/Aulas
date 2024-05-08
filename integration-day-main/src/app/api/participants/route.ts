import { db } from '@/server/db'
import { participants as DBParticipants } from '@/server/db/schema'
import { z } from 'zod'

export async function GET(req: Request) {
  const url = new URL(req.url)

  const params = z
    .object({
      limit: z.coerce.number().max(100).default(10),
      page: z.coerce.number().default(1),
    })
    .safeParse({
      limit: url.searchParams.get('limit'),
      page: url.searchParams.get('page'),
    })

  if (params.success === false)
    return new Response(JSON.stringify(params.error), { status: 422 })

  const participants = await db
    .select()
    .from(DBParticipants)
    .limit(params.data.limit)
    .offset((params.data.page - 1) * params.data.limit)

  return new Response(JSON.stringify(participants), { status: 200 })
}
