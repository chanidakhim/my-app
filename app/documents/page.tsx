"use client";

import { useState } from "react";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([
    {
      title: "เอกสารบทที่ 1: พื้นฐานเครือข่ายคอมพิวเตอร์",
      file: "/docs/network_basic.pdf",
      description: "สรุปการติดตั้งและกำหนดค่าระบบเครือข่ายพื้นฐาน",
      previewType: "pdf"
    },
    {
      title: "เอกสารบทที่ 2: Routing และการค้นหาเส้นทาง",
      file: "/docs/routing.pdf",
      description: "เอกสารอธิบาย Static / Dynamic Routing พร้อมตัวอย่าง",
      previewType: "pdf"
    },
    {
      title: "สไลด์สอน: Wireless Network",
      file: "/docs/wireless_slide.pdf",
      description: "ไฟล์สไลด์สำหรับประกอบการเรียนการสอนระบบไร้สาย",
      previewType: "pdf"
    },
    {
      title: "เอกสารความปลอดภัยเครือข่าย",
      file: "/docs/security.pdf",
      description: "รวมเรื่อง Firewall, IDS/IPS, ACL และการป้องกันเครือข่าย",
      previewType: "pdf"
    },
    {
      title: "คู่มือ Subnetting ฉบับสมบูรณ์",
      file: "/docs/subnetting_guide.pdf",
      description: "คู่มืออธิบาย Subnet แบบละเอียดพร้อมแบบฝึกหัด",
      previewType: "pdf"
    }
  ]);

  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  // ---- เมื่อเลือกไฟล์ ----
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadFile(e.target.files[0]);
    }
  };

  // ---- ปุ่มอัปโหลด ----
  const handleUpload = () => {
    if (!uploadTitle || !uploadFile) {
      alert("กรุณากรอกชื่อเอกสารและเลือกไฟล์");
      return;
    }

    const fileURL = URL.createObjectURL(uploadFile); // พรีวิวไฟล์

    const extension = uploadFile.name.split(".").pop()?.toLowerCase();
    let previewType = "file";

    if (["png", "jpg", "jpeg", "gif"].includes(extension!)) previewType = "image";
    if (["pdf"].includes(extension!)) previewType = "pdf";

    const newDoc = {
      title: uploadTitle,
      file: fileURL,
      description: uploadDescription || "ไฟล์ที่อัปโหลด",
      previewType
    };

    setDocuments([...documents, newDoc]);

    // รีเซ็ตฟอร์ม
    setUploadTitle("");
    setUploadDescription("");
    setUploadFile(null);
  };

  // ---- UI ----
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl border w-full max-w-5xl">
        
        <h1 className="text-4xl font-extrabold text-center text-yellow-600 mb-10">
          เอกสารประกอบการเรียน (อัปโหลดไฟล์ได้)
        </h1>

        {/* -------------------- ฟอร์มอัปโหลด -------------------- */}
        <div className="mb-10 p-6 bg-gray-50 border rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">อัปโหลดเอกสาร</h2>

          <input
            type="text"
            value={uploadTitle}
            onChange={(e) => setUploadTitle(e.target.value)}
            placeholder="ชื่อเอกสาร"
            className="w-full p-3 mb-3 border rounded-lg"
          />

          <input
            type="text"
            value={uploadDescription}
            onChange={(e) => setUploadDescription(e.target.value)}
            placeholder="คำอธิบาย (ถ้ามี)"
            className="w-full p-3 mb-3 border rounded-lg"
          />

          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-3 mb-4 border rounded-lg bg-white"
          />

          <button
            onClick={handleUpload}
            className="w-full bg-yellow-600 text-white py-3 rounded-xl font-semibold hover:bg-yellow-700"
          >
            อัปโหลดเอกสาร
          </button>
        </div>

        {/* -------------------- รายการเอกสาร -------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 border rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{doc.title}</h2>
              <p className="text-gray-600 mb-4">{doc.description}</p>

              {/* พรีวิวไฟล์ */}
              {doc.previewType === "image" && (
                <img
                  src={doc.file}
                  alt={doc.title}
                  className="w-full h-48 object-cover rounded-lg mb-3 shadow"
                />
              )}

              {doc.previewType === "pdf" && (
                <iframe
                  src={doc.file}
                  className="w-full h-48 rounded-lg border mb-3"
                ></iframe>
              )}

              {doc.previewType === "file" && (
                <p className="text-gray-500 mb-3 italic">ไม่สามารถพรีวิวไฟล์นี้ได้</p>
              )}

              {/* ปุ่มดาวน์โหลด */}
              <a
                href={doc.file}
                download
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600"
              >
                ดาวน์โหลดไฟล์
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
