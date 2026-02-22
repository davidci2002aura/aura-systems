export const validators = {
  email: (value: string): string | null => {
    if (!value) return 'Email ist erforderlich';

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    // Additional domain validation
    const parts = value.split('@');
    if (parts[1] && parts[1].split('.').some((p) => p.length < 2)) {
      return 'Ungültige Domain';
    }

    return null;
  },

  name: (value: string): string | null => {
    if (!value) return 'Name ist erforderlich';
    if (value.trim().length < 2)
      return 'Name muss mindestens 2 Zeichen lang sein';
    if (!/^[a-zA-ZäöüßÄÖÜ\s-]+$/.test(value)) {
      return 'Name enthält ungültige Zeichen';
    }
    return null;
  },

  required: (value: string, fieldName: string): string | null => {
    if (!value || value.trim().length === 0) {
      return `${fieldName} ist erforderlich`;
    }
    return null;
  },
};
