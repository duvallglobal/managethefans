import { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, Search, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BlogPost, getPosts } from "@/lib/firebase/blog";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define available blog categories
  const categories = ["All", "OnlyFans Growth", "Social Media", "Rent.Men Tips", "Success Stories", "Industry News"];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsData = await getPosts();
        setBlogPosts(postsData);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    // Safely handle potentially undefined properties
    const title = post.title?.toLowerCase() || '';
    const excerpt = post.excerpt?.toLowerCase() || '';
    const postCategory = post.category || '';
    
    const matchesSearch = title.includes(searchQuery.toLowerCase()) || 
                          excerpt.includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === null || activeCategory === "All" || postCategory === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-gradient-red text-glow animate-pulse">Loading...</div>
    </div>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="bg-black pt-24 md:pt-28 pb-8 border-b border-gray-800/30 relative" ref={sectionRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000] to-black opacity-50 z-20"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-red text-glow">Blog</span>
            </h1>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-primary/30 rounded-full focus:ring-2 focus:ring-primary focus:border-primary bg-black/50 backdrop-blur-sm text-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-black border-b border-gray-800/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === "All" ? null : category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  (activeCategory === category) || (category === "All" && activeCategory === null)
                    ? "bg-gradient-red text-white"
                    : "bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-10 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800/50 p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-red">No articles found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or category filters</p>
              <Button 
                onClick={() => {setSearchQuery(""); setActiveCategory(null);}}
                className="bg-gradient-to-r from-[#330000] to-[#660000] border border-primary/20 text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-6 hover:border-primary/30 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/90">
                        {post.category || 'Uncategorized'}
                      </span>
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>
                          {post.date || new Date(post.createdAt).toISOString().split('T')[0]}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author || 'Anonymous'}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary/90 transition-colors">{post.title}</h3>
                    </Link>
                    <p className="text-gray-300 mb-4">{post.excerpt || post.description || post.content.substring(0, 150) + '...'}</p>
                    <Link to={`/blog/${post.id}`}>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Simple Pagination Placeholder */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12 gap-2">
              <Button variant="outline" size="sm" className="border-gray-800 text-gray-400">Previous</Button>
              <Button variant="outline" size="sm" className="border-gray-800 bg-primary/10 text-white">1</Button>
              <Button variant="outline" size="sm" className="border-gray-800 text-gray-400">2</Button>
              <Button variant="outline" size="sm" className="border-gray-800 text-gray-400">3</Button>
              <Button variant="outline" size="sm" className="border-gray-800 text-gray-400">Next</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
