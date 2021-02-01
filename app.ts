function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

class Stats {
	//PHYSICAL STATS
	public strength: number; // Determines the physical damage and strength.
	public defense: number; // Determines the physical defense, which is what factors reduction of damage.
	public dexterity: number; // Determines the agility/movement-speed and how quick the motion of the limbs are.
	public HP: number; // Determines the HP(hit-points)/health.
	public vitality: number; // Determines the amount of HP that is restored every second.

	//MAGIC STATS
	public MP: number; // Determines the MP(mana-points)/max-mana.
	public intelligence: number; // Determines the IQ and the capacity to learn new things(mainly in magic). Higher intelligence translates to higher talent for magic.
	public wisdom: number; // Determines the amount of MP that is restored every second.

	//EXTRA STATS
	public luck: number; // Determines the chance of getting better loot.

	constructor() {
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
		}
	}

	public AddToHumanLogs(log: string): void {
		this.humanLogs.push(log);
	}

	public AddToInventory(item: Item, amount: number): void {
		this.currentInventory.push(item);
		this.AddToHumanLogs("Received " + amount.toString() + " " + item.name + ".");
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
		this.AddToInventory(itemDb["ore"], getRandomInt(2, 5));
	}

	public GenerateRandomValues():void {
		var randomPickaxe: Item = itemDb[getRandomValueFromList(["stone_pickaxe", "copper_pickaxe", "iron_pickaxe", "steel_pickaxe", "mithril_pickaxe", "adamantite_pickaxe", "obsidian_pickaxe"])];
		this.currentPickaxe = randomPickaxe;
		this.AddToInventory(randomPickaxe, 1);
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
	"diamond_staff": new Item("Diamond Staff", ItemType.WEAPON)
}

var humans: Array<Human> = [];

function createHuman(): void {

	var human:Human = new Human();
	var humanStats = human.stats;
	var val = Math.max.apply(null, Object.values(humanStats)),
	highestVal = Object.keys(humanStats).find(function(a) {
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