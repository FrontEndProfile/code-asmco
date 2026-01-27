import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';
import { ContactPayload, ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  submitting = false;
  submitted = false;
  errorMessage = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    businessType: ['', Validators.required],
    city: ['', Validators.required],
    budget: ['', Validators.required],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  get whatsappLink(): string {
    const message = this.buildWhatsAppMessage();
    return `https://wa.me/923134810105?text=${encodeURIComponent(message)}`;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.submitted = false;
    this.errorMessage = '';

    const payload = this.form.getRawValue() as ContactPayload;
    this.contactService.submit(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        this.form.reset();
      },
      error: () => {
        this.submitting = false;
        this.errorMessage =
          'We could not send your request. Please try again or message us on WhatsApp.';
      }
    });
  }

  private buildWhatsAppMessage(): string {
    const value = this.form.value;
    return `Hi ASMCO Tech, I'm ${value.name || 'a business owner'} from ${value.city || 'Pakistan'}. ` +
      `We need a ${value.businessType || 'website'} with a budget around ${value.budget || 'TBD'}. ` +
      `Contact: ${value.phone || 'N/A'}. Message: ${value.message || 'Please share packages.'}`;
  }
}
