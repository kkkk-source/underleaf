import { Component, OnInit } from '@angular/core';
import { ResearchModel } from './model/research-model';

@Component({
  selector: 'research-page',
  templateUrl: './research-page.component.html',
})
export class ResearchPageComponent implements OnInit {

	private research: Array<ResearchModel>;

	ngOnInit(): void {
		this.research = [
			{ "id": 0, "title": "Investigacion A", "description": "Lorem ipsum dolor sit amet", "state": "Working on it" },
			{ "id": 1, "title": "Investigacion B", "description": "Lorem ipsum dolor sit amet", "state": "Done" },
			{ "id": 2, "title": "Investigacion C", "description": "Lorem ipsum dolor sit amet", "state": "Stuck" },
		];
	}


/*  tasks: Array<TaskModel> = [
	  { "id": 0, "title": "Redefinir Objetivos", "users": [ {"id": 0, "name": "carlos"} ], "state": "on" },
	  { "id": 1, "title": "Redefinir Objetivos", "users": [ {"id": 0, "name": "carlos"} ], "state": "on" },
	  { "id": 2, "title": "Redefinir Objetivos", "users": [ {"id": 0, "name": "carlos"} ], "state": "on" },
  ]; */
}
