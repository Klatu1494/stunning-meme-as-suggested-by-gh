class NotEnoughSkillPointsError extends Error {
    private static message: string = "Not enough skill points";

    public constructor() {
        super(NotEnoughSkillPointsError.message);
    }
}
