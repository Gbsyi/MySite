export default class ListModel{
    title: string;
    startDate: string;
    endDate: string;
    additionalInfo: string;
    content: string;

    constructor(title: string, startDate: string, endDate: string, additionalInfo: string, content: string){
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.additionalInfo = additionalInfo;
        this.content = content;
    }
}