class Item {
    private readonly stats: Array<number>;

    public constructor(
        private readonly templateId: string,
        private readonly name: string,
        providedStats: Array<StatIdValuePair>
    ) {
        this.stats = [];
        for (let statValuePair of providedStats) {
            this.stats[statValuePair[0]] = statValuePair[1];
        }
        //roll random stats
        this.rollStat(StatId.RandomDamageReduction, StatId.DamageReduction, 0);
    }

    public getStatValue(statId: StatId): number {
        if (!isFinite(this.stats[statId])) {
            this.stats[statId] = 0;
        }
        return this.stats[statId];
    }

    public rollStat(
        rolledStat: StatId,
        modifiedStat: StatId,
        precision: number
    ): void {
        this.stats[modifiedStat] =
            this.getStatValue(modifiedStat) +
            (this.getStatValue(rolledStat) *
                Math.floor((Math.pow(10, precision) + 1) * Math.random())) /
                Math.pow(10, precision);
        this.stats[rolledStat] = 0;
    }
}
