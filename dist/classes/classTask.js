class taskClass {
    constructor(task, imageURL, date) {
        this.task = task;
        this.imageURL = imageURL;
        this.date = date;
        this.id = this.generateID();
    }
    generateID() {
        return Math.floor(Math.random() * 100);
    }
}
export default taskClass;
