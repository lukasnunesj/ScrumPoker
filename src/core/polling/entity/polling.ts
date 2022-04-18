import { RoomId } from "../../room/entity/roomId";
import { StoryId } from "../../story/entity/storyId";

export class Polling {
    private id: string;
    private storyId: StoryId;
    private roomId: RoomId;
    

    private constructor(id: string, storyId: StoryId, roomId?: RoomId) {
        this.id = id;
        this.storyId = storyId;
        this.roomId = roomId;
    }

    public static create(id: string, storyId: StoryId, roomId?: RoomId): Polling {
        return new Polling(id, storyId, roomId);
    }
}