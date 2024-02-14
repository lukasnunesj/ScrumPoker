import { Story } from "../../entities/story/story";
import { StoryId } from "../../entities/story/storyId";
import { StoryPoints } from "../../entities/storyPoints/storyPoints";
import { UseCaseInput } from "../../../../shared/core/UseCaseInterfaces/InputInterface";
import { AddStoryRequest } from "./AddStoryRequest";
import { AddStoryResponse } from "./AddStoryResponse";

export class AddStoryUC implements UseCaseInput<AddStoryRequest, AddStoryResponse> {
    constructor() {}

    public async execute(request: AddStoryRequest): Promise<AddStoryResponse> {
        const storyId = StoryId.create(request.id);
        const storyPoints = StoryPoints.create(request.points);

        const story = Story.create(storyId, request.title, storyPoints);

        return Promise.resolve({});
        // Todo: Add response and implemets interface
    }
}
