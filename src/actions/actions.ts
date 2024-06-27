'use server'

import {db} from '@/db';
import {postsTable, usersTable} from '@/db/schema';

export async function createPost() {
  await db.insert(postsTable).values({
    title: 'please subscribe',
    content: 'yolo',
    userId: 1
  })
}

export async function createUser() {
  await db.insert(usersTable).values({
    age: 23,
    email: 'yolo@gmail.com',
    name: 'art',
    id: 1
  })
}
