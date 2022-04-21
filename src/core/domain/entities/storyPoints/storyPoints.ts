export class StoryPoints {
    private points: string;

    private constructor(points: string) {
        this.points = points;
    }

    public static create(points: string): StoryPoints {
        return new StoryPoints(points);
    }
}