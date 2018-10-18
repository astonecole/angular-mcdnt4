
export interface Subject {
    addObserver(observer: Observer);
    notify();
}

export interface NewsSubject extends Subject {
    getContent(): string
}

export interface Observer {
    update(subject: Subject)
}

export class NewsPaper implements NewsSubject {
    private name: string;
    private content: string;
    private observers: Observer[] = [];

    breakOutNews(content: string) {
        this.content = content;
        this.notify();
    }

    getContent(): string {
        return this.content;
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notify() {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }
}

export class Reader implements Observer {
    constructor(private name: string) { }

    update(subject: NewsSubject) {
        console.log(`${this.name}`, 'is reading breakout news', subject.getContent());
    }
}
