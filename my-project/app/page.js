import Cardhot from "@/app/(user)/components/CardHot";
import Cardpopular from "@/app/(user)/components/Cardpopular";
export default function Home() {
  return (
    <main>
      <div className="banner">
        <img src="/assets/img/banner.svg" alt="" />
      </div>
      <div className="introduction">
        <div className="introduction-tea">
          <img
            src="/assets/img/huonglieutra_introduction.svg"
            className="img-tea_introduction"
            alt=""
          />

          <div className="content_tea--introduction">
            <h3 className="name_content">
              TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
            </h3>
            <p className="description_content">
              Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và
              hạt cà phê thượng hạng cùng mong muốn mang lại cho khách hàng
              những trải nghiệm giá trị nhất khi thưởng thức, DRINK MILK TEA
              liên tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi
              đầu trong ngành trà và cà phê.
            </p>
            <p className="description_content">
              Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo
              hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê.
              Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ
              góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê
              ngày càng bay cao, vươn xa.
            </p>
          </div>
        </div>
        <div className="introduction-staff">
          <div className="content_staff--introduction">
            <h3 className="name_content--staff">
              ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT
            </h3>
            <p className="description_content-staff">
              Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và
              nhân viên của{" "}
              <strong style={{ color: "#0C713D", fontWeight: 600 }}>
                DRINK MILK TEA
              </strong>
              , qua bao thế hệ, đã cùng nhau xây dựng, nuôi dưỡng niềm đam mê
              dành cho trà và cà phê với mong muốn được thử thách bản thân trong
              ngành dịch vụ năng động và sáng tạo.
            </p>
            <button className="join-staff">
              GIA NHẬP ĐỘI NGŨ DRINK - MILK TEA{" "}
            </button>
          </div>
          <img
            src="/assets/img/doinguchuyennghiep_introduction.svg"
            className="img-staff_introduction"
            alt=""
          />
        </div>
      </div>
      <section className="product-popular">
        <div className="container">
          <h3 className="title_product--popular">SẢN PHẨM PHỔ BIẾN</h3>
          <img
            className="section_product--popular"
            src="/assets/img/section_product--popular.svg"
            alt=""
          />
          <Cardpopular />
          <h3 className="title_product--popular" style={{ marginTop: 20 }}>
            SẢN PHẨM HOT
          </h3>
          <img
            className="section_product--popular"
            src="/assets/img/section_product--popular.svg"
            alt=""
          />
          <Cardhot />
        </div>
      </section>
    </main>
  );
}
