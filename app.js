function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
class Human {
    constructor() {
        // @ts-ignore
        this.name = chance.name();
        this.age = getRandomInt(1, 101);
        this.humanLogs = new Array();
        this.currentGold = 0;
        this.currentInventory = new Array();
        this.stats = {
            "strength": getRandomInt(0, 101),
            "defense": getRandomInt(0, 101),
            "dexterity": getRandomInt(0, 101),
            "HP": getRandomInt(0, 101),
            "vitality": getRandomInt(0, 101),
            "MP": getRandomInt(0, 101),
            "intelligence": getRandomInt(0, 101),
            "wisdom": getRandomInt(0, 101)
        };
    }
    AddToHumanLogs(log) {
        this.humanLogs.push(log);
    }
    AddToInventory(item, amount) {
        for (let i = 0; i < amount; i++) {
            this.currentInventory.push(item);
        }
        this.AddToHumanLogs("Received " + amount.toString() + " " + item.name + ".");
    }
    getInventoryString() {
        var inventoryString = "";
        var inv = this.currentInventory;
        if (inv.length > 0) {
            inventoryString += inv[0].name;
            if (inv.length > 1) {
                for (let i = 1; i < inv.length; i++) {
                    inventoryString += ", " + inv[i].name;
                }
            }
        }
        return inventoryString;
    }
}
class Hunter extends Human {
    constructor() {
        super();
        this.GenerateRandomValues();
    }
    Hunt() {
        this.AddToInventory(itemDb["meat"], getRandomInt(2, 5));
    }
    GenerateRandomValues() {
        var randomBow = itemDb[getRandomValueFromList(["stone_bow", "copper_bow", "iron_bow", "steel_bow", "mithril_bow", "adamantite_bow", "obsidian_bow"])];
        this.currentBow = randomBow;
        this.AddToInventory(randomBow, 1);
    }
}
class Warrior extends Human {
    constructor() {
        super();
        this.GenerateRandomValues();
    }
    Fight() {
        this.AddToInventory(itemDb["rotten_flesh"], getRandomInt(2, 5));
    }
    GenerateRandomValues() {
        var randomSword = itemDb[getRandomValueFromList(["stone_sword", "copper_sword", "iron_sword", "steel_sword", "mithril_sword", "adamantite_sword", "obsidian_sword"])];
        this.currentSword = randomSword;
        this.AddToInventory(randomSword, 1);
    }
}
class Guard extends Human {
    constructor() {
        super();
        this.GenerateRandomValues();
    }
    Guard() {
        this.AddToInventory(itemDb["rotten_flesh"], getRandomInt(2, 5));
    }
    GenerateRandomValues() {
        var randomSword = itemDb[getRandomValueFromList(["stone_sword", "copper_sword", "iron_sword", "steel_sword", "mithril_sword", "adamantite_sword", "obsidian_sword"])];
        this.currentSword = randomSword;
        this.AddToInventory(randomSword, 1);
    }
}
class Mage extends Human {
    constructor() {
        super();
        this.GenerateRandomValues();
    }
    Cast() {
        this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
    }
    GenerateRandomValues() {
        var randomStaff = itemDb[getRandomValueFromList(["amethyst_staff", "topaz_staff", "emerald_staff", "sapphire_staff", "ruby_staff", "diamond_staff"])];
        this.currentStaff = randomStaff;
        this.AddToInventory(randomStaff, 1);
    }
}
class Doctor extends Human {
    constructor() {
        super();
        this.GenerateRandomValues();
    }
    Heal() {
        this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
    }
    GenerateRandomValues() {
        var randomWand = itemDb["healing_wand"];
        this.currentWand = randomWand;
        this.AddToInventory(randomWand, 1);
    }
}
class Alchemist extends Human {
    Cast() {
        this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
    }
}
class Trader extends Human {
    Trade() {
        this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
    }
}
class Miner extends Human {
    constructor() {
        super();
        this.GenerateRandomValues();
    }
    Mine() {
        this.AddToInventory(itemDb["ore"], getRandomInt(2, 5));
    }
    GenerateRandomValues() {
        var randomPickaxe = itemDb[getRandomValueFromList(["stone_pickaxe", "copper_pickaxe", "iron_pickaxe", "steel_pickaxe", "mithril_pickaxe", "adamantite_pickaxe", "obsidian_pickaxe"])];
        this.currentPickaxe = randomPickaxe;
        this.AddToInventory(randomPickaxe, 1);
    }
}
function getRandomValueFromList(list) {
    return list[getRandomInt(0, list.length)];
}
var ItemType;
(function (ItemType) {
    ItemType[ItemType["ORE"] = 0] = "ORE";
    ItemType[ItemType["FOOD"] = 1] = "FOOD";
    ItemType[ItemType["MONSTER_LOOT"] = 2] = "MONSTER_LOOT";
    ItemType[ItemType["TOOL"] = 3] = "TOOL";
    ItemType[ItemType["WEAPON"] = 4] = "WEAPON";
})(ItemType || (ItemType = {}));
class Item {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
const itemDb = {
    //BASIC RESOURCES
    "ore": new Item("Ore", ItemType.ORE),
    "meat": new Item("Meat", ItemType.FOOD),
    "rotten_flesh": new Item("Rotten Flesh", ItemType.MONSTER_LOOT),
    "mana_crystal": new Item("Mana Crystal", ItemType.MONSTER_LOOT),
    //PICKAXES
    "stone_pickaxe": new Item("Stone Pickaxe", ItemType.TOOL),
    "copper_pickaxe": new Item("Copper Pickaxe", ItemType.TOOL),
    "iron_pickaxe": new Item("Iron Pickaxe", ItemType.TOOL),
    "steel_pickaxe": new Item("Steel Pickaxe", ItemType.TOOL),
    "mithril_pickaxe": new Item("Mithril Pickaxe", ItemType.TOOL),
    "adamantite_pickaxe": new Item("Adamantite Pickaxe", ItemType.TOOL),
    "obsidian_pickaxe": new Item("Obsidian Pickaxe", ItemType.TOOL),
    //BOWS
    "stone_bow": new Item("Stone Bow", ItemType.TOOL),
    "copper_bow": new Item("Copper Bow", ItemType.TOOL),
    "iron_bow": new Item("Iron Bow", ItemType.TOOL),
    "steel_bow": new Item("Steel Bow", ItemType.TOOL),
    "mithril_bow": new Item("Mithril Bow", ItemType.TOOL),
    "adamantite_bow": new Item("Adamantite Bow", ItemType.TOOL),
    "obsidian_bow": new Item("Obsidian Bow", ItemType.TOOL),
    //AXES
    "stone_axe": new Item("Stone Axe", ItemType.TOOL),
    "copper_axe": new Item("Copper Axe", ItemType.TOOL),
    "iron_axe": new Item("Iron Axe", ItemType.TOOL),
    "steel_axe": new Item("Steel Axe", ItemType.TOOL),
    "mithril_axe": new Item("Mithril Axe", ItemType.TOOL),
    "adamantite_axe": new Item("Adamantite Axe", ItemType.TOOL),
    "obsidian_axe": new Item("Obsidian Axe", ItemType.TOOL),
    //SWORDS
    "stone_sword": new Item("Stone Sword", ItemType.WEAPON),
    "copper_sword": new Item("Copper Sword", ItemType.WEAPON),
    "iron_sword": new Item("Iron Sword", ItemType.WEAPON),
    "steel_sword": new Item("Steel Sword", ItemType.WEAPON),
    "mithril_sword": new Item("Mithril Sword", ItemType.WEAPON),
    "adamantite_sword": new Item("Adamantite Sword", ItemType.WEAPON),
    "obsidian_sword": new Item("Obsidian Sword", ItemType.WEAPON),
    //STAFFS
    "amethyst_staff": new Item("Amethyst Staff", ItemType.WEAPON),
    "topaz_staff": new Item("Topaz Staff", ItemType.WEAPON),
    "emerald_staff": new Item("Emerald Staff", ItemType.WEAPON),
    "sapphire_staff": new Item("Sapphire Staff", ItemType.WEAPON),
    "ruby_staff": new Item("Ruby Staff", ItemType.WEAPON),
    "diamond_staff": new Item("Diamond Staff", ItemType.WEAPON),
    //WANDS
    "healing_wand": new Item("Healing Wand", ItemType.TOOL)
};
var humans = [];
function createHuman() {
    var human = new Human();
    const humanStats = human.stats;
    var val = Math.max.apply(null, Object.values(humanStats)), highestVal = Object.keys(humanStats).find(function (a) {
        return humanStats[a] === val;
    });
    var highTierVal = 70;
    var midTierVal = 35;
    switch (highestVal) { // 70 and above is considered HIGH, less than 70 and 35 and above is considerd MEDIUM & everything else is LOW.
        case "strength": // Gives you some sort of physical based profession.
            if (humanStats["intelligence"] >= highTierVal) { // High Strength, High Intelligence
                humans.push(new Hunter());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["intelligence"] >= midTierVal && humanStats["intelligence"] < highTierVal) { // High Strength, Mid Intelligence
                humans.push(new Warrior());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["intelligence"] < midTierVal) { // High Strength, Low Intelligence
                humans.push(new Guard());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            break;
        case "defense": // Gives you some sort of tank/guard profession.
            if (humanStats["strength"] >= highTierVal) { // High Strength, High Intelligence
                humans.push(new Warrior());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["strength"] >= midTierVal && humanStats["strength"] < highTierVal) { // High Strength, Mid Intelligence
                humans.push(new Guard());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["strength"] < midTierVal) { // High Strength, Low Intelligence
                humans.push(new Guard());
                humans[humans.length - 1].stats = human.stats;
            }
            break;
        case "dexterity": // Gives you an assassin/hunter profession or something.
            humans.push(new Hunter());
            humans[humans.length - 1].stats = human.stats;
            ;
            break;
        case "HP": // Same as defense.
            if (humanStats["defense"] >= highTierVal) { // High Strength, High Intelligence
                humans.push(new Warrior());
                humans[humans.length - 1].stats = human.stats;
            }
            else if (humanStats["defense"] >= midTierVal && humanStats["defense"] < highTierVal) { // High Strength, Mid Intelligence
                humans.push(new Guard());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["defense"] < midTierVal) { // High Strength, Low Intelligence
                humans.push(new Guard());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            break;
        case "vitality": // Same as HP & defense.
            if (humanStats["strength"] >= highTierVal) { // High Strength, High Intelligence
                humans.push(new Warrior());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["strength"] >= midTierVal && humanStats["strength"] < highTierVal) { // High Strength, Mid Intelligence
                humans.push(new Warrior());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["strength"] < midTierVal) { // High Strength, Low Intelligence
                humans.push(new Guard());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            break;
        case "MP": // Gives a mage/healer profession.
            if (humanStats["intelligence"] >= highTierVal) { // High MP, High Intelligence
                humans.push(new Mage());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["intelligence"] >= midTierVal && humanStats["intelligence"] < highTierVal) { // High Intelligence, Mid MP
                humans.push(new Doctor());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["intelligence"] < midTierVal) { // High Intelligence, Low MP
                humans.push(new Alchemist());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            break;
        case "intelligence": // Same as MP but could also give a teaching profession.
            if (humanStats["MP"] >= highTierVal) { // High Intelligence, High MP
                humans.push(new Mage());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["MP"] >= midTierVal && humanStats["MP"] < highTierVal) { // High Intelligence, Mid MP
                humans.push(new Doctor());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["MP"] < midTierVal) { // High Intelligence, Low MP
                humans.push(new Alchemist());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            break;
        case "wisdom": // Same as MP.
            if (humanStats["MP"] >= highTierVal) { // High Intelligence, High MP
                humans.push(new Mage());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            else if (humanStats["MP"] >= midTierVal && humanStats["MP"] < highTierVal) { // High Intelligence, Mid MP
                if (getRandomInt(0, 2) == 0) {
                    humans.push(new Doctor());
                    humans[humans.length - 1].stats = human.stats;
                }
                else {
                    humans.push(new Trader());
                    humans[humans.length - 1].stats = human.stats;
                    ;
                }
            }
            else if (humanStats["MP"] < midTierVal) { // High Intelligence, Low MP
                humans.push(new Alchemist());
                humans[humans.length - 1].stats = human.stats;
                ;
            }
            break;
    }
    updateListOfHumansDiv();
}
function updateListOfHumansDiv() {
    var element = document.getElementById("listOfHumans");
    element.innerHTML = "<strong>" + humans[0].name + "</strong>'s inventory contains " + humans[0].getInventoryString() + ".";
    for (let i = 1; i < humans.length; i++) {
        element.innerHTML += "<br><strong>" + humans[i].name + "</strong>'s inventory contains " + humans[i].getInventoryString() + ".";
    }
    element.hidden = false;
}
function makeHumansDoThings() {
    if (humans.length < 1) {
        alert("Create a human before using this button");
        return;
    }
    humans.forEach(human => {
        if (human instanceof Miner) {
            human.Mine();
        }
        else if (human instanceof Hunter) {
            human.Hunt();
        }
        else if (human instanceof Warrior) {
            human.Fight();
        }
        else if (human instanceof Mage) {
            human.Cast();
        }
        else if (human instanceof Guard) {
            human.Guard();
        }
        else if (human instanceof Doctor) {
            human.Heal();
        }
        else if (human instanceof Alchemist) {
            human.Cast();
        }
        else if (human instanceof Trader) {
            human.Trade();
        }
        else {
            console.log(human);
        }
    });
    updateListOfHumansDiv();
}
function logHumans() {
    for (var i = 0; i < humans.length; i++) {
        console.log(humans[i]);
    }
}
function loadJs(url) {
    var script = document.createElement('script');
    script.src = url;
    script.setAttribute('async', 'true');
    document.documentElement.firstChild.appendChild(script);
}
setTimeout(function () {
    loadJs("chance.js");
}, 50);
const fileVersion = 1;
