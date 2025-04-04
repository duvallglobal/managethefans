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
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "./client";

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  description: string;
  image_url?: string;
  created_at: Timestamp;
  updated_at: Timestamp;
  published: boolean;
  slug: string;
}

// Collection reference
const postsCollection = collection(db, "blog_posts");

// Convert Firestore data to BlogPost
const convertPost = (doc: DocumentData): BlogPost => {
  const data = doc.data();
  return {
    id: doc.id,
    title: data.title || "",
    content: data.content || "",
    description: data.description || "",
    image_url: data.image_url || "",
    created_at: data.created_at,
    updated_at: data.updated_at,
    published: data.published || false,
    slug: data.slug || ""
  };
};

// Get all posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(postsCollection, orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertPost);
  } catch (error) {
    console.error("Error getting blog posts:", error);
    throw error;
  }
};

// Get single post by id
export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const docRef = doc(db, "blog_posts", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return convertPost(docSnap);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting blog post:", error);
    throw error;
  }
};

// Create new post
export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<{ id: string }> => {
  try {
    const docRef = await addDoc(postsCollection, {
      ...post,
      created_at: Timestamp.now(),
      updated_at: Timestamp.now()
    });
    return { id: docRef.id };
  } catch (error) {
    console.error("Error creating blog post:", error);
    throw error;
  }
};

// Update post
export const updateBlogPost = async (id: string, post: Partial<BlogPost>): Promise<{ success: boolean }> => {
  try {
    const docRef = doc(db, "blog_posts", id);
    await updateDoc(docRef, {
      ...post,
      updated_at: Timestamp.now()
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating blog post:", error);
    throw error;
  }
};

// Delete post
export const deleteBlogPost = async (id: string): Promise<{ success: boolean }> => {
  try {
    const docRef = doc(db, "blog_posts", id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
};

// Upload image
export const uploadBlogImage = async (file: File, path: string): Promise<{ url: string }> => {
  try {
    const storageRef = ref(storage, `blog_images/${path}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return { url };
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Delete image
export const deleteBlogImage = async (path: string): Promise<{ success: boolean }> => {
  try {
    const storageRef = ref(storage, `blog_images/${path}`);
    await deleteObject(storageRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting image:", error);
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