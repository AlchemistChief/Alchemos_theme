# ============================================================
# Alchemos Theme Test — Python
# ============================================================

from dataclasses import dataclass
from typing import Optional, List

MAX_PLAYERS: int = 9000
GAME_NAME: str = "Alchemos"
DEBUG: bool = True


@dataclass
class Player:
    name: str
    level: int
    health: float = 100.0

    def attack(self, target: "Player") -> float:
        damage: float = self.level * 2.5

        target.health -= damage

        return damage

    @property
    def is_alive(self) -> bool:
        return self.health > 0


def create_player(name: str, level: int = 1) -> Player:
    return Player(name=name, level=level)


def calculate_score(kills: int, assists: int) -> int:
    return kills * 100 + assists * 25


players: List[Player] = [
    create_player("Alice", 20),
    create_player("Bob", 50),
    create_player("Charlie", 99),
]


for player in players:
    if player.is_alive and player.level >= 50:
        print(f"{player.name} is high level!")
    else:
        print(f"{player.name} needs training.")


try:
    score = calculate_score(50, 12)

    if score < 0:
        raise ValueError("Invalid score")

except ValueError as error:
    print(f"Error: {error}")

finally:
    print("Done")
