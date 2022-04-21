import { UserId } from "./userId";

export class User {
    private id: UserId;
    private name: string;

    private constructor(id: UserId, name: string) {
        this.id = id;
        this.name = name;
    }

    public static create(id: UserId, name: string): User {
        return new User(id, name);
    }
}