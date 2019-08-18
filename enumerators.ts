enum Slot {
    None = 0,
    PrimaryHand = 1 << 1,
    SecondaryHand = 1 << 2,
    Torso = 1 << 3
}

enum StatId {
    Slots,
    ExtraSlots,
    StrengthRequirement,
    DexterityRequirement,
    MinimumDamage,
    MaximumDamage,
    DamageReduction,
    RandomDamageReduction
}
