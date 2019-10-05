import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', "administrator", 3),
      new Article('Fullstack', 'http://fullstack.io', "user", 2),
      new Article('Angular Homepage', 'http://angular.io', "administrator", 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link ${link.value}`);
    this.articles.push(new Article(title.value, link.value, "user", 0));      // Default to user for now
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
