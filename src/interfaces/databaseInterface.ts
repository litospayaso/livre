export interface DatabaseInterface {
    exercises: ExercisesInterface[];
    lessons: LessonsInterface[];
}

export interface ExerciseInterface {
    id: string;
    type: string;
    audio?: string | null;
    responses: string[] ;
    question?: string | null;
}

export interface ExercisesInterface {
    number: number;
    exercises: ExerciseInterface[] ;
}

export interface LessonsInterface {
    title: string;
    text: string;
    number: number;
}

export interface DiccionarioInterface {
    [key: string]: string[];
}
