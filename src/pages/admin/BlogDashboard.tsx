import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";

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

const BlogDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }

    // TODO: Fetch actual blog posts from your backend
    // For now, using dummy data
    setPosts([
      {
        id: 1,
        title: "10 Strategies to Double Your Fans Subscribers in 30 Days",
        excerpt: "Learn the proven strategies that have helped our clients double their subscriber count in just one month.",
        category: "Fans Growth",
        date: "2024-03-15",
        author: "Jessica White",
        image: "https://placehold.co/800x600/eee/ccc",
        featured: true
      },
      // Add more dummy posts as needed
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/admin/login");
  };

  const handleCreatePost = () => {
    navigate("/admin/blog/new");
  };

  const handleEditPost = (id: number) => {
    navigate(`/admin/blog/edit/${id}`);
  };

  const handleDeletePost = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      // TODO: Implement actual delete functionality
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <div className="flex gap-4">
            <Button onClick={handleCreatePost} className="bg-primary hover:bg-primary-darker">
              <Plus className="h-5 w-5 mr-2" />
              New Post
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-900/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Author</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Featured</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-6 py-4 text-sm">{post.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{post.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{post.author}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{post.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {post.featured ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditPost(post.id)}
                          className="text-gray-300 hover:text-white"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDashboard; 