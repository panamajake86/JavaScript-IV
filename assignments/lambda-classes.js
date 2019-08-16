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
    gradeStudent(student){
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          };
        function addGrade(){
            return student.grade = student.grade + getRandomInt(50);
        }
        return `${student.name}'s grade is now ${addGrade()}!`
    };
};

class Student extends Person{
    constructor(stuAtts){
        super(stuAtts);
        this.previousBackground = stuAtts.previousBackground;
        this.className = stuAtts.className;
        this.favSubjects = stuAtts.favSubjects;
        this.grade = stuAtts.grade;
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
    graduate(student){
        if(this.grade >= 70){
            return `${this.name} has graduated!`
        }else{
            return `${this.name} has more work to do.`
        }
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
    grade: 50,
});

const rach = new Student({
    name: 'Rachel',
    location: 'Arkansas',
    age: 57,
    favSubjects: ['Python', 'C++', 'Java'],
    previousBackground: 'Filmmaker',
    className: 'WEB29',
    grade: 40,
});

const bigKnell = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 38,
    specialty: 'Teaching',
    favLanguage: ['JavaScript', 'Python', 'Elm'],
    catchPhrase: 'Shamalama Dingdong'
});

const pace = new Instructor({
    name: 'Pace',
    location: 'Arizona',
    age: 80,
    specialty: 'Teaching',
    favLanguage: ['JavaScript', 'Python', 'Elm'],
    catchPhrase: 'I love you guys!'
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

const mrsSmith = new TeamLead({
    name: 'Becky',
    location: 'Massachusetts',
    age: '30',
    specialty: 'UX',
    favLanguage: ['JavaScript', 'Python', 'Elm'],
    catchPhrase: 'You got this!',
    gradClassName: 'WEB11',
    favInstructor: 'Pace',
});

console.log(jake.age);
console.log(rach.location);
console.log(jake.speak());
console.log(rach.listsSubjects());
console.log(jake.PRAssignment(jake, jake.favSubjects[2]));
console.log(rach.sprintChallenge(rach, rach.favSubjects[0]));
console.log(bigKnell.name);
console.log(pace.specialty);
console.log(bigKnell.catchPhrase);
console.log(pace.grade(rach, rach.favSubjects[0]));
console.log(bigKnell.demo(bigKnell.favLanguage[1]));
console.log(misterRogers.age);
console.log(mrsSmith.gradClassName);
console.log(misterRogers.specialty);
console.log(mrsSmith.catchPhrase);
console.log(misterRogers.standUp(misterRogers.name, 'webpt9_charles'));
console.log(mrsSmith.debugsCode(mrsSmith.name, jake, jake.favSubjects[0]));
console.log(rach.PRAssignment(rach, 'JavaScript'));
console.log(jake.sprintChallenge(jake, 'Python'));
console.log(bigKnell.demo('HTML'));
console.log(pace.grade(rach, 'CSS'));
console.log(misterRogers.standUp('Charles', 'webpt9_charles'));
console.log(mrsSmith.debugsCode('Becky', rach, 'JavaScript'));
console.log(bigKnell.gradeStudent(rach));
console.log(rach.graduate());
console.log(mrsSmith.gradeStudent(jake));
console.log(jake.graduate());