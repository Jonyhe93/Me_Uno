import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  formEvent: FormGroup;

  constructor(private eventService: EventService, private router: Router) {
    this.formEvent = new FormGroup({
      titulo: new FormControl("", []),
      imagen: new FormControl("", []),
      descripcion: new FormControl("", []),
      fecha: new FormControl("", []),
      lugar: new FormControl("", []),

    }, []);
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    const response: any = await this.eventService.create(this.formEvent.value)
    console.log(response)
  }

}
