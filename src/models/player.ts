import { Role } from "./enums/role";

export class Player {
  id: string;
  name: string;
  role: Role;
  //currentRoom: Room;

  constructor(
    id: string,
    name: string,
    role: Role
    //private socketService: SocketConnectionService
  ) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  // joinRoom(room: Room) {
  //   // Store the room the user is joining in the currentRoom property
  //   this.currentRoom = room;

  //   // Use the socketService to join the room
  //   this.socketService.joinRoom(room.id);

  //   // Notify other users in the room that a new user has joined
  //   this.socketService.emitToRoom("user-joined", { user: this }, room.id);
  // }

  // leaveRoom() {
  //   // Use the socketService to leave the current room
  //   this.socketService.leaveRoom(this.currentRoom.id);
  // }

  // sendEstimation(estimation: Estimation) {
  //   // Use the socketService to send an estimation to the room
  //   this.socketService.emitToRoom("estimation", estimation, this.currentRoom.id);
  // }
}
