import { db } from './firebase';
import { collection, addDoc, Timestamp, DocumentData } from 'firebase/firestore';

export interface ContactSubmission extends DocumentData {
  type: 'consultation' | 'getStarted' | 'general';
  name: string;
  email: string;
  phone?: string;
  message: string;
  selectedServices: string[];
  submissionTime: Timestamp;
  timezone: string;
  referrer?: string;
  status: 'new' | 'inProgress' | 'completed' | 'archived';
  
  // Consultation specific
  preferredDate?: string;
  preferredTime?: string;
  
  // Get Started specific
  budget?: {
    range: '0-1000' | '1000-5000' | '5000+';
    label: string;
  };
  timeline?: {
    value: 'immediate' | '1-2-weeks' | '1-month';
    label: string;
  };
  
  // Metadata
  lastUpdated: Timestamp;
  notes?: string[];
  assignedTo?: string;
}

export const submitContactForm = async (formData: Omit<ContactSubmission, 'submissionTime' | 'lastUpdated' | 'status'>) => {
  try {
    const submissionData: ContactSubmission = {
      ...formData,
      submissionTime: Timestamp.now(),
      lastUpdated: Timestamp.now(),
      status: 'new',
    };

    const docRef = await addDoc(collection(db, 'contactSubmissions'), submissionData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};

export const getFormattedDate = (timestamp: Timestamp) => {
  return timestamp.toDate().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}; 