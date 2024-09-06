export default function page() {
  return (
    <div className="product_detail">
      <div className="container">
        <img
          className="img-product_detail"
          src="/assets/img/chanhdaxay.png"
          alt=""
          width={350}
          height={350}
        />
        <div className="content-product_detail" style={{ marginTop: 80 }}>
          <h3 className="name-product_detail">Matcha Đá Xay</h3>
          <span className="price-product_detail">55,000 đ</span>
          <div className="btn">
            <button className="btn-addCart">Thêm Giỏ Hàng</button>
            <button className="btn-buynow">Mua Ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
