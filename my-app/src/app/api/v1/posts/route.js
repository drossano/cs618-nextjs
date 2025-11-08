import { initDatabase } from '@/db/init'
import { listAllPosts } from '@/data/posts'

export async function GET() {
  await initDatabase()
  const posts = await listAllPosts()
  return Response.json({ posts })
}
