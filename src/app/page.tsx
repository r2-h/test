import {createPost, createUser} from '@/actions/actions';
import { db } from '@/db';

export default async function Home() {
  const posts = await db.query.postsTable.findMany()
  return (
    <main>
      <form action={createUser}>
        <button type='submit'>submit</button>
      </form>
      <form action={createPost}>
        <button type='submit'>submit</button>
      </form>
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
    </main>
  );
}
