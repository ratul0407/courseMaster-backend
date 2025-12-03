export interface IVideoLesson {
  order: number;
  type: "video";
  title: string;
  description?: string;
  videoUrl: string;
}
export interface ITextLesson {
  order: number;
  type: "text";
  title: string;
  description?: string;
  content: string;
}
export interface IQuizLesson {
  order: number;
  type: "quiz";
  title: string;
  description?: string;
  question: string;
  correctAnswerIndex: number;
  options: [string, string, string, string];
}
export type ILesson = IVideoLesson | ITextLesson | IQuizLesson;

export interface ISection {
  order: number;
  sectionTitle: string;
  lessons: ILesson[];
}

export interface IInstructor {
  name: string;
  profession?: string;
  image?: string;
}

export enum Category {
  AI = "AI",
  ML = "ML",
  WEB = "WEB",
  DSA = "DSA",
  PROGRAMMING = "PROGRAMMING",
  GRAPHICS_DESIGN = "GRAPHICS_DESIGN",
  VIDEO_EDITING = "VIDEO_EDITING",
  OTHER = "OTHER",
}
export interface ICourse {
  title: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  tags: string[];
  section: ISection[];
  totalSections: number;
  requirements: string[];
  whatYouWillLearn: string[];
  instructor: {
    name: string;
    profession?: string;
    image?: string;
  };
  isDeleted: boolean;
}
