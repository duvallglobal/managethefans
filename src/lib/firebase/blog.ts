import { 
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  query,
  orderBy,
  where,
  Timestamp,
  DocumentData,
  serverTimestamp
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./client";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image?: string;
  featured: boolean;
  date: string;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

// Collection reference
const postsCollection = collection(db, "posts");

// Convert Firestore data to BlogPost
const convertPost = (doc: DocumentData): BlogPost => {
  const data = doc.data();
  return {
    id: doc.id,
    title: data.title || "",
    excerpt: data.excerpt || "",
    content: data.content || "",
    category: data.category || "",
    author: data.author || "",
    image: data.image || "",
    featured: data.featured || false,
    date: data.date || new Date().toISOString().split('T')[0],
    created_at: data.created_at,
    updated_at: data.updated_at
  };
};

// Get all posts
export const getPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(postsCollection, orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertPost);
  } catch (error) {
    console.error("Error getting posts:", error);
    throw error;
  }
};

// Get single post by id
export const getPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return convertPost(docSnap);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting post:", error);
    throw error;
  }
};

// Create new post
export const createPost = async (post: Omit<BlogPost, "id">): Promise<string> => {
  try {
    const docRef = await addDoc(postsCollection, {
      ...post,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Update post
export const updatePost = async (id: string, post: Partial<BlogPost>): Promise<void> => {
  try {
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      ...post,
      updated_at: serverTimestamp()
    });
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

// Delete post
export const deletePost = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};

// Upload image
export const uploadImage = async (file: File): Promise<string> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const storageRef = ref(storage, `blog/${fileName}`);
    
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Get posts by category
export const getPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const q = query(
      postsCollection, 
      where("category", "==", category),
      orderBy("created_at", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertPost);
  } catch (error) {
    console.error("Error getting posts by category:", error);
    throw error;
  }
};

// Get featured posts
export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(
      postsCollection, 
      where("featured", "==", true),
      orderBy("created_at", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertPost);
  } catch (error) {
    console.error("Error getting featured posts:", error);
    throw error;
  }
}; 