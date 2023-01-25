import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @ViewChild('content') content: ElementRef;

  makePdf() {
    const doc = new jsPDF();
    doc.text('Hello world!   ₹ 10 101 01', 10, 10);
    doc.save('a4.pdf');
  }
}
