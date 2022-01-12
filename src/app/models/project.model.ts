export class Project{
    title:string;
    description:string;
    tags:Array<string>;
    haveGithub:boolean;
    gitHub:string;
    constructor(title:string,description:string,tags:Array<string>,haveGithub:boolean,github=""){
      this.title = title;
      this.description = description;
      this.tags = tags;
      this.haveGithub = haveGithub;
      this.gitHub = github;
    }
  }