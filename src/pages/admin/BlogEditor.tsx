import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { 
  ArrowLeft, 
  Image as ImageIcon, 
  Loader2, 
  Bold, 
  Italic, 
  Underline, 
  Heading1, 
  Heading2, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  List, 
  ListOrdered, 
  Link as LinkIcon, 
  Sparkles,
  Save,
  Upload
} from "lucide-react";
import { 
  getPostById, 
  createBlogPost, 
  updateBlogPost, 
  uploadBlogImage, 
  BlogPost 
} from "@/lib/firebase/blog";
import { onAuthChange } from "@/lib/firebase/auth";

// Custom interface to extend BlogPost with additional fields needed for the editor
interface ExtendedBlogPost extends Omit<BlogPost, 'id'> {
  category?: string;
  excerpt?: string;
  author?: string;
  image?: string;
  featured?: boolean;
  date?: string;
}

const categories = [
  "OnlyFans Growth",
  "Social Media",
  "Rent.Men Tips",
  "Success Stories",
  "Industry News"
];

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [post, setPost] = useState<ExtendedBlogPost>({
    title: "",
    excerpt: "",
    content: "",
    category: categories[0],
    author: "",
    image: "",
    featured: false,
    date: new Date().toISOString().split('T')[0],
    createdAt: Date.now(),
    updatedAt: Date.now()
  });

  // Add state for selected text
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (!user) {
        navigate("/admin/login");
        return;
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Memoize loadPostData using useCallback to prevent recreating on every render
  const loadPostData = useCallback(async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const postData = await getPostById(id);
      if (postData) {
        // Convert from BlogPost to ExtendedBlogPost
        setPost({
          title: postData.title,
          content: postData.content,
          excerpt: "", // Default values for fields not in the original type
          category: categories[0],
          author: "",
          image: postData.imageUrl || "",
          featured: false,
          date: new Date(postData.createdAt).toISOString().split('T')[0],
          createdAt: postData.createdAt,
          updatedAt: postData.updatedAt
        });
      }
    } catch (error) {
      console.error("Error loading post:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load blog post."
      });
    } finally {
      setLoading(false);
    }
  }, [id, toast]); // Include dependencies that loadPostData uses

  useEffect(() => {
    if (id) {
      loadPostData();
    }
  }, [id, loadPostData]); // Now properly include loadPostData in the dependencies

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const imageUrl = await uploadBlogImage(file);
      setPost({ ...post, image: imageUrl });
      toast({
        title: "Success",
        description: "Image uploaded successfully."
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to upload image."
      });
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Make sure the post has all required fields
      if (!post.title || !post.excerpt || !post.content || !post.author) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please fill all required fields"
        });
        setSaving(false);
        return;
      }

      // Convert ExtendedBlogPost to BlogPost for saving
      const saveData = {
        title: post.title,
        content: post.content,
        imageUrl: post.image,
        createdAt: post.createdAt,
        updatedAt: Date.now()
      };

      if (id) {
        await updateBlogPost(id, saveData);
        toast({
          title: "Success",
          description: "Blog post updated successfully."
        });
      } else {
        // Create new post
        await createBlogPost(saveData);
        toast({
          title: "Success",
          description: "Blog post created successfully."
        });
      }
      
      navigate("/admin/blog");
    } catch (error) {
      console.error("Error saving post:", error);
      toast({
        variant: "destructive", 
        title: "Error",
        description: "Failed to save post: " + (error instanceof Error ? error.message : String(error))
      });
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
      // Simple mock AI generation since we don't have the actual implementation
      const title = `How to improve your ${topic} strategy`;
      const excerpt = `Learn the best practices for ${topic} in the adult content industry.`;
      const content = `<h1>How to improve your ${topic} strategy</h1>
<p>This is a generated post about ${topic} with a ${tone} tone.</p>
<p>Add more content here...</p>`;

      setPost(prev => ({
        ...prev,
        title,
        excerpt,
        content
      }));
      
      toast({
        title: "Success",
        description: "Content generated successfully."
      });
    } catch (error) {
      console.error('Error generating blog post:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate blog post: " + (error instanceof Error ? error.message : String(error))
      });
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
        }
    }
    
    // Replace the selected text with the formatted text
    const newContent = post.content.substring(0, start) + formattedText + post.content.substring(end);
    setPost({ ...post, content: newContent });
    
    // Reset focus to the textarea
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.focus();
        contentRef.current.setSelectionRange(start + formattedText.length, start + formattedText.length);
      }
    }, 0);
  };

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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={post.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPost({ ...post, title: e.target.value })}
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt (SEO Description)</Label>
              <Input
                id="excerpt"
                value={post.excerpt}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPost({ ...post, excerpt: e.target.value })}
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
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
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPost({ ...post, content: e.target.value })}
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
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPost({ ...post, category: e.target.value })}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPost({ ...post, author: e.target.value })}
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
                    disabled={imageUploading}
                    className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-700"
                  >
                    {imageUploading ? (
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

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={post.featured}
                onCheckedChange={(checked: boolean) => setPost({ ...post, featured: checked })}
              />
              <Label htmlFor="featured">Featured Post</Label>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/blog')}
              className="border-gray-700 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-gradient-to-r from-[#800000] to-[#cc0000] hover:from-[#990000] hover:to-[#dd0000]"
            >
              {saving ? (
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
};

export default BlogEditor;
