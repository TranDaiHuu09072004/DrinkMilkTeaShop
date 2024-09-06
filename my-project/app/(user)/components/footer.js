export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <ul className="infomation_contact">
            <li>
              <h3 className="infomation_contact--name">THÔNG TIN LIÊN HỆ</h3>
            </li>
            <li>
              <span className="item-infomation--contact">
                Địa chỉ: Toà nhà Louis Tower, Nguyễn Ảnh Thủ, Xã Bà Điểm, Hóc
                Môn, TPHCM
              </span>
            </li>
            <li>
              <span className="item-infomation--contact">
                Hotline liên hệ: 0392706777
              </span>
            </li>
            <li>
              <span className="item-infomation--contact">
                Email:drinkmilktea@gmail.com
              </span>
            </li>
            <li>
              <span className="item-infomation--contact">
                Giờ làm việc: từ T2 đến T7 từ 6:00 đến 18:00
              </span>
            </li>
          </ul>
          <ul className="social-media">
            <li>
              <h3 className="infomation_contact--name">MẠNG XÃ HỘI</h3>
            </li>
            <li
              style={{ display: "flex", gap: 20, padding: 10, marginLeft: 30 }}
            >
              <span>
                <i
                  style={{ fontSize: 50, color: "#fff" }}
                  class="fa-brands fa-youtube"
                ></i>
              </span>
              <span>
                <i
                  style={{ fontSize: 50, color: "#fff" }}
                  class="fa-brands fa-square-facebook"
                ></i>
              </span>
              <span>
                <i
                  style={{ fontSize: 50, color: "#fff" }}
                  class="fa-brands fa-instagram"
                ></i>
              </span>
            </li>
            <li>
              <img
                style={{ marginLeft: 30 }}
                src="/assets/img/chungnhan.svg"
                alt=""
                width={200}
              />
            </li>
          </ul>
          <ul className="news-sale">
            <li>
              <h3 className="news-sale--name">NHẬN TIN KHUYẾN MÃI</h3>
            </li>
            <li>
              <input
                type="text"
                style={{
                  height: 30,
                  width: 250,
                  borderRadius: 5,
                  border: "none",
                }}
              />
              <button
                style={{
                  height: 30,
                  width: 50,
                  borderRadius: 5,
                  border: "none",
                  marginLeft: 5,
                  backgroundColor: "#fff",
                  color: "#0C713D",
                  fontWeight: 550,
                  cursor: "pointer",
                }}
              >
                Gửi
              </button>
            </li>
            <li className="item-infomation--contact">
              <span>Chính Sách Đặt Hàng</span>
            </li>
            <li className="item-infomation--contact">
              <span>Chính Sách Bảo Mật Thông Tin</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_down">
        <h3>© 2024 Bản quyền thuộc Drink-MilkTea</h3>
      </div>
    </>
  );
}
