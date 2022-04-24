import { IRequest } from "../../../../shared/interfaces/IRequest";

export interface AddStoryRequest extends IRequest {
    id: string;
    title: string;
    points: string;
}
