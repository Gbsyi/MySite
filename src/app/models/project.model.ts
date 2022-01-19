export class Project{
    title:string;
    description:string;
    tags:Array<string>;
    haveGithub:boolean;
    gitHub:string;
    haveDemo:boolean;
    demoLink:string;

    constructor(title:string,description:string,tags:Array<string>,haveGithub:boolean,haveDemo:boolean, github="",demoLink=""){
      this.title = title;
      this.description = description;
      this.tags = tags;
      this.haveGithub = haveGithub;
      this.gitHub = github;
      this.haveDemo = haveDemo;
      this.demoLink = demoLink;
    }
  }