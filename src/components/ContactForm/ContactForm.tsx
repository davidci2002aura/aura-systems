import { useState } from 'react';
import { useFormValidation } from '@hooks/useFormValidation';
import { validators } from '@utils/validation';
import { analytics } from '@utils/analytics';
import FormStep from './FormStep';
import styles from './ContactForm.module.css';

interface ContactFormData {
  service: string;
  budget: string;
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { values, errors, touched, handleChange, handleBlur, validateAll } =
    useFormValidation<ContactFormData>(
      { service: '', budget: '', name: '', email: '', message: '' },
      {
        service: (v) => validators.required(v, 'Service'),
        budget: (v) => validators.required(v, 'Budget'),
        name: validators.name,
        email: validators.email,
        message: (v) => v.trim().length < 10 ? 'Bitte beschreiben Sie Ihr Projekt (mindestens 10 Zeichen)' : null,
      }
    );

  const handleSubmit = async () => {
    if (!validateAll()) {
      setSubmitError('Bitte überprüfen Sie Ihre Eingaben');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Use hidden iframe technique to avoid CORS issues with Google Apps Script
      const form = document.createElement('form');
      form.method = 'POST';
      form.action =
        import.meta.env.VITE_WEBHOOK_URL ||
        'https://script.google.com/macros/s/AKfycbyPE8-UjBFG9fYLbAD-46rSuO-uRCVCS4jpCG7LMlqP2OzYruf_8VmFaKr8b8Bi8bji/exec';
      form.target = 'hidden-iframe';
      form.style.display = 'none';

      // Add form fields
      const fields = {
        service: values.service,
        budget: values.budget,
        name: values.name,
        email: values.email,
        message: values.message,
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Create hidden iframe if it doesn't exist
      let iframe = document.querySelector('iframe[name="hidden-iframe"]') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'hidden-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Submit form
      document.body.appendChild(form);
      form.submit();

      // Wait a moment for submission, then show success
      setTimeout(() => {
        document.body.removeChild(form);
        analytics.trackFormSubmit('contact-form');
        setSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('error');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>
          <span className={styles.tagLine} /> Neural Inquiry
        </div>
        <h2 className={styles.sectionTitle}>
          Bereit für
          <br />
          <span className={styles.light}>Level 2.</span>
        </h2>
        <p className={styles.description}>
          Präzision beginnt beim Dialog. Unsere Architekten antworten im Detail.
        </p>

        <div className={styles.formWrapper}>
          <div className={styles.terminalHeader}>
            <div className={styles.dots}>
              {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                <div key={c} className={styles.dot} style={{ background: c }} />
              ))}
            </div>
            <span className={styles.filename}>neural-inquiry.ts</span>
            <span className={styles.status}>
              <span className={styles.statusDot} />
              SYSTEM READY
            </span>
          </div>

          <div className={styles.formContent}>
            <div className={styles.progress}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className={`${styles.progressBar} ${n <= formStep ? styles.active : ''
                    }`}
                />
              ))}
            </div>

            {submitted ? (
              <div className={styles.successMessage}>
                <div className={styles.checkmarkCircle}>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M17 5L8 14.5l-4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.successTitle}>Anfrage gesendet.</div>
                <p className={styles.successText}>
                  Wir melden uns innerhalb von 24h bei Ihnen.
                </p>
                <div className={styles.successFooter}>
                  — AURA NEURAL ARCHITECTURE
                </div>
              </div>
            ) : (
              <>
                <FormStep
                  step={formStep}
                  values={values}
                  errors={errors}
                  touched={touched}
                  isSubmitting={isSubmitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onNext={() => setFormStep(formStep + 1)}
                  onBack={() => setFormStep(formStep - 1)}
                  onSubmit={handleSubmit}
                />

                {submitError && (
                  <div className={styles.error} role="alert">
                    {submitError === 'error' ? (
                      <>
                        Leider ist ein Fehler aufgetreten. Bitte kontaktieren Sie uns direkt:{' '}
                        <a
                          href="mailto:david.lamberts@aurasystems.ltd"
                          style={{
                            color: '#0077ff',
                            textDecoration: 'underline',
                            fontWeight: 500,
                          }}
                        >
                          david.lamberts@aurasystems.ltd
                        </a>
                      </>
                    ) : (
                      submitError
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
