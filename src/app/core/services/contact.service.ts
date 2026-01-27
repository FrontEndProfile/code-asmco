import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
  name: string;
  businessType: string;
  city: string;
  budget: string;
  phone: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = environment.contactApiUrl;

  constructor(private http: HttpClient) {}

  submit(payload: ContactPayload) {
    return this.http.post<{ success: boolean }>(this.apiUrl, payload);
  }
}
