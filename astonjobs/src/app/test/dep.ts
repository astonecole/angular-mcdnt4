
class Doc {
    name: string;
    content: string;
    dateDoc: Date;
}

class Editor {
    doc: Doc;

    constructor(doc: Doc) {
        this.doc = doc;
    }
}

let doc = new Doc();
let editor = new Editor(doc);
