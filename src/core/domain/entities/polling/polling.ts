
import { RoomId } from "../room/roomId";
import { StoryId } from "../story/storyId";
import { Vote } from "../vote/vote";

export class Polling {
    private id: string;
    private storyId: StoryId;
    private roomId: RoomId;
    private votes: Vote[];

    private constructor(id: string, storyId: StoryId, roomId: RoomId, votes: Vote[]) {
        this.id = id;
        this.storyId = storyId;
        this.roomId = roomId;
        this.votes = votes;
    }

    public static create(id: string, storyId: StoryId, roomId: RoomId, votes: Vote[]): Polling {
        return new Polling(id, storyId, roomId, votes);
    }
}