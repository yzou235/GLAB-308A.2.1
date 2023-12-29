// Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name:"Leo",
        type: "Cat"
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["hat", "sunglasses"]
        }
    },
    /**
     * Rolls a 20-sided die and logs the result.
     * @param {number} mod - the modifier to be added to the roll result.
     */
    roll (mod = 0) {
        const result = Math.floor(Math.random()*20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

