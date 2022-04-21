export class UserId {
    private id: string;

    private constructor(id: string) {
        this.id = id;
    }

    public static create(id: string): UserId {
        return new UserId(id);
    }
}