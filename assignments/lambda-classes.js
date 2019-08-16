// CODE here for your Lambda Classes

class Person{
    constructor(atts){
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location
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
        return `Today we are learning about ${subject}.`
    };
    grade(student, subject){
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
        function logArrayElements(element, index) {
            console.log('[' + index + '] ' + element);
          }
        return this.favSubjects.forEach(logArrayElements);
    };
    PRAssignment(student, subject){
        return `${student.name} has submitted a PR for ${subject}.`
    };
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${subject}.`
    };
};

class TeamLead extends Instructor{
    constructor(tlAtts){
        super(tlAtts);
        this.gradClassName = tlAtts.gradClassName;
        this.favInstructor = tlAtts.favInstructor;
    };

    standUp(name, channel){
        return `${name} announces to ${channel}, @channel standy times!`
    };
    debugsCode(name, student, subject){
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
    favLanguage: ['JavaScript', 'Python', 'Elm'],
    catchPhrase: 'Shamalama Dingdong'
});

const misterRogers = new TeamLead({
    name: 'Charles',
    location: 'Oklahoma',
    age: '106',
    specialty: 'Learning',
    favLanguage: ['JavaScript', 'Python', 'Elm'],
    catchPhrase: 'Do your AirTable!',
    gradClassName: 'WEB1',
    favInstructor: 'Big Knell',
});

console.log(jake.age);
console.log(jake.location);
console.log(jake.speak());
console.log(jake.listsSubjects());
console.log(jake.PRAssignment(jake, jake.favSubjects[2]));
console.log(jake.sprintChallenge(jake, jake.favSubjects[0]));
console.log(bigKnell.name);
console.log(bigKnell.specialty);
console.log(bigKnell.catchPhrase);
console.log(bigKnell.grade(jake, jake.favSubjects[0]));
console.log(bigKnell.demo(bigKnell.favLanguage[1]));
console.log(misterRogers.age);
console.log(misterRogers.gradClassName);
console.log(misterRogers.specialty);
console.log(misterRogers.catchPhrase);
console.log(misterRogers.standUp(misterRogers.name, 'webpt9_charles'));
console.log(misterRogers.debugsCode(misterRogers.name, jake, jake.favSubjects[0]));
console.log(jake.PRAssignment(jake, 'JavaScript'));
console.log(jake.sprintChallenge(jake, 'Python'));
console.log(bigKnell.demo('HTML'));
console.log(bigKnell.grade(jake, 'CSS'));
console.log(misterRogers.standUp('Charles', 'webpt9_charles'));
console.log(misterRogers.debugsCode('Jake', 'JavaScript'));