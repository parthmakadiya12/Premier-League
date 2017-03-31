import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamService } from '../../services/teamservice.service';

@Component({
  templateUrl: 'build/pages/team-detail/team-detail.page.html',
  providers:[TeamService]
})
export class TeamDetailPage {

  team: any;
  teamInfo:string;
  constructor(private nav: NavController, private navParams: NavParams,public teamService:TeamService) {
    this.team = this.navParams.data;
    console.log('**nav params:', this.navParams);
    
    this.teamService.getTeamData(this.team.wikiName).subscribe((data)=>{
      console.log(data);
  
      this.teamInfo=this.fetchParagraph(data);

    },(error)=>{
      console.log(error);
    });

    
  }

  fetchParagraph(data){
    (<any>window).data = data;
        var text = data.parse.text['*'].split("<p>");
        
    var pText = "";

    for (let p in text) {
      //Remove html comment
      text[p] = text[p].split("<!--");
      if (text[p].length > 1) {
        text[p][0] = text[p][0].split(/\r\n|\r|\n/);
        text[p][0] = text[p][0][0];
        text[p][0] += "</p> ";
      }
      text[p] = text[p][0];

      //Construct a string from paragraphs
      if (text[p].indexOf("</p>") == text[p].length - 5) {
        var htmlStrip = text[p].replace(/<(?:.|\n)*?>/gm, '') //Remove HTML
        var splitNewline = htmlStrip.split(/\r\n|\r|\n/); //Split on newlines
        for (let newline in splitNewline) {
          if (splitNewline[newline].substring(0, 11) != "Cite error:") {
            pText += splitNewline[newline];
            pText += "\n";
          }
        }
      }
    }
    pText = pText.substring(0, pText.length - 2); //Remove extra newline
    pText = pText.replace(/\[\d+\]/g, ""); //Remove reference tags (e.x. [1], [4], etc)

    return pText;
    }

  

  
}
