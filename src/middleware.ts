import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    return Response.redirect(new URL("/blog", context.url), 302);
  }

  return next();
});
