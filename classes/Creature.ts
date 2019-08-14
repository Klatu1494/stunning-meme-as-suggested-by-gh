class Creature {
    private readonly actionHeap: Heap<Action>;

    public constructor(
        private level: number,
        private readonly primarySkill: Skill,
        private readonly secondarySkill: Skill,
        private readonly baseMaximumLife: number,
        private readonly maximumLifePerLevel: number,
        private readonly baseMaximumMana: number,
        private readonly maximumManaPerLevel: number
    ) {
        this.actionHeap = new Heap<Action>(
            (a: Action, b: Action) => a.getTime() - b.getTime()
        );
    }

    public getMaximumLife(): number {
        return this.baseMaximumLife + this.level * this.maximumLifePerLevel;
    }

    public getMaximumMana(): number {
        return this.baseMaximumMana + this.level * this.maximumManaPerLevel;
    }

    public queueAction(action: Action): void {
        this.actionHeap.insert(action);
    }

    public getNextActionTime(): number {
        return this.actionHeap.peekFirst().getTime();
    }

    public getNextActions(): Array<Action> {
        let actions: Array<Action> = [this.actionHeap.removeFirst()];
        let time: number = actions[0].getTime();
        while (0 < this.actionHeap.getSize() && actions[0].getTime() === time) {
            actions.push(this.actionHeap.removeFirst());
        }
        return actions;
    }
}
