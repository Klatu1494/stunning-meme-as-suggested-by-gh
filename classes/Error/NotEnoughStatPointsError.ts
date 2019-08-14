class NotEnoughStatPointsError extends Error {
    private static message: string = "Not enough stat points";

    public constructor() {
        super(NotEnoughStatPointsError.message);
    }
}
