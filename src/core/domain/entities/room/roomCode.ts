export class RoomCode {
    private code: string;

    private constructor(code: string) {
        this.code = code;
    }

    public static create(code: string): RoomCode {
        return new RoomCode(code);
    }
    
}