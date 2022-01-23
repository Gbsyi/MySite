import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ListModel from '../models/ListModel';
import { Project } from '../models/project.model';
import Skill from '../models/Skill';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  isLoaded: boolean = true;
  skills: Array<Skill> = [];
  projects: Array<Project> = [];
  educationList : Array<ListModel> = [];

  constructor(private http:HttpClient) {}
  
  async loadData(){
    this.http.get("http://localhost:8080/projects").subscribe((data:any) => this.projects = data);
    this.http.get("http://localhost:8080/education").subscribe((data:any) => this.educationList = data);
    this.http.get("http://localhost:8080/skills").subscribe((data:any) => this.skills = data);
  }

  ngOnInit(): void {
      this.loadData();
  }

}
