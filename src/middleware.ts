import { clerkMiddleware } from '@clerk/astro/server';

export const onRequest = clerkMiddleware((auth, context, next) => {
  if (context.url.pathname.startsWith('/dashboard') && !auth().userId) {
    return auth().redirectToSignIn();
  }
  return next();
});
