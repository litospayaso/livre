import { ExerciseInterface } from '@interfaces/databaseInterface';

export interface CorrectionInterface {
    exercise: ExerciseInterface;
    response: string;
}
