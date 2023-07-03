import Button from '@/components/ui/Button';
import { redis } from '@/lib/db';

export default async function Home() {
  await redis.set('redis', 'installation');
  return (
    <>
      <Button variant={'default'} size={'lg'} isLoading={false}>
        click
      </Button>
      <hr />
    </>
  );
}
