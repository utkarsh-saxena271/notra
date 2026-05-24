import { z } from "zod";

export const updateSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 chars").optional(),

  email: z.email("Invalid email").optional(),
});