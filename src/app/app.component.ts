import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { CardService } from './card.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import * as JsBarcode from 'jsbarcode';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  memberNumber: string = '00009786';
  memberName: string = 'HALIMA ISSA ABDULLI';

  barcodeWidth: number = 200; // Set the desired width (in pixels)
  barcodeHeight: number = 100; // Set the desired height (in pixels)

  @ViewChild('barcodeElement', { static: true })
  barcodeElement!: ElementRef;
  pdfSrc: SafeResourceUrl | undefined;
  pdfAssetPath = 'assets/IDs/replace.pdf'; // Update with the correct path to your PDF file

  constructor(){}
  ngOnInit(): void {
    this.generateBarcode()
  }
    generatePDF() {
      const element = document.querySelector('.id-card');
      if (element instanceof HTMLElement){
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

    // generateBarcode(): void {
    //   const fullData = `Member Number: ${this.memberNumber}\nMember Name: ${this.memberName}`;
    //   JsBarcode(this.barcodeElement.nativeElement, fullData, {
    //     format: 'CODE128', // Barcode type (you can use other types supported by JsBarcode)
    //     displayValue: true, // Display the barcode data as text below the barcode
    //   });
    // }

    generateBarcode(): void {
      const fullData = `Member Number: ${this.memberNumber}\nMember Name: ${this.memberName}`;
      JsBarcode(this.barcodeElement.nativeElement, fullData, {
        format: 'CODE128',
        displayValue: true,
        width: this.barcodeWidth, // Pass the desired width to the options
        height: this.barcodeHeight, // Pass the desired height to the options
      });
    }
    
}


