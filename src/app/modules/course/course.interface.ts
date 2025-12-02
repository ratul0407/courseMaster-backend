export interface ILesson {
  lessonTitle: string;
  lessonDescription?: string;
  videoUrl?: string;
  text?: string;
  quiz?: IQuiz;
}
export interface IQuiz {
  question: string;
  options: string[];
}
export interface ISection {
  sectionTitle: string;
  lessons: ILesson[];
}
export interface ICourse {
  title: string;
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
}
