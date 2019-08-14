class PartyCreature extends Creature {
    public constructor(
        level: number,
        primarySkill: Skill,
        secondarySkill: Skill,
        baseMaximumLife: number,
        maximumLifePerLevel: number,
        private readonly maximumLifePerVitality: number,
        baseMaximumMana: number,
        maximumManaPerLevel: number,
        private readonly maximumManaPerEnergy: number,
        private strength: number,
        private dexterity: number,
        private vitality: number,
        private energy: number,
        private remainingStatPoints: number,
        private remainingSkillPoints: number
    ) {
        super(
            level,
            primarySkill,
            secondarySkill,
            baseMaximumLife,
            maximumLifePerLevel,
            baseMaximumMana,
            maximumManaPerLevel
        );
    }

    public getUnspentStatPoints(): number {
        return this.remainingStatPoints;
    }

    public getUnspentSkillPoints(): number {
        return this.remainingSkillPoints;
    }

    private spendStatPoints(pointsAmount: number): void {
        if (this.remainingSkillPoints < pointsAmount) {
            throw new NotEnoughStatPointsError();
        }
        this.remainingStatPoints -= pointsAmount;
    }

    private spendSkillPoints(pointsAmount: number): void {
        if (this.remainingSkillPoints < pointsAmount) {
            throw new NotEnoughStatPointsError();
        }
        this.remainingSkillPoints -= pointsAmount;
    }

    public getStrength(): number {
        return this.strength;
    }

    public getDexterity(): number {
        return this.dexterity;
    }

    public getVitality(): number {
        return this.vitality;
    }

    public getEnergy(): number {
        return this.energy;
    }

    public spendStatPointsOnStrenght(pointsAmount: number): void {
        this.spendStatPoints(pointsAmount);
        this.strength += pointsAmount;
    }

    public spendStatPointsOnDexterity(pointsAmount: number): void {
        this.spendStatPoints(pointsAmount);
        this.dexterity += pointsAmount;
    }

    public spendStatPointsOnVitality(pointsAmount: number): void {
        this.spendStatPoints(pointsAmount);
        this.vitality += pointsAmount;
    }

    public spendStatPointsOnEnergy(pointsAmount: number): void {
        this.spendStatPoints(pointsAmount);
        this.energy += pointsAmount;
    }

    public getMaximumLife(): number {
        return (
            super.getMaximumLife() + this.vitality * this.maximumLifePerVitality
        );
    }

    public getMaximumMana(): number {
        return super.getMaximumMana() + this.energy * this.maximumManaPerEnergy;
    }
}
