import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TournamentsPage } from '../pages';

@Component({
    templateUrl: 'build/pages/my-teams/my-teams.page.html'
})
export class MyTeamsPage {

    constructor(private nav: NavController) { }

    plurl: string = 'https://1.bp.blogspot.com/-CRVSOZmm8vc/Vrp1sHkcpiI/AAAAAAAAzRw/MchhGmhk2EY/s1600/new-premier-league-logo-2016-17-9.jpg';
    goToTournaments() {
        this.nav.push(TournamentsPage);
    }

/*
    login() {
        GooglePlus.login(
            {}).then(function (success) {
                console.log("Successfully logged in");
            },function(error){
                console.log("Failure is There better luck next time");
            })
    }
*/
}
