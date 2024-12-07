import * as z from "zod";

export const schemaAddTodo = z.object({
  title: z.string().trim().nonempty({ message: "Email không được để trống" }),
  description: z.string().trim(),
  priority: z.string(),
});
