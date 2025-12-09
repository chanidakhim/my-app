// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold hover:text-blue-200 transition duration-150">
          BSCC T604 🖥️
        </Link>
        <div className="space-x-4">
          <Link href="#lessons" className="text-white hover:text-blue-300 transition duration-150">
            ดูบทเรียน
          </Link>
          <Link href="/" className="text-white hover:text-blue-300 transition duration-150">
            เกี่ยวกับ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;