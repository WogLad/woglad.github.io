var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
var Stats = /** @class */ (function () {
    function Stats() {
        this.strength = getRandomInt(0, 101);
        this.defense = getRandomInt(0, 101);
        this.dexterity = getRandomInt(0, 101);
        this.HP = getRandomInt(0, 101);
        this.vitality = getRandomInt(0, 101);
        this.MP = getRandomInt(0, 101);
        this.intelligence = getRandomInt(0, 101);
        this.wisdom = getRandomInt(0, 101);
        this.luck = getRandomInt(0, 101);
    }
    return Stats;
}());
var Human = /** @class */ (function () {
    function Human() {
        // @ts-ignore
        this.name = chance.name();
        this.age = getRandomInt(1, 101);
        this.humanLogs = new Array();
        this.currentGold = 0;
        this.currentInventory = new Array();
        // this.stats = new Stats();
        this.stats = {
            "strength": getRandomInt(0, 101),
            "defense": getRandomInt(0, 101),
            "dexterity": getRandomInt(0, 101),
            "HP": getRandomInt(0, 101),
            "vitality": getRandomInt(0, 101),
            "MP": getRandomInt(0, 101),
            "intelligence": getRandomInt(0, 101),
            "wisdom": getRandomInt(0, 101),
            "luck": getRandomInt(0, 101)
        };
    }
    Human.prototype.AddToHumanLogs = function (log) {
        this.humanLogs.push(log);
    };
    Human.prototype.AddToInventory = function (item, amount) {
        this.currentInventory.push(item);
        this.AddToHumanLogs("Received " + amount.toString() + " " + item.name + ".");
    };
    Human.prototype.getInventoryString = function () {
        var inventoryString = "";
        var inv = this.currentInventory;
        inventoryString += inv[0].name;
        if (inv.length > 1) {
            for (var i = 1; i < inv.length; i++) {
                inventoryString += ", " + inv[i].name;
            }
        }
        return inventoryString;
    };
    return Human;
}());
var Miner = /** @class */ (function (_super) {
    __extends(Miner, _super);
    function Miner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Miner.prototype.Mine = function () {
        this.AddToInventory(itemDb["ore"], getRandomInt(2, 5));
    };
    Miner.prototype.GenerateRandomValues = function () {
        var randomPickaxe = itemDb[getRandomValueFromList(["stone_pickaxe", "copper_pickaxe", "iron_pickaxe", "steel_pickaxe", "mithril_pickaxe", "adamantite_pickaxe", "obsidian_pickaxe"])];
        this.currentPickaxe = randomPickaxe;
        this.AddToInventory(randomPickaxe, 1);
    };
    return Miner;
}(Human));
var Hunter = /** @class */ (function (_super) {
    __extends(Hunter, _super);
    function Hunter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hunter.prototype.Hunt = function () {
        this.AddToInventory(itemDb["meat"], getRandomInt(2, 5));
    };
    Hunter.prototype.GenerateRandomValues = function () {
        var randomBow = itemDb[getRandomValueFromList(["stone_bow", "copper_bow", "iron_bow", "steel_bow", "mithril_bow", "adamantite_bow", "obsidian_bow"])];
        this.currentBow = randomBow;
        this.AddToInventory(randomBow, 1);
    };
    return Hunter;
}(Human));
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Warrior.prototype.Fight = function () {
        this.AddToInventory(itemDb["rotten_flesh"], getRandomInt(2, 5));
    };
    Warrior.prototype.GenerateRandomValues = function () {
        var randomSword = itemDb[getRandomValueFromList(["stone_sword", "copper_sword", "iron_sword", "steel_sword", "mithril_sword", "adamantite_sword", "obsidian_sword"])];
        this.currentSword = randomSword;
        this.AddToInventory(randomSword, 1);
    };
    return Warrior;
}(Human));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mage.prototype.Cast = function () {
        this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
    };
    Mage.prototype.GenerateRandomValues = function () {
        var randomStaff = itemDb[getRandomValueFromList(["amethyst_staff", "topaz_staff", "emerald_staff", "sapphire_staff", "ruby_staff", "diamond_staff"])];
        this.currentStaff = randomStaff;
        this.AddToInventory(randomStaff, 1);
    };
    return Mage;
}(Human));
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
var Item = /** @class */ (function () {
    function Item(name, type) {
        this.name = name;
        this.type = type;
    }
    return Item;
}());
var itemDb = {
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
    "diamond_staff": new Item("Diamond Staff", ItemType.WEAPON)
};
var humans = [];
function createHuman() {
    var human = new Human();
    var humanStats = human.stats;
    var val = Math.max.apply(null, Object.values(humanStats)), highestVal = Object.keys(humanStats).find(function (a) {
        return humanStats[a] === val;
    });
    switch (highestVal) {
        case "strength": // Gives you some sort of physical based profession.
            break;
        case "defense": // Gives you some sort of tank/guard profession.
            break;
        case "dexterity": // Gives you an assassin profession or something.
            break;
        case "HP": // Same as defense.
            break;
        case "vitality": // Same as HP & defense.
            break;
        case "MP": // Gives a mage/healer profession.
            break;
        case "intelligence": // Same as MP but could also give a teaching profession.
            break;
        case "wisdom": // Same as MP.
            break;
        case "luck": // Haven't decided yet.
            break;
    }
    // switch ((document.getElementById("humanTypeSelect") as HTMLSelectElement).value) {
    // 	case "Miner":
    // 		humans.push(new Miner());
    // 		(humans[humans.length - 1] as Miner).GenerateRandomValues();
    // 		break;
    // 	case "Hunter":
    // 		humans.push(new Hunter());
    // 		(humans[humans.length - 1] as Hunter).GenerateRandomValues();
    // 		break;
    // 	case "Warrior":
    // 		humans.push(new Warrior());
    // 		(humans[humans.length - 1] as Warrior).GenerateRandomValues();
    // 		break;
    // 	case "Mage":
    // 		humans.push(new Mage());
    // 		(humans[humans.length - 1] as Mage).GenerateRandomValues();
    // 		break;
    // }
    updateListOfHumansDiv();
}
function updateListOfHumansDiv() {
    var element = document.getElementById("listOfHumans");
    element.innerHTML = "<strong>" + humans[0].name + "</strong>'s inventory contains " + humans[0].getInventoryString() + ".";
    for (var i = 1; i < humans.length; i++) {
        element.innerHTML += "<br><strong>" + humans[i].name + "</strong>'s inventory contains " + humans[i].getInventoryString() + ".";
    }
    element.hidden = false;
}
function updateCreateHumanButton() {
    var e = document.getElementById("humanTypeSelect");
    var target = e;
    var e2 = document.getElementById("createHumanButton");
    e2.innerHTML = "Create " + target.value;
}
function makeHumansDoThings() {
    if (humans.length < 1) {
        alert("Create a human before using this button");
        return;
    }
    humans.forEach(function (human) {
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
    });
    updateListOfHumansDiv();
}
function logHumans() {
    for (var i = 0; i < humans.length; i++) {
        console.log(humans[i]);
    }
}
setTimeout(updateCreateHumanButton, 25);
