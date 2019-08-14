class Action {
    public constructor(
        private readonly time: number,
        private readonly effect: () => void
    ) {}

    public getTime(): number {
        return this.time;
    }

    public activateEffect(): void {
        this.effect();
    }
}
