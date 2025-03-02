import React from 'react';
import { ChevronDown, Star } from 'lucide-react';

interface ArtPrint {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating?: number;
  reviews?: number;
}

const artPrints: ArtPrint[] = [
  {
    id: 1,
    name: "Between The Pages Of A Book Is A Lovely Place To Be Art Print",
    description: "Book-themed illustration with floral elements on a dark background",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    price: 99,
  },
  {
    id: 2,
    name: "Sunflower Field Art Print",
    description: "Vibrant sunflower field illustration with blue sky",
    image: "https://images.unsplash.com/photo-1623578134763-2a21433eb0c5?auto=format&fit=crop&q=80",
    price: 99,
    rating: 5,
    reviews: 2
  },
  {
    id: 3,
    name: "You Got This Art Print",
    description: "Motivational typography with floral elements on dark background",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80",
    price: 99,
  },
  {
    id: 4,
    name: "Inhale Exhale Art Print",
    description: "Mindfulness reminder with botanical illustration on dark background",
    image: "https://images.unsplash.com/photo-1544716280-5c9f6a12d2b3?auto=format&fit=crop&q=80",
    price: 99,
    rating: 5,
    reviews: 1
  },
  {
    id: 5,
    name: "Bloom Where You Are Planted Art Print",
    description: "Inspirational quote with floral elements",
    image: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80",
    price: 99,
  },
  {
    id: 6,
    name: "Grow Through What You Go Through Art Print",
    description: "Growth mindset quote with plant illustration",
    image: "https://images.unsplash.com/photo-1606103836937-9129941c0722?auto=format&fit=crop&q=80",
    price: 99,
  },
  {
    id: 7,
    name: "Stay Wild Art Print",
    description: "Nature-inspired typography with wilderness elements",
    image: "https://images.unsplash.com/photo-1623578134934-c24fb0bf2c0d?auto=format&fit=crop&q=80",
    price: 99,
  },
  {
    id: 8,
    name: "Home Sweet Home Art Print",
    description: "Cozy home illustration with warm colors",
    image: "https://images.unsplash.com/photo-1544716279-e514665533f0?auto=format&fit=crop&q=80",
    price: 99,
  },
  {
    id: 9,
    name: "Morning Person Art Print",
    description: "Sunrise illustration with coffee cup motif",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    price: 99,
  },
  {
    id: 10,
    name: "Night Owl Art Print",
    description: "Starry night illustration with owl silhouette",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80",
    price: 99,
  }
];

const StarRating = ({ rating, reviews }: { rating?: number; reviews?: number }) => {
  if (!rating) return null;
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating ? 'fill-[#F5A623] text-[#F5A623]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-sm text-gray-600">({reviews})</span>
      )}
    </div>
  );
};

const ArtPrints = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-5xl font-serif text-[#1a472a] mb-4">Art Prints</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beautiful art prints featuring inspirational quotes, nature-inspired designs, and illustrations to brighten up your space.
              </p>
            </div>

            {/* Filters and Sort */}
            <div className="flex justify-end items-center border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{artPrints.length} products</span>
                <div className="relative">
                  <select className="appearance-none border rounded-lg pl-4 pr-10 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a472a] bg-white">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {artPrints.map((print) => (
                <div
                  key={print.id}
                  className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={print.image}
                      alt={print.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium text-[#1a472a] line-clamp-2 min-h-[48px]">{print.name}</h3>
                    <StarRating rating={print.rating} reviews={print.reviews} />
                    <div className="mt-2 text-[#1a472a] font-semibold">From Rs. {print.price}.00</div>
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-[#1a472a] px-6 py-2 rounded-full font-medium hover:bg-[#1a472a] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtPrints;