import { Uuid } from "../../../../shared/core/Uuid";

export class StoryId {
    private id: string;

    private constructor(id?: string) {
        this.id = id || Uuid.random().toString();
    }

    public static create(id?: string): StoryId {
        return new StoryId(id);
    }
}
