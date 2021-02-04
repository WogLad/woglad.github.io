function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

class Human {
	public name: string;
	public age: number;
	public humanLogs: Array<string>;
	public currentGold: number;
	public currentInventory: Array<Item>;
	public stats;

	constructor() {
		// @ts-ignore
		this.name = chance.name();
		this.age = getRandomInt(1, 101);
		this.humanLogs = new Array<string>();
		this.currentGold = 0;
		this.currentInventory = new Array<Item>();
		this.stats = {
			"strength": getRandomInt(0, 101),
			"defense": getRandomInt(0, 101),
			"dexterity": getRandomInt(0, 101),
			"HP": getRandomInt(0, 101),
			"vitality": getRandomInt(0, 101),
			"MP": getRandomInt(0, 101),
			"intelligence": getRandomInt(0, 101),
			"wisdom": getRandomInt(0, 101)
		}
	}

	public humanType: string;

	public AddToHumanLogs(log: string): void {
		this.humanLogs.push(log);
	}

	public AddToInventory(item: Item, amount: number): void {
		for (let i = 0; i < amount; i++) {
			this.currentInventory.push(item);	
		}
		this.AddToHumanLogs("Received " + amount.toString() + " " + item.name + ".");
	}

	public getInventoryString(): string {
		var inventoryString: string = "";
		var inv:Array<Item> = this.currentInventory;
		if (inv.length > 0) {
			inventoryString += inv[0].name;
			if (inv.length > 1) {
					for (let i = 1; i < inv.length; i++) {
					inventoryString += ", " +  inv[i].name;
				}
			}
		}
		return inventoryString;
	}

	public toJson() {
		var jsonData = JSON.parse(JSON.stringify(this));
		return jsonData;
	}
}

class Hunter extends Human {
	public currentBow: Item | undefined;

	public Hunt(): void {
		this.AddToInventory(itemDb["meat"], getRandomInt(2, 5));
	}

	public GenerateRandomValues():void {
		var randomBow: Item = itemDb[getRandomValueFromList(["stone_bow", "copper_bow", "iron_bow", "steel_bow", "mithril_bow", "adamantite_bow", "obsidian_bow"])];
		this.currentBow = randomBow;
		this.AddToInventory(randomBow, 1);
	}

	constructor() {
		super();
		this.GenerateRandomValues();
		this.humanType = "hunter";
	}
}

class Warrior extends Human {
	public currentSword: Item | undefined;

	public Fight(): void {
		this.AddToInventory(itemDb["rotten_flesh"], getRandomInt(2, 5));
	}

	public GenerateRandomValues():void {
		var randomSword: Item = itemDb[getRandomValueFromList(["stone_sword", "copper_sword", "iron_sword", "steel_sword", "mithril_sword", "adamantite_sword", "obsidian_sword"])];
		this.currentSword = randomSword;
		this.AddToInventory(randomSword, 1);
	}

	constructor() {
		super();
		this.GenerateRandomValues();
		this.humanType = "warrior";
	}
}

class Guard extends Human {
	public currentSword: Item | undefined;

	public Guard(): void {
		this.AddToInventory(itemDb["rotten_flesh"], getRandomInt(2, 5));
	}

	public GenerateRandomValues():void {
		var randomSword: Item = itemDb[getRandomValueFromList(["stone_sword", "copper_sword", "iron_sword", "steel_sword", "mithril_sword", "adamantite_sword", "obsidian_sword"])];
		this.currentSword = randomSword;
		this.AddToInventory(randomSword, 1);
	}

	constructor() {
		super();
		this.GenerateRandomValues();
		this.humanType = "guard";
	}
}

class Mage extends Human {
	public currentStaff: Item | undefined;

	public Cast(): void {
		this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
	}

	public GenerateRandomValues():void {
		var randomStaff: Item = itemDb[getRandomValueFromList(["amethyst_staff", "topaz_staff", "emerald_staff", "sapphire_staff", "ruby_staff", "diamond_staff"])];
		this.currentStaff = randomStaff;
		this.AddToInventory(randomStaff, 1);
	}

	constructor() {
		super();
		this.GenerateRandomValues();
		this.humanType = "mage";
	}
}

class Doctor extends Human {
	public currentWand: Item | undefined;

	public Heal(): void {
		this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
	}

	public GenerateRandomValues():void {
		var randomWand: Item = itemDb["healing_wand"];
		this.currentWand = randomWand;
		this.AddToInventory(randomWand, 1);
	}

	constructor() {
		super();
		this.GenerateRandomValues();
		this.humanType = "doctor";
	}
}

class Alchemist extends Human {
	public Cast(): void {
		this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
	}

	constructor() {
		super();
		this.humanType = "alchemist";
	}
}

class Trader extends Human {
	public Trade(): void {
		this.AddToInventory(itemDb["mana_crystal"], getRandomInt(2, 5));
	}

	constructor() {
		super();
		this.humanType = "trader";
	}
}

class Miner extends Human {
	public currentPickaxe: Item | undefined;

	public Mine(): void {
		this.AddToInventory(itemDb["ore"], getRandomInt(2, 5));
	}

	public GenerateRandomValues():void {
		var randomPickaxe: Item = itemDb[getRandomValueFromList(["stone_pickaxe", "copper_pickaxe", "iron_pickaxe", "steel_pickaxe", "mithril_pickaxe", "adamantite_pickaxe", "obsidian_pickaxe"])];
		this.currentPickaxe = randomPickaxe;
		this.AddToInventory(randomPickaxe, 1);
	}

	constructor() {
		super();
		this.GenerateRandomValues();
		this.humanType = "miner";
	}
}

function getRandomValueFromList(list: any[]): any {
	return list[getRandomInt(0, list.length)]
}

enum ItemType {
	ORE,
	FOOD,
	MONSTER_LOOT,
	TOOL,
	WEAPON
}

class Item {
	public name: string;
	public type: ItemType;

	constructor(name: string, type: ItemType) {
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
}

var humans: Array<Human> = [];

function createHuman(): void {
	var human:Human = new Human();
	const humanStats = human.stats;
	var val = Math.max.apply(null, Object.values(humanStats)),
	highestVal = Object.keys(humanStats).find(function(a) {
		return humanStats[a] === val;
	});

	var highTierVal: number = 70;
	var midTierVal: number = 35;
	
	switch (highestVal) { // 70 and above is considered HIGH, less than 70 and 35 and above is considerd MEDIUM & everything else is LOW.
		case "strength": // Gives you some sort of physical based profession.
			if (humanStats["intelligence"] >= highTierVal) { // High Strength, High Intelligence
				humans.push(new Hunter());
				(humans[humans.length - 1] as Hunter).stats = human.stats;;
			}
			else if (humanStats["intelligence"] >= midTierVal && humanStats["intelligence"] < highTierVal) { // High Strength, Mid Intelligence
				humans.push(new Warrior());
				(humans[humans.length - 1] as Warrior).stats = human.stats;;
			}
			else if (humanStats["intelligence"] < midTierVal) { // High Strength, Low Intelligence
				humans.push(new Guard());
				(humans[humans.length - 1] as Guard).stats = human.stats;;
			}
			break;
		case "defense": // Gives you some sort of tank/guard profession.
			if (humanStats["strength"] >= highTierVal) { // High Strength, High Intelligence
				humans.push(new Warrior());
				(humans[humans.length - 1] as Warrior).stats = human.stats;;
			}
			else if (humanStats["strength"] >= midTierVal && humanStats["strength"] < highTierVal) { // High Strength, Mid Intelligence
				humans.push(new Guard());
				(humans[humans.length - 1] as Guard).stats = human.stats;;
			}
			else if (humanStats["strength"] < midTierVal) { // High Strength, Low Intelligence
				humans.push(new Guard());
				(humans[humans.length - 1] as Guard).stats = human.stats;
			}
			break;
		case "dexterity": // Gives you an assassin/hunter profession or something.
			humans.push(new Hunter());
			(humans[humans.length - 1] as Hunter).stats = human.stats;;
			break;
		case "HP": // Same as defense.
			if (humanStats["defense"] >= highTierVal) { // High Strength, High Intelligence
				humans.push(new Warrior());
				(humans[humans.length - 1] as Warrior).stats = human.stats;
			}
			else if (humanStats["defense"] >= midTierVal && humanStats["defense"] < highTierVal) { // High Strength, Mid Intelligence
				humans.push(new Guard());
				(humans[humans.length - 1] as Guard).stats = human.stats;;
			}
			else if (humanStats["defense"] < midTierVal) { // High Strength, Low Intelligence
				humans.push(new Guard());
				(humans[humans.length - 1] as Guard).stats = human.stats;;
			}
			break;
		case "vitality": // Same as HP & defense.
			if (humanStats["strength"] >= highTierVal) { // High Strength, High Intelligence
				humans.push(new Warrior());
				(humans[humans.length - 1] as Warrior).stats = human.stats;;
			}
			else if (humanStats["strength"] >= midTierVal && humanStats["strength"] < highTierVal) { // High Strength, Mid Intelligence
				humans.push(new Warrior());
				(humans[humans.length - 1] as Warrior).stats = human.stats;;
			}
			else if (humanStats["strength"] < midTierVal) { // High Strength, Low Intelligence
				humans.push(new Guard());
				(humans[humans.length - 1] as Guard).stats = human.stats;;
			}
			break;
		case "MP": // Gives a mage/healer profession.
			if (humanStats["intelligence"] >= highTierVal) { // High MP, High Intelligence
				humans.push(new Mage());
				(humans[humans.length - 1] as Mage).stats = human.stats;;
			}
			else if (humanStats["intelligence"] >= midTierVal && humanStats["intelligence"] < highTierVal) { // High Intelligence, Mid MP
				humans.push(new Doctor());
				(humans[humans.length - 1] as Doctor).stats = human.stats;;
			}
			else if (humanStats["intelligence"] < midTierVal) { // High Intelligence, Low MP
				humans.push(new Alchemist());
				(humans[humans.length - 1] as Alchemist).stats = human.stats;;
			}
			break;
		case "intelligence": // Same as MP but could also give a teaching profession.
			if (humanStats["MP"] >= highTierVal) { // High Intelligence, High MP
				humans.push(new Mage());
				(humans[humans.length - 1] as Mage).stats = human.stats;;
			}
			else if (humanStats["MP"] >= midTierVal && humanStats["MP"] < highTierVal) { // High Intelligence, Mid MP
				humans.push(new Doctor());
				(humans[humans.length - 1] as Doctor).stats = human.stats;;
			}
			else if (humanStats["MP"] < midTierVal) { // High Intelligence, Low MP
				humans.push(new Alchemist());
				(humans[humans.length - 1] as Alchemist).stats = human.stats;;
			}
			break;
		case "wisdom": // Same as MP.
			if (humanStats["MP"] >= highTierVal) { // High Intelligence, High MP
				humans.push(new Mage());
				(humans[humans.length - 1] as Mage).stats = human.stats;;
			}
			else if (humanStats["MP"] >= midTierVal && humanStats["MP"] < highTierVal) { // High Intelligence, Mid MP
				if (getRandomInt(0, 2) == 0) {
					humans.push(new Doctor());
					(humans[humans.length - 1] as Doctor).stats = human.stats;
				}
				else {
					humans.push(new Trader());
					(humans[humans.length - 1] as Trader).stats = human.stats;;
				}
			}
			else if (humanStats["MP"] < midTierVal) { // High Intelligence, Low MP
				humans.push(new Alchemist());
				(humans[humans.length - 1] as Alchemist).stats = human.stats;;
			}
			break;
	}

	updateListOfHumansDiv();
}

function updateListOfHumansDiv() {
	var element: HTMLElement = document.getElementById("listOfHumans") as HTMLElement;
	element.innerHTML = "<strong>" + humans[0].name + "</strong>'s inventory contains " + humans[0].getInventoryString() + ".";
	for (let i = 1; i < humans.length; i++) {
		element.innerHTML += "<br><strong>" + humans[i].name + "</strong>'s inventory contains " + humans[i].getInventoryString() + ".";
	}
	element.hidden = false;
}

function makeHumansDoThings() {
	if (humans.length < 1) { alert("Create a human before using this button"); return; }
	humans.forEach(human => {
		if (human instanceof Miner) {
			(human as Miner).Mine();
		}
		else if (human instanceof Hunter) {
			(human as Hunter).Hunt();
		}
		else if (human instanceof Warrior) {
			(human as Warrior).Fight();	
		}
		else if (human instanceof Mage) {
			(human as Mage).Cast();	
		}
		else if (human instanceof Guard) {
			(human as Guard).Guard();	
		}
		else if (human instanceof Doctor) {
			(human as Doctor).Heal();	
		}
		else if (human instanceof Alchemist) {
			(human as Alchemist).Cast();	
		}
		else if (human instanceof Trader) {
			(human as Trader).Trade();	
		}
		else {
			console.log(human);
		}
	});
	updateListOfHumansDiv();
}

function logHumans(): void {
	for (var i = 0; i < humans.length; i++) {
    	console.log(humans[i]);
	}
}

function loadJs(url: string): void {
    var script = document.createElement('script');
    script.src = url;
    script.setAttribute('async', 'true');
    document.documentElement.firstChild.appendChild(script);
}

setTimeout(function() {
	loadJs("https://chancejs.com/chance.min.js");
}, 50);

const fileVersion: number = 2;

function jsonToHuman(jsonData): Human {
	var human: Human;
	switch (jsonData["humanType"]) {
		case "hunter":
			var hunter = new Hunter();
			hunter.name = jsonData["name"];
			hunter.age = jsonData["age"];
			hunter.humanLogs = jsonData["humanLogs"];
			hunter.currentGold = jsonData["currentGold"];
			hunter.currentInventory = jsonData["currentInventory"];
			hunter.currentBow = jsonData["currentInventory"][0];
			human = hunter;
			break;
		case "warrior":
			var warrior = new Warrior();
			warrior.name = jsonData["name"];
			warrior.age = jsonData["age"];
			warrior.humanLogs = jsonData["humanLogs"];
			warrior.currentGold = jsonData["currentGold"];
			warrior.currentInventory = jsonData["currentInventory"];
			warrior.currentSword = jsonData["currentInventory"][0];
			human = warrior;
			break;
		case "guard":
			var guard = new Guard();
			guard.name = jsonData["name"];
			guard.age = jsonData["age"];
			guard.humanLogs = jsonData["humanLogs"];
			guard.currentGold = jsonData["currentGold"];
			guard.currentInventory = jsonData["currentInventory"];
			guard.currentSword = jsonData["currentInventory"][0];
			human = guard;
			break;
		case "mage":
			var mage = new Mage();
			mage.name = jsonData["name"];
			mage.age = jsonData["age"];
			mage.humanLogs = jsonData["humanLogs"];
			mage.currentGold = jsonData["currentGold"];
			mage.currentInventory = jsonData["currentInventory"];
			mage.currentStaff = jsonData["currentInventory"][0];
			human = mage;
			break;
		case "doctor":
			var doctor = new Doctor();
			doctor.name = jsonData["name"];
			doctor.age = jsonData["age"];
			doctor.humanLogs = jsonData["humanLogs"];
			doctor.currentGold = jsonData["currentGold"];
			doctor.currentInventory = jsonData["currentInventory"];
			doctor.currentWand = jsonData["currentInventory"][0];
			human = doctor;
			break;
		case "alchemist":
			var alchemist = new Alchemist();
			alchemist.name = jsonData["name"];
			alchemist.age = jsonData["age"];
			alchemist.humanLogs = jsonData["humanLogs"];
			alchemist.currentGold = jsonData["currentGold"];
			alchemist.currentInventory = jsonData["currentInventory"];
			human = alchemist;
			break;
		case "trader":
			var trader = new Trader();
			trader.name = jsonData["name"];
			trader.age = jsonData["age"];
			trader.humanLogs = jsonData["humanLogs"];
			trader.currentGold = jsonData["currentGold"];
			trader.currentInventory = jsonData["currentInventory"];
			human = trader;
			break;
		case "miner":
			var miner = new Miner();
			miner.name = jsonData["name"];
			miner.age = jsonData["age"];
			miner.humanLogs = jsonData["humanLogs"];
			miner.currentGold = jsonData["currentGold"];
			miner.currentInventory = jsonData["currentInventory"];
			miner.currentPickaxe = jsonData["currentInventory"][0];
			human = miner;
			break;
	}
	return human;
}