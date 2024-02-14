import { Role } from "../src/models/enums/role";
import { Player } from "../src/models/player";

describe("Player", () => {
  it("can create a new Player", () => {
    const user = {
      id: "1234",
      name: "test",
      role: Role.PLAYER,
    };
    const player = new Player(user.id, user.name, user.role);

    expect(player).toMatchObject(user);
  });

  it("can join a room", () => {});
});
