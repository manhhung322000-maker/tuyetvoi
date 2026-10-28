/* ============================================================
   CONFIG.JS - SỬA TOÀN BỘ NỘI DUNG THIỆP Ở ĐÂY
   Chỉ cần sửa chữ nằm giữa dấu "" rồi lưu file. Không sửa tên (bên trái dấu :).
   ============================================================ */
window.CONFIG = {

  /* ---------- Cô dâu & chú rể ---------- */
  bride: "Cẩm Ly",
  groom: "Mạnh Hùng",
  invite: "Trân trọng kính mời bạn đến dự lễ thành hôn của chúng tôi",

  /* ---------- Nhà gái ---------- */
  gf: "Nguyễn Văn Thiều",
  gm: "Đỗ Thị Hoài",
  gaddr: "Thôn 5, Xã Vũ Quý, Kiến Xương, Tp Thái Bình cũ",

  /* ---------- Nhà trai ---------- */
  bf: "Nguyễn Văn Hoan",
  bm: "Mạc Thị Bền",
  baddr: "82 Đường Chiến Thắng, Thôn Bờ Chùa, An Lạc, Chí Linh, Hải Dương cũ",

  /* ---------- Thời gian & địa điểm ---------- */
  date: "2026-12-19",          // định dạng: năm-tháng-ngày
  time: "11:00",               // định dạng: giờ:phút (24h)
  lunar: "nhằm ngày 11 tháng 11 năm Bính Ngọ",
  venue: "Tư gia",
  addr: "Thôn 5, Xã Vũ Quý, Kiến Xương, Tp Thái Bình cũ",
  mapurl: "",                  // dán link Google Maps vào đây (để trống sẽ tự tìm theo địa chỉ)

  /* ---------- Ảnh cưới (hiện ở mặt sau thiệp, thay cho phần tên) ---------- */
  photo: "anhcuoi.jpg",                   // ví dụ: "images/cuoi.jpg" (để trống nếu không dùng)

  /* ---------- ALBUM ẢNH ----------
     Bỏ ảnh vào thư mục images/ cạnh file index.html rồi thêm đường dẫn vào đây.
     Mỗi ảnh một dòng, cách nhau bằng dấu phẩy. Ví dụ:
       "images/anh1.jpg",
       "images/anh2.jpg",
     Có thể dùng cả link ảnh đầy đủ: "https://...jpg"                       */
  album: [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
  ],

  /* ---------- Chữ trên giao diện ---------- */
  hintOpen: "Chạm vào dấu niêm để mở thiệp",
  hintFlip: "Chạm để lật thiệp",
  cardTitle: "THIỆP MỜI",
  tapHint: "chạm để xem chi tiết",
  brideSide: "NHÀ GÁI",
  groomSide: "NHÀ TRAI",
  atTime: "Vào lúc",
  thanks: "Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi.",

  albumTitle: "Album ảnh cưới",
  albumAll: "Xem toàn bộ album",

  uDay: "ngày", uHour: "giờ", uMin: "phút", uSec: "giây",   // đồng hồ đếm ngược

  monthWord: "Tháng",                                        // "Tháng 12, 2026"
  hourWord: "giờ",                                           // "11 giờ 00"
  calHead: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],       // đầu lịch, bắt đầu từ thứ Hai
  weekdayNames: ["Chủ nhật", "thứ Hai", "thứ Ba", "thứ Tư", "thứ Năm", "thứ Sáu", "thứ Bảy"], // bắt đầu từ Chủ nhật

  mapTitle: "Chỉ đường",
  mapBtn: "Mở Google Maps để chỉ đường",
  printBtn: "In thiệp (A5, 2 mặt)",

  wishTitle: "Sổ lưu bút",
  wishSub: "Gửi lời chúc đến cô dâu chú rể",
  wishNamePh: "Tên của bạn (có thể bỏ trống)",
  wishTextPh: "Viết lời chúc của bạn...",
  wishSend: "Gửi lời chúc"
};
