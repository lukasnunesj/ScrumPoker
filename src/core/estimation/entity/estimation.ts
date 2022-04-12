export class Estimation {
    private userId: string;
    private storyId: string;
    private choosenPoint: string;

    private constructor(userId: string, storyId: string, choosenPoint: string) {
        this.userId = userId;
        this.storyId = storyId;
        this.choosenPoint = choosenPoint;
    }

    public static create(userId: string, storyId: string, choosenPoint: string): Estimation {
        return new Estimation(userId, storyId, choosenPoint);
    }
    
}