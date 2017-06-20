import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NotesService } from "app/notes.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes:any = [];
  constructor(private _NotesService:NotesService , private _router:Router) {
    _NotesService.get()
    .then(res => this.notes = res)
    .catch(err => console.log(err))
   }
  note = {};
  ngOnInit() {
  }

  createNote() {
    this._NotesService.create(this.note)
    .then( notes => this.notes = notes )
    .catch(err => console.log(err))
  }

}
