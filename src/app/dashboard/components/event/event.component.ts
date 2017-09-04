import { Component, OnInit, Input, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, AfterViewChecked {
  @Input('event') event;
  @Input('datafilled') datafilled;
  @Output() updated: EventEmitter<Object> = new EventEmitter();
  @Output() delete: EventEmitter<String> = new EventEmitter();

  private firstLoad = true;

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    this.initDatePicker();
  }

  ngAfterViewChecked() {
  }

  private initDatePicker() {
    this.mainService.jQuery('.event-date-picker').datetimepicker({
      format: 'MM/DD/YYYY h:mm A',
      icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-chevron-up',
        down: 'fa fa-chevron-down',
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove',
        inline: true
      }
    });
  }

  private eventUpdated() {
    this.updated.emit(this.event);
  }

  private timeChanged(evt) {
    const today = new Date();
    const newDate = new Date(evt.target.value);

    this.event.date = this.mainService.getDateTimeString(today.getTime() > newDate.getTime()
      ? new Date(today.getTime() + 1000 * 60 * 60 * 24)
      : new Date(evt.target.value));

    this.eventUpdated();
  }

  private notifyTimeChanged(evt) {
    this.event.notifyDate = this.mainService.getDateTimeString(new Date(evt.target.value));
    this.eventUpdated();
  }

  private imageUpdated(imgUrl) {
    this.event.imgUrl = imgUrl;
    this.updated.emit(this.event);
  }

  private deleteEvent() {
    this.delete.emit('delete');
  }

  private sendNotification() {
    this.mainService.sendNotification(this.event).subscribe(
      d => {

      },
      e => {
        console.log(e);
      }
    );
  }
}
