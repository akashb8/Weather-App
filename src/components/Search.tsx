import type { FormEvent } from 'react';

interface SearchProps {
  city: string;
  setCity: (city: string) => void;
  fetchWeather: (e: FormEvent<HTMLFormElement>) => void;
}

export function Search({ city, setCity, fetchWeather }: SearchProps) {
  return (
    <form onSubmit={fetchWeather} className="flex gap-2.5 mb-8">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-3 border-none rounded-xl bg-white/20 text-white text-base outline-none transition-all duration-300 placeholder:text-white/70 focus:bg-white/30 focus:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
      />
      <button 
        type="submit" 
        className="px-5 py-3 border-none rounded-xl bg-pink-400 hover:bg-pink-500 text-white font-semibold text-base cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(255,126,179,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,117,140,0.6)] active:translate-y-0"
      >
        Search
      </button>
    </form>
  );
}
