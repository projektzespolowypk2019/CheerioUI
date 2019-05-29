import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  constructor() { }

  getContentType(content: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': content,
    });
  }
}
