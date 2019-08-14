class Battle {
    private time: number;

    public constructor(private readonly creatures: Array<Creature>) {
        this.time = 0;
    }

    public getNextActionTime(): number {
        this.creatures.sort((a: Creature, b: Creature) =>
            a.getNextActionTime()
        );
        return this.creatures[0].getNextActionTime();
    }

    public wait(time: number): void {
        this.time += time;
    }

    public getTime(): number {
        return this.time;
    }

    public activateActions(): void {
        let actions: Array<Action> = [];
        for (let creature of this.creatures) {
            if (creature.getNextActionTime() === this.time) {
                actions.push(...creature.getNextActions());
            }
        }
        for (let action of actions) {
            action.activateEffect();
        }
    }
}
