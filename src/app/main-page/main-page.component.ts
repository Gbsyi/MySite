import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import ListModel from '../models/ListModel';
import { Project } from '../models/project.model';
import Skill from '../models/Skill';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [SiteDataService]
})
export class MainPageComponent implements OnInit {

  isLoaded: boolean = false;
  skills: Array<Skill> = [];
  projects: Array<Project> = [];
  educationList : Array<ListModel> = [];

  constructor(private dataService: SiteDataService) {}
  
  async getData(): Promise<void>{
    
    const promises = [
      this.dataService.getEducation().then((list: Array<ListModel>) => this.educationList = list),
      this.dataService.getProjects().then((list: Array<Project>) => this.projects = list),
      this.dataService.getSkills().then((list: Array<Skill>) => this.skills = list)
    ];
    await Promise.allSettled(promises);
    this.isLoaded = true;
  }

  ngOnInit(): void {
      this.getData();
  }

}
