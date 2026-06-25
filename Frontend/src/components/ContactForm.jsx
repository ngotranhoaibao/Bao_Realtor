"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { submitContact } from "@/services/api/contact";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone)
      return toast.error("Vui lòng nhập họ tên và số điện thoại.");
    setLoading(true);
    try {
      await submitContact({ name, phone, message: need || "Yêu cầu tư vấn" });
      toast.success("Gửi yêu cầu thành công, tư vấn viên sẽ liên hệ sớm.");
      setName("");
      setPhone("");
      setNeed("");
    } catch (err) {
      console.error(err);
      toast.error("Gửi thất bại, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="lien-he"
      onSubmit={handleSubmit}
      className="max-w-xl bg-white p-6 rounded-lg shadow-sm"
    >
      <h3 className="text-lg font-bold mb-4">Nhận tư vấn miễn phí</h3>
      <div className="space-y-3">
        <div>
          <Label htmlFor="name">Họ và tên</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Số điện thoại</Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="need">Nhu cầu</Label>
          <Input
            id="need"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            placeholder="Tư vấn đầu tư / Mua ở / Vay vốn"
          />
        </div>
        <div className="pt-2">
          <Button type="submit" disabled={loading}>
            {loading ? "Đang gửi..." : "Nhận tư vấn miễn phí"}
          </Button>
        </div>
      </div>
    </form>
  );
}
