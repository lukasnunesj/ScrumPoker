export class Story {
    private id: string;
    private title?: string;
    private points?: string;

    private constructor(id: string, title?: string, points?: string) {
        this.id = id;
        this.title = title;
        this.points = points;
    }

    public computePoints(choosenPoint: string): void {
        this.points = choosenPoint;
    }

    public static create(id: string, title?: string, points?: string): Story {
        return new Story(id, title, points);
    }
}