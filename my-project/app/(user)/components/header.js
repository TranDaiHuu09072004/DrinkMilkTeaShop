"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <div>
      <div className="header-top">
        <div className="container">
          <ul className="header-top__left">
            <li>
              <span className="color-phone">Điện thoại:</span>
              <span className="bold-phone">0392706777</span>
            </li>
            <li className="space">|</li>
            <li>
              <span className="color-email">Email:</span>
              <span className="bold-email">drinkmilktea@gmail.com</span>
            </li>
          </ul>
          <ul className="header-top__right">
            <li>
              <Link href="/" className="bold-login">
                Đăng Nhập
              </Link>
            </li>
            <li className="space">|</li>
            <li>
              <Link href="/" className="bold-register">
                Đăng Ký
              </Link>
            </li>
            <li className="space">|</li>
            <li className="bold-VN">
              <i class="fa-solid fa-globe"></i> VN
            </li>
          </ul>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <Link href="/">
            <img src="/assets/img/logo.svg" alt="" style={{ marginTop: 10 }} />
          </Link>
          <ul className="listNavbar">
            <li className={pathname === "/" ? "active" : ""}>
              <Link href="/">Trang Chủ</Link>
            </li>
            <li className={pathname === "/vechungtoi" ? "active" : ""}>
              <Link href="/vechungtoi">Về Chúng Tôi</Link>
            </li>
            <li className={pathname === "/cuahang" ? "active" : ""}>
              <Link href="/cuahang">Cửa hàng</Link>
            </li>
            <li className={pathname === "/news" ? "active" : ""}>
              <Link href="/news">Tin Tức</Link>
            </li>
            <li className={pathname === "/discounts" ? "active" : ""}>
              <Link href="/discounts">Giảm giá</Link>
            </li>
            <li className={pathname === "/contact" ? "active" : ""}>
              <Link href="/contact">Liên hệ</Link>
            </li>
          </ul>

          <div className="icon-right">
            <Link href="/">
              <div className="icon-cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-count">0</span>
              </div>
            </Link>
            <div className="icon-user">
              <Link href="/">
                <i class="fa-solid fa-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
