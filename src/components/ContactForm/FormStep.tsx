import { useRef, useEffect, useState } from 'react';
import styles from './ContactForm.module.css';

interface ContactFormValues {
  service: string;
  budget: string;
  name: string;
  email: string;
  message: string;
}

interface FormStepProps {
  step: number;
  values: ContactFormValues;
  errors: Partial<Record<keyof ContactFormValues, string>>;
  touched: Partial<Record<keyof ContactFormValues, boolean>>;
  isSubmitting: boolean;
  onChange: <K extends keyof ContactFormValues>(name: K, value: string) => void;
  onBlur: <K extends keyof ContactFormValues>(name: K) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

const FormStep: React.FC<FormStepProps> = ({
  step,
  values,
  errors,
  touched,
  isSubmitting,
  onChange,
  onBlur,
  onNext,
  onBack,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    textareaRef.current?.focus();
  }, [step]);

  if (step === 1) {
    return (
      <StepLayout
        label="SCHRITT 01"
        title="Was benötigen Sie?"
        onBack={null}
      >
        {[
          ['Website-QuickFix', 'Bis zu drei konkrete Fehler beheben'],
          ['Moderner Onepager', 'Eine klare kleine Website von Grund auf'],
          ['Onepager + Betreuung', 'Website mit laufenden kleinen Änderungen'],
          ['KI-Telefonservice', 'Rückrufanliegen aufnehmen und zusammenfassen'],
          ['E-Mail- oder Wissensassistent', 'Informationen aus freigegebenen Quellen vorbereiten'],
          ['Ablauf automatisieren', 'Wiederkehrende Handarbeit zuerst prüfen'],
          ['AI-native Prozess-Sprint', 'Mehrere Schritte als kontrolliertes System verbinden'],
        ].map(([main, sub]) => (
          <ChoiceButton
            key={main}
            main={main}
            sub={sub}
            onClick={() => {
              onChange('service', main);
              onNext();
            }}
          />
        ))}
      </StepLayout>
    );
  }

  if (step === 2) {
    return (
      <StepLayout
        label="SCHRITT 02"
        title="Ihr Investitionsrahmen?"
        onBack={onBack}
      >
        {['Bis 200 €', '200 € – 700 €', '700 € – 1.500 €', '1.500 € – 3.000 €', 'Über 3.000 €', 'Noch offen'].map((budget) => (
          <ChoiceButton
            key={budget}
            main={budget}
            onClick={() => {
              onChange('budget', budget);
              onNext();
            }}
          />
        ))}
      </StepLayout>
    );
  }

  if (step === 3) {
    return (
      <StepLayout
        label="SCHRITT 03"
        title="Wie dürfen wir Sie nennen?"
        onBack={onBack}
      >
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Ihr Name"
          value={values.name}
          onChange={(e) => onChange('name', e.target.value)}
          onBlur={() => onBlur('name')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && values.name.trim() && !errors.name) {
              onNext();
            }
          }}
          aria-invalid={touched.name && !!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {touched.name && errors.name && (
          <div id="name-error" className={styles.fieldError} role="alert">
            {errors.name}
          </div>
        )}
        <button
          className={styles.primaryButton}
          onClick={onNext}
          disabled={!values.name.trim() || !!errors.name}
        >
          Weiter →
        </button>
      </StepLayout>
    );
  }

  if (step === 4) {
    return (
      <StepLayout
        label="SCHRITT 04"
        title="Wie erreichen wir Sie?"
        onBack={onBack}
      >
        <input
          ref={inputRef}
          type="email"
          className={styles.input}
          placeholder="name@unternehmen.de"
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
          onBlur={() => onBlur('email')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && values.email && !errors.email) {
              onNext();
            }
          }}
          aria-invalid={touched.email && !!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {touched.email && errors.email && (
          <div id="email-error" className={styles.fieldError} role="alert">
            {errors.email}
          </div>
        )}
        <button
          className={styles.primaryButton}
          onClick={onNext}
          disabled={!values.email || !!errors.email}
        >
          Weiter →
        </button>
      </StepLayout>
    );
  }

  if (step === 5) {
    return (
      <StepLayout
        label="SCHRITT 05"
        title="Beschreiben Sie Ihr Projekt"
        onBack={onBack}
      >
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          placeholder="z.B.: Wir benötigen eine moderne Website für unser Restaurant mit Online-Reservierungssystem und mehrsprachiger Unterstützung..."
          value={values.message}
          onChange={(e) => onChange('message', e.target.value)}
          onBlur={() => onBlur('message')}
          rows={6}
          aria-invalid={touched.message && !!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {touched.message && errors.message && (
          <div id="message-error" className={styles.fieldError} role="alert">
            {errors.message}
          </div>
        )}
        <button
          className={styles.primaryButton}
          onClick={onNext}
          disabled={!values.message.trim() || !!errors.message}
        >
          Weiter →
        </button>
      </StepLayout>
    );
  }

  if (step === 6) {
    return (
      <StepLayout
        label="SCHRITT 06"
        title="Alles bereit."
        onBack={onBack}
      >
        <div className={styles.summary}>
          {[
            ['Service', values.service],
            ['Budget', values.budget],
            ['Name', values.name],
            ['Email', values.email],
            ['Projektbeschreibung', values.message],
          ].map(([label, value]) => (
            <div key={label} className={styles.summaryRow}>
              <span className={styles.summaryLabel}>{label}</span>
              <span className={styles.summaryValue}>{value || '—'}</span>
            </div>
          ))}
        </div>
        <button
          className={styles.primaryButton}
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Anfrage absenden →'}
        </button>
      </StepLayout>
    );
  }

  return null;
};

interface StepLayoutProps {
  label: string;
  title: string;
  onBack: (() => void) | null;
  children: React.ReactNode;
}

const StepLayout: React.FC<StepLayoutProps> = ({ label, title, onBack, children }) => (
  <div className={styles.step}>
    <span className={styles.stepLabel}>{label}</span>
    <div className={styles.stepTitle}>{title}</div>
    {children}
    {onBack && (
      <button className={styles.backButton} onClick={onBack}>
        ← Zurück
      </button>
    )}
  </div>
);

interface ChoiceButtonProps {
  main: string;
  sub?: string;
  onClick: () => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ main, sub, onClick }) => {
  const [hov, setHov] = useState(false);

  return (
    <button
      className={`${styles.choiceButton} ${hov ? styles.hover : ''}`}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className={styles.choiceMain}>{main}</div>
      {sub && <div className={styles.choiceSub}>{sub}</div>}
    </button>
  );
};

export default FormStep;
