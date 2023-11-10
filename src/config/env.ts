import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_KEY: z.string().url(),
});

const env = clientEnvSchema.parse({
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
});

export default env;
