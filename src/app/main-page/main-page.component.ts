import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  projects: Project[] = [ 
    new Project(
      "Заметки, хранящиеся на сервере",
      " Суть проекта в том, чтобы научиться авторизовывать приложения и выдавать им разную информацию в зависимости от их ролей. <br/>"
      + "Приложение представляет собой сервис для создания, редактирования и удаления заметок.",
      ["ASP.NET", "C#", "JWT"],
      true,
      "https://github.com/Gbsyi/ApiApp"
    ),
    new Project(
      "Приложение со списком идей",
      " Суть проекта в том, чтобы научиться авторизовывать приложения и выдавать им разную информацию в зависимости от их ролей."
      + "Приложение представляет собой сервис для создания, редактирования и удаления заметок.",
      ["Node.js", "JavaScript", "Express"],
      true,
      "https://github.com/Gbsyi/IdeasListProject"
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
