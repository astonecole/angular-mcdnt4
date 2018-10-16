abstract class Animal {
    poids: number;
    age: number;
    nom: string;

    abstract deplacer();
}

class Lion extends Animal {
    deplacer() {
        return 'Je marche comme un Lion';
    }
}

class Aigle extends Animal {
    deplacer() {
        return 'Je vole comme un Aigle';
    }
}

class Marmotte extends Animal {
    deplacer() {
        return 'Je marche tel une marmotte';
    }
}

class Park {
    animaux: Animal[] = [];

    animation() {
        for (let a of this.animaux) {
            console.log(a.deplacer());
        }
    }
}

let a: Animal = new Lion();
let p: Park = new Park();

p.animaux = [
    new Lion(),
    new Aigle(),
    new Marmotte(),
];

p.animation();