import { NextAuthOptions } from 'next-auth';
import { db } from '@/lib/db';
import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter';
import GoogleProvider from 'next-auth/providers/google';

const googleCredentials = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId && clientId?.trim().length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID');
  }

  if (!clientSecret && clientSecret?.trim().length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET');
  }

  return {
    clientId,
    clientSecret,
  };
};

export const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db),
  session: { strategy: 'jwt' },
  providers: [
    GoogleProvider({
      clientId: googleCredentials().clientId as string,
      clientSecret: googleCredentials().clientSecret as string,
    }),
  ],
};
