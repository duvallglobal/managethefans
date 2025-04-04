import { db } from './config';
import { collection, getDocs, getDoc, doc, deleteDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: number;
  updatedAt: number;
}

export async function getPosts(): Promise<BlogPost[]> {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as BlogPost : null;
}

export async function createBlogPost(post: Omit<BlogPost, 'id'>): Promise<string> {
  const docRef = doc(collection(db, 'posts'));
  await setDoc(docRef, post);
  return docRef.id;
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>): Promise<void> {
  const docRef = doc(db, 'posts', id);
  await updateDoc(docRef, { ...post, updatedAt: Date.now() });
}

export async function deletePost(id: string): Promise<void> {
  await deleteDoc(doc(db, 'posts', id));
}

export async function uploadBlogImage(file: File): Promise<string> {
  const storage = getStorage();
  const storageRef = ref(storage, `blog/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}