import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-manage-clubs',
  templateUrl: './manage-clubs.component.html',
  styleUrls: ['./manage-clubs.component.css']
})
export class ManageClubsComponent implements OnInit {
  private clubs = [];
  @ViewChild('tblBody') private tblBody;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getClubs();
  }

  public getClubs() {
    this.mainService.getClubs().subscribe(
      d => {
        this.clubs = d.data;
        for (let i = 0; i < this.clubs.length; i++) {
          const taggedUsers = this.clubs[i].taggedUsers.map((val, index) => { return val.user; });
          const index = taggedUsers.indexOf(localStorage.getItem('username'));
          if (index !== -1) {
            this.clubs[i].tagged = true;
            this.clubs[i].tagInfo = this.clubs[i].taggedUsers[index];
          } else {
            this.clubs[i].tagged = false;
          }
        }

        this.generateLines();
        this.mainService.loading = false;
      },
      e => { console.log(e); this.mainService.loading = false; }
    );
  }

  public generateLines() {
    let line = '';
    for (let j = 0; j < this.clubs.length; j++) {
      const club = this.clubs[j];
      for (let i = 0; i < club.taggedUsers.length; i++) {
        const item = club.taggedUsers[i];
        const taggedDate = new Date(item.taggedDate);
        line += `<tr>
          <td class="text-left">${club.title}</td>
          <td class="text-center">${item.user}</td>
          <td class="text-center">${item.memberState}</td>
          <td class="text-center">${item.memberType}</td>
          <td class="text-center">${taggedDate.getFullYear()}-${taggedDate.getMonth() + 1 > 9 ?
          taggedDate.getMonth() + 1 : '0' + (taggedDate.getMonth() + 1)}-${taggedDate.getDay() > 9
          ? taggedDate.getDay() : '0' + taggedDate.getDay()}</td>
          <td class="text-center">
            <button type="button" club-id="${club._id}" username="${item.user}" rel="tooltip" class="btn btn-danger">
              <i class="material-icons">close</i>
            </button>
          </td>
        </tr>`;
      }
    }
    this.tblBody.nativeElement.innerHTML = line;
  }

  public tblClicked(evt) {
    if (evt.target.tagName === 'BUTTON') {
      const clubId = evt.target.getAttribute('club-id');
      const username = evt.target.getAttribute('username');
      this.mainService.untagClubWithUsername(clubId, username).subscribe(
        d => { this.getClubs(); },
        e => { console.log(e); }
      );
    }
  }
}
