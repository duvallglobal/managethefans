import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Image as ImageIcon, Loader2, Bold, Italic, Underline, Heading1, Heading2, AlignLeft, AlignCenter, AlignRight, List, ListOrdered } from "lucide-react";
import { 
  getPostById, 
  createPost, 
  updatePost, 
  uploadImage, 
  BlogPost 
} from "@/lib/firebase/blog";
import { onAuthChange } from "@/lib/firebase/auth";

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
      }
    });

    if (id) {
      setLoading(true);
      const fetchPost = async () => {
        try {
          const postData = await getPostById(id);
          if (postData) {
            // Extract all properties except 'id' from postData
            const { id: _, ...postWithoutId } = postData;
            setPost(postWithoutId);
          } else {
            alert('Post not found');
            navigate('/admin/blog');
          }
        } catch (err) {
          console.error('Error:', err);
          alert('Failed to load post');
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }

    return () => unsubscribe();
  }, [id, navigate]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const imageUrl = await uploadImage(file);
      setPost({ ...post, image: imageUrl });
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
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
        alert("Please fill all required fields");
        setSaving(false);
        return;
      }

      if (id) {
        // Update existing post
        await updatePost(id, post);
      } else {
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

  // Text formatting functions
  const formatText = (tag: string) => {
    if (!contentRef.current) return;

    const textarea = contentRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = post.content.substring(start, end);
    
    let formattedText = '';
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
      default:
        formattedText = selectedText;
    }

    const newContent = post.content.substring(0, start) + formattedText + post.content.substring(end);
    setPost({ ...post, content: newContent });
    
    // Reset focus after state update
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start;
      textarea.selectionEnd = start + formattedText.length;
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
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/admin/blog")}
            className="mr-4 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold">{id ? "Edit Post" : "Create New Post"}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <Input
                required
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Excerpt</label>
              <Textarea
                required
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white h-24"
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
                )}
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("image-upload")?.click()}
                    disabled={imageUploading}
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    {imageUploading ? (
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    ) : (
                      <ImageIcon className="h-5 w-5 mr-2" />
                    )}
                    {post.image ? "Change Image" : "Upload Image"}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                checked={post.featured}
                onCheckedChange={(checked) => setPost({ ...post, featured: checked })}
                className="bg-gray-700"
              />
              <label className="text-sm font-medium text-gray-300">Featured Post</label>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/blog")}
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-primary hover:bg-primary-darker"
            >
              {saving && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
              {saving ? "Saving..." : "Save Post"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;