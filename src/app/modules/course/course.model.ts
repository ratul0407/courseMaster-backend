import { model, Schema } from "mongoose";
import { ICourse } from "./course.interface";

const VideoLessonSchema = new Schema({
  lesson_order: { type: Number, required: true },
  title: { type: String, required: true },
  description: String,
  videoUrl: { type: String, required: true },
});

const TextLessonSchema = new Schema({
  lesson_order: { type: Number, required: true },
  title: { type: String, required: true },
  description: String,
  content: { type: String, required: true },
});

const QuizLessonSchema = new Schema({
  lesson_order: { type: Number, required: true },
  title: { type: String, required: true },
  description: String,
  question: { type: String, required: true },
  options: {
    type: [String],
    validate: {
      validator: (v: string[]) => v.length === 4,
      message: "Quiz must have exactly 4 options.",
    },
    required: true,
  },
  correctAnswerIndex: { type: Number, required: true, min: 0, max: 3 },
});

const LessonSchema = new Schema(
  {
    type: { type: String, required: true, enum: ["video", "text", "quiz"] },
  },
  { discriminatorKey: "type", _id: false }
);

LessonSchema.discriminator("video", VideoLessonSchema);
LessonSchema.discriminator("text", TextLessonSchema);
LessonSchema.discriminator("quiz", QuizLessonSchema);

const SectionSchema = new Schema({
  sectionTitle: { type: String, required: true },
  lessons: { type: [LessonSchema], required: true },
});
const InstructorSchema = new Schema({
  name: { type: String, required: true },
  profession: String,
  image: String,
});
const CourseSchema = new Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "AI",
        "ML",
        "WEB",
        "DSA",
        "PROGRAMMING",
        "GRAPHICS_DESIGN",
        "VIDEO_EDITING",
        "OTHER",
      ],
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    tags: { type: [String], required: true },
    sections: { type: [SectionSchema], required: true },
    requirements: { type: [String], required: true },
    whatYouWillLearn: { type: [String], required: true },
    instructor: { type: InstructorSchema, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);
export const Course = model<ICourse>("Course", CourseSchema);
