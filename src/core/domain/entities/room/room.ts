import { Story } from "../story/story";
import { User } from "../user/user";
import { RoomCode } from "./roomCode";
import { RoomId } from "./roomId";

export class Room {
    private id: RoomId;
    private users: User[];
    private stories: Story[];
    private code: RoomCode;

    private constructor(id: RoomId, users: User[], stories: Story[], code?: RoomCode) {
        this.id = id;
        this.users = users;
        this.stories = stories;
        this.code = code;
    }

    public static create(id: RoomId, users: User[], stories: Story[], code?: RoomCode): Room {
        return new Room(id, users, stories, code);
    }
}