// app/[lessonSlug]/page.tsx
import { getLessonBySlug } from '../../lib/data';
import { notFound } from 'next/navigation';

// Next.js App Router Function component
export default function LessonPage({ params }: { params: { lessonSlug: string } }) {
  const lesson = getLessonBySlug(params.lessonSlug);

  if (!lesson) {
    // ใช้ Next.js notFound() function เพื่อแสดงหน้า 404
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          {lesson.title}
        </h1>
        <p className="text-lg text-gray-500 mb-8 border-b pb-4">
          {lesson.summary}
        </p>

        {/* เนื้อหาหลักของบทเรียน อาจใช้ Markdown หรือ HTML ที่ซับซ้อนกว่านี้ */}
        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>{lesson.content}</p>
          {/* เพิ่มเนื้อหาเชิงลึก เช่น หัวข้อย่อย, โค้ดบล็อก, รูปภาพ */}
        </div>

        <div className="mt-10 pt-6 border-t">
          <a href="/" className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150">
            ← กลับสู่หน้าหลัก
          </a>
        </div>
      </article>
    </div>
  );
}