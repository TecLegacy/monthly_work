import AddFriendButton from '@/components/AddFriendButton';
import Button from '@/components/ui/Button';
import { redis } from '@/lib/db';

export default function Home() {
  return (
    <>
      {/* <Button v  */}
      <hr />

      <AddFriendButton />
    </>
  );
}
