import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ShoppingCart, Star, Plus, Minus, Heart, Tag, Truck, Shield, RotateCcw, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1, name: 'GT Home Jerse', price: 1299, originalPrice: 1799,
    category: 'Jerseys', rating: 4.8, reviews: 342,
    badge: 'BEST SELLER',
    colors: ['#002D62', '#FFFFFF', '#E30613'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://topcricketstore.com/cdn/shop/files/1Img.webp?v=1740244792',
    desc: 'Official GT replica jersey with Dri-FIT technology.',
  },
  {
    id: 2, name: 'GT Away Jersey', price: 1299, originalPrice: 1799,
    category: 'Jerseys', rating: 4.6, reviews: 198,
    badge: 'NEW',
    colors: ['#FFD700', '#002D62'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T3g49wth1ay8V4NpLwfJOSmCxjRB7H0dACsr91jl-tGdkXeG7lSBE0o&s=10',
    desc: 'GT gold alternate kit — stand out from the crowd.',
  },
  {
    id: 3, name: 'GT Army Cap', price: 499, originalPrice: 699,
    category: 'Accessories', rating: 4.7, reviews: 521,
    badge: 'HOT',
    colors: ['#002D62', '#010B1F', '#E30613'],
    sizes: ['Free Size'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJoIG0ceb5ApdD1cRO9dgDCIS2_FWFL4cEjZK94jtVhi0Nf6q_In44sE&s=10',
    desc: 'Structured snapback with embroidered GT lion crest.',
  },
  {
    id: 4, name: 'Gujarat Titans Hoodie', price: 1799, originalPrice: 2499,
    category: 'Clothing', rating: 4.9, reviews: 87,
    badge: 'LIMITED',
    colors: ['#010B1F', '#002D62'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5rnOchi-vIknD8IzICIVkqlIsdnJwxV1-U9Hi3-aeQ&s',
    desc: '380 GSM fleece hoodie with GT lion graphic on back.',
  },
  {
    id: 5, name: 'GT Signed Mini Bat', price: 2999, originalPrice: 3499,
    category: 'Collectibles', rating: 5.0, reviews: 34,
    badge: 'COLLECTOR',
    colors: ['#F5DEB3'],
    sizes: ['One Size'],
    image: 'https://arena.cricketgraph.com/uploads/own-the-2023-edition-full-size-gujarat-titans-hand-signed-bat-titanstreasure-2-jpg_1716198849.jpg',
    desc: 'Miniature bat with printed signatures of the squad.',
  },
  {
    id: 6, name: 'GT Coffee Mug', price: 349, originalPrice: 449,
    category: 'Accessories', rating: 4.5, reviews: 263,
    badge: null,
    colors: ['#002D62', '#E30613'],
    sizes: ['350ml', '500ml'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbrkF7JBHRX8IGshTzVUqr_xS1LlzE-pGLUixhARQjg&s',
    desc: 'Ceramic mug with GT crest — fuel your roar.',
  },
];

const categories = ['All', 'Jerseys', 'Clothing', 'Accessories', 'Collectibles'];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={11}
          className={i <= Math.round(rating) ? 'text-[#FFD700] fill-[#FFD700]' : 'text-gray-600'} />
      ))}
    </div>
  );
}

function ProductCard({ product, onAddToCart, onWishlist, wishlisted }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[product.sizes.length > 1 ? 2 : 0] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(0);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl overflow-hidden group hover:border-[#FFD700]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD700]/10 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#002D62]/30 to-[#010B1F]">
        <img src={product.image} alt={product.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] font-black px-2 py-1 rounded-full bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white tracking-wider">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 text-[10px] font-black px-2 py-1 rounded-full bg-[#FFD700] text-[#002D62]">
          -{discount}%
        </span>
        <button
          onClick={() => onWishlist(product.id)}
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#E30613]/80 transition-colors"
        >
          <Heart size={14} className={wishlisted ? 'fill-[#E30613] text-[#E30613]' : 'text-white'} />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-white font-bold text-sm leading-snug mb-1">{product.name}</h3>
        <p className="text-gray-400 text-xs mb-2 line-clamp-1">{product.desc}</p>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-gray-500 text-[10px]">({product.reviews})</span>
        </div>

        {/* Colors */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.map((c, i) => (
            <button key={i} onClick={() => setSelectedColor(i)}
              className={`w-5 h-5 rounded-full border-2 transition-all ${selectedColor === i ? 'border-[#FFD700] scale-110' : 'border-transparent'}`}
              style={{ background: c }}
            />
          ))}
        </div>

        {/* Sizes */}
        <div className="flex gap-1 flex-wrap mb-3">
          {product.sizes.map(s => (
            <button key={s} onClick={() => setSelectedSize(s)}
              className={`text-[10px] font-bold px-2 py-0.5 rounded border transition-all ${selectedSize === s ? 'bg-[#FFD700] text-[#002D62] border-[#FFD700]' : 'bg-transparent text-gray-400 border-[#1a2a4a] hover:border-[#FFD700]/50'}`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-white font-black text-lg">₹{product.price.toLocaleString()}</span>
            <span className="text-gray-500 text-xs line-through">₹{product.originalPrice.toLocaleString()}</span>
          </div>
          <button
            onClick={() => onAddToCart({ ...product, selectedSize, selectedColor })}
            className="w-full py-2.5 bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white text-xs font-black rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
          >
            <ShoppingCart size={13} /> Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CartDrawer({ cart, onClose, onRemove, onQtyChange }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const [ordered, setOrdered] = useState(false);

  return (
    <motion.div
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 300 }}
      className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-[#000D1F] border-l border-[#1a2a4a] z-[200] flex flex-col shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <div className="h-1 bg-gradient-to-r from-[#E30613] via-[#FFD700] to-[#E30613]" />
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a2a4a]">
        <div className="flex items-center gap-2">
          <ShoppingCart size={18} className="text-[#FFD700]" />
          <span className="text-white font-bold text-sm uppercase tracking-wide">Your Cart</span>
          <span className="bg-[#E30613] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">{cart.length}</span>
        </div>
        <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {cart.length === 0 && !ordered && (
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <ShoppingBag size={48} className="text-gray-700 mb-4" />
            <p className="text-gray-400 font-semibold">Your cart is empty</p>
            <p className="text-gray-600 text-sm mt-1">Add some GT gear!</p>
          </div>
        )}
        {ordered ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center py-20">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <p className="text-white font-black text-lg mb-1">Order Placed! 🦁</p>
            <p className="text-gray-400 text-sm">Thanks for supporting GT Army!</p>
            <p className="text-gray-500 text-xs mt-2">Confirmation sent to your email.</p>
          </motion.div>
        ) : (
          cart.map(item => (
            <div key={item.cartId} className="flex gap-3 bg-[#0A1628] rounded-xl p-3 border border-[#1a2a4a]">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-bold leading-snug truncate">{item.name}</p>
                <p className="text-gray-500 text-[10px] mt-0.5">Size: {item.selectedSize}</p>
                <p className="text-[#FFD700] font-black text-sm mt-1">₹{item.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => onQtyChange(item.cartId, item.qty - 1)}
                    className="w-6 h-6 rounded-full bg-[#1a2a4a] flex items-center justify-center text-white hover:bg-[#E30613] transition-colors">
                    <Minus size={10} />
                  </button>
                  <span className="text-white text-xs font-bold w-4 text-center">{item.qty}</span>
                  <button onClick={() => onQtyChange(item.cartId, item.qty + 1)}
                    className="w-6 h-6 rounded-full bg-[#1a2a4a] flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                    <Plus size={10} />
                  </button>
                  <button onClick={() => onRemove(item.cartId)} className="ml-auto text-gray-600 hover:text-[#E30613] transition-colors">
                    <X size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {!ordered && cart.length > 0 && (
        <div className="border-t border-[#1a2a4a] p-5 space-y-3">
          <div className="flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg px-3 py-2">
            <Tag size={13} className="text-[#FFD700]" />
            <input placeholder="Promo code (try: GTARMY10)" className="bg-transparent text-white text-xs flex-1 outline-none placeholder-gray-500" />
            <button className="text-[#FFD700] text-xs font-bold hover:text-white transition-colors">Apply</button>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Subtotal</span>
            <span className="text-white font-bold">₹{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Delivery</span>
            <span className="text-green-400 font-bold">FREE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white font-black">Total</span>
            <span className="text-[#FFD700] font-black text-lg">₹{total.toLocaleString()}</span>
          </div>
          <button onClick={() => setOrdered(true)}
            className="w-full py-3.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002D62] font-black text-sm rounded-xl hover:shadow-xl hover:shadow-yellow-500/30 transition-all uppercase tracking-wide flex items-center justify-center gap-2">
            Place Order <ChevronRight size={16} />
          </button>
          <div className="flex items-center justify-center gap-4 pt-1">
            {[{ icon: Truck, text: 'Free Delivery' }, { icon: Shield, text: 'Secure Pay' }, { icon: RotateCcw, text: '7-Day Return' }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1 text-gray-500 text-[10px]">
                <Icon size={11} /> {text}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function GTStore({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.cartId === `${product.id}-${product.selectedSize}`);
      if (existing) return prev.map(i => i.cartId === existing.cartId ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, cartId: `${product.id}-${product.selectedSize}`, qty: 1 }];
    });
    setShowCart(true);
  };

  const toggleWishlist = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  const removeFromCart = (cartId) => setCart(prev => prev.filter(i => i.cartId !== cartId));
  const changeQty = (cartId, qty) => {
    if (qty <= 0) return removeFromCart(cartId);
    setCart(prev => prev.map(i => i.cartId === cartId ? { ...i, qty } : i));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-sm flex items-stretch justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
            className="relative bg-[#010B1F] w-full max-w-5xl m-4 rounded-2xl overflow-hidden flex flex-col border border-[#1a2a4a] shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 32px)' }}
          >
            {/* Top bar */}
            <div className="h-1 bg-gradient-to-r from-[#E30613] via-[#FFD700] to-[#E30613] flex-shrink-0" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a2a4a] bg-[#000D1F] flex-shrink-0">
              <div className="flex items-center gap-3">
                <img src="/gt-logo.png" alt="GT Logo" className="w-9 h-9 object-contain" />                <div>
                  <div className="text-white font-black text-base tracking-widest" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                    GT STORE
                  </div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wider">Official Gujarat Titans Merchandise</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setShowCart(true)}
                  className="relative flex items-center gap-1.5 px-4 py-2 bg-[#0A1628] border border-[#1a2a4a] hover:border-[#FFD700]/40 rounded-xl text-white text-sm font-bold transition-all">
                  <ShoppingCart size={15} className="text-[#FFD700]" />
                  Cart
                  {cart.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#E30613] text-white text-[9px] font-black rounded-full flex items-center justify-center">
                      {cart.reduce((s, i) => s + i.qty, 0)}
                    </span>
                  )}
                </button>
                <button onClick={onClose} className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Promo banner */}
            <div className="bg-gradient-to-r from-[#E30613] to-[#c0040f] px-6 py-2 flex items-center justify-center gap-2 flex-shrink-0">
              <Tag size={13} className="text-[#FFD700]" />
              <span className="text-white text-xs font-bold">Use code <span className="text-[#FFD700] font-black">GTARMY10</span> for 10% off on orders above ₹999</span>
              <Truck size={13} className="text-[#FFD700] ml-2" />
              <span className="text-white text-xs font-bold">Free delivery on all orders</span>
            </div>

            {/* Category filter */}
            <div className="px-6 py-3 border-b border-[#1a2a4a] flex items-center gap-2 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: 'none' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white shadow-lg shadow-red-500/20' : 'bg-[#0A1628] border border-[#1a2a4a] text-gray-400 hover:text-white hover:border-[#FFD700]/30'}`}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Products grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {filtered.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onWishlist={toggleWishlist}
                    wishlisted={wishlist.includes(product.id)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cart Drawer */}
          <AnimatePresence>
            {showCart && (
              <CartDrawer
                cart={cart}
                onClose={() => setShowCart(false)}
                onRemove={removeFromCart}
                onQtyChange={changeQty}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}