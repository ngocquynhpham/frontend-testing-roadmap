# Test Cases – Login Form

## 📝 Description
Login form gồm 2 input (username, password) và 1 nút "Login".

---
# ✅ Test Cases — Login Form

| TC ID | Maps to AC | Step                                                                 | Input                          | Expected Result |
|-------|------------|----------------------------------------------------------------------|--------------------------------|-----------------|
| TC-1  | AC-1       | 1. Mở trang Login                                                    | —                              | Form hiển thị: 2 input + 1 button |
| TC-2  | AC-2       | 1. Nhập username "alice"<br>2. Nhập password "mypassword"<br>3. Quan sát nút Login | username=alice<br>password=mypassword | Inputs nhận dữ liệu, nút Login enabled |
| TC-3  | AC-3       | 1. Để trống username<br>2. Nhập password bất kỳ<br>3. Click "Login" | username=""<br>password="123"  | Hiện lỗi: “Username và Password là bắt buộc” |
| TC-4  | AC-4       | 1. Nhập username "@@abc"<br>2. Nhập password "123"<br>3. Click "Login" | username="@@abc"<br>password="123" | Hiện lỗi: “Username không hợp lệ” + “Password phải từ 6 ký tự” |
| TC-5  | AC-5       | 1. Nhập username "alice"<br>2. Nhập password "mypassword123"<br>3. Click "Login" | username="alice"<br>password="mypassword123" | Gọi hàm `onSubmit({ username, password })` |
