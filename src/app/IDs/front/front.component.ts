import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {

  generateFrontPDF() {
    const element = document.querySelector('.id-card-front');
    if (element instanceof HTMLElement) {
      html2canvas(element).then(canvas => {
        const pdf = new jsPDF('p', 'in', [2.125, 3.375]); // PDF size in inches (same as the ID card)
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0, 2.125, 3.375);
        pdf.save('id_card_front.pdf');
      });
    } else {
      console.error('Front side element not found.');
    }
  }

  ngAfterViewInit() {
    // Additional logic after the view is initialized, if needed
  }

}
