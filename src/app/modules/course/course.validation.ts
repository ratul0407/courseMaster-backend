import { z } from "zod";

// -------------------------
// LESSON SCHEMAS
// -------------------------

const VideoLessonSchema = z.object({
  lesson_order: z.number().positive(),
  type: z.literal("video"),
  title: z.string(),
  description: z.string().optional(),
  videoUrl: z.url(),
});

const TextLessonSchema = z.object({
  lesson_order: z.number().positive(),
  type: z.literal("text"),
  title: z.string(),
  description: z.string().optional(),
  content: z.string(),
});

const QuizLessonSchema = z.object({
  lesson_order: z.number().positive(),
  type: z.literal("quiz"),
  title: z.string(),
  description: z.string().optional(),
  question: z.string(),
  options: z
    .tuple([z.string(), z.string(), z.string(), z.string()])
    .or(z.array(z.string()).length(4)),
  correctAnswerIndex: z.number().min(0).max(3),
});

// Discriminated union for ILesson
export const LessonSchema = z.discriminatedUnion("type", [
  VideoLessonSchema,
  TextLessonSchema,
  QuizLessonSchema,
]);

// -------------------------
// SECTION SCHEMA
// -------------------------

export const SectionSchema = z.object({
  sectionTitle: z.string(),
  lessons: z.array(LessonSchema).min(1),
  order: z.number().positive(),
});

// -------------------------
// INSTRUCTOR SCHEMA
// -------------------------

export const InstructorSchema = z.object({
  name: z.string(),
  profession: z.string().optional(),
  image: z.string().optional(),
});

// -------------------------
// COURSE SCHEMA
// -------------------------

export const CourseSchema = z.object({
  title: z.string(),
  category: z.enum([
    "AI",
    "ML",
    "WEB",
    "DSA",
    "PROGRAMMING",
    "GRAPHICS_DESIGN",
    "VIDEO_EDITING",
    "OTHER",
  ]),
  description: z.string(),
  price: z.number().nonnegative(),
  image: z.string(),
  tags: z.array(z.string()),
  sections: z.array(SectionSchema).min(1),
  requirements: z.array(z.string()),
  whatYouWillLearn: z.array(z.string()),
  instructor: InstructorSchema,
  isDeleted: z.boolean().default(false),
});

// For TypeScript usage:
