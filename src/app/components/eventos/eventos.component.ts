import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  arrEvents: Event[] = [];
  constructor(private eventService: EventService, private router: Router) { }

  async ngOnInit(): Promise<any> {

    try {
      this.arrEvents = await this.eventService.getAll();
      console.log(this.arrEvents)
    } catch (err) {
      console.log(err)
    }

  }
  async deleteEvent(pId: number | undefined): Promise<void> {
    if (pId !== undefined) {
      try {
        const response = await this.eventService.delete(pId);
        if (response) {
          window.location.href = "/eventos";
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
