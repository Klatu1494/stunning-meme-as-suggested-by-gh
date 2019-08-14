class Creature {
    private readonly actionHeap: Heap<Action>;

    public constructor(
        private readonly primarySkill: Skill,
        private readonly secondarySkill: Skill
    ) {
        this.actionHeap = new Heap<Action>(
            (a: Action, b: Action) => a.getTime() - b.getTime()
        );
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
