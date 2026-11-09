import { site, type ContactService } from "@/lib/site";

export interface InquiryDetails {
  name: string;
  email: string;
  phone: string;
  service: ContactService;
  message: string;
}

export function prepareInquiry(details: InquiryDetails) {
  const message = [
    "Hello GOH Graphix, I’d like to discuss an enquiry.",
    "",
    `Name: ${details.name.trim()}`,
    `Email: ${details.email.trim()}`,
    ...(details.phone.trim() ? [`Phone / WhatsApp: ${details.phone.trim()}`] : []),
    `Service: ${details.service}`,
    "",
    details.message.trim(),
  ].join("\n");

  return {
    service: details.service,
    message,
    whatsappUrl: `${site.whatsapp}?text=${encodeURIComponent(message)}`,
    emailUrl: `mailto:${site.email}?subject=${encodeURIComponent(`GOH Graphix enquiry — ${details.service}`)}&body=${encodeURIComponent(message)}`,
  };
}
