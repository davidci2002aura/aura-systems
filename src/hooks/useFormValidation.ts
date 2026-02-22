import { useState, useCallback } from 'react';

interface ValidationRules {
  [key: string]: (value: string) => string | null;
}

export const useFormValidation = <T extends Record<string, any>>(
  initialValues: T,
  validationRules: ValidationRules
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const validate = useCallback(
    (name: keyof T, value: string) => {
      const rule = validationRules[name as string];
      if (rule) {
        const error = rule(value);
        setErrors((prev) => ({ ...prev, [name]: error || undefined }));
        return error === null;
      }
      return true;
    },
    [validationRules]
  );

  const handleChange = useCallback(
    (name: keyof T, value: string) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      if (touched[name]) {
        validate(name, value);
      }
    },
    [touched, validate]
  );

  const handleBlur = useCallback(
    (name: keyof T) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      validate(name, values[name]);
    },
    [values, validate]
  );

  const validateAll = useCallback(() => {
    let isValid = true;
    const newErrors: Partial<Record<keyof T, string>> = {};

    Object.keys(validationRules).forEach((key) => {
      const error = validationRules[key](values[key as keyof T]);
      if (error) {
        newErrors[key as keyof T] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(validationRules).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      )
    );

    return isValid;
  }, [values, validationRules]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    setValues,
  };
};
