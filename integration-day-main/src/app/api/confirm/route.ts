import { PresenceValidator } from '@/lib/dtos'
import { db } from '@/server/db'
import { z } from 'zod'
import { participants } from '@/server/db/schema'

export async function POST(req: Request) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body = await req.json()

    const memberPresence = PresenceValidator.parse(body)

    const participant = await db
      .insert(participants)
      .values(memberPresence)
      .returning()

    return new Response(JSON.stringify(participant[0]), { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response(JSON.stringify(err.message), { status: 422 })
    }
    return new Response(JSON.stringify(err), { status: 500 })
  }
}
