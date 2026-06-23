import { FaHeart } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="py-8 border-t border-violet-500/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <p className="text-center text-gray-400 flex items-center justify-center gap-2">
          © 2026 Asmita Patil. Made with
          <FaHeart className="text-purple-500 animate-pulse drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
        </p>
      </div>
    </footer>
  );
}
