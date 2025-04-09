import { app } from './index';
import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Initialize Firestore with the app instance from index.ts
const db = getFirestore(app);

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  
  // Original fields
  imageUrl?: string;
  createdAt: number;
  updatedAt: number;
  
  // Additional fields used in components
  category?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  description?: string; // For SEO purposes
  featured?: boolean;
  
  // Alias for imageUrl to maintain compatibility
  image?: string;
  slug?: string;
  published?: boolean;
}

export async function getPosts(): Promise<BlogPost[]> {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const posts = querySnapshot.docs.map(doc => {
    const data = doc.data();
    // Ensure backward compatibility by mapping imageUrl to image
    return { 
      id: doc.id, 
      ...data,
      image: data.imageUrl || data.image // Support both fields
    } as BlogPost;
  });
  return posts;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) return null;
  
  const data = docSnap.data();
  // Ensure backward compatibility by mapping imageUrl to image
  return { 
    id: docSnap.id, 
    ...data,
    image: data.imageUrl || data.image // Support both fields
  } as BlogPost;
}

export async function createBlogPost(post: Omit<BlogPost, 'id'>): Promise<string> {
  const docRef = doc(collection(db, 'posts'));
  
  // Set default values for timestamps if not provided
  const postData = {
    ...post,
    createdAt: post.createdAt || Date.now(),
    updatedAt: post.updatedAt || Date.now(),
    // Map image to imageUrl for consistency in database
    imageUrl: post.image || post.imageUrl
  };
  
  await setDoc(docRef, postData);
  return docRef.id;
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>): Promise<void> {
  const docRef = doc(db, 'posts', id);
  
  // If image is provided but imageUrl isn't, use image for imageUrl
  const postData = {
    ...post,
    updatedAt: Date.now(),
    imageUrl: post.image || post.imageUrl || undefined
  };
  
  await updateDoc(docRef, postData);
}

export async function deletePost(id: string): Promise<void> {
  await deleteDoc(doc(db, 'posts', id));
}

export async function uploadBlogImage(file: File): Promise<string> {
  const storage = getStorage(app);
  const storageRef = ref(storage, `blog/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}