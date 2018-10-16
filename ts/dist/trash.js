class Browser {
    delete() {
        console.log("Suppression du cache navigateur");
    }
}
class Computer {
    delete() {
        console.log("La corbeille est vidée");
    }
}
// Télécharger Librairie externe.
class FileLib {
    empty() {
        console.log('Suppression du contenu du fichier');
    }
}
class FileLibAdapter {
    constructor(fileLib) {
        this.fileLib = fileLib;
    }
    delete() {
        this.fileLib.empty();
    }
}
let handlers = [
    new Computer(),
    new Browser(),
    new FileLibAdapter(new FileLib())
];
handlers.forEach((handler) => {
    handler.delete();
});
