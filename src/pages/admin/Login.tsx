import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Loader2 } from "lucide-react";
import { signIn } from "@/lib/firebase/auth";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { user, error } = await signIn(email, password);
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Error signing in",
          description: "Please check your credentials and try again."
        });
        return;
      }

      if (user) {
        toast({
          title: "Success",
          description: "You have been signed in successfully."
        });
        navigate("/admin/blog");
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-900 rounded-xl border border-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Admin Login</h2>
          <p className="mt-2 text-gray-400">Sign in to manage your blog content</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-900/50 border border-red-800 text-red-200 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-darker"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                Signing in...
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;