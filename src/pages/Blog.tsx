import { useState } from "react";
import { ArrowRight, Calendar, Search, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [
    "All", "OnlyFans Growth", "Social Media", "Rent.Men Tips", "Success Stories", "Industry News"
  ];
  
  interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    image: string;
    featured?: boolean;
  }
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Strategies to Double Your Fans Subscribers in 30 Days",
      excerpt: "Learn the proven strategies that have helped our clients double their subscriber count in just one month.",
      category: "Fans Growth",
      date: "June 15, 2023",
      author: "Jessica White",
      image: "https://placehold.co/800x600/eee/ccc",
      featured: true
    },
    {
      id: 2,
      title: "How to Create Viral TikTok Content That Converts to Fans Subscribers",
      excerpt: "Discover the formula for creating TikTok content that goes viral and drives traffic to your Fans page.",
      category: "Social Media",
      date: "July 2, 2023",
      author: "Michael Chen",
      image: "https://placehold.co/800x600/eee/ccc"
    },
    {
      id: 3,
      title: "Client Vetting 101: How to Screen for Quality Clients as a Masseur",
      excerpt: "Learn essential strategies for vetting clients to ensure safety, reliability, and compatibility.",
      category: "Masseur Tips",
      date: "July 12, 2023",
      author: "David Rodriguez",
      image: "https://placehold.co/800x600/eee/ccc"
    },
    {
      id: 4,
      title: "From 500 to 50,000 Followers: A Social Media Success Story",
      excerpt: "How one of our clients went from 500 to 50,000 followers in just six months using our growth strategies.",
      category: "Success Stories",
      date: "August 3, 2023",
      author: "Samantha Lee",
      image: "https://placehold.co/800x600/eee/ccc"
    },
    {
      id: 5,
      title: "The Future of Content Creation: AI Tools and Automation",
      excerpt: "Explore how AI tools and automation are revolutionizing content creation for digital creators.",
      category: "Industry News",
      date: "August 20, 2023",
      author: "Alex Thompson",
      image: "https://placehold.co/800x600/eee/ccc"
    },
    {
      id: 6,
      title: "5 Pricing Strategies to Maximize Your Fans Revenue",
      excerpt: "Learn effective pricing strategies that can significantly increase your monthly revenue on fan platforms.",
      category: "Fans Growth",
      date: "September 5, 2023",
      author: "Jessica White",
      image: "https://placehold.co/800x600/eee/ccc"
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === null || activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
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
