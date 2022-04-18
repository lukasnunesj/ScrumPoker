export class StoryId {
    private id: string;

    private constructor(id: string) {
        this.id = id;
    }

    public static create(id: string): StoryId {
        return new StoryId(id);
    }
}