import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../app/habitacion.service';
import { Habitacion } from '.vscode/habitaciones';
import { CommentsComponent } from './../comments/comments.component';




@Component({
  selector: 'app-habitacion-list',
  templateUrl: './habitacion-list.component.html',
  styleUrls: ['./habitacion-list.component.css']
})
export class HabitacionListComponent implements OnInit {
  comments: string[] = [];

  habitaciones: Habitacion[] = [];
  constructor(private habitacionService: HabitacionService) {}
  ngOnInit() {
    this.getHabitaciones();
  }
  getHabitaciones(): void {
    this.habitacionService.getHabitaciones()
      .subscribe(habitaciones => this.habitaciones = habitaciones);
  }
  onNewCommentAdded(comment: string) {
    this.comments.push(comment);
  }

}
