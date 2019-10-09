import { Injectable } from '@angular/core';
import { Article } from './article/article.model';
import { ArticlesService } from './articles.service'

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor(private articlesService : ArticlesService) { }

  flagArticle(flagged: Article): void {
    let articles = this.articlesService.getArticles();    

    let len = articles.length;
    let minVotes = 0;
    if (articles.length > 0) {
      minVotes = articles[0].votes;
    }
    
    for (let i = 0; i < len; ++i) {
      console.log(articles[i].votes);
      if (articles[i].votes < minVotes) minVotes = articles[i].votes;
    }

    if (minVotes == 0)
    {
      flagged.votes = 0;
    }
    else {
      while (flagged.votes >= minVotes) {
        flagged.voteDown();
      }
    }
  }


}
