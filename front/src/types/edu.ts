export interface CourseDetailsType {
    id?: string;
    title: string;
    photoUrl: string;
    level: CourseLevelType;
    duringInHours: number;
    description: string;
    skills: string[];
    goals: string[];
    isPrivate?: boolean;
}

export type CourseLevelType = "beginner" | "intermediate" | "advanced";

export interface LessonType {
    id?: string;
    courseId?: string;
    title: string;
    lessonContents?: LessonContentType[];
}
export interface LessonContentType {
    title: string;
    photoUrl: string;
    isTitleValid?: boolean;
    nextLesson?: () => void;
    prevLesson?: () => void;
}

export interface QuizType {
    id?: string;
    courseId?: string;
    title: string;
    questions: QuestionType[];
}

export interface QuestionType {
    question: string;
    answers: AnswerType[];
}

export interface AnswerType {
    answer: string;
    isCorrect: boolean;
}
