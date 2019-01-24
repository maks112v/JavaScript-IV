// CODE here for your Lambda Classes

class People {
	constructor(atr){
		this.name = atr.name;
		this.age = atr.age;
		this.location = atr.location;
		this.gender = atr.gender;
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends People {
	constructor(atr){
		super(atr);
		this.specialty = atr.specialty;
		this.favLanguage = atr.favLanguage;
		this.catchPhrase = atr.catchPhrase;
	}

	demo(subject){
		return `Today we are learning about ${subject}`;
	}

	grade(student, subject){
		return `${student.name} receives a perfect score on ${subject}`;
	}
}

class Student extends People {
	constructor(atr){
		super(atr);
		this.previousBackground = atr.previousBackground;
		this.className = atr.className;
		this.favSubjects = atr.favSubjects;
	}

	listSubjects (){
		return `${this.name} likes ${this.favSubjects}`;
	}

	prAssignment(subject){
		return `${student.name} has submitted a PR for ${subject}`;
	}

	sprintChallenge (subject){
		return `${student.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(atr){
		super(atr);
		this.gradClassName = atr.gradClassName;
		this.favInstructor = atr.favInstructor;
	}

	standUp (channel){
		`${this.name} announces to ${channel}, @channel standy times!​​​​​`;
	}

	debugCode (student, subject){
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const jo = new Student({
	name: 'Jo',
	age: 23,
	location: 'Virgina',
	gender: 'male',
	previousBackground: 'Barber',
	className: 'Web17',
	favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const erica = new ProjectManager({
	name: 'Erica',
	age: 27,
	location: 'Florida',
	gender: 'female',
	previousBackground: 'Artist',
	className: 'Web17',
	favSubjects: ['Html', 'CSS', 'PHP'],
});

// console.log(fred);
// console.log(fred.speak());
// console.log(fred.demo("JS"));

// console.log(jo.listSubjects());