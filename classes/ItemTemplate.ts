class ItemTemplate {
    public constructor(
        private readonly id: string,
        private readonly name: string,
        private readonly stats: Array<StatIdValuePair>
    ) {}

    public generateItem(): Item {
        return new Item(this.id, this.name, this.stats);
    }
}
