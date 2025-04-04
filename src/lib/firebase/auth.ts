import { onAuthStateChanged, User, signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { auth } from './index';

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export const signIn = async (email: string, password: string): Promise<{ user: User | null; error: AuthError | null }> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    console.error('Error signing in:', error);
    return { user: null, error: error as AuthError };
  }
};