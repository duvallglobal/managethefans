import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Wand2 } from 'lucide-react';
import { createBlogPost } from '@/lib/firebase/blog';

interface GeneratedContent {
  title: string;
  content: string;
  description: string;
}

export default function BlogGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const { toast } = useToast();

  const generateBlogPost = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a professional blog post writer specializing in adult content marketing and OnlyFans growth strategies. Write in a professional yet engaging tone."
            },
            {
              role: "user",
              content: `Write a blog post about: ${prompt}. Include a title, main content with HTML formatting, and a short description for SEO. Format the response as JSON with title, content, and description fields.`
            }
          ],
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      const generatedText = data.choices[0].message.content;
      const parsed = JSON.parse(generatedText);
      setGeneratedContent(parsed);

      toast({
        title: "Content Generated",
        description: "Blog post has been generated successfully."
      });
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate blog post. Please try again."
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const publishPost = async () => {
    if (!generatedContent) return;

    try {
      const slug = generatedContent.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const result = await createBlogPost({
        title: generatedContent.title,
        content: generatedContent.content,
        description: generatedContent.description,
        published: true,
        slug
      });

      if (result.id) {
        toast({
          title: "Success",
          description: "Blog post has been published successfully."
        });
        setGeneratedContent(null);
        setPrompt('');
      }
    } catch (error) {
      console.error('Error publishing post:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to publish blog post. Please try again."
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">AI Blog Post Generator</h1>
          <p className="text-gray-400">Generate professional blog posts with AI</p>
        </div>

        <div className="space-y-8">
          {/* Input Section */}
          <div className="bg-gradient-to-br from-[#1a1a1a]/80 to-[#100000]/80 p-6 rounded-xl border border-[#800000]/30">
            <Label htmlFor="prompt">What should the blog post be about?</Label>
            <div className="mt-2 space-y-4">
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Top 10 strategies for growing your OnlyFans subscriber base in 2024"
                className="min-h-[100px] bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
              />
              <Button
                onClick={generateBlogPost}
                disabled={isGenerating || !prompt}
                className="w-full bg-gradient-to-r from-[#800000] to-[#cc0000] hover:from-[#990000] hover:to-[#dd0000]"
              >
                {isGenerating ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    Generating...
                  </div>
                ) : (
                  <>
                    Generate Post
                    <Wand2 className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Generated Content Section */}
          {generatedContent && (
            <div className="bg-gradient-to-br from-[#1a1a1a]/80 to-[#100000]/80 p-6 rounded-xl border border-[#800000]/30">
              <h2 className="text-xl font-semibold mb-4">{generatedContent.title}</h2>
              <div className="prose prose-invert max-w-none mb-6">
                <div dangerouslySetInnerHTML={{ __html: generatedContent.content }} />
              </div>
              <div className="border-t border-[#800000]/30 pt-4 mt-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Description</h3>
                <p className="text-gray-300">{generatedContent.description}</p>
              </div>
              <Button
                onClick={publishPost}
                className="mt-6 w-full bg-gradient-to-r from-[#800000] to-[#cc0000] hover:from-[#990000] hover:to-[#dd0000]"
              >
                Publish Post
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 