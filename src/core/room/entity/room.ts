import { Story } from "../../story/entity/story";
import { User } from "../../user/entity/user";

export class Room {
    private id: string;
    private users: User[];
    private stories: Story[];

    private constructor(id: string, users: User[], stories: Story[]) {
        this.id = id;
        this.users = users;
        this.stories = stories;
    }

    public static create(id: string, users: User[], stories: Story[]): Room {
        return new Room(id, users, stories);
    }
}