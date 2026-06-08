import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { submitContact } from "@/services/api/contact";

const RegisterDialog = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Vui lòng nhập tên và số điện thoại");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim(),
      };

      await submitContact(payload);
      toast.success("Đã gửi thông tin. Chúng tôi sẽ liên hệ sớm.");
      setName("");
      setPhone("");
      setMessage("");
      if (onSuccess) onSuccess(); // Đóng popup sau khi submit thành công
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.message || err.message || "Gửi thất bại";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-slate-900">
      <DialogHeader className="text-center space-y-2 pb-4">
        {/* ĐÃ SỬA: Ép sử dụng font-title-luxury và tăng leading-normal để hiển thị chuẩn 100% các ký tự Đ, Ý, Ấ không bị vỡ font */}
        <DialogTitle className="text-2xl font-black text-amber-700 uppercase tracking-wide font-title-luxury text-center w-full leading-normal">
          ĐĂNG KÝ HỒ SƠ DỰ ÁN
        </DialogTitle>
        <DialogDescription className="text-slate-500 text-sm font-medium text-center w-full leading-relaxed">
          Vui lòng điền thông tin chính xác. Bản cập nhật quỹ căn độc quyền và bảng giá gốc từ Chủ đầu tư SDN sẽ được gửi trực tiếp cho bạn.
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-4 text-left pt-2" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <Label htmlFor="dialog-name" className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Họ và tên *
          </Label>
          <Input
            id="dialog-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập họ và tên *"
            className="bg-slate-50 border border-slate-200 text-slate-900 h-12 rounded-xl text-base focus-visible:ring-red-500 font-medium shadow-inner"
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="dialog-phone" className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Số điện thoại *
          </Label>
          <Input
            id="dialog-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nhập số điện thoại *"
            className="bg-slate-50 border border-slate-200 text-slate-900 h-12 rounded-xl text-base focus-visible:ring-red-500 font-medium shadow-inner"
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="dialog-message" className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Nội dung thêm
          </Label>
          <Textarea
            id="dialog-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mời bạn để lại yêu cầu chi tiết (ví dụ: tư vấn căn Shophouse, tiến độ thanh toán...)"
            className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-sm focus-visible:ring-red-500 min-h-[110px] px-4 py-3 font-medium shadow-inner"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-14 bg-red-600 hover:bg-red-700 disabled:opacity-70 text-white font-extrabold uppercase tracking-[0.15em] text-sm md:text-base transition-all rounded-xl shadow-lg border border-red-700 py-6 mt-2"
        >
          {loading ? "ĐANG GỬI HỒ SƠ..." : "XÁC NHẬN ĐĂNG KÝ NGAY"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterDialog;