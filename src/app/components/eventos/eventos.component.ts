import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  arrEvents: Event[] = [];
  constructor(private eventService: EventService) { }

  async ngOnInit(): Promise<any> {

    try {
      const response: any = await this.eventService.getAll();
      this.arrEvents = response.data;
      console.log(this.arrEvents)
    } catch (err) {
      console.log(err)
    }

  }

}
