/* ============================================================
   CONFIG.JS - SỬA TOÀN BỘ NỘI DUNG THIỆP Ở ĐÂY
   Chỉ cần sửa chữ nằm giữa dấu "" rồi lưu file. Không sửa tên (bên trái dấu :
   ============================================================ */
window.CONFIG = {
  /* ============================================================
     FONT CHỮ - đổi tên font theo từng loại nội dung
     Tên font lấy ở fonts.google.com (gõ đúng tên, nhớ chọn font có
     hỗ trợ TIẾNG VIỆT). Gợi ý: "Great Vibes", "Allura", "Dancing Script",
     "Playfair Display", "Cormorant Garamond", "EB Garamond", "Lora",
     "Noto Serif", "Prata", "Be Vietnam Pro".
     Nếu gõ sai tên hoặc máy khách không có mạng, thiệp tự dùng font dự phòng.
     ============================================================ */
  fonts: {
    names:   "Montserrat",              // Tên cô dâu chú rể
    titles:  "Allura",              // Tiêu đề viết tay: Sổ lưu bút, Chỉ đường, Tháng...
    labels:  "Playfair Display",    // Nhãn in hoa: THIỆP MỜI CƯỚI, NHÀ GÁI, Tư gia...
    numbers: "Lora",                // Ngày tháng, đếm ngược, lịch (chọn font số thẳng hàng, không bị lệch dòng)
    body:    "Cormorant Garamond"   // Lời mời, địa chỉ và nội dung thường
  },

  /* ============================================================
     TỈ LỆ CỠ CHỮ - mỗi font to nhỏ khác nhau nên chỉnh ở đây
     1 = giữ nguyên | 0.9 = nhỏ lại 10% | 1.2 = to lên 20%
     Sửa số rồi lưu file, tải lại trang (Ctrl+F5) để xem.
     ============================================================ */
  fontScale: {
    names:   1,    // Tên cô dâu chú rể
    titles:  1,    // Tiêu đề viết tay
    labels:  1,    // Nhãn in hoa
    numbers: 1,    // Ngày tháng, đếm ngược, lịch
    body:    1     // Lời mời, địa chỉ, nội dung thường
  },

  /* ============================================================
     VỊ TRÍ CAO / THẤP CỦA CHỮ - chỉ dời chữ, KHÔNG đẩy phần khác
     0 = giữ nguyên | số dương = dời XUỐNG | số âm = dời LÊN
     1 đơn vị ~ 1 dòng chữ nhỏ (khoảng 17px). Có thể dùng số lẻ: 0.5, -0.3...
     ============================================================ */
  fontOffset: {
    names:   0,    // Tên cô dâu chú rể (cả mặt trước và sau)
    bride:   0,    // Cộng thêm: riêng tên cô dâu ở mặt trước
    groom:   0,    // Cộng thêm: riêng tên chú rể ở mặt trước
    amp:     0,    // Chỉnh thêm riêng dấu & (mặc định tự nằm giữa hai tên)
    titles:  0,    // Tiêu đề viết tay
    labels:  0,    // Nhãn in hoa
    numbers: 0,    // Ngày tháng, đếm ngược
    body:    0     // Lời mời, địa chỉ, nội dung thường
  },

  /* ============================================================
     MÀU SẮC - dùng mã màu dạng #rrggbb (tra "color picker" trên Google)
     ============================================================ */
  colors: {
    page1: "#d42a3e",      // nền trang: màu sáng ở giữa
    page2: "#9a1428",      // nền trang: màu giữa
    page3: "#520813",      // nền trang: màu tối ở rìa
    cardFront: "#800020",  // mặt trước thiệp
    cardBack: "#fffaf2",   // mặt sau thiệp
    gold: "#d9b45a",       // màu viền vàng
    accent: "#800020",     // màu tiêu đề, nút và chữ nhấn
    text: "#3d000e"        // màu chữ trên nền sáng
  },


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
  mapurl: "https://maps.app.goo.gl/1A8h8aBYeLgVo42Q8",                  // dán link Google Maps vào đây (để trống sẽ tự tìm theo địa chỉ)

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

  /* ---------- NHẠC NỀN ----------
     Bỏ file nhạc (mp3) vào cùng thư mục với index.html rồi ghi tên file vào đây.
     Muốn đổi bài: thay tên file khác. Để trống "" nếu không dùng nhạc.
     Nên đặt tên file không dấu, không khoảng trắng (ví dụ: nhac.mp3).
     Nhạc tự phát khi khách chạm vào nút thắt vàng mở thiệp. */
  music: "nhac.mp3",
  musicVolume: 0.5,            // âm lượng từ 0 đến 1

  /* ---------- Chữ trên giao diện ---------- */
  hintOpen: "Chạm vào nút thắt vàng để mở thiệp",
  hintFlip: "Chạm để lật thiệp",
  cardTitle: "THIỆP MỜI",
  ceremony: "LỄ THÀNH HÔN",   // dòng chữ dưới "THIỆP MỜI" ở mặt trước thiệp
  tapHint: "Chạm để xem chi tiết",
  brideSide: "NHÀ GÁI",
  groomSide: "NHÀ TRAI",
  atTime: "Vào lúc",
  thanks: "Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi.",

  /* ---- Mặt sau thiệp: chữ cố định ---- */
  saveDate: "Save the Date",
  inviteHead: "TRÂN TRỌNG KÍNH MỜI",
  inviteBody: "Tới dự buổi tiệc chung vui cùng gia đình chúng tôi\nmừng lễ thành hôn",   // \n = xuống dòng
  yearWord: "NĂM",
  atWord: "Tại:",
  flowerTop: "",              // ảnh hoa trái tim ở phía trên (trống = dùng hoa có sẵn). Nên dùng ảnh PNG/WebP nền trong suốt
  flowerBottom: "",           // ảnh bó hoa ở phía dưới (trống = dùng hoa có sẵn)
  showFamAddr: false,          // true = hiện thêm địa chỉ nhà trai / nhà gái ở mặt sau

  /* ---- Mặt sau thiệp: MỐC 2 - TIỆC CƯỚI ----
     Mốc 1 (Lễ thành hôn) lấy từ date, time, lunar, venue, addr ở phần "Thời gian & địa điểm" phía trên.
     Mốc 2 để trống phần nào thì tự lấy giống mốc 1 (riêng ngày âm lịch chỉ lấy khi cùng ngày). */
  partyLabel: "TIỆC CƯỚI",
  partyTime: "17:00",          // giờ tiệc, định dạng 24h  (ĐANG LÀ GIỜ MẪU - hãy sửa lại cho đúng)
  partyDate: "",               // để trống = cùng ngày với lễ; khác ngày thì ghi dạng năm-tháng-ngày
  partyLunar: "",              // âm lịch của ngày tiệc (chỉ cần điền khi khác ngày lễ)
  partyVenue: "",              // để trống = cùng địa điểm với lễ
  partyAddr: "",               // để trống = cùng địa chỉ với lễ

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

  // Link Google Apps Script để mọi khách xem được lời chúc của nhau (để trống "" = chỉ lưu trên máy từng người)
  wishUrl: "https://script.google.com/macros/s/AKfycbzzS8mzylHTBeokNJvU_QOtf4jEgPwC0xdxr2rwhICts9JhI5RqvRkZh2eLhjuJfZv1ag/exec",

  wishTitle: "Sổ lưu bút",
  wishSub: "Gửi lời chúc đến cô dâu chú rể",
  wishNamePh: "Tên của bạn (có thể bỏ trống)",
  wishTextPh: "Viết lời chúc của bạn...",
  wishSend: "Gửi lời chúc"
};
