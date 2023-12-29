// Part 2: Class Fantasy

class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
}

// Recreate Robin using the Character class

const robin = new Character("Robin");
robin.inventory = ["sword", "portion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion,inventory = ["small hat", "sunglasses"];
