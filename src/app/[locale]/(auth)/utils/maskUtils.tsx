export function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!user || !domain) return email;

  const visibleStart = user.slice(0, 3);
  const maskedPart = "*".repeat(Math.max(user.length - 3, 0));
  return `${visibleStart}${maskedPart}@${domain}`;
}

export function maskPhone(phone: string): string {
  const visibleDigits = 3;
  const maskedLength = Math.max(0, phone.length - visibleDigits);
  const maskedPart = "*".repeat(maskedLength);
  const visiblePart = phone.slice(-visibleDigits);
  return maskedPart + visiblePart;
}
