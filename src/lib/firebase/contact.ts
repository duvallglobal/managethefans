import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from './index';

// Initialize Firestore with the app instance from index.ts
const db = getFirestore(app);

type ContactFormBase = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  selectedServices: string[];
  timezone: string;
  referrer: string;
};

type ConsultationForm = ContactFormBase & {
  type: 'consultation';
  preferredDate: string;
  preferredTime: string;
};

type GetStartedForm = ContactFormBase & {
  type: 'getStarted';
  budget: {
    range: '0-1000' | '1000-5000' | '5000+';
    label: string;
  };
  timeline: {
    value: 'immediate' | '1-2-weeks' | '1-month';
    label: string;
  };
};

type GeneralForm = ContactFormBase & {
  type: 'general';
};

type ContactFormData = ConsultationForm | GetStartedForm | GeneralForm;

export async function submitContactForm(data: ContactFormData) {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: new Date().toISOString(),
      status: 'new'
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
}
