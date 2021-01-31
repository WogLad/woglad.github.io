"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemDb = void 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var Human = /** @class */ (function () {
    function Human() {
        this.currentInventory = new Array();
        // @ts-ignore
        this.name = chance.name();
        this.age = (getRandomInt(100) + 1);
        this.currentInventory = new Array();
    }
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
        this.currentInventory.push(exports.itemDb["ore"]);
    };
    Miner.prototype.GenerateRandomValues = function () {
        var randomPickaxe = exports.itemDb[getRandomValueFromList(["stone_pickaxe", "copper_pickaxe", "iron_pickaxe", "steel_pickaxe", "mithril_pickaxe", "adamantite_pickaxe", "obsidian_pickaxe"])];
        this.currentPickaxe = randomPickaxe;
        this.currentInventory.push(randomPickaxe);
    };
    return Miner;
}(Human));
var Hunter = /** @class */ (function (_super) {
    __extends(Hunter, _super);
    function Hunter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hunter.prototype.Hunt = function () {
        this.currentInventory.push(exports.itemDb["meat"]);
    };
    Hunter.prototype.GenerateRandomValues = function () {
        var randomBow = exports.itemDb[getRandomValueFromList(["stone_bow", "copper_bow", "iron_bow", "steel_bow", "mithril_bow", "adamantite_bow", "obsidian_bow"])];
        this.currentBow = randomBow;
        this.currentInventory.push(randomBow);
    };
    return Hunter;
}(Human));
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Warrior.prototype.Fight = function () {
        this.currentInventory.push(exports.itemDb["rotten_flesh"]);
    };
    Warrior.prototype.GenerateRandomValues = function () {
        var randomSword = exports.itemDb[getRandomValueFromList(["stone_sword", "copper_sword", "iron_sword", "steel_sword", "mithril_sword", "adamantite_sword", "obsidian_sword"])];
        this.currentSword = randomSword;
        this.currentInventory.push(randomSword);
    };
    return Warrior;
}(Human));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mage.prototype.Cast = function () {
        this.currentInventory.push(exports.itemDb["mana_crystal"]);
    };
    Mage.prototype.GenerateRandomValues = function () {
        var randomStaff = exports.itemDb[getRandomValueFromList(["amethyst_staff", "topaz_staff", "emerald_staff", "sapphire_staff", "ruby_staff", "diamond_staff"])];
        this.currentStaff = randomStaff;
        this.currentInventory.push(randomStaff);
    };
    return Mage;
}(Human));
function getRandomValueFromList(list) {
    return list[getRandomInt(list.length)];
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
exports.itemDb = {
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
    var type = document.getElementById("humanTypeSelect");
    switch (type.value) {
        case "Miner":
            humans.push(new Miner());
            humans[humans.length - 1].GenerateRandomValues();
            break;
        case "Hunter":
            humans.push(new Hunter());
            humans[humans.length - 1].GenerateRandomValues();
            break;
        case "Warrior":
            humans.push(new Warrior());
            humans[humans.length - 1].GenerateRandomValues();
            break;
        case "Mage":
            humans.push(new Mage());
            humans[humans.length - 1].GenerateRandomValues();
            break;
    }
    // var makeHumansDoThingsButton:HTMLElement = document.getElementById("makeHumansDoThingsButton") as HTMLElement;
    // makeHumansDoThingsButton.hidden = false;
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
