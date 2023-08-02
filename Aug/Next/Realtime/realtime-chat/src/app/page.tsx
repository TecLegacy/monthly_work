import Button from '@/components/Button';
import { db } from '@/lib/db';

export default async function Home() {
  await db.set('first Hit', 'upstash ');
  return (
    <>
      <h1>React Real time chat app</h1>
      <Button className='bg-red-200'>Click me</Button>
    </>
  );
}
