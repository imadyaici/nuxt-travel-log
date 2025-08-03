import { auth } from "~/lib/auth"; // import your auth config

export default defineEventHandler((event) => {
  console.warn("Handling auth request:", event.path);
  return auth.handler(toWebRequest(event));
});
