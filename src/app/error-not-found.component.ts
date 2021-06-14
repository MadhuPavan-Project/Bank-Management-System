import { Component, OnInit, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';
import { Request } from 'express';

@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.css']
})
export class ErrorNotFoundComponent implements OnInit {
notfound:string;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() @Inject(REQUEST) private request: Request
  ) { }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      if (this.request.res) {
        this.request.res.status(404);
      }
    }
  }

}
