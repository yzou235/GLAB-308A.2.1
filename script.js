///////////////////////////
// Part 2: Class Fantasy //
///////////////////////////

class Character {
    
    constructor (name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    /**
     * Rolls a 20-sided die and logs the result.
     * 
     * @param {number} mod - The modifier to be added to the roll result.
     */
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }

    // Add a static MAX_HEALTH property
    static MAX_HEALTH = 100;
}

// Recreate Robin using the Character class

const robin = new Character("Robin");
robin.inventory = ["sword", "portion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion,inventory = ["small hat", "sunglasses"];

////////////////////////////
// Part 3: Class Features //
////////////////////////////

// Create an Adventurer class
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor (name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Add a check
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role. Valid roles are: ${Adventurer.ROLES.join(',')}.`)
        }
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    
    /**
     * Adventurers have the ability to scout ahead of them.
     * This method logs a message indicating that the adventurer is scouting and then invokes the 'roll' method inherited from the superclass
     */
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    /**
     * Accept an Adventurer as a parameter.
     * Use the roll() functionality to create opposing rolls for each adventurer.
     * Subtract 1 from the adventurer with the lower roll.
     * Log the results of this “round” of the duel, including the rolls and current health values.
     * Repeat this process until one of the two adventurers reaches 50 health.
     * Log the winner of the duel: the adventurer still above 50 health.
     * @param {Adventurer} enemy 
     */
    duel(opponent) {
        while (this.health > 50 && opponent.health > 50) {
            //create opposing rolls
            const thisRoll = this.roll();
            const opponentRoll = opponent.roll();
            //compare and subtract
            const loser = thisRoll < opponentRoll ? this : opponent;
            loser.health --;
        }
        const winner = this.health > 50 ? this : opponent;
        console.log(`The winner of this duel is ${winner.name}.`);
    }
}

// test scout() method
const testRobin = new Adventurer("Robin", "Fighter");
testRobin.scout();

// Create a Companion class
class Companion extends Character {
    constructor(name, type, owner) {
        super(name);
        this.type = type;
        this.owner = owner;
    }
    /**
     * Introduce the companion and mention the owner
     */
    introduce() {
        console.log(`${this.name} (the ${this.type}) is ${this.owner.name}'s companion.`);
    }
}

// test
const testLeo = new Companion("Leo", "Cat", testRobin);
testLeo.introduce();


////////////////////////////
// Part 4: Class Uniforms //
////////////////////////////

// using static properties and methods to create uniform attributes (constant values or utility methods that do not rely on the values of a specific class instance)

// see above


///////////////////////////////
// Part 5: Gather your Party //
///////////////////////////////

// A common approach for creating many similar objects of a single class, and keeping track of them is creating a “factory.”

class AdventurerFactory {
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
        return this.adventurers[index];
    }
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healers = new AdventurerFactory("Healer");
const lucy = healers.generate("Lucy");


///////////////////////////////
// Part 6: Developing Skills //
///////////////////////////////

// see above

// test
const aaron = new Adventurer("Aaron", "Fighter");
const baron = new Adventurer("Baron", "Fighter");
aaron.duel(baron);