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
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await db.get(`user:${token.id}`)) as User | null;
      if (!dbUser) {
        token.id = user!.id;
        return token;
      }
      return {
        id: dbUser.id,
        picture: dbUser.image,
        email: dbUser.email,
        name: dbUser.name,
      };
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    redirect() {
      return '/dashboard';
    },
  },
};
