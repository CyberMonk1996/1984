import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { Observable, Observer, catchError, forkJoin, from, fromEvent, map, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-gilgamesh',
  templateUrl: './gilgamesh.component.html',
  styleUrls: ['./gilgamesh.component.scss'],
  standalone: true
})
export class GilgameshComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;

  fileContent$: Observable<string> = new Observable<string>();

//   constructor() {
//     this.initializeFileUpload();
//   }

    ngOnInit() {
  }

//   onFileSelected(event: any) {
//     // handle file selection logic here
//   }

//   private initializeFileUpload(): void {
//     const fileInput = this.fileInput.nativeElement;

//     const fileChange$ = fromEvent(fileInput, 'change').pipe(
//       map((event: any) => event.target.files[0])
//     );

//     this.fileContent$ = fileChange$.pipe(
//       switchMap((file: File) => this.readFileContent(file)),
//       switchMap((pdfUrl: string) => this.convertPDFToText(pdfUrl)),
//       catchError((error: any) => {
//         console.error('Error: ', error);
//         return new Observable<string>();
//       })
//     )
//   }

//   private readFileContent(file: File): Observable<string> {
//     return new Observable<string>((observer: Observer<string>) => {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         const pdfContent = e.target?.result as string;
//         observer.next(pdfContent);
//         observer.complete();
//       };

//       reader.readAsDataURL(file);
//     });
//   }

// private convertPDFToText(pdfUrl: string): Observable<string> {
//   return new Observable<string>((observer: Observer<string>) => {
//     const loadingTask = pdfjsLib.getDocument(pdfUrl);

//     loadingTask.promise
//       .then((pdf: any) => this.extractTextFromPdf(pdf).subscribe(
//         (textContent: string) => {
//           observer.next(textContent);
//           observer.complete();
//         },
//         (err: any) => observer.error(err)
//       ))
//       .catch((err) => observer.error(err));
//   }).pipe(catchError((err) => throwError(err)))
// }

//   private  extractTextFromPdf(pdf: any): Observable<string> {
//     const extractPageText = (page: any): Observable<string> => {
//       return from(page.getTextContent()).pipe(
//         map((pageText: any) => pageText.items.map((textItem: any) => textItem.string).join(' '))
//       );
//     };

//     const pageObservables: Observable<string>[] = [];

//     for(let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//       const pageObservable = from(pdf.getPage(pageNum)).pipe(
//         switchMap(extractPageText)
//       );

//       pageObservables.push(pageObservable);
//     }

//     return forkJoin(pageObservables).pipe(
//       map((pageTexts: string[]) => pageTexts.join(' '))
//     );
//   }

  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];

  //   if (file) {
  //     this.readFileContent(file);
  //   }
  // }

  // private readFileContent(file: File): void {
  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     const pdfContent = e.target?.result as string;
  //     // now you have the pdf content as a string
  //     console.log(pdfContent);
  //   };

  //   reader.readAsDataURL(file);
  // }

  // private async convertPDFToText(pdfUrl: string): Promise<void> {
  //   const loadingTask = pdfjsLib.getDocument(pdfUrl);
  //   const pdf = await loadingTask.promise;
  //   const textContent = await this.extractTextFromPDF(pdf);

  //   // Now we have the text content
  //   console.log(textContent);
  // }

  // private async extractTextFromPDF(pdf: any): Promise<string> {
  //   let textContent = '';

  //   for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
  //     const page = await pdf.getPage(pageNum);
  //     const pageText = await page.getTextContent();

  //     pageText.items.forEach((textItem: any) => {
  //       textContent += textItem.str + ' ';
  //     })
  //   }

  //   return textContent;
  // }
//   onFileChange(event: any): void {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (e: any) => {
//       const content = e.target.result;
//       console.log(content);
//     }

//     reader.readAsText(file);
//   }

//  async converPDFToText(pdfUrl: string): Promise<string> {
//   const loadingTask = pdfjsLib.getDocument(pdfUrl);
//   const pdf = await loadingTask.promise;
//   return this.extractTextFromPdf(pdf);
//  }

//  extractTextFromPdf(pdf: any): Observable<string> {
//   const pageObservables: Observable<string>[] = [];

//   for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//     const pageObservable = from(pdf.getPage(pageNum)).pipe(
//       switchMap((page: any) => from(page.getTextContent())),
//       map((pageText: any) => pageText.items.map((textItem: any) => textItem.str).join(' '))
//     );

//     pageObservables.push(pageObservable);
//   }

//   return forkJoin(pageObservables).pipe(
//     map((pageTexts) => pageTexts.join(' '))
//   );
//  }
}
