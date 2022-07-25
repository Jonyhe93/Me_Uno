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
      this.arrEvents = await this.eventService.getAll();

    } catch (err) {
      console.log(err)
    }

  }
  async deleteEvent(pId: number | undefined): Promise<void> {
    try {
      const response = await this.eventService.delete(pId);
      alert(response);
    } catch (error) {
      console.log(error)
    }

  }
}
