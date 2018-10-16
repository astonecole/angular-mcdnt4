interface DeleteHandler {
    delete();
}

class Browser implements DeleteHandler {
    delete() {
        console.log("Suppression du cache navigateur");
    }
}

class Computer implements DeleteHandler {
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

class FileLibAdapter implements DeleteHandler {
    fileLib: FileLib;

    constructor(fileLib: FileLib) {
        this.fileLib = fileLib;
    }

    delete() {
        this.fileLib.empty();
    }
}

let handlers: DeleteHandler[] = [
    new Computer(),
    new Browser(),
    new FileLibAdapter(new FileLib())
];

handlers.forEach((handler: DeleteHandler) => {
    handler.delete();
});
