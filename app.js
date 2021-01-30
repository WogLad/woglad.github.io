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
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var Human = /** @class */ (function () {
    function Human() {
        this.currentInventory = new Array();
        // @ts-ignore
        this.name = new Chance().name();
        this.age = (getRandomInt(100) + 1);
        this.currentInventory = new Array();
    }
    return Human;
}());
var Miner = /** @class */ (function (_super) {
    __extends(Miner, _super);
    function Miner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Miner.prototype.Mine = function () {
        this.currentInventory.push("Ore");
    };
    Miner.prototype.GenerateRandomValues = function () {
        // @ts-ignore
        this.name = chance.name();
        this.currentPickaxe = getPickaxe(getRandomInt(7));
        this.currentInventory.push((Pickaxe[this.currentPickaxe] + " Pickaxe"));
    };
    return Miner;
}(Human));
var Hunter = /** @class */ (function (_super) {
    __extends(Hunter, _super);
    function Hunter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hunter.prototype.Hunt = function () {
        this.currentInventory.push("Meat");
    };
    Hunter.prototype.GenerateRandomValues = function () {
        this.currentBow = getPickaxe(getRandomInt(7));
        this.currentInventory.push((Pickaxe[this.currentBow] + " Bow"));
    };
    return Hunter;
}(Human));
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Warrior.prototype.Mine = function () {
        this.currentInventory.push("Rotten Flesh");
    };
    Warrior.prototype.GenerateRandomValues = function () {
        this.currentSword = getPickaxe(getRandomInt(7));
        this.currentInventory.push((Pickaxe[this.currentSword] + " Sword"));
    };
    return Warrior;
}(Human));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mage.prototype.Mine = function () {
        this.currentInventory.push("Crystal");
    };
    Mage.prototype.GenerateRandomValues = function () {
        this.currentStaff = getStaff(getRandomInt(6));
        this.currentInventory.push((Staff[this.currentStaff] + " Staff"));
    };
    return Mage;
}(Human));
function getPickaxe(value) {
    var pickaxe = Pickaxe.STONE;
    switch (value) {
        case 0:
            pickaxe = Pickaxe.STONE;
            break;
        case 1:
            pickaxe = Pickaxe.COPPER;
            break;
        case 2:
            pickaxe = Pickaxe.IRON;
            break;
        case 3:
            pickaxe = Pickaxe.STEEL;
            break;
        case 4:
            pickaxe = Pickaxe.MITHRIL;
            break;
        case 5:
            pickaxe = Pickaxe.ADAMANTITE;
            break;
        case 6:
            pickaxe = Pickaxe.OBSIDIAN;
            break;
    }
    return pickaxe;
}
function getStaff(value) {
    var staff = Staff.AMETHYST;
    switch (value) {
        case 0:
            staff = Staff.AMETHYST;
            break;
        case 1:
            staff = Staff.TOPAZ;
            break;
        case 2:
            staff = Staff.EMERALD;
            break;
        case 3:
            staff = Staff.SAPPHIRE;
            break;
        case 4:
            staff = Staff.RUBY;
            break;
        case 5:
            staff = Staff.DIAMOND;
            break;
    }
    return staff;
}
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
    }
    updateListOfHumansDiv();
}
function updateListOfHumansDiv() {
    var element = document.getElementById("listOfHumans");
    element.innerHTML = "<strong>" + humans[0].name + "</strong>'s inventory contains " + humans[0].currentInventory + ".";
    for (var i = 1; i < humans.length; i++) {
        element.innerHTML += "<br><strong>" + humans[i].name + "</strong>'s inventory contains " + humans[i].currentInventory + ".";
    }
    element.hidden = false;
}
function updateCreateHumanButton() {
    var e = document.getElementById("humanTypeSelect");
    var target = e;
    var e2 = document.getElementById("createHumanButton");
    e2.innerHTML = "Create " + target.value;
}
var Pickaxe;
(function (Pickaxe) {
    Pickaxe[Pickaxe["STONE"] = 0] = "STONE";
    Pickaxe[Pickaxe["COPPER"] = 1] = "COPPER";
    Pickaxe[Pickaxe["IRON"] = 2] = "IRON";
    Pickaxe[Pickaxe["STEEL"] = 3] = "STEEL";
    Pickaxe[Pickaxe["MITHRIL"] = 4] = "MITHRIL";
    Pickaxe[Pickaxe["ADAMANTITE"] = 5] = "ADAMANTITE";
    Pickaxe[Pickaxe["OBSIDIAN"] = 6] = "OBSIDIAN";
})(Pickaxe || (Pickaxe = {}));
var Staff;
(function (Staff) {
    Staff[Staff["AMETHYST"] = 0] = "AMETHYST";
    Staff[Staff["TOPAZ"] = 1] = "TOPAZ";
    Staff[Staff["EMERALD"] = 2] = "EMERALD";
    Staff[Staff["SAPPHIRE"] = 3] = "SAPPHIRE";
    Staff[Staff["RUBY"] = 4] = "RUBY";
    Staff[Staff["DIAMOND"] = 5] = "DIAMOND";
})(Staff || (Staff = {}));
function logHumans() {
    for (var i = 0; i < humans.length; i++) {
        console.log(humans[i]);
    }
}
setTimeout(updateCreateHumanButton, 50);
