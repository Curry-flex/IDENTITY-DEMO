import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent {
  generateBackPDF() {
    const element = document.querySelector('.id-card-back');
    if (element instanceof HTMLElement) {
      html2canvas(element).then(canvas => {
        const pdf = new jsPDF('p', 'in', [2.125, 3.375]); // PDF size in inches (same as the ID card)
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0, 2.125, 3.375);
        pdf.save('id_card_back.pdf');
      });
    } else {
      console.error('Back side element not found.');
    }
  }

  ngAfterViewInit() {
    // Additional logic after the view is initialized, if needed
  }

}
