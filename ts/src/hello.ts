let prenom: string = 'John';

function sayHello(name: string, session: number): string {
    return `(Session: ${session}): Hello ${name}`;
}

console.log(sayHello('Stan Smith', 4));

let names: string[] = [];

names.push('Stan');
names.push('Roger');
names.push('Francine');

console.log(names);

class Person {

}

class User extends Person {
    name: string;
    firstname: string;
    lastname: string;
    tags: {name: string, value: string}[] = [
        {name: 'loisir', value: 'velo'},
        {name: 'travail', value: 'dev'}
    ];

    presentation(): string {
        return `${this.name} ${this.firstname} ${this.lastname}`;
    }
}

let user = new User();
console.log(user.presentation());
console.log(user.tags[0].name, user.tags[0].value);
