
import { StoryId } from '../story/storyId';
import { StoryPoints } from '../storyPoints/storyPoints';
import { UserId } from '../user/userId';


export class Vote {
    private storyId: StoryId;
    private userId: UserId;
    private vote: StoryPoints;

    private constructor(storyId: StoryId, userId: UserId, vote: StoryPoints) {
        this.storyId = storyId;
        this.userId = userId;
        this.vote = vote;
    }

    public static create(storyId: StoryId, userId: UserId, vote: StoryPoints): Vote {
        return new Vote(storyId, userId, vote);
    }
}