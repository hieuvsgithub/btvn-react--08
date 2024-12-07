import * as z from "zod";

export const schemaLogin = z.object({
  name: z.string().trim(),
  email: z.string().trim(),
  password: z.string().trim().min(4, { message: "Tối thiểu 4 kí tự" }),
});
