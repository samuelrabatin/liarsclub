import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent implements OnInit {
  private title;
  private description;
  private expanded = true;

  @Output() added: EventEmitter<string> = new EventEmitter();

  constructor( private mainService: MainService ) { }

  ngOnInit() {
  }

  private addForum() {
    this.mainService.addForum({title: this.title, description: this.description}).subscribe(
      d => {
        this.title = '';
        this.description = '';
        this.added.emit('forum added');
      },
      e => {
        console.log(e);
      }
    );
  }

}
