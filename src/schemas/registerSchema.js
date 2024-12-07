import * as z from "zod";

export const schemaRegister = z.object({
  name: z.string().trim(),
  email: z.string().trim().nonempty({ message: "Email không được để trống" }),
  password: z.string().trim().min(4, { message: "Tối thiểu 4 kí tự" }),
});
