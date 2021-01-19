import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResearchModel } from '../research-page/model/research-model';
import { TaskModel } from './model/task-model';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
})
export class TaskPageComponent implements OnInit {

	research: ResearchModel;

	tasks: Array<TaskModel>;

	researchs: Array<ResearchModel>;

	constructor(private router: ActivatedRoute) { }

	ngOnInit(): void {
		this.tasks = [
			{ "id": 0, "title": "Redefinir Objetivos",  "users": [ "logic", " elijah" ], "state": "Aprovado" },
			{ "id": 1, "title": "Usar Referencias",     "users": [ "cole", " savage" ], "state": "Aprovado" },
			{ "id": 2, "title": "Identificar Recursos", "users": [ "pete", " smooth" ], "state": "Aprovado" },
		];
		this.researchs = [
			{ "id": 0, "title": "Investigación A", "description": "Lorem ipsum dolor sit amet", "state": "Trabajando en ello" },
			{ "id": 1, "title": "Investigación B", "description": "Lorem ipsum dolor sit amet", "state": "Hecho" },
			{ "id": 2, "title": "Investigación C", "description": "Lorem ipsum dolor sit amet", "state": "Atascado" },
		];
		this.router.paramMap.subscribe(params => {
			this.research = this.researchs[params.get('id')];
		});
	}
}

