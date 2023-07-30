import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  async generatePdfWithValues(placeholderValues: { [key: string]: string }): Promise<Uint8Array> {
    const pdfBytes = await fetch('assets/IDs/IDD').then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;
    const textOptions = { font, size: fontSize, color: rgb(0, 0, 0) };

    // Get the first page of the PDF
    const page = pdfDoc.getPages()[0];

    // Replace the placeholders on the page with updated values
    for (const key in placeholderValues) {
      if (placeholderValues.hasOwnProperty(key)) {
        const value = placeholderValues[key];
        const placeholderRegex = new RegExp(`\\[${key}\\]`, 'g');
        const { x, y } = this.findPlaceholderPosition(page, placeholderRegex);
        page.drawText(value, { x, y, ...textOptions });
      }
    }

    // Save the modified PDF
    //how to modify pdf document by replacing placeholders with values from api/database using agular
    const modifiedPdfBytes = await pdfDoc.save();
    return modifiedPdfBytes;
  }

  private findPlaceholderPosition(page:any, regex:any): { x: number; y: number } {
    const fontSize = 12; // Adjust this according to your font size
    const text = page.getTextContent();
    for (const item of text.items) {
      const str = item.str;
      const matches = [...str.matchAll(regex)];
      if (matches.length > 0) {
        const { x, y } = item.transform[4];
        return { x, y: y - fontSize }; // Adjust y position based on font size
      }
    }
    return { x: 0, y: 0 };
  }
}
