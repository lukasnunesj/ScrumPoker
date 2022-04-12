export class User {
    private id: string;
    private name: string;

    private constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public static create(id: string, name: string): User {
        return new User(id, name);
    }
}