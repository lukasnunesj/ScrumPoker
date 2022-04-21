export class RoomId {
    private id: string;

    private constructor(id: string) {
        this.id = id;
    }

    public static create(id: string): RoomId {
        return new RoomId(id);
    }
}