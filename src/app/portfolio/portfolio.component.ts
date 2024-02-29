import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService} from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
 
  
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  python: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  angular: boolean = false;
  javascript: boolean = false; 
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
      this.titleService.setTitle('Luis Barrera - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }

    if(this.python || this.javascript || this.java || this.typescript || this.nodejs || this.angular) {
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

    ResetFilters(){
      this.typescript = false;
      this.java = false;
      this.javascript = false;
      this.python = false;
      this.angular = false;
      this.nodejs = false;
      this.filtering = false;
      
      this.projects = this.projectService.GetProjects();
    }

  
}
