export default function BackgroundDecoration() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-3xl" />
        
        {/* Large elegant bubbles */}
        <div className="bubble-large absolute left-1/4 top-1/3 w-32 h-32">
          <div className="bubble-inner bg-gradient-to-br from-purple-400/30 via-purple-300/20 to-purple-600/10" />
        </div>
        
        <div className="bubble-large absolute right-1/4 top-2/3 w-40 h-40">
          <div className="bubble-inner bg-gradient-to-br from-pink-400/30 via-pink-300/20 to-pink-600/10" />
        </div>
        
        <div className="bubble-medium absolute left-1/3 bottom-1/4 w-24 h-24">
          <div className="bubble-inner bg-gradient-to-br from-indigo-400/30 via-indigo-300/20 to-indigo-600/10" />
        </div>
        
        {/* Small decorative bubbles */}
        <div className="bubble-small absolute right-1/3 top-1/4 w-16 h-16">
          <div className="bubble-inner bg-gradient-to-br from-purple-300/30 via-pink-200/20 to-purple-400/10" />
        </div>
        
        <div className="bubble-small absolute left-2/3 bottom-1/3 w-20 h-20">
          <div className="bubble-inner bg-gradient-to-br from-pink-300/30 via-purple-200/20 to-pink-400/10" />
        </div>
        
        {/* Tiny ambient bubbles */}
        <div className="bubble-tiny absolute left-1/2 top-1/4 w-8 h-8">
          <div className="bubble-inner bg-gradient-to-br from-purple-200/30 via-pink-100/20 to-purple-300/10" />
        </div>
        
        <div className="bubble-tiny absolute right-2/3 bottom-1/2 w-10 h-10">
          <div className="bubble-inner bg-gradient-to-br from-pink-200/30 via-purple-100/20 to-pink-300/10" />
        </div>
      </div>
    </>
  );
}