import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.css']
})
export class CardBackComponent {

  generatePDF() {
    const element = document.querySelector('.id-card');
    if (element instanceof HTMLElement) {
      html2canvas(element).then(canvas => {
        const pdf = new jsPDF('l', 'in', [3.375, 2.125]); // PDF size in inches (identity card format)
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0, 3.375, 2.125);
        pdf.save('student_id_card.pdf');
      });
    } else {
      console.error('ID card element not found.');
    }
  }

  ngAfterViewInit() {
    // Additional logic after the view is initialized, if needed
  }
}
