// components/LessonCard.tsx
import Link from 'next/link';
import { Lesson } from '../lib/data';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{lesson.title}</h3>
      <p className="text-gray-600 mb-4">{lesson.summary}</p>
      <Link href={`/${lesson.slug}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300">
        เริ่มเรียน →
      </Link>
    </div>
  );
};

export default LessonCard;