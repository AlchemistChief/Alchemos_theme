// ============================================================
// Alchemos Theme Test — TypeScript
// ============================================================
// @ts-nocheck

type PlayerID = string | number;

interface PlayerData {
    id: PlayerID;
    name: string;
    level: number;
    health: number;
    active: boolean;
}

interface Entity {
    readonly id: number;
}

// Enum
enum Rank {
    Bronze = 1,
    Silver = 2,
    Gold = 3,
    Legendary = 999
}

// Generic type
type Result<T> = {
    value: T;
    success: boolean;
};

// Class
class Player implements Entity {
    readonly id: number;

    private name: string;
    protected level: number;
    public health: number;

    constructor(id: number, name: string, level: number) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.health = 100;
    }

    public attack(target: Player): Result<number> {
        const damage: number = this.level * 3;

        target.health -= damage;

        return {
            value: damage,
            success: target.health > 0
        };
    }

    public getName(): string {
        return this.name;
    }
}

// Function
function createPlayer(
    name: string,
    level: number = 1
): Player {
    return new Player(1337, name, level);
}

// Arrow function
const double = (value: number): number => value * 2;

// Generic function
function identity<T>(value: T): T {
    return value;
}

// Union
let identifier: string | number = 1337;

// Literal values
const username: string = "Alchemos";
const level: number = 99;
const alive: boolean = true;

// Null / undefined
let target: Player | null = null;
let optionalValue: string | undefined;

// Optional property
const data: Partial<PlayerData> = {
    name: "Alchemos",
    level: 9000
};

// Control flow
if (alive && level >= 50) {
    console.log("High level player");
}

// Loop
for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

// Async / await
async function loadPlayer(id: PlayerID): Promise<Player> {
    const response = await fetch(`/players/${id}`);
    const json: PlayerData = await response.json();

    return new Player(
        Number(json.id),
        json.name,
        json.level
    );
}

// Decorator
@sealed
class Boss extends Player {
    specialAttack(): void {
        console.log("BOSS ATTACK");
    }
}

// Export
export {
    Player,
    Boss,
    Rank,
    createPlayer
};