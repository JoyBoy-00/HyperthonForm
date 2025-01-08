import * as z from "zod";

export const formSchema = z.object({
  teamName: z.string().min(2, "Team name must be at least 2 characters"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  rollNo: z
    .string()
    .min(1, "Roll number is required")
    .regex(/^\d{6,}$/, "Roll number must be a number with 6 or more digits"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(/@kiit\.ac\.in$/, "Email must end with @kiit.ac.in"),
  branch: z.string().min(1, "Branch is required"),
  teamMembers: z
    .array(
      z
        .object({
          fullName: z.string().min(2, "Name must be at least 2 characters"),
          rollNo: z
            .string()
            .min(1, "Roll number is required")
            .regex(
              /^\d{6,}$/,
              "Roll number must be a number with 6 or more digits"
            ),
          email: z
            .string()
            .email("Invalid email address")
            .regex(/@kiit\.ac\.in$/, "Email must end with @kiit.ac.in"),
          branch: z.string().min(1, "Branch is required"),
        })
        .optional()
    )
    .max(2, "You can only have up to 2 team members"),
});
