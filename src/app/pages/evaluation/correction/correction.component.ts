import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CorrectionInterface } from '@interfaces/commonInterface';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.scss']
})
export class CorrectionComponent implements OnInit {

  public iframeUrl: SafeUrl;
  private firstLoad: boolean;

  constructor(
    public dialogRef: MatDialogRef<CorrectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CorrectionInterface,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.firstLoad = true;
    const url = `https://docs.google.com/forms/d/e/1FAIpQLScn4Eu6m1xMRqGuG4NOk4mOiH_YSqFE45nvo06EKbjlbJUu-Q/viewform?embedded=true&usp=pp_url&entry.1842543907=${this.data.exercise.id}&entry.1593016345=${this.data.exercise.type === 'audio' ?  this.data.exercise.responses[0].replace(/ /g, '+') : this.data.exercise.question.replace(/ /g, '+')}&entry.2019209387=${this.data.response}`;
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  iframeLoaded() {
    if (!this.firstLoad) {
      this.dialogRef.close(true);
    }
    this.firstLoad = false;
  }
}
