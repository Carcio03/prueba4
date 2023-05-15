import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetComponent } from './sweet/sweet.component';
import { HabitacionListComponent } from './habitacion-list/habitacion-list.component';
import { FormsModule } from '@angular/forms'; // importa el módulo FormsModule
import { HabitacionService } from './habitacion.service';
import { CommentsComponent } from './comments/comments.component';
import { LocalStorageService } from './localstorage.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { VideoPipe } from './video.pipe';
import { MasonrryComponent } from './masonrry/masonrry.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CommonModule } from '@angular/common';
import { MapboxComponent } from './mapbox/mapbox.component';
import { TablaComponent } from './tabla/tabla.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [		
    AppComponent,
    RegistroComponent,
    HomeComponent,
    AboutComponent,
    ReservacionesComponent,
    GaleriaComponent,
    HeaderComponent,
    SweetComponent,
      HabitacionListComponent,
      CommentsComponent,
      VideoPipe,MasonrryComponent,
      MapboxComponent,
      TablaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    NgxMasonryModule,
    CommonModule
    MatSelectModule
  ],
  providers: [HabitacionService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
