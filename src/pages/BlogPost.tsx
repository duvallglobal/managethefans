import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostById, BlogPost as BlogPostType } from "@/lib/firebase/blog";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError("Blog post not found");
        setLoading(false);
        return;
      }

      try {
        const postData = await getPostById(id);
        if (postData) {
          setPost(postData);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-24 md:pt-28 flex items-center justify-center">
        <div className="text-gradient-red text-glow animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black pt-24 md:pt-28 px-4 flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-gray-900/40 rounded-xl border border-gray-800 p-8 text-center">
          <h2 className="text-2xl font-bold text-gradient-red mb-4">{error || "Blog post not found"}</h2>
          <p className="text-gray-300 mb-6">The blog post you're looking for doesn't exist or couldn't be loaded.</p>
          <Button
            onClick={() => navigate("/blog")}
            className="bg-gradient-to-r from-[#330000] to-[#660000] text-white"
          >
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  // Format the content with proper line breaks and parse HTML
  const formattedContent = post.content.split('\n').map((paragraph, index) => {
    // If paragraph contains HTML, preserve it
    if (paragraph.match(/<[^>]*>/)) {
      return <div key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />;
    }
    // Otherwise render as a standard paragraph
    return <p key={index} className="mb-4">{paragraph}</p>;
  });

  return (
    <div className="min-h-screen bg-black pt-24 md:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Button>
        </div>

        {/* Post header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary/90 text-sm">{post.category}</span>
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-left">{post.title}</h1>
          <p className="text-lg text-gray-300 text-left">{post.excerpt}</p>
        </div>

        {/* Featured image if available */}
        {post.image && (
          <div className="mb-10">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Post content */}
        <article className="prose prose-invert prose-lg max-w-none text-left">
          {formattedContent}
        </article>

        {/* Related posts suggestion */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold mb-6 text-left">Want to read more?</h3>
          <Button
            onClick={() => navigate("/blog")}
            className="bg-gradient-to-r from-[#330000] to-[#660000] text-white"
          >
            Browse All Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 