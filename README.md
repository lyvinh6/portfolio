# Portfolio Lý Thế Vinh – cập nhật trực tiếp từ mã nguồn GitHub đã gửi

Bản này được nâng cấp từ index.html và style.css bạn đã tải lên trong cuộc trò chuyện. Giữ 3 dự án Algo_web, SMD, DBMS; các đường dẫn GitHub, email và Facebook như bản gốc.

## Bố cục thư mục cần giữ

portfolio/
├── index.html        Trang web và toàn bộ thông tin
├── style.css         Giao diện xanh đêm, nền Aurora động, hiệu ứng, responsive
├── script.js         Chế độ Sáng/Tối, tắt/bật hiệu ứng, menu, lọc dự án, form Gmail
└── images/
    ├── anh-ca-nhan.jpg  Ảnh cá nhân bạn đã gửi
    ├── algo-web.svg     Minh họa Algo_web
    ├── smd.svg          Minh họa SMD
    └── dbms.svg         Minh họa DBMS

## Cập nhật website đang chạy tại https://lyvinh6.github.io/portfolio/

Cách dễ nhất khi đã có git trên máy:
1. Mở thư mục repository 'portfolio' đã clone bằng VS Code. Nếu chưa có: git clone https://github.com/lyvinh6/portfolio.git
2. Chép đúng index.html, style.css, script.js và cả thư mục images vào thư mục gốc repository (nơi có .git). Chọn Replace/Thay thế nếu được hỏi.
3. Mở Terminal ngay trong thư mục repository, chạy:
   git add .
   git commit -m "Update portfolio with aurora background and photo"
   git push origin main
4. Mở tab Actions của repository để xem GitHub Pages đã triển khai thành công.
5. Mở https://lyvinh6.github.io/portfolio/ và nhấn Ctrl+F5 nếu vẫn thấy giao diện cũ.

Nếu chỉ dùng giao diện GitHub: Code > Add file > Upload files, tải đúng các file và toàn bộ thư mục images lên thư mục gốc của nhánh main. Đảm bảo index.html, style.css, script.js ở ngoài cùng; ảnh nằm trong images/.

## Những điều nên kiểm tra trước khi nộp
- Ảnh và thông tin cá nhân sẽ được công khai trên GitHub Pages.
- 3 dự án vẫn là Algo_web, SMD, DBMS và link được giữ đúng theo file gốc bạn gửi.
- Ảnh dự án là hình minh họa; ảnh chụp dự án thực tế sẽ phù hợp hơn khi nộp bài.
- Nút Sáng/Tối và bật/tắt hiệu ứng ở góc trên; bộ lọc dự án ở phần Dự án.
- Form liên hệ kiểm tra dữ liệu, rồi mở Gmail soạn thư. Form KHÔNG tự gửi thư.
- Thông tin học vấn UTH được đưa theo nội dung đã trao đổi trước đây; hãy xác nhận trước khi nộp.
- Trang tôn trọng chế độ giảm chuyển động (prefers-reduced-motion) của trình duyệt.

## Mẹo đọc code
Trong VS Code, mở từng file: index.html (nội dung), style.css (màu sắc/bố cục), script.js (tương tác). Các phần đã có tiêu đề chú thích tiếng Việt.
