
export class Comment {
    constructor(
        public id: number,
        public text: string,
        public createdAt: Date
    ) {}
}

class TV {
    private volume: number;

    setVolume(value: number) {
        if (value <= 100) {
            this.volume = value;
        }
    }

    getVolume(): number {
        return this.volume;
    }
}

// let c = new TV();
// c.setVolume(10);