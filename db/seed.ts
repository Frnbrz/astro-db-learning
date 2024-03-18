import { Comment, db } from 'astro:db'

export default async function () {
	const queries = []
	// Seed 100 sample comments into your remote database
	// with a single network request.
	for (let i = 0; i < 100; i++) {
		queries.push(db.insert(Comment).values({ body: `Test comment ${i}` }))
	}
	await db.batch(queries)
}