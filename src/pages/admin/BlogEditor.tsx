import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
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
      // Generate slug from title if not provided
      const slug = formData.slug || generateSlug(formData.title);
      const postData = { ...formData, slug };

      if (id) {
        await updateBlogPost(id, postData);
        toast({
          title: "Success",
          description: "Blog post updated successfully."
        });
      } else {
        const result = await createBlogPost(postData);
        toast({
          title: "Success",
          description: "Blog post created successfully."
        });
        // Navigate to edit page if new post
        if (result.id) {
          navigate(`/admin/blog/edit/${result.id}`);
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

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">
          {id ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>

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
}