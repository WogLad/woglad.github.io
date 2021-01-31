function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Human {
	public name: string;
	public age: number;

	public currentInventory: Array<Item> = new Array<Item>();

	constructor() {
		// @ts-ignore
		this.name = chance.name();
		this.age = (getRandomInt(100) + 1);
		this.currentInventory = new Array<Item>();
	}

	public getInventoryString(): string {
		var inventoryString: string = "";
		var inv:Array<Item> = this.currentInventory;
		inventoryString += inv[0].name;
		if (inv.length > 1) {
				for (let i = 1; i < inv.length; i++) {
				inventoryString += ", " +  inv[i].name;
			}
		}
		return inventoryString;
	}
}

class Miner extends Human {
	public currentPickaxe: Item | undefined;

	public Mine(): void {
		this.currentInventory.push(itemDb["ore"]);
	}

	public GenerateRandomValues():void {
		var randomPickaxe: Item = itemDb[getRandomValueFromList(["stone_pickaxe", "copper_pickaxe", "iron_pickaxe", "steel_pickaxe", "mithril_pickaxe", "adamantite_pickaxe", "obsidian_pickaxe"])];
		this.currentPickaxe = randomPickaxe;
		this.currentInventory.push(randomPickaxe);
	}
}

class Hunter extends Human {
	public currentBow: Item | undefined;

	public Hunt(): void {
		this.currentInventory.push(itemDb["meat"]);
	}

	public GenerateRandomValues():void {
		var randomBow: Item = itemDb[getRandomValueFromList(["stone_bow", "copper_bow", "iron_bow", "steel_bow", "mithril_bow", "adamantite_bow", "obsidian_bow"])];
		this.currentBow = randomBow;
		this.currentInventory.push(randomBow);
	}
}

class Warrior extends Human {
	public currentSword: Item | undefined;

	public Fight(): void {
		this.currentInventory.push(itemDb["rotten_flesh"]);
	}

	public GenerateRandomValues():void {
		var randomSword: Item = itemDb[getRandomValueFromList(["stone_sword", "copper_sword", "iron_sword", "steel_sword", "mithril_sword", "adamantite_sword", "obsidian_sword"])];
		this.currentSword = randomSword;
		this.currentInventory.push(randomSword);
	}
}

class Mage extends Human {
	public currentStaff: Item | undefined;

	public Cast(): void {
		this.currentInventory.push(itemDb["mana_crystal"]);
	}

	public GenerateRandomValues():void {
		var randomStaff: Item = itemDb[getRandomValueFromList(["amethyst_staff", "topaz_staff", "emerald_staff", "sapphire_staff", "ruby_staff", "diamond_staff"])];
		this.currentStaff = randomStaff;
		this.currentInventory.push(randomStaff);
	}
}

function getRandomValueFromList(list: any[]): any {
	return list[getRandomInt(list.length)]
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
	"diamond_staff": new Item("Diamond Staff", ItemType.WEAPON)
}

var humans: Array<Human> = [];

function createHuman(): void {
	var type:HTMLSelectElement = document.getElementById("humanTypeSelect") as HTMLSelectElement;
	switch (type.value) {
		case "Miner":
			humans.push(new Miner());
			(humans[humans.length - 1] as Miner).GenerateRandomValues();
			break;
		case "Hunter":
			humans.push(new Hunter());
			(humans[humans.length - 1] as Hunter).GenerateRandomValues();
			break;
		case "Warrior":
			humans.push(new Warrior());
			(humans[humans.length - 1] as Warrior).GenerateRandomValues();
			break;
		case "Mage":
			humans.push(new Mage());
			(humans[humans.length - 1] as Mage).GenerateRandomValues();
			break;
	}
	// var makeHumansDoThingsButton:HTMLElement = document.getElementById("makeHumansDoThingsButton") as HTMLElement;
	// makeHumansDoThingsButton.hidden = false;
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

function updateCreateHumanButton(): void {
	var e = document.getElementById("humanTypeSelect");
	const target = e as HTMLSelectElement
	var e2 = document.getElementById("createHumanButton") as HTMLElement;
	e2.innerHTML = "Create " + target.value;
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
	});
	updateListOfHumansDiv();
}

function logHumans(): void {
	for (var i = 0; i < humans.length; i++) {
    	console.log(humans[i]);
	}
}

setTimeout(updateCreateHumanButton, 25)