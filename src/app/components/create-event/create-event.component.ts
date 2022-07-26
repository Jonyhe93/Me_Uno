import { PercentPipe } from '@angular/common';
import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  formEvent: FormGroup;
  type: string = 'Crear';
  constructor(
    private eventService: EventService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {

    this.formEvent = new FormGroup({
      titulo: new FormControl("", []),
      imagen: new FormControl("", []),
      descripcion: new FormControl("", []),
      fecha: new FormControl("", []),
      lugar: new FormControl("", []),

    }, []);
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(async (params: any) => {
      const id = parseInt(params.idevent);
      if (id) {
        this.type = 'Modificar'
        const response = await this.eventService.getById(id)
        this.formEvent = new FormGroup({
          titulo: new FormControl(response.titulo, []),
          imagen: new FormControl(response.imagen, []),
          descripcion: new FormControl(response.descripcion, []),
          fecha: new FormControl(response.fecha, []),
          lugar: new FormControl(response.lugar, []),
          id: new FormControl(response.id, [])
        }, []);
      }
    })
  }

  async onSubmit(): Promise<void> {
    if (this.formEvent.value.id) {
      const response = await this.eventService.update(this.formEvent.value)
      console.log(response)
    } else {
      
      const response: any = await this.eventService.create(this.formEvent.value)
    console.log(response)
    }
    
  }

}


