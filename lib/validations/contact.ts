export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone.trim() && !/^\+?[\d\s\-()]{7,20}$/.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}
