import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamHomePage } from '../pages';

@Component({
  templateUrl: 'build/pages/teams/teams.page.html',
})
export class TeamsPage {


  teams = [
    { id: 1, name: 'Chelsea' ,imgurl:'https://goo.gl/0xuBLv',wikiName:"Chelsea_F.C." },
    { id: 2, name: 'Man United', imgurl: 'https://goo.gl/Ip0Sdb', wikiName:"Manchester_United_F.C." },
    { id: 3, name: 'Man City' ,imgurl: 'https://goo.gl/6IMQFM', wikiName:"Manchester_City_F.C." },
    { id: 4, name: 'Arsenal' ,imgurl: 'http://www.arsenalinsider.com/wp-content/uploads/2013/09/arsenal-football-club-exclusive-article.jpg', wikiName:"Arsenal_F.C." },
    { id: 5, name: 'Liverpool' ,imgurl: 'http://i3.liverpoolecho.co.uk/incoming/article11619389.ece/ALTERNATES/s615b/JS94998915.jpg', wikiName:"Liverpool_F.C." },
    { id: 6, name: 'Tottenham ' ,imgurl: 'http://3.bp.blogspot.com/-c7tOMvbpd7o/VnsX_wYH2_I/AAAAAAAAecg/0G24ZWBt3NY/s1600/tottenham-hotspur.jpg', wikiName:"Tottenham_Hotspur_F.C." },
    { id: 7, name: 'Everton' ,imgurl: 'http://www.downwithdesign.com/wp-content/uploads/2013/05/new-everton-logo2.jpg', wikiName:"Everton_F.C." },
    { id: 7, name: 'Leicester' ,imgurl: 'http://www.styledbyluc.com/wp-content/uploads/2016/05/Leicester1.jpg', wikiName:"Leicester" },
    { id: 7, name: 'West Bromwich Albion' ,imgurl: 'https://www.newsbreak.ng/wp-content/uploads/2016/08/westbrom.png', wikiName:"West_Bromwich_Albion_F.C." },

    


    
    
  ];


  constructor(private nav: NavController) {

  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team); 
  }
}
