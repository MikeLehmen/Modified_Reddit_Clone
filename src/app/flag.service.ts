import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor() { }

  flagArticle(flagged: Article, articles: Article[]): void {
    console.log("in FlagService flag article");

    let len = articles.length;
    let minVotes = 0;
    if (articles.length > 0) {
      minVotes = articles[0].votes;
    }
    
    for (let i = 0; i < len; ++i) {
      console.log(articles[i].votes);
      if (articles[i].votes < minVotes) minVotes = articles[i].votes;
    }

    while (flagged.votes >= minVotes) {
      flagged.voteDown();
    }
  }


}
