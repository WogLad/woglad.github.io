function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Human {
	public name: string;
	public age: number;

	public currentInventory: Array<string> = new Array<string>();

	constructor() {
		// @ts-ignore
		this.name = chance.name();
		this.age = (getRandomInt(100) + 1);
		this.currentInventory = new Array<string>();
	}
}

class Miner extends Human {
	public currentPickaxe: Pickaxe | undefined;

	public Mine(): void {
		this.currentInventory.push("Ore")
	}

	public GenerateRandomValues():void {
		this.currentPickaxe = getPickaxe(getRandomInt(7));
		this.currentInventory.push((Pickaxe[this.currentPickaxe] + " Pickaxe"));
	}
}

class Hunter extends Human {
	public currentBow: Pickaxe | undefined;

	public Hunt(): void {
		this.currentInventory.push("Meat")
	}

	public GenerateRandomValues():void {
		this.currentBow = getPickaxe(getRandomInt(7));
		this.currentInventory.push((Pickaxe[this.currentBow] + " Bow"));
	}
}

class Warrior extends Human {
	public currentSword: Pickaxe | undefined;

	public Mine(): void {
		this.currentInventory.push("Rotten Flesh")
	}

	public GenerateRandomValues():void {
		this.currentSword = getPickaxe(getRandomInt(7));
		this.currentInventory.push((Pickaxe[this.currentSword] + " Sword"));
	}
}

class Mage extends Human {
	public currentStaff: Staff | undefined;

	public Mine(): void {
		this.currentInventory.push("Crystal")
	}

	public GenerateRandomValues():void {
		this.currentStaff = getStaff(getRandomInt(6));
		this.currentInventory.push((Staff[this.currentStaff] + " Staff"));
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

function getStaff(value: number): Staff {
	var staff: Staff = Staff.AMETHYST;
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

var humans: Array<Human> = [
	
];

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
	}
	updateListOfHumansDiv();
}

function updateListOfHumansDiv() {
	var element: HTMLElement = document.getElementById("listOfHumans") as HTMLElement;
	element.innerHTML = "<strong>" + humans[0].name + "</strong>'s inventory contains " + humans[0].currentInventory + ".";
	for (let i = 1; i < humans.length; i++) {
		element.innerHTML += "<br><strong>" + humans[i].name + "</strong>'s inventory contains " + humans[i].currentInventory + ".";
	}
	element.hidden = false;
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

enum Staff {
	AMETHYST,
	TOPAZ,
	EMERALD,
	SAPPHIRE,
	RUBY,
	DIAMOND
}

function logHumans(): void {
	for (var i = 0; i < humans.length; i++) {
    	console.log(humans[i]);
	}
}

setTimeout(updateCreateHumanButton, 50)