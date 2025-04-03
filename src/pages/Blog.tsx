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
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define available blog categories
  const categories = ["All", "Marketing", "Social Media", "Growth", "Strategy", "Technology"];

  useEffect(() => {
    setIsLoaded(true);
    
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
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === null || activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-gradient-red text-glow animate-pulse">Loading...</div>
    </div>;
  }

  return (
    <div className={`overflow-hidden bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-black pt-24 md:pt-28 overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-red text-white text-sm md:text-base font-semibold mb-4 border border-primary/30 animate-pulse-glow">
              Latest Insights
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 [text-wrap:balance] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our <span className="text-gradient-red text-glow">Blog</span>
            </h1>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Insights, strategies, and success stories to help you grow your online presence
            </p>
            
            <div className={`relative max-w-xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-black border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === "All" ? null : category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  (activeCategory === category) || (category === "All" && activeCategory === null)
                    ? "bg-gradient-red text-white animate-pulse-glow"
                    : "glass-card hover:border-primary/50 text-gray-300 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.find(post => post.featured) && (
        <section className="py-8 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts
              .filter(post => post.featured)
              .map(post => (
                <div 
                  key={post.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 glass-card-glow rounded-2xl overflow-hidden border border-primary/20 animate-fade-up"
                >
                  <div className="aspect-video lg:aspect-auto bg-gray-800 overflow-hidden">
                    {post.image && (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Tag className="h-4 w-4 text-gradient-red mr-2" />
                      <span className="text-sm font-medium text-gradient-red">{post.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-gradient-red mr-3"></div>
                      <div className="text-sm">
                        <p className="font-medium text-white">{post.author}</p>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button 
                        className="self-start bg-gradient-to-r from-[#330000] to-[#660000] backdrop-blur-sm border border-primary/20 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:from-[#440000] hover:to-[#770000]"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 glass-card-glow rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-red">No articles found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or category filters</p>
              <Button 
                onClick={() => {setSearchQuery(""); setActiveCategory(null);}}
                className="bg-gradient-to-r from-[#330000] to-[#660000] backdrop-blur-sm border border-primary/20 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:from-[#440000] hover:to-[#770000]"
              >
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
                    className="glass-card-glow rounded-2xl overflow-hidden border border-gray-800/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video bg-gray-800 overflow-hidden">
                      {post.image && (
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="h-4 w-4 text-gradient-red mr-2" />
                        <span className="text-sm font-medium text-gradient-red">{post.category}</span>
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
                    <div className="px-6 py-4 border-t border-gray-800/50">
                      <Link to={`/blog/${post.id}`}>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-center hover:text-gradient-red hover:text-glow"
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
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-gradient-red-intense opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-glow rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our <span className="text-gradient-red text-glow">Newsletter</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and strategies delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-black/50 text-white border border-primary/30"
              />
              <Button 
                className="bg-gradient-to-r from-[#330000] to-[#660000] backdrop-blur-sm border border-primary/20 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:from-[#440000] hover:to-[#770000]"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/5 animate-float"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
