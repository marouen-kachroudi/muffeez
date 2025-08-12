import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private http: HttpClient, private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.titleService.setTitle('Marouen Kachroudi | Articles');
  }

}
