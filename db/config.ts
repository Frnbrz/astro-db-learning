import { column, defineTable } from 'astro:db'

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
})

const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    content: column.text(),
  }
})
