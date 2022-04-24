import { v4 } from "uuid";
import validate from "uuid-validate";

export class Uuid {
    private readonly value: string;

    constructor(value: string) {
        this.ensureValidUuid(value);

        this.value = value;
    }

    static random(): Uuid {
        return new Uuid(v4());
    }

    private ensureValidUuid(id: string): void {
        if (!validate(id)) {
            throw new Error(`${id} is not a valid uuid`);
        }
    }

    equals(id: Uuid): boolean {
        if (id === null || id === undefined) {
            return false;
        }

        if (!(id instanceof Uuid)) {
            return false;
        }

        return this.value === id.value;
    }

    toString(): string {
        return String(this.value);
    }

    toValue(): string {
        return this.value;
    }
}
