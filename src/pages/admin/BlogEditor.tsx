import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Image as ImageIcon, Loader2 } from "lucide-react";
import { blogApi, BlogPost } from "@/lib/supabase/blog";
import { supabase } from '@/lib/supabase/supabaseClient';
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
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: categories[0],
    author: "",
    image: "",
    featured: false,
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
      return;
    }

    if (id) {
      setLoading(true);
      const fetchPost = async () => {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching post:', error);
          alert('Failed to load post');
        } else {
          setPost(data);
        }
        setLoading(false);
      };

      fetchPost();
    }
  }, [id, navigate]);

  const handleSave = async () => {
    setSaving(true);
    const { data, error } = await supabase
      .from('posts')
      .upsert(post);

    if (error) {
      console.error('Error saving post:', error);
    } else {
      navigate('/admin/blog');
    }
    setSaving(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const imageUrl = await blogApi.uploadImage(file);
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
      if (id) {
        await blogApi.updatePost(parseInt(id), post);
      } else {
        await blogApi.createPost(post);
      }
      navigate("/admin/blog");
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post");
    } finally {
      setSaving(false);
    }
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
              <Textarea
                required
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white h-64"
              />
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