import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // AppComponent just holds a handle to the array given to it by ArticlesService
  articles: Article[];

  constructor(private articlesService : ArticlesService) {
    this.articles = this.articlesService.getArticles();
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
