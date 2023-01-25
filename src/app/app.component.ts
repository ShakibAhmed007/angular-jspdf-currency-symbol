import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { RobotoFont } from './vfs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular JsPdf Currency Symbol Example';
  symbol = '₹';
  symbols = ['$', '€', '£', '¥', '₣', '₹'];

  @ViewChild('content') content: ElementRef;

  setTextAndSaveAsPdf() {
    const doc = new jsPDF();
    doc.addFileToVFS('Roboto-Regular.ttf', RobotoFont);
    doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
    doc.setFont('Roboto-Regular');
    doc.text(`Price =  ${this.symbol}100`, 10, 10);
    doc.save('a.pdf');
  }

  convertHtmlToPdfAndSaveAsPdf() {
    const doc = new jsPDF();
    doc.addFileToVFS('Roboto-Regular.ttf', RobotoFont);
    doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
    doc.setFont('Roboto-Regular');

    let html = document.getElementById('preview').innerHTML;
    html = html.replace(/width="100%"/, 'width="565"');
    doc.html(html, {
      callback: function (pdf) {
        pdf.save('b.pdf');
      },
      margin: [10, 15],
    });
  }

  convertHtmlToPdfAndOpenNewWindow() {
    const doc = new jsPDF();
    doc.addFileToVFS('Roboto-Regular.ttf', RobotoFont);
    doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
    doc.setFont('Roboto-Regular');

    let html = document.getElementById('preview').innerHTML;
    html = html.replace(/width="100%"/, 'width="565"');
    doc.html(html, {
      margin: [10, 15],
      callback: function (pdf) {
        pdf.output('dataurlnewwindow');
      },
    });
  }
}
