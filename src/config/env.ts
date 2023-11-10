import zod from "zod";

const envSchema = zod.object({
  API_URL: zod.string().url(),
});

const env = envSchema.parse(process.env);

export default env;
