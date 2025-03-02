import React, { useState } from 'react';
import { Minus, Plus, ChevronDown } from 'lucide-react';
import ProductLayout from '../components/templates/ProductLayout';

const GiftCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [isGift, setIsGift] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isHighlightsOpen, setIsHighlightsOpen] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80" 
              alt="Digital Gift Card" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif text-[#1a472a] mb-2">Digital Gift Card</h1>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-[#F5A623] fill-[#F5A623]" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">Be the first to write a review</span>
            </div>

            <div className="mb-6">
              <div className="flex gap-4 mb-4">
                <button className="px-4 py-2 border-2 border-[#1a472a] text-[#1a472a] rounded-lg hover:bg-[#1a472a] hover:text-white transition-colors">
                  ₹500
                </button>
                <button className="px-4 py-2 border-2 border-[#1a472a] text-[#1a472a] rounded-lg hover:bg-[#1a472a] hover:text-white transition-colors">
                  ₹1000
                </button>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 border-2 border-[#1a472a] text-[#1a472a] rounded-lg hover:bg-[#1a472a] hover:text-white transition-colors">
                  ₹1500
                </button>
                <button className="px-4 py-2 border-2 border-[#1a472a] text-[#1a472a] rounded-lg hover:bg-[#1a472a] hover:text-white transition-colors">
                  ₹2000
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button 
                  onClick={decreaseQuantity}
                  className="px-4 py-2 text-gray-600 hover:text-[#1a472a]"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="px-4 py-2 text-gray-600 hover:text-[#1a472a]"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Gift Option */}
            <div className="mb-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isGift}
                  onChange={() => setIsGift(!isGift)}
                  className="w-4 h-4 text-[#1a472a] border-gray-300 rounded focus:ring-[#1a472a]"
                />
                <span className="text-gray-700">I want to send this as a gift</span>
              </label>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-[#1a472a] text-white py-3 rounded-full hover:bg-[#1a472a]/90 transition-colors mb-8">
              Add to cart
            </button>

            {/* Description */}
            <div className="border-t border-gray-200 py-4">
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#1a472a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-lg font-medium text-[#1a472a]">Description</span>
                </div>
                <ChevronDown 
                  className={`transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              {isDescriptionOpen && (
                <div className="mt-4 text-gray-700 space-y-2">
                  <p>Choosing the perfect products to gift someone can be hard but gift cards are here for your rescue.</p>
                  <p>Gift them this card and let them choose what they like, you cannot go wrong with this!</p>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="border-t border-gray-200 py-4">
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsHighlightsOpen(!isHighlightsOpen)}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#1a472a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="text-lg font-medium text-[#1a472a]">Highlights</span>
                </div>
                <ChevronDown 
                  className={`transition-transform ${isHighlightsOpen ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              {isHighlightsOpen && (
                <div className="mt-4 text-gray-700">
                  <p>Gift cards are sent via e-mail. Please check your spam/junk/promotions if you cannot locate it in your inbox, once you place an order.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif text-[#1a472a] mb-6">Customer Reviews</h2>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-6 h-6 text-gray-300" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6">Be the first to write a review</p>
            <button className="bg-[#1a472a] text-white px-6 py-3 rounded-lg hover:bg-[#1a472a]/90 transition-colors">
              Write a review
            </button>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif text-[#1a472a] mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Between The Pages Of A Book Is A Lovely Place To Be Art Print",
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
              },
              {
                title: "Bloom Where You Are Planted Art Print",
                image: "https://images.unsplash.com/photo-1544716279-e514665533f0?auto=format&fit=crop&q=80"
              },
              {
                title: "Could-Do List Magnetic Notepad",
                image: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80"
              },
              {
                title: "Grow Through What You Go Through Art Print",
                image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80"
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{product.title}</h3>
                <p className="text-sm font-medium text-[#1a472a] mt-1">From ₹99.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;