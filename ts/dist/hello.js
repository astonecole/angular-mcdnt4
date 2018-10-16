let prenom = 'John';
function sayHello(name, session) {
    return `(Session: ${session}): Hello ${name}`;
}
console.log(sayHello('Stan Smith', 4));
let names = [];
names.push('Stan');
names.push('Roger');
names.push('Francine');
console.log(names);
class Person {
}
class User extends Person {
    constructor() {
        super(...arguments);
        this.tags = [
            { name: 'loisir', value: 'velo' },
            { name: 'travail', value: 'dev' }
        ];
    }
    presentation() {
        return `${this.name} ${this.firstname} ${this.lastname}`;
    }
}
let user = new User();
console.log(user.presentation());
console.log(user.tags[0].name, user.tags[0].value);
