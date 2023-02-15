/* eslint-disable no-plusplus */
import { FormValues } from 'interfaces/prospect';

export const validateForm = (formValues: FormValues) => {
  const errors: { message: string } = { message: '' };
  let hasError = false;

  Object.keys(formValues).forEach((key) => {
    switch (key) {
      case 'title':
        if (!formValues.title) {
          errors.message = 'Title is required';
          hasError = true;
        }
        break;

      case 'note':
        if (!formValues.note) {
          errors.message = 'Note is required';
          hasError = true;
        }
        break;

      case 'programArea':
        if (!formValues.programArea) {
          errors.message = 'Program area is required';
          hasError = true;
        }
        break;

      case 'location':
        if (!formValues.location) {
          errors.message = 'Location is required';
          hasError = true;
        }
        break;

      case 'grantAmount':
        if (!formValues.grantAmount) {
          errors.message = 'Grant amount is required';
          hasError = true;
        }
        break;

      default:
        hasError = false;
    }
  });

  return { hasError, errors };
};

export const hasChanged = (initialValues: FormValues, currentValues: FormValues) => {
  const initialValuesArray = Object.values(initialValues);
  const currentValuesArray = Object.values(currentValues);
  for (let i = 0; i < initialValuesArray.length; i++) {
    if (initialValuesArray[i] !== currentValuesArray[i]) {
      return true;
    }
  }
  return false;
};