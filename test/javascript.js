// ============================================================
// Alchemos Theme Test — JavaScript
// ============================================================

// Constants
const MAX_PLAYERS = 9000;
const GAME_NAME = "Alchemos";
const IS_DEBUG = true;

// Variables
let playerCount = 42;
let currentPlayer = null;

// Object literal keys + properties
const player = {
    id: 1337,
    name: "Alchemos",
    level: 99,
    health: 100.5,
    active: true,
    metadata: {
        region: "EU",
        rank: "legendary"
    }
};

// Array
const players = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana"
];

// Class + constructor + methods
class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.health = 100;
    }

    attack(target) {
        const damage = this.level * 2 + 10;

        if (target.health > 0) {
            target.health -= damage;
            return `Hit ${target.name} for ${damage} damage`;
        }

        return "Target already defeated";
    }

    get isAlive() {
        return this.health > 0;
    }
}

// Function
function createPlayer(name, level = 1) {
    return new Player(name, level);
}

// Arrow function
const calculateScore = (kills, assists) => {
    return kills * 100 + assists * 25;
};

// Control flow
if (IS_DEBUG && playerCount < MAX_PLAYERS) {
    console.log("Debug mode enabled");
} else if (playerCount === MAX_PLAYERS) {
    console.warn("Maximum player count reached");
} else {
    console.error("Server state is invalid");
}

// Loop
for (const playerName of players) {
    console.log(playerName);
}

// Switch
switch (player.level) {
    case 100:
        console.log("Maximum level");
        break;

    case 99:
        console.log("Almost there");
        break;

    default:
        console.log("Keep leveling");
}

// Exception handling
try {
    const score = calculateScore(50, 12);

    if (score < 0) {
        throw new Error("Impossible score");
    }
} catch (error) {
    console.error(error);
} finally {
    console.log("Finished");
}

// Imports / exports
import { something } from "./something.js";

export default Player;
export { createPlayer, calculateScore };