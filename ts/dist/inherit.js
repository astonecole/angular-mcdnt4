class Animal {
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
    constructor() {
        this.animaux = [];
    }
    animation() {
        for (let a of this.animaux) {
            console.log(a.deplacer());
        }
    }
}
let a = new Lion();
let p = new Park();
p.animaux = [
    new Lion(),
    new Aigle(),
    new Marmotte(),
];
p.animation();
