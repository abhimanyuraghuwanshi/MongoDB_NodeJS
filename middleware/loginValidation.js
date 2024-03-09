import { z } from "zod";
import validate from "../sharedModule/zodValidator.js";

export var Login = validate(
  z.object({
    body: z.object({
      email: z.string().email(),
      password: z.string().min(6).max(10),
      role: z.number()
    }),
  })
);
