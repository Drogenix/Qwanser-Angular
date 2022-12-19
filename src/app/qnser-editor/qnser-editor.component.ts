import { Component, OnInit } from '@angular/core';
import {Editor, Toolbar} from "ngx-editor";

@Component({
  selector: 'app-qnser-editor',
  templateUrl: './qnser-editor.component.html',
  styleUrls: ['./qnser-editor.component.css']
})
export class QnserEditorComponent implements OnInit {

  editor = new Editor();

  editorHtml = '';

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['link', 'image'],
    ['text_color', 'background_color']
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
