export interface DatabaseInterface {
    exercises: (ExercisesInterface[])[];
    lessons: LessonsInterface[];
}

export interface ExercisesInterface {
    audio?: string | null;
    responses: string[] ;
    question?: string | null;
}

export interface LessonsInterface {
    title: string;
    text: string;
    number: number;
}


