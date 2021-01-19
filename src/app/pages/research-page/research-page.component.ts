import { Component, OnInit } from '@angular/core';
import { ResearchModel } from './model/research-model';

@Component({
  selector: 'research-page',
  templateUrl: './research-page.component.html',
})
export class ResearchPageComponent implements OnInit {

	research: Array<ResearchModel>;

	ngOnInit(): void {
		this.research = [
			{ "id": 0, "title": "Investigación A", "description": "Lorem ipsum dolor sit amet", "state": "Trabajando en ello" },
			{ "id": 1, "title": "Investigación B", "description": "Lorem ipsum dolor sit amet", "state": "Hecho" },
			{ "id": 2, "title": "Investigación C", "description": "Lorem ipsum dolor sit amet", "state": "Atascado" },
		];
	}
}
