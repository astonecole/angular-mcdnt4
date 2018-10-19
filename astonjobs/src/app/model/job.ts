
export class Job {
    public id: string;

    constructor(
        public title: string,
        public company: string,
        public city: string,
        public zipcode: string,
        public description: string,
        public contractType: string,
        public startDate: Date,
        public publishedDate: Date,
    ) { };
}
