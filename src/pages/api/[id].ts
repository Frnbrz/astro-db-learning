import type { APIRoute } from "astro"
import { Comment, db } from 'astro:db'

export const DELETE: APIRoute = async (ctx) => {
  await db.delete(Comment).where({ id: ctx.params.id })
  return new Response(null, { status: 204 })
}