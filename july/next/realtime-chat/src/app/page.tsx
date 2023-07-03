// 'use client';
import Button from '@/components/ui/Button';
import { redis } from '@/lib/db';

export default function Home() {
  const check = async () => {
    const data = await redis.set('foo', 'bar');
    console.log('data read', data);
  };

  // await redis.set('foox', 'bar');
  return (
    <>
      <Button variant={'default'} size={'lg'} isLoading={false}>
        click
      </Button>
      <hr />
      <div>
        redis installations
        <div>
          <button onClick={() => check()}>fetch </button>
        </div>
      </div>
    </>
  );
}
