abstract class Skill {
    protected level: number;
    protected readyTime: number;

    public constructor() {
        this.level = 1;
    }

    public abstract getManaCost(): number;

    public abstract getCastTime(): number;

    public abstract getExecutionTime(): number;

    public abstract getCooldownTime(): number;

    public getReadyTime(): number {
        return this.readyTime;
    }

    public setReadyTime(value: number): void {
        this.readyTime = value;
    }

    public isReady(currentTime: number): boolean {
        return this.readyTime < currentTime;
    }

    public onUse(_user: Creature, _battle: Battle): void {}
}
