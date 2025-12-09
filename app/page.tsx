// app/page.tsx
import Link from 'next/link';

// --- 1. MOCK DATA และ TYPE DEFINITIONS ---
export type Lesson = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "บทที่ 1: การติดตั้งและกำหนดค่าเครือข่ายพื้นฐาน",
    slug: "basic-setup",
    summary: "เรียนรู้การติดตั้ง การกำหนดค่าเริ่มต้น และการใช้งานเครือข่ายเบื้องต้น",
    content:
      "เนื้อหา: การติดตั้งอุปกรณ์เครือข่าย เช่น Router, Switch, การตั้งค่า IP Address เบื้องต้น รวมถึงการตรวจสอบการเชื่อมต่อเครือข่ายพื้นฐาน"
  },
  {
    id: 2,
    title: "บทที่ 2: การจัดการการส่งข้อมูลและการค้นหาเส้นทาง",
    slug: "routing-management",
    summary: "ทำความเข้าใจหลักการค้นหาเส้นทาง (Routing) และการจัดการทราฟฟิก",
    content:
      "เนื้อหา: การใช้งาน Static Routing, Dynamic Routing (OSPF, RIP), หลักการเลือกเส้นทาง และการบริหารจัดการ Traffic Flow"
  },
  {
    id: 3,
    title: "บทที่ 3: การบริหารจัดการ IP Address",
    slug: "ip-addressing",
    summary: "การจัดสรร IP, Static/Dynamic, Subnetting",
    content:
      "เนื้อหา: DHCP Server, การทำ Subnetting, CIDR, การออกแบบ IP Address สำหรับองค์กร"
  },
  {
    id: 4,
    title: "บทที่ 4: ระบบเครือข่ายไร้สาย",
    slug: "wireless-systems",
    summary: "การติดตั้ง กำหนดค่า และการจัดการระบบไร้สาย",
    content:
      "เนื้อหา: มาตรฐาน 802.11, ความปลอดภัย WiFi (WPA2/3), การตั้งค่า Access Point และการแก้ปัญหาระบบไร้สาย"
  },
  {
    id: 5,
    title: "บทที่ 5: ความปลอดภัยเครือข่ายคอมพิวเตอร์",
    slug: "network-security",
    summary: "การป้องกันภัยคุกคามและมาตรการรักษาความปลอดภัย",
    content:
      "เนื้อหา: Firewall, IDS/IPS, การป้องกันการโจมตีทาง Cybersecurity, VPN Security"
  },
  {
    id: 6,
    title: "บทที่ 6: การออกแบบ VPN",
    slug: "vpn-design",
    summary: "ออกแบบช่องทางสื่อสารส่วนบุคคลและ VPN",
    content:
      "เนื้อหา: VPN แบบ IPSec, SSL VPN, Site-to-Site, Remote Access VPN และ Best Practices"
  },
  {
    id: 7,
    title: "บทที่ 7: การประยุกต์ใช้เครือข่ายในองค์กร",
    slug: "enterprise-application",
    summary: "กรณีศึกษาการใช้ระบบเครือข่ายในองค์กรจริง",
    content:
      "เนื้อหา: การออกแบบระบบเครือข่ายองค์กร, Load Balancing, Redundancy, การดูแลระบบเครือข่ายแบบมืออาชีพ"
  }
];

// --- 2. Lesson Card (ไม่มีปุ่มแล้ว + แสดงเนื้อหาในหน้าเดียว) ---
interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 transition duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{lesson.summary}</p>

      {/* อธิบายบทเรียนในหน้านี้เลย */}
      <div className="bg-gray-50 p-4 rounded-lg border text-gray-700 text-sm leading-relaxed">
        {lesson.content}
      </div>
    </div>
  );
};

// --- 3. HOMEPAGE ---
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 mb-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl">
            BSCC T604: การบริหารเครือข่ายคอมพิวเตอร์
          </h1>
          <p className="mt-4 text-xl opacity-90">
            หลักสูตร 7 บทเรียนสำหรับผู้ดูแลระบบเครือข่ายมืออาชีพ
          </p>
        </div>
      </header>

      {/* Utility Tools */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          เมนูเครื่องมือ (Tools)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* เครื่องคิดเลข */}
          <Link 
            href="/calculator"
            className="p-6 bg-white rounded-xl shadow-lg border hover:bg-blue-50 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-2">เครื่องคิดเลข</h3>
            <p className="text-gray-600">กดเครื่องคิดเลขออนไลน์ใช้งานง่าย</p>
          </Link>

          {/* ตัดเกรด */}
          <Link 
            href="/grading"
            className="p-6 bg-white rounded-xl shadow-lg border hover:bg-green-50 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-2">ตัดเกรด</h3>
            <p className="text-gray-600">ระบบคำนวณเกรดอัตโนมัติ</p>
          </Link>

          {/* เอกสาร */}
          <Link 
            href="/documents"
            className="p-6 bg-white rounded-xl shadow-lg border hover:bg-yellow-50 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">เมนูเอกสาร</h3>
            <p className="text-gray-600">รวมเอกสารประกอบการเรียนทั้งหมด</p>
          </Link>

        </div>
      </div>

      {/* Lessons Section */}
      <div id="lessons" className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">
          หัวข้อบทเรียนหลัก
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  );
}
