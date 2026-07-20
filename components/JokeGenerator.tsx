import React, { useState, useEffect } from 'react';
import { RotateCw, Copy, Share2, Heart } from 'lucide-react';

interface Joke {
  id: number;
  setup?: string;
  delivery?: string;
  joke?: string;
  type: string;
}

const JokeGenerator: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data: Joke = await response.json();
      setJoke(data);
      setLiked(false);
    } catch (error) {
      console.error('Failed to fetch joke:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const copyToClipboard = () => {
    if (joke) {
      const text = joke.setup ? `${joke.setup}\n${joke.delivery}` : joke.joke || '';
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareJoke = () => {
    if (joke && navigator.share) {
      const text = joke.setup ? `${joke.setup}\n${joke.delivery}` : joke.joke || '';
      navigator.share({
        title: 'Check out this joke!',
        text: text,
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Joke of the Day</h2>
          <p className="text-purple-100">Get a laugh with a random joke</p>
        </div>
      </div>

      {joke && (
        <div className="bg-white bg-opacity-95 rounded-xl p-6 mb-6 min-h-[150px] flex flex-col justify-center">
          {joke.setup ? (
            <>
              <p className="text-lg font-semibold text-gray-800 mb-3">{joke.setup}</p>
              <p className="text-xl font-bold text-purple-600">{joke.delivery}</p>
            </>
          ) : (
            <p className="text-xl font-semibold text-gray-800">{joke.joke}</p>
          )}
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin">
            <RotateCw className="text-white" size={32} />
          </div>
          <p className="text-white mt-3">Loading joke...</p>
        </div>
      )}

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={fetchJoke}
          disabled={loading}
          className="flex-1 bg-white hover:bg-opacity-90 text-purple-600 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          <RotateCw size={20} />
          New Joke
        </button>
        <button
          onClick={copyToClipboard}
          className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <Copy size={20} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button
          onClick={shareJoke}
          className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <Share2 size={20} />
          Share
        </button>
        <button
          onClick={() => setLiked(!liked)}
          className={`flex-1 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition ${
            liked 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-white hover:bg-opacity-90 text-red-500'
          }`}
        >
          <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
          Like
        </button>
      </div>
    </div>
  );
};

export default JokeGenerator;
