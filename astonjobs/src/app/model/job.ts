
export class Job {
    public id = '';

    constructor(
        public title = '',
        public company = '',
        public city = '',
        public zipcode = '',
        public description = '',
        public contractType = '',
        public startDate = new Date(),
        public publishedDate = new Date(),
    ) { };
}
