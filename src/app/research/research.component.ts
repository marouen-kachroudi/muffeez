import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor(private http: HttpClient, private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.titleService.setTitle('Marouen Kachroudi | Research');
  }

}
