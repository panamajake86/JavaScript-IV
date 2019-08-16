// CODE here for your Lambda Classes

class Person{
    constructor(atts){
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.agelocation
    };

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}!`
    };
};

class Instructor extends Person{
    constructor(instAtts){
        super(instAtts)
        this.specialty = instAtts.specialty;
        this.favLanguage = instAtts.favLanguage;
        this.catchPhrase = instAtts.catchPhrase;
    };

    demo(subject){
        return `Today we are learning about ${this.subject}.`
    };
    grade(subject){
        return `${student.name} receives a perfect score on ${subject}.`
    };
};

class Student extends Person{
    constructor(stuAtts){
        super(stuAtts);
        this.previousBackground = stuAtts.previousBackground;
        this.className = stuAtts.className;
        this.favSubjects = stuAtts.favSubjects;
    };

    listsSubjects(){
        return this.favSubjects.sort();
    };
    PRAssignment(student, subject){
        return `${student} has submitted a PR for ${subject}.`
    };
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${this.subject}.`
    };
};

class TeamLead extends Instructor{
    constructor(tlAtts){
        super(tlAtts);
        this.gradClassName = tlAtts.gradClassName;
        this.favInstructor = tlAtts.favInstructor;
    };

    standUp(){
        return `${name} announces to ${channel}, @channel standy times!`
    };
    debugsCode(subject){
        return `${name} debugs ${student.name}'s code on ${subject}.`
    };
};


//Peoples
const jake = new Student({
    name: 'Jake',
    location: 'Utah',
    age: 32,
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    previousBackground: 'Ran a food truck',
    className: 'WEBPT9',
});

const bigKnell = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 38,
    specialty: 'Teaching',
    catchPhrase: 'Shamalama Dingdong'
});

const misterRogers = new TeamLead({
    name: 'Charles',
    location: 'Oklahoma',
    age: '106',
    gradClassName: 'WEB1',
    favInstructor: 'Big Knell',
});

console.log(misterRogers.debugsCode(subject))