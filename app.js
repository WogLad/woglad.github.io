// import chance from 'chancejs';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
    function Human(name, age) {
        this.name = name;
        this.age = age;
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
        this.currentPickaxe = getPickaxe(getRandomInt(7));
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
var humans = [];
function createHuman() {
    var type = document.getElementById("humanTypeSelect");
    console.log(type.value);
    // switch (type) {
    // 	case "miner":
    // 		var miner = new Miner("Bob", getRandomInt(100));
    // 		miner.GenerateRandomValues();
    // 		humans.push(miner);
    // 		break;
    // }
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
var StaffTypes;
(function (StaffTypes) {
    StaffTypes[StaffTypes["AMETHYST"] = 0] = "AMETHYST";
    StaffTypes[StaffTypes["TOPAZ"] = 1] = "TOPAZ";
    StaffTypes[StaffTypes["EMERALD"] = 2] = "EMERALD";
    StaffTypes[StaffTypes["SAPPHIRE"] = 3] = "SAPPHIRE";
    StaffTypes[StaffTypes["RUBY"] = 4] = "RUBY";
    StaffTypes[StaffTypes["DIAMOND"] = 5] = "DIAMOND";
})(StaffTypes || (StaffTypes = {}));
var Message = /** @class */ (function () {
    function Message(sender, message) {
        this.sender = sender;
        this.messageText = message;
    }
    return Message;
}());
var message = new Message("WogLad", "Hi!");
var messageCount = 0;
var messages = [
    new Message("WogLad", "Hi!"),
    new Message("Test1", "Hey there!"),
    new Message("WogLad", "How is the app feeling?"),
    new Message("Test1", "It's feeling really good.")
];
function updateMessages() {
    var ps = document.getElementById("notification");
    var text = String(messageCount);
    if (messageCount > 99) {
        ps.innerHTML = "<strong>messages (+99)</strong>";
    }
    else {
        ps.innerHTML = "<strong>messages (" + messageCount + ")</strong>";
    }
}
function newMessage(message) {
    messageCount += 1;
    updateMessages();
}
function displayMessages() {
    var messageText;
    messageText = "<strong>" + messages[0].sender + "</strong>: " + messages[0].messageText;
    for (var i = 1; i < messages.length; ++i) {
        // window.alert(messages[i]);
        if (i == 0) {
            continue;
        }
        messageText += "<br><strong>" + messages[i].sender + "</strong>: " + messages[i].messageText;
    }
    var ps = document.getElementById("messages");
    ps.innerHTML = messageText;
    document.getElementById("messages").hidden = false;
}
// console.log(chance.guid());
setTimeout(updateMessages, 0);
setTimeout(updateCreateHumanButton, 50);
// setInterval(updateMessages, 1000);
