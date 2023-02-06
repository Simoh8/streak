import interfaceTask from "../interfaces/interfaceTask";

class taskClass implements interfaceTask{
   task:string

    imageURL:string
    date:Date
    id:number


    constructor(task:string,imageURL:string,date:Date){

        this.task = task
        this.imageURL =imageURL
        this.date=date
        this.id = this.generateID()
        
    }
    generateID(){
        return Math.floor(Math.random()*100)
    }

}

export default taskClass