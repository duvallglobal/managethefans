import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Search, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { blogApi, BlogPost } from "@/lib/supabase/blog";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Define available blog categories
  const categories = ["All", "Marketing", "Social Media", "Growth", "Strategy", "Technology"];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await blogApi.getPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === null || activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-primary">Loading...</div>
    </div>;
  }

  return (
    <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black to-gray-900 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up">
              Insights, strategies, and success stories to help you grow your online presence
            </p>
            
            <div className="relative max-w-xl mx-auto animate-fade-up">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-full focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === "All" ? null : category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  (activeCategory === category) || (category === "All" && activeCategory === null)
                    ? "bg-primary text-white"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.find(post => post.featured) && (
        <section className="py-12 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts
              .filter(post => post.featured)
              .map(post => (
                <div 
                  key={post.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900 rounded-2xl overflow-hidden shadow-sm animate-fade-up border border-gray-800"
                >
                  <div className="aspect-video lg:aspect-auto bg-gray-800 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Tag className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm font-medium text-primary">{post.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-gray-700 mr-3"></div>
                      <div className="text-sm">
                        <p className="font-medium text-white">{post.author}</p>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="self-start">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or category filters</p>
              <Button onClick={() => {setSearchQuery(""); setActiveCategory(null);}}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter(post => !post.featured)
                .map((post, index) => (
                  <div 
                    key={post.id}
                    className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video bg-gray-800 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-400">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-400">{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-t border-gray-800">
                      <Button variant="ghost" className="w-full justify-center">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-800 text-white"
            />
            <Button className="w-full sm:w-auto">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
