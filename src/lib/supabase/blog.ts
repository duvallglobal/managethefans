import { supabase } from './supabaseClient';

export interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image: string;
  featured: boolean;
  date: string;
  created_at?: string;
}

export const blogApi = {
  async getPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getPost(id: number) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async createPost(post: Omit<BlogPost, 'id'>) {
    try {
      // Validate required fields
      const requiredFields = ['title', 'excerpt', 'content', 'category', 'author', 'image', 'date'];
      const missingFields = requiredFields.filter(field => !post[field as keyof typeof post]);

      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([post])
        .select()
        .single();

      if (error) {
        console.error('Error creating blog post:', error);
        throw new Error(`Failed to create blog post: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Unexpected error in createPost:', err);
      throw err;
    }
  },

  async updatePost(id: number, post: Partial<BlogPost>) {
    try {
      if (!id) {
        throw new Error('Post ID is required for updating a post');
      }

      // Ensure at least one field is being updated
      if (Object.keys(post).length === 0) {
        throw new Error('No fields provided for update');
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .update(post)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error(`Error updating blog post ${id}:`, error);
        throw new Error(`Failed to update blog post: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Unexpected error in updatePost:', err);
      throw err;
    }
  },

  async deletePost(id: number) {
    try {
      if (!id) {
        throw new Error('Post ID is required for deleting a post');
      }

      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        console.error(`Error deleting blog post ${id}:`, error);
        throw new Error(`Failed to delete blog post: ${error.message}`);
      }

      return { success: true, message: `Post ${id} deleted successfully` };
    } catch (err) {
      console.error('Unexpected error in deletePost:', err);
      throw err;
    }
  },

  async uploadImage(file: File) {
    try {
      // Generate a more unique filename using timestamp and random string
      const fileExt = file.name.split('.').pop();
      const timestamp = new Date().getTime();
      const randomString = Math.random().toString(36).substring(2, 10);
      const fileName = `${timestamp}-${randomString}.${fileExt}`;
      const filePath = `blog/${fileName}`;

      // Validate file type (optional)
      const allowedTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
      if (fileExt && !allowedTypes.includes(fileExt.toLowerCase())) {
        throw new Error(`Unsupported file type: ${fileExt}. Allowed types: ${allowedTypes.join(', ')}`);
      }

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        throw new Error(`Failed to upload image: ${uploadError.message}`);
      }

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (err) {
      console.error('Unexpected error in uploadImage:', err);
      throw err;
    }
  }
};
