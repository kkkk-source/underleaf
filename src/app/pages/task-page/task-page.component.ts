import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResearchModel } from '../research-page/model/research-model';
import { TaskModel } from './model/task-model';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
})
export class TaskPageComponent implements OnInit {

	private research: ResearchModel;

	private tasks: Array<TaskModel>;

	private researchs: Array<ResearchModel>;

	constructor(private router: ActivatedRoute) { }

	ngOnInit(): void {
		this.tasks = [
			{ "id": 0, "title": "Redefinir Objetivos",  "users": [ "logic", "elijah" ], "state": "Aprovado" },
			{ "id": 1, "title": "Usar Referencias",     "users": [ "cole", "savage" ], "state": "Aprovado" },
			{ "id": 2, "title": "Identificar Recursos", "users": [ "pete", "smooth" ], "state": "Aprovado" },
		];
		this.researchs = [
			{ "id": 0, "title": "Investigacion A", "description": "Lorem ipsum dolor sit amet", "state": "Working on it" },
			{ "id": 1, "title": "Investigacion B", "description": "Lorem ipsum dolor sit amet", "state": "Done" },
			{ "id": 2, "title": "Investigacion C", "description": "Lorem ipsum dolor sit amet", "state": "Stuck" },
		];
		this.router.paramMap.subscribe(params => {
			this.research = this.researchs[params.get('id')];
		});
	}


}

