import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, you should proxy these requests through your backend
});

export const generateBlogPost = async (topic: string, tone: string = 'professional') => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a professional blog writer specializing in adult industry content marketing, 
          focusing on OnlyFans, social media growth, and RentMen topics. Write in a ${tone} tone.`
        },
        {
          role: "user",
          content: `Write a blog post about: ${topic}. 
          Include a title, excerpt (brief summary), and main content. 
          Format the response as JSON with the following structure:
          {
            "title": "The blog post title",
            "excerpt": "A brief 2-3 sentence summary",
            "content": "The full blog post content with HTML formatting"
          }`
        }
      ],
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) throw new Error('No response from OpenAI');

    return JSON.parse(response);
  } catch (error) {
    console.error('Error generating blog post:', error);
    throw error;
  }
}; 