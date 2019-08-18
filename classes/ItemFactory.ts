class ItemFactory {
    private static instance: ItemFactory = null;
    private templates: Map<string, ItemTemplate>;

    private constructor() {
        this.templates = new Map();
        this.templates.set(
            "naga",
            new ItemTemplate("naga", "Naga", [
                [StatId.Slots, Slot.PrimaryHand | Slot.SecondaryHand],
                [StatId.MinimumDamage, 16],
                [StatId.MaximumDamage, 45],
                [StatId.StrengthRequirement, 41]
            ])
        );
        this.templates.set(
            "full-plate",
            new ItemTemplate("full-plate", "Full plate", [
                [StatId.Slots, Slot.Torso],
                [StatId.DamageReduction, 150],
                [StatId.RandomDamageReduction, 11],
                [StatId.StrengthRequirement, 37]
            ])
        );
    }

    public static getInstance(): ItemFactory {
        if (this.instance === null) {
            this.instance = new ItemFactory();
        }
        return this.instance;
    }

    public generateItem(templateId: string) {
        return this.templates.get(templateId).generateItem();
    }
}
