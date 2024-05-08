import 'server-only'

import { db } from './db'
import { participants as DBparticipants } from './db/schema'
import { count } from 'drizzle-orm'
import {
  type GetPaginatedParticipantsRequest,
  type GetPaginatedParticipantsResponse,
} from '@/types/participant'

export async function getPaginatedParticipants({
  limit,
  page,
}: GetPaginatedParticipantsRequest): Promise<GetPaginatedParticipantsResponse> {
  const participants = await db
    .select()
    .from(DBparticipants)
    .limit(limit)
    .offset((page - 1) * limit)

  const countTotal = await db.select({ count: count() }).from(DBparticipants)

  const pagesDetails = {
    totalItems: countTotal[0]!.count,
    totalPages: Math.ceil(countTotal[0]!.count / limit),
    currentPage: page,
  }

  return { participants, pagesDetails }
}
