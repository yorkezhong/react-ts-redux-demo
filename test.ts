class person {
	name: string;
	age: string;
	sex: string;
	constructor(name: string, age: string, sex: string) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	public say(name, age, sex): any {
		console.log(name, age, sex)

	}
	private do() {
		return "play game"
	}
}

class man extends person {
	myname: string = "xiaolan"
	constructor(name: string, age: string, sex: string) {
		super(name, age, sex)
	}
	public sayhello(name, age, sex): any {
		console.log(this.myname, name, age, sex)
	}
}

let a = new man("wuuwb", "15", "787")
a.sayhello("wuuwb", "15", "787")