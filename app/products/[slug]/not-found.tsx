import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center md:p-[3.5em] p-[1.5625em]" style={{ backgroundColor: 'var(--midnight)' }}>
      <div className="max-w-[37.5em] text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Product Not Found
        </h1>
        <p className="text-xl text-white/70 mb-8">
          The product you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

