<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
=======
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Save, Upload } from 'lucide-react';
import { createBlogPost, getPostById, updateBlogPost, uploadBlogImage, BlogPost } from '@/lib/firebase/blog';

interface BlogFormData extends Omit<BlogPost, 'id' | 'created_at' | 'updated_at'> {
  title: string;
  content: string;
  description: string;
  image_url?: string;
  published: boolean;
  slug: string;
}

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    content: '',
    description: '',
    image_url: '',
    published: false,
    slug: ''
  });

  useEffect(() => {
    if (id) {
      loadBlogPost();
    }
  }, [id]);

  const loadBlogPost = async () => {
    try {
      const post = await getPostById(id!);
      if (post) {
        setFormData({
          title: post.title,
          content: post.content,
          description: post.description,
          image_url: post.image_url || '',
          published: post.published,
          slug: post.slug
        });
=======
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Image as ImageIcon, Loader2, Bold, Italic, Underline, Heading1, Heading2, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Link as LinkIcon, Sparkles } from "lucide-react";
import { 
  getPostById, 
  createPost, 
  updatePost, 
  uploadImage, 
  BlogPost 
} from "@/lib/firebase/blog";
import { onAuthChange } from "@/lib/firebase/auth";
import { generateBlogPost } from "@/lib/openai";

const categories = [
  "OnlyFans Growth",
  "Social Media",
  "Rent.Men Tips",
  "Success Stories",
  "Industry News"
];

// Post type without id for creating new posts
type NewPost = Omit<BlogPost, 'id'>;

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [post, setPost] = useState<NewPost>({
    title: "",
    excerpt: "",
    content: "",
    category: categories[0],
    author: "",
    image: "",
    featured: false,
    date: new Date().toISOString().split('T')[0]
  });

  // Add state for selected text
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (!user) {
        navigate("/admin/login");
        return;
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load blog post."
      });
    }
  };

<<<<<<< HEAD
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
=======
    return () => unsubscribe();
  }, [id, navigate]);
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
<<<<<<< HEAD
      // Create a unique filename using timestamp and original name
      const timestamp = Date.now();
      const filename = `${timestamp}-${file.name}`;
      
      // Upload image and get URL
      const { url } = await uploadBlogImage(file, filename);
      
      // Update form data with image URL
      setFormData(prev => ({ ...prev, image_url: url }));
      
      toast({
        title: "Success",
        description: "Image uploaded successfully."
      });
=======
      const imageUrl = await uploadImage(file);
      setPost({ ...post, image: imageUrl });
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to upload image."
      });
    } finally {
      setIsUploading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
<<<<<<< HEAD
      // Generate slug from title if not provided
      const slug = formData.slug || generateSlug(formData.title);
      const postData = { ...formData, slug };
=======
      // Make sure the post has all required fields
      if (!post.title || !post.excerpt || !post.content || !post.author) {
        alert("Please fill all required fields");
        setSaving(false);
        return;
      }
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e

      if (id) {
        await updateBlogPost(id, postData);
        toast({
          title: "Success",
          description: "Blog post updated successfully."
        });
      } else {
<<<<<<< HEAD
        const result = await createBlogPost(postData);
        toast({
          title: "Success",
          description: "Blog post created successfully."
        });
        // Navigate to edit page if new post
        if (result.id) {
          navigate(`/admin/blog/edit/${result.id}`);
=======
        // Create new post
        await createPost(post);
      }
      
      navigate("/admin/blog");
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setSaving(false);
    }
  };

  const handleAIGenerate = async () => {
    const topic = prompt('What topic would you like to write about?');
    if (!topic) return;

    const tone = prompt('What tone should the content have? (e.g., professional, casual, educational)', 'professional');
    if (!tone) return;

    setGenerating(true);
    try {
      const generated = await generateBlogPost(topic, tone);
      setPost(prev => ({
        ...prev,
        title: generated.title,
        excerpt: generated.excerpt,
        content: generated.content
      }));
    } catch (error) {
      console.error('Error generating blog post:', error);
      alert('Failed to generate blog post: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setGenerating(false);
    }
  };

  // Text formatting functions
  const formatText = (tag: string) => {
    if (!contentRef.current) return;

    const textarea = contentRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = post.content.substring(start, end);
    
    let formattedText = '';
    let url = '';
    
    switch (tag) {
      case 'bold':
        formattedText = `<strong>${selectedText}</strong>`;
        break;
      case 'italic':
        formattedText = `<em>${selectedText}</em>`;
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        break;
      case 'h1':
        formattedText = `<h1>${selectedText}</h1>`;
        break;
      case 'h2':
        formattedText = `<h2>${selectedText}</h2>`;
        break;
      case 'left':
        formattedText = `<div style="text-align: left">${selectedText}</div>`;
        break;
      case 'center':
        formattedText = `<div style="text-align: center">${selectedText}</div>`;
        break;
      case 'right':
        formattedText = `<div style="text-align: right">${selectedText}</div>`;
        break;
      case 'ul':
        formattedText = `<ul>\n  <li>${selectedText}</li>\n</ul>`;
        break;
      case 'ol':
        formattedText = `<ol>\n  <li>${selectedText}</li>\n</ol>`;
        break;
      case 'link':
        url = prompt('Enter the URL:', 'https://') || '';
        if (url) {
          const linkText = prompt('Enter the text to display for the link:', selectedText) || url;
          formattedText = `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
        } else {
          return; // If no URL is provided, don't modify the text
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
        }
      }
    } catch (error) {
      console.error('Error saving blog post:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save blog post."
      });
    } finally {
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">
          {id ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
=======
  // Track selection changes
  const handleSelect = () => {
    if (!contentRef.current) return;
    
    setSelection({
      start: contentRef.current.selectionStart,
      end: contentRef.current.selectionEnd
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-8 pt-24 md:pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/admin/blog")}
              className="mr-4 text-gray-400 hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl font-bold">{id ? "Edit Post" : "Create New Post"}</h1>
          </div>
          <Button
            type="button"
            onClick={handleAIGenerate}
            disabled={generating}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white"
          >
            {generating ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Sparkles className="h-4 w-4 mr-2" />
            )}
            {generating ? "Generating..." : "Generate with AI"}
          </Button>
        </div>
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
              />
            </div>

            <div>
              <Label htmlFor="description">Description (SEO)</Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
              />
            </div>

            <div>
<<<<<<< HEAD
              <Label htmlFor="image">Featured Image</Label>
              <div className="space-y-4">
                {formData.image_url && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#800000]/30">
                    <img
                      src={formData.image_url}
                      alt="Featured"
                      className="w-full h-full object-cover"
                    />
                  </div>
=======
              <label className="block text-sm font-medium text-gray-300 mb-1">Content</label>
              <div className="mb-2 bg-gray-800 border border-gray-700 p-1 rounded-md flex flex-wrap gap-1">
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('bold')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('italic')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('underline')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <Underline className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-gray-700 mx-1"></div>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('h1')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <Heading1 className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('h2')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <Heading2 className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-gray-700 mx-1"></div>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('left')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('center')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('right')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <AlignRight className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-gray-700 mx-1"></div>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('ul')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('ol')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <ListOrdered className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-gray-700 mx-1"></div>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => formatText('link')} 
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
              <Textarea
                ref={contentRef}
                required
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                onSelect={handleSelect}
                className="bg-gray-800 border-gray-700 text-white h-64"
              />
              <p className="text-xs text-gray-400 mt-1">
                Use the formatting toolbar to style your content. HTML tags will be preserved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                <select
                  value={post.category}
                  onChange={(e) => setPost({ ...post, category: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Author</label>
                <Input
                  required
                  value={post.author}
                  onChange={(e) => setPost({ ...post, author: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Featured Image</label>
              <div className="flex items-center space-x-4">
                {post.image && (
                  <img
                    src={post.image}
                    alt="Featured"
                    className="h-20 w-20 object-cover rounded-lg border border-gray-700"
                  />
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
                )}
                <div className="flex items-center gap-4">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('image')?.click()}
                    disabled={isUploading}
                    className="flex-1 border-[#800000]/50 text-[#cc0000] hover:bg-[#cc0000]/10"
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Image
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                className="min-h-[400px] bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
              />
            </div>

            <div>
              <Label htmlFor="slug">URL Slug (optional)</Label>
              <Input
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="Will be generated from title if left empty"
                className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                className="rounded border-[#800000]/50 text-[#cc0000] focus:ring-[#cc0000]"
              />
              <Label htmlFor="published">Publish immediately</Label>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/blog')}
              className="border-[#800000]/50 text-[#cc0000] hover:bg-[#cc0000]/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-[#800000] to-[#cc0000] hover:from-[#990000] hover:to-[#dd0000]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Post
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default BlogEditor;
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
