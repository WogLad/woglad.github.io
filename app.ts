// import chance from 'chancejs';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Human {
	public name: string;
	public age: number;

	public currentInventory: Array<string>;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		this.currentInventory = new Array<string>();
	}
}

class Miner extends Human {
	public currentPickaxe: Pickaxe;

	public Mine(): void {
		this.currentInventory.push("Ore")
	}

	public GenerateRandomValues():void {
		this.currentPickaxe = getPickaxe(getRandomInt(7));
	}
}

class Hunter extends Human {
	public currentBow: Pickaxe;

	public Hunt(): void {
		this.currentInventory.push("Meat")
	}
}

class Warrior extends Human {
	public currentSword: Pickaxe;

	public Mine(): void {
		this.currentInventory.push("Rotten Flesh")
	}
}

class Mage extends Human {
	public currentStaff: StaffTypes;

	public Mine(): void {
		this.currentInventory.push("Crystal")
	}
}

function getPickaxe(value: number): Pickaxe {
	var pickaxe: Pickaxe = Pickaxe.STONE;
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

var humans: Array<Human> = [
	
];

function createHuman(): void {
	var type = document.getElementById("humanTypeSelect") as HTMLSelectElement;
	console.log(type.value);
	// switch (type) {
	// 	case "miner":
	// 		var miner = new Miner("Bob", getRandomInt(100));
	// 		miner.GenerateRandomValues();
	// 		humans.push(miner);
	// 		break;
	// }
}

function updateCreateHumanButton(): void {
	var e = document.getElementById("humanTypeSelect");
	const target = e as HTMLSelectElement
	var e2 = document.getElementById("createHumanButton") as HTMLElement;
	e2.innerHTML = "Create " + target.value;
}

enum Pickaxe {
	STONE,
	COPPER,
	IRON,
	STEEL,
	MITHRIL,
	ADAMANTITE,
	OBSIDIAN
}

enum StaffTypes {
	AMETHYST,
	TOPAZ,
	EMERALD,
	SAPPHIRE,
	RUBY,
	DIAMOND
}

class Message {
	public sender: string;
	public messageText: string;

	constructor(sender: string, message: string) {
		this.sender = sender;
		this.messageText = message;
	}
}

var message = new Message("WogLad", "Hi!");

var messageCount: number = 0;

var messages: Array<Message> = [
	new Message("WogLad", "Hi!"),
    new Message("Test1", "Hey there!"),
    new Message("WogLad", "How is the app feeling?"),
    new Message("Test1", "It's feeling really good.")
];

function updateMessages(): void {
    var ps:HTMLElement = document.getElementById("notification");
    var text: string = String(messageCount);
    if(messageCount > 99) {
    	ps.innerHTML = "<strong>messages (+99)</strong>";
    }
    else {
    	ps.innerHTML = "<strong>messages (" + messageCount + ")</strong>";
    }
}

function newMessage(message: string):void {
	messageCount += 1;
	updateMessages();
}

function displayMessages(): void {
	var messageText:string;
	messageText = "<strong>" + messages[0].sender + "</strong>: " + messages[0].messageText;
	for (var i = 1; i < messages.length; ++i) {
		// window.alert(messages[i]);
		if(i == 0) { continue; }
		messageText += "<br><strong>" + messages[i].sender + "</strong>: " + messages[i].messageText;
	}
	var ps = document.getElementById("messages");
	ps.innerHTML = messageText;
	document.getElementById("messages").hidden = false;
}

// console.log(chance.guid());


setTimeout(updateMessages, 0)
setTimeout(updateCreateHumanButton, 50)
// setInterval(updateMessages, 1000);