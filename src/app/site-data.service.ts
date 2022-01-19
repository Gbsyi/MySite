import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import ListModel from './models/ListModel';
import { Project } from './models/project.model';
import Skill from './models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  private education: Array<ListModel> = [];
  private projects: Array<Project> = [];
  private skills: Array<Skill> = [];
  
  private host: string = "http://localhost:8080"

  async getEducation(): Promise<Array<ListModel>>{
    if(this.education.length < 1){
      const options = {
        method: "GET",
        body: null,
        headers: {
          "Accept":"*/*",
          "Content-Type": "application/json",
        }
      }
      const response = await fetch( this.host + "/education", options);
      const data = await response.json();
      this.education = data;
    }
    return this.education;
  }

  async getProjects() : Promise<Array<Project>>{
    try{
      const options = {
        method: "GET",
        body: null,
        headers: {
          "Accept":"*/*",
          "Content-Type": "application/json",
        }
      }

      if(this.projects.length <= 1){
        const response = await fetch(this.host + "/projects", options);
        const data = await response.json();
        console.log(data);
        this.projects = data
      }
    }
    catch(e){
      console.log(e);
    }
    return this.projects;
  }

  async getSkills() : Promise<Array<Skill>>{
    try{
      const options = {
        method: "GET",
        body: null,
        headers: {
          "Accept":"*/*",
          "Content-Type": "application/json",
        }
      }

      if(this.skills.length <= 1){
        const response = await fetch(this.host + "/skills", options);
        const data = await response.json();
        console.log(data);
        this.skills = data;
      }
    }
    catch(e){
      console.log(e);
    }
    return this.skills;
  }
  constructor() { }
}
