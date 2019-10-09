import { Injectable } from '@angular/core';
import { Article } from './article/article.model'

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  // ArticlesService owns articles array
  private poArticles : Article[];

  constructor() { 
    this.poArticles = [
      new Article('Angular', 'http://angular.io', "administrator", 5),
      new Article('Fullstack', 'http://fullstack.io', "user", 4),
      new Article('Angular Homepage', 'http://angular.io', "administrator", 3)
    ];
  }

  getArticles(): Article[] {
    return this.poArticles;
  }
}
