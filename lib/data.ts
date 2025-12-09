// lib/data.ts

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
    content: "เนื้อหาหลักของบทที่ 1: การติดตั้ง Router, Switch, และการตั้งค่าพื้นฐานของอุปกรณ์เครือข่าย..."
  },
  {
    id: 2,
    title: "บทที่ 2: การจัดการการส่งข้อมูลและการค้นหาเส้นทาง",
    slug: "routing-management",
    summary: "ทำความเข้าใจหลักการค้นหาเส้นทาง (Routing) และการจัดการทราฟฟิก",
    content: "เนื้อหาหลักของบทที่ 2: การตั้งค่า Static Routing, Dynamic Routing (RIP, OSPF)..."
  },
  // ... เพิ่มข้อมูลบทเรียนที่ 3 ถึง 7 (IP, Wireless, Security, VPN, Application) ที่นี่
  {
    id: 7,
    title: "บทที่ 7: การประยุกต์ใช้เครือข่ายในองค์กร",
    slug: "enterprise-application",
    summary: "กรณีศึกษาและการประยุกต์ใช้ระบบเครือข่ายในองค์กรธุรกิจจริง",
    content: "เนื้อหาหลักของบทที่ 7: ตัวอย่างการออกแบบเครือข่ายสำหรับองค์กรขนาดเล็กถึงขนาดใหญ่ และการวางแผน Capacity..."
  }
];

export const getLessonBySlug = (slug: string) => {
  return lessons.find(lesson => lesson.slug === slug);
};