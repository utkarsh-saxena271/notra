import { z } from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(3, "Name must be at least 3 chars"),

  description: z.string("Invalid email"),

});
export const updateNoteSchema = z.object({
  title: z.string().min(3, "Name must be at least 3 chars").optional(),

  description: z.string("Invalid email").optional(),

});