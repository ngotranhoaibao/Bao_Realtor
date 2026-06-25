"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
              SRT MIỀN TRUNG
            </p>
            <h2 className="text-2xl font-bold text-white">
              Công ty TNHH Thương Mại & Đầu Tư SRT Miền Trung
            </h2>
            <p className="text-slate-400 leading-7">
              Đại lý phân phối chính thức dự án S-Light Tower của Sun Property
              (Sun Group). Thông tin tư vấn chính xác, bảo mật và chuyên nghiệp.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-sm leading-7 text-slate-300">
            <p>
              <strong>Đại diện pháp luật:</strong> Ngô Trần Hoài Bảo
            </p>
            <p>
              <strong>Địa chỉ đăng ký:</strong> Số 606 2 tháng 9, Đà Nẵng
            </p>
            <p>
              <strong>Email:</strong> ngothoaibao@gmail.com
            </p>
            <p>
              <strong>Hotline:</strong> 073.553.105
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
              Hỗ trợ khách hàng
            </p>
            <ul className="space-y-3 text-slate-300">
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
              <li>Quy trình giải quyết khiếu nại</li>
            </ul>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Cam kết dịch vụ
              </p>
              <p className="mt-3 text-slate-300 leading-7">
                Bảo mật thông tin khách hàng và phản hồi trong 10 phút sau đăng
                ký.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-900/90 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          © 2026  đại lý phân phối chính thức Sun
        </div>
      </div>
    </footer>
  );
}
