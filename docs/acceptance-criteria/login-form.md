# 📌 Acceptance Criteria — Login Form

| ID   | Scenario (Given – When – Then)                                                                 | Expected Result |
|------|-----------------------------------------------------------------------------------------------|-----------------|
| AC-1 | **Given** user mở trang Login <br> **When** trang load thành công <br> **Then** form hiển thị với 2 ô nhập (username, password) và 1 nút "Login" | Form xuất hiện đầy đủ |
| AC-2 | **Given** user đang ở màn hình Login <br> **When** nhập username `"alice"` và password `"mypassword"` hợp lệ <br> **Then** state input cập nhật và nút "Login" khả dụng | Inputs hoạt động, nút "Login" enabled |
| AC-3 | **Given** user ở màn hình Login <br> **When** bấm "Login" mà bỏ trống username hoặc password <br> **Then** hiển thị lỗi “Username và Password là bắt buộc” | Lỗi validation hiện ra |
| AC-4 | **Given** user ở màn hình Login <br> **When** nhập username sai định dạng (vd: `"@@abc"`) hoặc password quá ngắn (vd: `"123"`) <br> **Then** hiển thị lỗi tương ứng (“Username không hợp lệ” / “Password phải từ 6 ký tự”) | Validation theo rule |
| AC-5 | **Given** user ở màn hình Login <br> **When** nhập username `"alice"` và password `"mypassword123"` hợp lệ rồi bấm "Login" <br> **Then** hàm `onSubmit` được gọi với dữ liệu `{ username, password }` | Submit thành công, gọi API/handler |
