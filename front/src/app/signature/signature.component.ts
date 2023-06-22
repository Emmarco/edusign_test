import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements AfterViewInit {
  @ViewChild('signatureCanvas') signatureCanvas: ElementRef;
  private signaturePad: SignaturePad;

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signatureCanvas.nativeElement);
  }
}