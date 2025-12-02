import z from "zod";
const createCourseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number().positive(),
  image: z.string(),
  tags: z.array(z.string()),
  section: z.array(
    z.object({
      sectionTitle: z.string(),
      lessons: z.array(
        z.object({
          lessonTitle: z.string(),
          lessonDescription: z.string().optional(),
          videoUrl: z.string().optional(),
          text: z.string().optional(),
          quiz: z.object({
            question: z.string(),
            options: z.array(z.string()),
          }),
        })
      ),
    })
  ),
  totalSections: z.number().positive(),
  requirements: z.array(z.string()),
  whatYouWillLearn: z.array(z.string()),
  instructor: z.object({
    name: z.string(),
    profession: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const courseValidation = {
  createCourseSchema,
};
