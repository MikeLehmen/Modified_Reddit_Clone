import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Input() parentArticles: Article[];   // There has to be a better way of accessing this rather than passing a handle to every child

  constructor(private FlagService : FlagService) {

  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  flagArticle(articles: Article[]) {
    console.log("in article.component flagArticle");
    this.FlagService.flagArticle(this.article, this.parentArticles);
  }

  ngOnInit() {
  }

}
