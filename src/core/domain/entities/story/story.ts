import { StoryPoints } from "../storyPoints/storyPoints";
import { StoryId } from "./storyId";

export class Story {
    private id: StoryId;
    private title?: string;
    private points?: StoryPoints;

    private constructor(id: StoryId, title?: string, points?: StoryPoints) {
        this.id = id;
        this.title = title;
        this.points = points;
    }

    public computePoints(choosenPoint: StoryPoints): void {
        this.points = choosenPoint;
    }

    public static create(id: StoryId, title?: string, points?: StoryPoints): Story {
        return new Story(id, title, points);
    }
}