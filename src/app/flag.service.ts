import { Injectable } from '@angular/core';
import { Article } from './article/article.model';
import { ArticlesService } from './articles.service'

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor(private articlesService : ArticlesService) { }

  flagArticle(flagged: Article): void {

    // this helper should probably live in the ArticlesService, but nothing else needs to find the min votes so here makes sense
    // you could probably argue it either way
    function findMinVotes(articles: Article[]): number {
      let len = articles.length;
      let minVotes = 0;
      if (articles.length > 0) {
        minVotes = articles[0].votes;
      }
      
      for (let i = 0; i < len; ++i) {
        //console.log(articles[i].votes);
        if (articles[i].votes < minVotes) minVotes = articles[i].votes;
      }

      return minVotes;
    }

    let articles = this.articlesService.getArticles();    
    let minVotes = findMinVotes(articles);
    
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
