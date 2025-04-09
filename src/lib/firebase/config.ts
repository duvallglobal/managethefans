/**
 * @deprecated - This file is maintained for TypeScript compatibility.
 * Import from '@/lib/firebase' directly instead.
 */

import { app } from './index';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Re-export the Firebase instances from index.ts
export const db = getFirestore(app);
export const auth = app; // Just to keep TypeScript happy 