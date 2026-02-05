'use client';

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   
    <>
     {/* <!-- Loader Start --> */}
    <div className="fullpage-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    {/* <!-- Loader End --> */}
    <header className="pb-md-4 pb-0">
      <div className="header-top">
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-xxl-3 d-xxl-block d-none">
        <div className="top-left-header">
          <i className="iconly-Location icli text-white"></i>
          <span className="text-white">
            1418 Riverwood Drive, CA 96052, US
          </span>
        </div>
      </div>

      <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
        <div className="header-offer">
          <div className="notification-slider">
            <div>
              <div className="timer-notification">
                <h6>
                  <strong className="me-1">Welcome to Fastkart!</strong>
                  Wrap new offers/gift every single day on Weekends.
                  <strong className="ms-1">
                    New Coupon Code: Fast024
                  </strong>
                </h6>
              </div>
            </div>

            <div>
              <div className="timer-notification">
                <h6>
                  Something you love is now on sale!
                  <a href="shop-left-sidebar.html" className="text-white">
                    Buy Now !
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <ul className="about-list right-nav-about">
          <li className="right-nav-list">
            <div className="dropdown theme-form-select">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="select-language"
                data-bs-toggle="dropdown"
              >
                <img
                  src="../assets/images/country/united-states.png"
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
                <span>English</span>
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0)"
                    id="english"
                  >
                    <img
                      src="../assets/images/country/united-kingdom.png"
                      className="img-fluid blur-up lazyload"
                      alt=""
                    />
                    <span>English</span>
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0)"
                    id="france"
                  >
                    <img
                      src="../assets/images/country/germany.png"
                      className="img-fluid blur-up lazyload"
                      alt=""
                    />
                    <span>Germany</span>
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0)"
                    id="chinese"
                  >
                    <img
                      src="../assets/images/country/turkish.png"
                      className="img-fluid blur-up lazyload"
                      alt=""
                    />
                    <span>Turki</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="right-nav-list">
            <div className="dropdown theme-form-select">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="select-dollar"
                data-bs-toggle="dropdown"
              >
                <span>USD</span>
              </button>

              <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu">
                <li>
                  <a className="dropdown-item" id="aud" href="javascript:void(0)">
                    AUD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" id="eur" href="javascript:void(0)">
                    EUR
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" id="cny" href="javascript:void(0)">
                    CNY
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="top-nav top-header sticky-header">
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-12">
        <div className="navbar-top">
          <button
            className="navbar-toggler d-xl-none d-inline navbar-menu-button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu"
          >
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>

          <a href="index.html" className="web-logo nav-logo">
            <img
              src="../assets/images/logo/1.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="middle-box">
            <div className="location-box">
              <button
                className="btn location-button"
                data-bs-toggle="modal"
                data-bs-target="#locationModal"
              >
                <span className="location-arrow">
                  <i data-feather="map-pin"></i>
                </span>
                <span className="locat-name">Your Location</span>
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>

            <div className="search-box">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="I'm searching for..."
                />
                <button className="btn" type="button" id="button-addon2">
                  <i data-feather="search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="rightside-box">
            <div className="search-full">
              <div className="input-group">
                <span className="input-group-text">
                  <i data-feather="search" className="font-light"></i>
                </span>
                <input
                  type="text"
                  className="form-control search-type"
                  placeholder="Search here.."
                />
                <span className="input-group-text close-search">
                  <i data-feather="x" className="font-light"></i>
                </span>
              </div>
            </div>

            <ul className="right-side-menu">
              <li className="right-side">
                <div className="delivery-login-box">
                  <div className="delivery-icon">
                    <div className="search-box">
                      <i data-feather="search"></i>
                    </div>
                  </div>
                </div>
              </li>

              <li className="right-side">
                <a href="contact-us.html" className="delivery-login-box">
                  <div className="delivery-icon">
                    <i data-feather="phone-call"></i>
                  </div>
                  <div className="delivery-detail">
                    <h6>24/7 Delivery</h6>
                    <h5>+91 888 104 2340</h5>
                  </div>
                </a>
              </li>

              <li className="right-side">
                <a
                  href="wishlist.html"
                  className="btn p-0 position-relative header-wishlist"
                >
                  <i data-feather="heart"></i>
                </a>
              </li>

              <li className="right-side">
                <div className="onhover-dropdown header-badge">
                  <button
                    type="button"
                    className="btn p-0 position-relative header-wishlist"
                  >
                    <i data-feather="shopping-cart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge">
                      2
                      <span className="visually-hidden">
                        unread messages
                      </span>
                    </span>
                  </button>

                  <div className="onhover-div">
                    <ul className="cart-list">
                      <li className="product-box-contain">
                        <div className="drop-cart">
                          <a
                            href="product-left-thumbnail.html"
                            className="drop-image"
                          >
                            <img
                              src="../assets/images/vegetable/product/1.png"
                              className="blur-up lazyload"
                              alt=""
                            />
                          </a>

                          <div className="drop-contain">
                            <a href="product-left-thumbnail.html">
                              <h5>
                                Fantasy Crunchy Choco Chip Cookies
                              </h5>
                            </a>
                            <h6>
                              <span>1 x</span> $80.58
                            </h6>
                            <button className="close-button close_button">
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          </div>
                        </div>
                      </li>

                      <li className="product-box-contain">
                        <div className="drop-cart">
                          <a
                            href="product-left-thumbnail.html"
                            className="drop-image"
                          >
                            <img
                              src="../assets/images/vegetable/product/2.png"
                              className="blur-up lazyload"
                              alt=""
                            />
                          </a>

                          <div className="drop-contain">
                            <a href="product-left-thumbnail.html">
                              <h5>
                                Peanut Butter Bite Premium Butter Cookies
                                600 g
                              </h5>
                            </a>
                            <h6>
                              <span>1 x</span> $25.68
                            </h6>
                            <button className="close-button close_button">
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div className="price-box">
                      <h5>Total :</h5>
                      <h4 className="theme-color fw-bold">$106.58</h4>
                    </div>

                    <div className="button-group">
                      <a
                        href="cart.html"
                        className="btn btn-sm cart-button"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-sm cart-button theme-bg-color text-white"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="right-side onhover-dropdown">
                <div className="delivery-login-box">
                  <div className="delivery-icon">
                    <i data-feather="user"></i>
                  </div>
                  <div className="delivery-detail">
                    <h6>Hello,</h6>
                    <h5>My Account</h5>
                  </div>
                </div>

                <div className="onhover-div onhover-div-login">
                  <ul className="user-box-name">
                    <li className="product-box-contain">
                      <i></i>
                      <a href="login.html">Log In</a>
                    </li>

                    <li className="product-box-contain">
                      <a href="sign-up.html">Register</a>
                    </li>

                    <li className="product-box-contain">
                      <a href="forgot.html">Forgot Password</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <div className="container-fluid-lg">
  
  <div className="row">
                    <div className="col-12">
                      <div  className="header-nav">

                        <div className="header-nav-left">
  <button className="dropdown-category">
    <i data-feather="align-left"></i>
    <span>All Categories</span>
  </button>

  <div className="category-dropdown">
    <div className="category-title">
      <h5>Categories</h5>
      <button
        type="button"
        className="btn p-0 close-button text-content"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>

    <ul className="category-list">
      <li className="onhover-category-list">
        <a href="javascript:void(0)" className="category-name">
          <img
            src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
            alt=""
          />
          <h6>Vegetables & Fruit</h6>
          <i className="fa-solid fa-angle-right"></i>
        </a>

        <div className="onhover-category-box">
          <div className="list-1">
            <div className="category-title-box">
              <h5>Organic Vegetables</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Potato & Tomato</a></li>
              <li><a href="javascript:void(0)">Cucumber & Capsicum</a></li>
              <li><a href="javascript:void(0)">Leafy Vegetables</a></li>
              <li><a href="javascript:void(0)">Root Vegetables</a></li>
              <li><a href="javascript:void(0)">Beans & Okra</a></li>
              <li><a href="javascript:void(0)">Cabbage & Cauliflower</a></li>
              <li><a href="javascript:void(0)">Gourd & Drumstick</a></li>
              <li><a href="javascript:void(0)">Specialty</a></li>
            </ul>
          </div>

          <div className="list-2">
            <div className="category-title-box">
              <h5>Fresh Fruit</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Banana & Papaya</a></li>
              <li><a href="javascript:void(0)">Kiwi, Citrus Fruit</a></li>
              <li><a href="javascript:void(0)">Apples & Pomegranate</a></li>
              <li><a href="javascript:void(0)">Seasonal Fruits</a></li>
              <li><a href="javascript:void(0)">Mangoes</a></li>
              <li><a href="javascript:void(0)">Fruit Baskets</a></li>
            </ul>
          </div>
        </div>
      </li>

      <li className="onhover-category-list">
        <a href="javascript:void(0)" className="category-name">
          <img
            src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
            alt=""
          />
          <h6>Beverages</h6>
          <i className="fa-solid fa-angle-right"></i>
        </a>

        <div className="onhover-category-box w-100">
          <div className="list-1">
            <div className="category-title-box">
              <h5>Energy & Soft Drinks</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Soda & Cocktail Mix</a></li>
              <li><a href="javascript:void(0)">Soda & Cocktail Mix</a></li>
              <li><a href="javascript:void(0)">Sports & Energy Drinks</a></li>
              <li><a href="javascript:void(0)">Non Alcoholic Drinks</a></li>
              <li><a href="javascript:void(0)">Packaged Water</a></li>
              <li><a href="javascript:void(0)">Spring Water</a></li>
              <li><a href="javascript:void(0)">Flavoured Water</a></li>
            </ul>
          </div>
        </div>
      </li>

      <li className="onhover-category-list">
        <a href="javascript:void(0)" className="category-name">
          <img
            src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
            alt=""
          />
          <h6>Meats & Seafood</h6>
          <i className="fa-solid fa-angle-right"></i>
        </a>

        <div className="onhover-category-box">
          <div className="list-1">
            <div className="category-title-box">
              <h5>Meat</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Fresh Meat</a></li>
              <li><a href="javascript:void(0)">Frozen Meat</a></li>
              <li><a href="javascript:void(0)">Marinated Meat</a></li>
              <li><a href="javascript:void(0)">Fresh & Frozen Meat</a></li>
            </ul>
          </div>

          <div className="list-2">
            <div className="category-title-box">
              <h5>Seafood</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Fresh Water Fish</a></li>
              <li><a href="javascript:void(0)">Dry Fish</a></li>
              <li><a href="javascript:void(0)">Frozen Fish & Seafood</a></li>
              <li><a href="javascript:void(0)">Marine Water Fish</a></li>
              <li><a href="javascript:void(0)">Canned Seafood</a></li>
              <li><a href="javascript:void(0)">Prawans & Shrimps</a></li>
              <li><a href="javascript:void(0)">Other Seafood</a></li>
            </ul>
          </div>
        </div>
      </li>

      <li className="onhover-category-list">
        <a href="javascript:void(0)" className="category-name">
          <img
            src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
            alt=""
          />
          <h6>Breakfast & Dairy</h6>
          <i className="fa-solid fa-angle-right"></i>
        </a>

        <div className="onhover-category-box">
          <div className="list-1">
            <div className="category-title-box">
              <h5>Breakfast Cereals</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Oats & Porridge</a></li>
              <li><a href="javascript:void(0)">Kids Cereal</a></li>
              <li><a href="javascript:void(0)">Muesli</a></li>
              <li><a href="javascript:void(0)">Flakes</a></li>
              <li><a href="javascript:void(0)">Granola & Cereal Bars</a></li>
              <li><a href="javascript:void(0)">Instant Noodles</a></li>
              <li><a href="javascript:void(0)">Pasta & Macaroni</a></li>
              <li><a href="javascript:void(0)">Frozen Non-Veg Snacks</a></li>
            </ul>
          </div>

          <div className="list-2">
            <div className="category-title-box">
              <h5>Dairy</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Milk</a></li>
              <li><a href="javascript:void(0)">Curd</a></li>
              <li><a href="javascript:void(0)">Paneer, Tofu & Cream</a></li>
              <li><a href="javascript:void(0)">Butter & Margarine</a></li>
              <li><a href="javascript:void(0)">Condensed, Powdered Milk</a></li>
              <li><a href="javascript:void(0)">Buttermilk & Lassi</a></li>
              <li><a href="javascript:void(0)">Yogurt & Shrikhand</a></li>
              <li><a href="javascript:void(0)">Flavoured, Soya Milk</a></li>
            </ul>
          </div>
        </div>
      </li>

      <li className="onhover-category-list">
        <a href="javascript:void(0)" className="category-name">
          <img
            src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
            alt=""
          />
          <h6>Frozen Foods</h6>
          <i className="fa-solid fa-angle-right"></i>
        </a>

        <div className="onhover-category-box w-100">
          <div className="list-1">
            <div className="category-title-box">
              <h5>Noodle, Pasta</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Instant Noodles</a></li>
              <li><a href="javascript:void(0)">Hakka Noodles</a></li>
              <li><a href="javascript:void(0)">Cup Noodles</a></li>
              <li><a href="javascript:void(0)">Vermicelli</a></li>
              <li><a href="javascript:void(0)">Instant Pasta</a></li>
            </ul>
          </div>
        </div>
      </li>

      <li className="onhover-category-list">
        <a href="javascript:void(0)" className="category-name">
          <img
            src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg"
            alt=""
          />
          <h6>Biscuits & Snacks</h6>
          <i className="fa-solid fa-angle-right"></i>
        </a>

        <div className="onhover-category-box">
          <div className="list-1">
            <div className="category-title-box">
              <h5>Biscuits & Cookies</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Salted Biscuits</a></li>
              <li><a href="javascript:void(0)">Marie, Health, Digestive</a></li>
              <li><a href="javascript:void(0)">Cream Biscuits & Wafers</a></li>
              <li><a href="javascript:void(0)">Glucose & Milk Biscuits</a></li>
              <li><a href="javascript:void(0)">Cookies</a></li>
            </ul>
          </div>

          <div className="list-2">
            <div className="category-title-box">
              <h5>Bakery Snacks</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Bread Sticks & Lavash</a></li>
              <li><a href="javascript:void(0)">Cheese & Garlic Bread</a></li>
              <li><a href="javascript:void(0)">Puffs, Patties, Sandwiches</a></li>
              <li><a href="javascript:void(0)">Breadcrumbs & Croutons</a></li>
            </ul>
          </div>
        </div>
      </li>

      <li className="onhover-category-list">
        <a href="javascript:void(0)" className="category-name">
          <img
            src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
            alt=""
          />
          <h6>Grocery & Staples</h6>
          <i className="fa-solid fa-angle-right"></i>
        </a>

        <div className="onhover-category-box">
          <div className="list-1">
            <div className="category-title-box">
              <h5>Grocery</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Lemon, Ginger & Garlic</a></li>
              <li><a href="javascript:void(0)">Indian & Exotic Herbs</a></li>
              <li><a href="javascript:void(0)">Organic Vegetables</a></li>
              <li><a href="javascript:void(0)">Organic Fruits</a></li>
            </ul>
          </div>

          <div className="list-2">
            <div className="category-title-box">
              <h5>Organic Staples</h5>
            </div>
            <ul>
              <li><a href="javascript:void(0)">Organic Dry Fruits</a></li>
              <li><a href="javascript:void(0)">Organic Dals & Pulses</a></li>
              <li><a href="javascript:void(0)">Organic Millet & Flours</a></li>
              <li><a href="javascript:void(0)">Organic Sugar, Jaggery</a></li>
              <li><a href="javascript:void(0)">Organic Masalas & Spices</a></li>
              <li><a href="javascript:void(0)">Organic Rice, Other Rice</a></li>
              <li><a href="javascript:void(0)">Organic Flours</a></li>
              <li><a href="javascript:void(0)">Organic Edible Oil, Ghee</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
<div className="header-nav-middle">
  <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
    <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
      <div className="offcanvas-header navbar-shadow">
        <h5>Menu</h5>
        <button
          className="btn-close lead"
          type="button"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="javascript:void(0)"
              data-bs-toggle="dropdown"
            >
              Home
            </a>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="index.html">Kartshop</a></li>
              <li><a className="dropdown-item" href="index-2.html">Sweetshop</a></li>
              <li><a className="dropdown-item" href="index-3.html">Organic</a></li>
              <li><a className="dropdown-item" href="index-4.html">Supershop</a></li>
              <li><a className="dropdown-item" href="index-5.html">Classic shop</a></li>
              <li><a className="dropdown-item" href="index-6.html">Furniture</a></li>
              <li><a className="dropdown-item" href="index-7.html">Search Oriented</a></li>
              <li><a className="dropdown-item" href="index-8.html">Category Focus</a></li>
              <li><a className="dropdown-item" href="index-9.html">Fashion</a></li>
              <li><a className="dropdown-item" href="index-10.html">Book</a></li>
              <li><a className="dropdown-item" href="index-11.html">Digital</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="javascript:void(0)"
              data-bs-toggle="dropdown"
            >
              Shop
            </a>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="shop-category-slider.html">Shop Category Slider</a></li>
              <li><a className="dropdown-item" href="shop-category.html">Shop Category Sidebar</a></li>
              <li><a className="dropdown-item" href="shop-banner.html">Shop Banner</a></li>
              <li><a className="dropdown-item" href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
              <li><a className="dropdown-item" href="shop-list.html">Shop List</a></li>
              <li><a className="dropdown-item" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
              <li><a className="dropdown-item" href="shop-top-filter.html">Shop Top Filter</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown dropdown-mega">
            <a
              className="nav-link dropdown-toggle ps-xl-2 ps-0"
              href="javascript:void(0)"
              data-bs-toggle="dropdown"
            >
              Mega Menu
            </a>

            <div className="dropdown-menu dropdown-menu-2">
              <div className="row">
                <div className="dropdown-column col-xl-3">
                  <h5 className="dropdown-header">Daily Vegetables</h5>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Beans & Brinjals</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli & Cauliflower</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Chilies, Garlic</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Vegetables & Salads</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Herbs & Sprouts</a>
                  <a className="dropdown-item" href="demo-personal-portfolio.html">Lettuce & Leafy</a>
                </div>

                <div className="dropdown-column col-xl-3">
                  <h5 className="dropdown-header">Baby Tender</h5>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Beans & Brinjals</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli & Cauliflower</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Chilies, Garlic</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Vegetables & Salads</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Potatoes & Tomatoes</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Peas & Corn</a>
                </div>

                <div className="dropdown-column col-xl-3">
                  <h5 className="dropdown-header">Exotic Vegetables</h5>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Asparagus & Artichokes</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Avocados & Peppers</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli & Zucchini</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Celery, Fennel & Leeks</a>
                  <a className="dropdown-item" href="shop-left-sidebar.html">Chilies & Lime</a>
                </div>

                <div className="dropdown-column dropdown-column-img col-3"></div>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="javascript:void(0)"
              data-bs-toggle="dropdown"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="blog-detail.html">Blog Detail</a></li>
              <li><a className="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
              <li><a className="dropdown-item" href="blog-list.html">Blog List</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="javascript:void(0)"
              data-bs-toggle="dropdown"
            >
              Seller
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="seller-become.html">Become a Seller</a></li>
              <li><a className="dropdown-item" href="seller-dashboard.html">Seller Dashboard</a></li>
              <li><a className="dropdown-item" href="seller-detail.html">Seller Detail</a></li>
              <li><a className="dropdown-item" href="seller-detail-2.html">Seller Detail 2</a></li>
              <li><a className="dropdown-item" href="seller-grid.html">Seller Grid</a></li>
              <li><a className="dropdown-item" href="seller-grid-2.html">Seller Grid 2</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="header-nav-right">
  <button
    className="btn deal-button"
    data-bs-toggle="modal"
    data-bs-target="#deal-box"
  >
    <i data-feather="zap"></i>
    <span>Deal Today</span>
  </button>
</div>


                      </div>
</div>

  </div>
</div>
    
  </header>

  {/* mobile fix menu start */}
<div className="mobile-menu d-md-none d-block mobile-cart">
  <ul>
    <li className="active">
      <a href="index.html">
        <i className="iconly-Home icli"></i>
        <span>Home</span>
      </a>
    </li>

    <li className="mobile-category">
      <a href="javascript:void(0)">
        <i className="iconly-Category icli js-link"></i>
        <span>Category</span>
      </a>
    </li>

    <li>
      <a href="search.html" className="search-box">
        <i className="iconly-Search icli"></i>
        <span>Search</span>
      </a>
    </li>

    <li>
      <a href="wishlist.html" className="notifi-wishlist">
        <i className="iconly-Heart icli"></i>
        <span>My Wish</span>
      </a>
    </li>

    <li>
      <a href="cart.html">
        <i className="iconly-Bag-2 icli fly-cate"></i>
        <span>Cart</span>
      </a>
    </li>
  </ul>
</div>
{/* mobile fix menu end */}

{/* Home Section Start */}
<section className="home-section pt-2">
  <div className="container-fluid-lg">
    <div className="row g-4">
      <div className="col-xl-9 col-lg-8">
        <div className="home-contain h-100">
          <img
            src="../assets/images/veg-2/banner/1.jpg"
            className="bg-img blur-up lazyload"
            alt=""
          />

          <div className="home-detail p-center-left w-75 position-relative mend-auto">
            <div>
              <h6>
                Exclusive offer <span>30% Off</span>
              </h6>

              <h1 className="w-75 text-uppercase poster-1">
                Stay home & delivered your{" "}
                <span className="daily">Daily Needs</span>
              </h1>

              <p className="w-58 d-none d-sm-block">
                Many organizations have issued official statements encouraging
                people to reduce their intake of sugary drinks.
              </p>

              <button
                onClick={() =>
                  (window.location.href = "shop-left-sidebar.html")
                }
                className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto"
              >
                Shop Now
                <i className="fa-solid fa-right-long ms-2 icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 d-lg-inline-block d-none ratio_156">
        <div className="home-contain h-100">
          <img
            src="../assets/images/veg-2/banner/2.jpg"
            className="bg-img blur-up lazyload"
            alt=""
          />

          <div className="home-detail p-top-left home-p-sm w-75">
            <div>
              <h2 className="mt-0 text-danger">
                45% <span className="discount text-title">OFF</span>
              </h2>

              <h3 className="theme-color">Real Refreshment</h3>
              <h5 className="text-content">
                Only this week, Don't miss..
              </h5>

              <a
                href="shop-left-sidebar.html"
                className="shop-button"
              >
                Shop Now
                <i className="fa-solid fa-right-long ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Home Section End */}
{/* Category Section Start */}
<section>
  <div className="container-fluid-lg">
    <div className="title">
      <h2>Browse by Categories</h2>
      <span className="title-leaf">
        <svg className="icon-width">
          <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
        </svg>
      </span>
      <p>Top Categories Of The Week</p>
    </div>

    <div className="row">
      <div className="col-12">
        <div className="slider-9">
          <div>
            <a href="shop-left-sidebar.html" className="category-box wow fadeInUp">
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Vegetables & Fruit</h5>
              </div>
            </a>
          </div>

          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-box wow fadeInUp"
              data-wow-delay="0.05s"
            >
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Beverages</h5>
              </div>
            </a>
          </div>

          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-box wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Meats & Seafood</h5>
              </div>
            </a>
          </div>

          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-box wow fadeInUp"
              data-wow-delay="0.15s"
            >
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Breakfast</h5>
              </div>
            </a>
          </div>

          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-box wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Frozen Foods</h5>
              </div>
            </a>
          </div>

          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-box wow fadeInUp"
              data-wow-delay="0.25s"
            >
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Milk & Dairies</h5>
              </div>
            </a>
          </div>

          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-box wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Pet Food</h5>
              </div>
            </a>
          </div>

          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-box wow fadeInUp"
              data-wow-delay="0.35s"
            >
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Biscuits & Snacks</h5>
              </div>
            </a>
          </div>

          <div>
            <a
              href="shop-left-sidebar.html"
              className="category-box wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div>
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                  className="blur-up lazyload"
                  alt=""
                />
                <h5>Grocery & Staples</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Category Section End */}
{/* Discount Section Start */}
<section>
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-12">
        <div className="banner-contain">
          <div className="banner-contain hover-effect">
            <img
              src="../assets/images/vegetable/banner/15.jpg"
              className="bg-img blur-up lazyload"
              alt=""
            />
            <div className="banner-details p-center p-sm-4 p-3 text-white text-center">
              <div>
                <h3 className="lh-base fw-bold text-light">
                  Get $3 Cashback! Min Order of $30
                </h3>
                <h6 className="coupon-code">
                  Use Code : GROCERY1920
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Discount Section End */}

{/* product section start */}

<section>
   <div className="container-fluid-lg">
    <div className="title">
  <h2>FRUIT & VEGETABLES</h2>
  <span className="title-leaf">
    <svg className="icon-width">
      <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
    </svg>
  </span>
  <p>A virtual assistant collects the products from your list</p>
</div>
  <div className="product-border border-row">
    <div className="slider-6_2 no-arrow">
    
    <div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/1.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Wishlist"
            >
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Fresh Brown Coconut</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/2.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Wishlist"
            >
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">
              Fresh Organic Broccoli Crown
            </h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/3.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Fresh Cavendish Banana</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/4.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Fresh Organic Kiwi</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/7.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Lettuce</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/8.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Papaya</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/9.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Capsicum</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/10.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Organic Fresh Strawberry</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/9.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Capsicum</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/10.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Organic Fresh Strawberry</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/7.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Lettuce</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/8.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Papaya</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


  </div>
</div>


  </div>
</section>
{/* End Product Section */}

{/* Offer Section Start */}
<section>
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-12">
        <div className="offer-box hover-effect">
          <img
            src="../assets/images/veg-2/banner/3.jpg"
            className="bg-img blur-up lazyload"
            alt=""
          />

          <div className="offer-contain p-4">
            <div className="offer-detail">
              <h2 className="text-dark">
                Special Offers{" "}
                <span className="text-danger fw-bold">of the week!</span>
              </h2>
              <p className="text-content">
                Special offer on this discount, Hurry Up!
              </p>
            </div>

            <div className="offer-timing">
              <div
                className="time"
                id="clockdiv-1"
                data-hours="1"
                data-minutes="2"
                data-seconds="3"
              >
                <ul>
                  <li>
                    <div className="counter">
                      <div className="days">
                        <h6></h6>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="counter">
                      <div className="hours">
                        <h6></h6>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="counter">
                      <div className="minutes">
                        <h6></h6>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="counter">
                      <div className="seconds">
                        <h6></h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Offer Section End */}

{/* product section start */}

<section>
   <div className="container-fluid-lg">
<div className="title">
  <h2>BREAKFAST &amp; DAIRY</h2>

  <span className="title-leaf">
    <svg className="icon-width">
      <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
    </svg>
  </span>

  <p>A virtual assistant collects the products from your list</p>
</div>
  <div className="product-border border-row">
    <div className="slider-6_2 no-arrow">
    
    <div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/1.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Wishlist"
            >
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Fresh Brown Coconut</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/2.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Wishlist"
            >
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">
              Fresh Organic Broccoli Crown
            </h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/3.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Fresh Cavendish Banana</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/4.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Fresh Organic Kiwi</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/7.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Lettuce</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/8.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Papaya</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/9.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Capsicum</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/10.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Organic Fresh Strawberry</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/9.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Capsicum</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/10.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Organic Fresh Strawberry</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div>
  <div className="row m-0">
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/7.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Lettuce</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SECOND PRODUCT */}
    <div className="col-12 px-0">
      <div className="product-box wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
          <a href="product-left-thumbnail.html">
            <img
              src="../assets/images/veg-2/product/8.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <ul className="product-option justify-content-around">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                <i data-feather="eye"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
              <a href="compare.html">
                <i data-feather="refresh-cw"></i>
              </a>
            </li>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
              <a href="wishlist.html" className="notifi-wishlist">
                <i data-feather="heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-detail">
          <a href="product-left-thumbnail.html">
            <h6 className="name name-2 h-100">Green Papaya</h6>
          </a>

          <div className="product-rating mt-2">
            <ul className="rating">
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star" className="fill"></i></li>
              <li><i data-feather="star"></i></li>
            </ul>
            <span>(34)</span>
          </div>

          <h6 className="sold weight text-content fw-normal">1 KG</h6>

          <div className="counter-box">
            <h6 className="sold theme-color">$ 80.00</h6>

            <div className="addtocart_btn">
              <button className="add-button addcart-button btn buy-button text-light">
                <span>Add</span>
                <i className="fa-solid fa-plus"></i>
              </button>

              <div className="qty-box cart_qty">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus"></i>
                  </button>

                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    value="1"
                    readOnly
                  />

                  <button
                    type="button"
                    className="btn qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


  </div>
</div>


  </div>
</section>
{/* End Product Section */}

{/* Product Section Start */}
<section>
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-12">
        <div className="slider-4-1 ratio_65 no-arrow product-wrapper">

          {/* SLIDE 1 */}
          <div>
            <div className="product-slider wow fadeInUp">
              <a href="shop-left-sidebar.html" className="product-slider-image">
                <img
                  src="../assets/images/veg-2/pro/1.jpg"
                  className="w-100 blur-up lazyload rounded-3"
                  alt=""
                />
              </a>

              <div className="product-slider-detail">
                <div>
                  <a href="shop-left-sidebar.html" className="d-block">
                    <h3 className="text-title">Hot Deals on New Items</h3>
                  </a>
                  <h5>Daily Essentials Eggs &amp; Dairy</h5>

                  <div className="product-rating">
                    <ul className="rating">
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star"></i></li>
                    </ul>
                    <span>(34)</span>
                  </div>

                  <h6>
                    By <span className="theme-color">Nestfood</span>
                  </h6>

                  <a
                    href="shop-left-sidebar.html"
                    className="btn btn-animation product-button btn-sm"
                  >
                    Shop Now <i className="fa-solid fa-arrow-right icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div>
            <div className="product-slider wow fadeInUp" data-wow-delay="0.05s">
              <a href="shop-left-sidebar.html" className="product-slider-image">
                <img
                  src="../assets/images/veg-2/pro/2.jpg"
                  className="w-100 blur-up lazyload rounded-3"
                  alt=""
                />
              </a>

              <div className="product-slider-detail">
                <div>
                  <a href="shop-left-sidebar.html" className="d-block">
                    <h3 className="text-title">Organic Meat Prepared</h3>
                  </a>
                  <h5>Delivered to Your Home</h5>

                  <div className="product-rating">
                    <ul className="rating">
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star"></i></li>
                    </ul>
                    <span>(34)</span>
                  </div>

                  <h6>
                    By <span className="theme-color">Nestfood</span>
                  </h6>

                  <a
                    href="shop-left-sidebar.html"
                    className="btn btn-animation product-button btn-sm"
                  >
                    Shop Now <i className="fa-solid fa-arrow-right icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div>
            <div className="product-slider wow fadeInUp" data-wow-delay="0.1s">
              <a href="shop-left-sidebar.html" className="product-slider-image">
                <img
                  src="../assets/images/veg-2/pro/3.jpg"
                  className="w-100 blur-up lazyload rounded-3"
                  alt=""
                />
              </a>

              <div className="product-slider-detail">
                <div>
                  <a href="shop-left-sidebar.html" className="d-block">
                    <h3 className="text-title">Buy More &amp; Save More</h3>
                  </a>
                  <h5>Fresh Vegetables &amp; Fruits</h5>

                  <div className="product-rating">
                    <ul className="rating">
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star"></i></li>
                    </ul>
                    <span>(34)</span>
                  </div>

                  <h6>
                    By <span className="theme-color">Nestfood</span>
                  </h6>

                  <a
                    href="shop-left-sidebar.html"
                    className="btn btn-animation product-button btn-sm"
                  >
                    Shop Now <i className="fa-solid fa-arrow-right icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 4 */}
          <div>
            <div className="product-slider wow fadeInUp" data-wow-delay="0.15s">
              <a href="shop-left-sidebar.html" className="product-slider-image">
                <img
                  src="../assets/images/veg-2/pro/4.jpg"
                  className="w-100 blur-up lazyload rounded-3"
                  alt=""
                />
              </a>

              <div className="product-slider-detail">
                <div>
                  <a href="shop-left-sidebar.html" className="d-block">
                    <h3 className="text-title">Fresh Fruits on Go</h3>
                  </a>
                  <h5>Fresh Vegetables &amp; Fruits</h5>

                  <div className="product-rating">
                    <ul className="rating">
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star" className="fill"></i></li>
                      <li><i data-feather="star"></i></li>
                    </ul>
                    <span>(34)</span>
                  </div>

                  <h6>
                    By <span className="theme-color">Nestfood</span>
                  </h6>

                  <a
                    href="shop-left-sidebar.html"
                    className="btn btn-animation product-button btn-sm"
                  >
                    Shop Now <i className="fa-solid fa-arrow-right icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
{/* Product Section End */}

    {/* <!-- Top Selling Section Start --> */}

    <section className="top-selling-section">
        <div className="container-fluid-lg">
            <div className="slider-4-1">
             <div>
  <div className="row">
    <div className="col-12">
      <div className="top-selling-box">
        <div className="top-selling-title">
          <h3>Top Selling</h3>
        </div>

        {/* ITEM 1 */}
        <div className="top-selling-contain wow fadeInUp">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/1.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Tuffets Whole Wheat Bread</h5>
            </a>

            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>

            <h6>$ 10.00</h6>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.05s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/2.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Potato</h5>
            </a>

            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>

            <h6>$ 40.00</h6>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.1s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/3.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Green Chilli</h5>
            </a>

            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>

            <h6>$ 45.00</h6>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.15s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/4.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Muffets Burger Bun</h5>
            </a>

            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>

            <h6>$ 70.00</h6>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div>
  <div className="row">
    <div className="col-12">
      <div className="top-selling-box">
        <div className="top-selling-title">
          <h3>Trending Products</h3>
        </div>

        {/* ITEM 1 */}
        <div className="top-selling-contain wow fadeInUp">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/5.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Good Life Refined Sunflower Oil</h5>
            </a>

            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>

            <h6>$ 10.00</h6>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.05s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/6.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Good Life Raw Peanuts</h5>
            </a>

            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>

            <h6>$ 40.00</h6>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.1s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/7.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Good Life Raw Peanuts</h5>
            </a>

            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>

            <h6>$ 85.00</h6>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.15s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/8.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Frooti Mango Drink</h5>
            </a>

            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>

            <h6>$ 10.00</h6>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div>
  <div className="row">
    <div className="col-12">
      <div className="top-selling-box">
        <div className="top-selling-title">
          <h3>Recently added</h3>
        </div>

        <div className="top-selling-contain wow fadeInUp">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/9.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Tuffets Britannia Cheezza</h5>
            </a>
            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>
            <h6>$ 10.00</h6>
          </div>
        </div>

        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.05s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/10.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Long Life Toned Milk</h5>
            </a>
            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>
            <h6>$ 40.00</h6>
          </div>
        </div>

        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.1s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/11.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Organic Tomato</h5>
            </a>
            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>
            <h6>$ 45.00</h6>
          </div>
        </div>

        <div className="top-selling-contain wow fadeIn" data-wow-delay="0.15s">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/12.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Organic Pure Honey</h5>
            </a>
            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>
            <h6>$ 90.00</h6>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


<div>
  <div className="row">
    <div className="col-12">
      <div className="top-selling-box">
        <div className="top-selling-title">
          <h3>Top Rated</h3>
        </div>

        <div className="top-selling-contain wow fadeInUp">
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/13.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Good Life Walnut Kernels</h5>
            </a>
            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>
            <h6>$ 10.00</h6>
          </div>
        </div>

        <div
          className="top-selling-contain wow fadeIn"
          data-wow-delay="0.05s"
        >
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/14.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Cherry Red Premium Imported</h5>
            </a>
            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>
            <h6>$ 40.00</h6>
          </div>
        </div>

        <div
          className="top-selling-contain wow fadeIn"
          data-wow-delay="0.1s"
        >
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/15.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Meatigo Premium Goat Curry</h5>
            </a>
            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>
            <h6>$ 45.00</h6>
          </div>
        </div>

        <div
          className="top-selling-contain wow fadeIn"
          data-wow-delay="0.15s"
        >
          <a href="product-left-thumbnail.html" className="top-selling-image">
            <img
              src="../assets/images/veg-2/top-selling/16.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>

          <div className="top-selling-detail">
            <a href="product-left-thumbnail.html">
              <h5>Dates Medjoul Premium Imported</h5>
            </a>
            <div className="product-rating">
              <ul className="rating">
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star" className="fill"></i></li>
                <li><i data-feather="star"></i></li>
              </ul>
              <span>(34)</span>
            </div>
            <h6>$ 70.00</h6>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>

    {/* End Top Selling */}

    <section>
  <div className="container-fluid-lg">
    <div className="title">
      <h2>Featured Blog</h2>
      <span className="title-leaf">
        <svg className="icon-width">
          <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
        </svg>
      </span>
      <p>A virtual assistant collects the products from your list</p>
    </div>

    <div className="row">
      <div className="col-12">
        <div className="slider-5 ratio_87">

          <div>
            <div className="blog-box">
              <div className="blog-box-image">
                <a href="blog-detail.html" className="blog-image">
                  <img
                    src="../assets/images/veg-2/blog/1.jpg"
                    className="bg-img blur-up lazyload"
                    alt=""
                  />
                </a>
              </div>

              <div className="blog-detail">
                <h6>Farmart</h6>
                <h5>Fresh Meat Saugage</h5>
              </div>
            </div>
          </div>

          <div>
            <div className="blog-box">
              <div className="blog-box-image">
                <a href="blog-detail.html" className="blog-image">
                  <img
                    src="../assets/images/veg-2/blog/2.jpg"
                    className="bg-img blur-up lazyload"
                    alt=""
                  />
                </a>
              </div>

              <a href="blog-detail.html" className="blog-detail">
                <h6>Soda Brand</h6>
                <h5>Soda 500ml - 20% OFF</h5>
              </a>
            </div>
          </div>

          <div>
            <div className="blog-box">
              <div className="blog-box-image">
                <a href="blog-detail.html" className="blog-image">
                  <img
                    src="../assets/images/veg-2/blog/3.jpg"
                    className="bg-img blur-up lazyload"
                    alt=""
                  />
                </a>
              </div>

              <a href="blog-detail.html" className="blog-detail">
                <h6>Beer Brand</h6>
                <h5>Soda 500ml - 20% OFF</h5>
              </a>
            </div>
          </div>

          <div>
            <div className="blog-box">
              <div className="blog-box-image">
                <a href="blog-detail.html" className="blog-image">
                  <img
                    src="../assets/images/veg-2/blog/4.jpg"
                    className="bg-img blur-up lazyload"
                    alt=""
                  />
                </a>
              </div>

              <a href="blog-detail.html" className="blog-detail">
                <h6>Beer Brand</h6>
                <h5>Fresh Beer -30% OFF</h5>
              </a>
            </div>
          </div>

          <div>
            <div className="blog-box">
              <div className="blog-box-image">
                <a href="blog-detail.html" className="blog-image">
                  <img
                    src="../assets/images/veg-2/blog/5.jpg"
                    className="bg-img blur-up lazyload"
                    alt=""
                  />
                </a>
              </div>

              <a href="blog-detail.html" className="blog-detail">
                <h6>Milk Brand</h6>
                <h5>Fresh Milk</h5>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

<section className="newsletter-section section-b-space">
  <div className="container-fluid-lg">
    <div className="newsletter-box newsletter-box-2">
      <div className="newsletter-contain py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
              <div className="newsletter-detail">
                <h2>Join our newsletter and get...</h2>
                <h5>$20 discount for your first order</h5>

                <div className="input-box">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Email"
                  />

                  <i className="fa-solid fa-envelope arrow"></i>

                  <button className="sub-btn btn">
                    <span className="d-sm-block d-none">Subscribe</span>
                    <i className="fa-solid fa-arrow-right icon"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="section-t-space">
  <div className="container-fluid-lg">

    {/* Service Section */}
    <div className="service-section">
      <div className="row g-3">
        <div className="col-12">
          <div className="service-contain">

            <div className="service-box">
              <div className="service-image">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                  className="blur-up lazyload"
                  alt=""
                />
              </div>
              <div className="service-detail">
                <h5>Every Fresh Products</h5>
              </div>
            </div>

            <div className="service-box">
              <div className="service-image">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                  className="blur-up lazyload"
                  alt=""
                />
              </div>
              <div className="service-detail">
                <h5>Free Delivery For Order Over $50</h5>
              </div>
            </div>

            <div className="service-box">
              <div className="service-image">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                  className="blur-up lazyload"
                  alt=""
                />
              </div>
              <div className="service-detail">
                <h5>Daily Mega Discounts</h5>
              </div>
            </div>

            <div className="service-box">
              <div className="service-image">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                  className="blur-up lazyload"
                  alt=""
                />
              </div>
              <div className="service-detail">
                <h5>Best Price On The Market</h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* Main Footer */}
    <div className="main-footer section-b-space section-t-space">
      <div className="row g-md-4 g-3">

        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="footer-logo">
            <div className="theme-logo">
              <a href="index.html">
                <img
                  src="../assets/images/logo/1.png"
                  className="blur-up lazyload"
                  alt=""
                />
              </a>
            </div>

            <div className="footer-logo-contain">
              <p>
                We are a friendly bar serving a variety of cocktails, wines and beers.
                Our bar is a perfect place for a couple.
              </p>

              <ul className="address">
                <li>
                  <i data-feather="home"></i>
                  <a href="javascript:void(0)">1418 Riverwood Drive, CA 96052, US</a>
                </li>
                <li>
                  <i data-feather="mail"></i>
                  <a href="javascript:void(0)">support@fastkart.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="footer-title">
            <h4>Categories</h4>
          </div>
          <div className="footer-contain">
            <ul>
              <li><a href="shop-left-sidebar.html" className="text-content">Vegetables & Fruit</a></li>
              <li><a href="shop-left-sidebar.html" className="text-content">Beverages</a></li>
              <li><a href="shop-left-sidebar.html" className="text-content">Meats & Seafood</a></li>
              <li><a href="shop-left-sidebar.html" className="text-content">Frozen Foods</a></li>
              <li><a href="shop-left-sidebar.html" className="text-content">Biscuits & Snacks</a></li>
              <li><a href="shop-left-sidebar.html" className="text-content">Grocery & Staples</a></li>
            </ul>
          </div>
        </div>

        <div className="col-xl col-lg-2 col-sm-3">
          <div className="footer-title">
            <h4>Useful Links</h4>
          </div>
          <div className="footer-contain">
            <ul>
              <li><a href="index.html" className="text-content">Home</a></li>
              <li><a href="shop-left-sidebar.html" className="text-content">Shop</a></li>
              <li><a href="about-us.html" className="text-content">About Us</a></li>
              <li><a href="blog-list.html" className="text-content">Blog</a></li>
              <li><a href="contact-us.html" className="text-content">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="col-xl-2 col-sm-3">
          <div className="footer-title">
            <h4>Help Center</h4>
          </div>
          <div className="footer-contain">
            <ul>
              <li><a href="order-success.html" className="text-content">Your Order</a></li>
              <li><a href="user-dashboard.html" className="text-content">Your Account</a></li>
              <li><a href="order-tracking.html" className="text-content">Track Order</a></li>
              <li><a href="wishlist.html" className="text-content">Your Wishlist</a></li>
              <li><a href="search.html" className="text-content">Search</a></li>
              <li><a href="faq.html" className="text-content">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="footer-title">
            <h4>Contact Us</h4>
          </div>

          <div className="footer-contact">
            <ul>
              <li>
                <div className="footer-number">
                  <i data-feather="phone"></i>
                  <div className="contact-number">
                    <h6 className="text-content">Hotline 24/7 :</h6>
                    <h5>+91 888 104 2340</h5>
                  </div>
                </div>
              </li>

              <li>
                <div className="footer-number">
                  <i data-feather="mail"></i>
                  <div className="contact-number">
                    <h6 className="text-content">Email Address :</h6>
                    <h5>fastkart@hotmail.com</h5>
                  </div>
                </div>
              </li>

              <li className="social-app">
                <h5 className="mb-2 text-content">Download App :</h5>
                <ul>
                  <li className="mb-0">
                    <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/playstore.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="mb-0">
                    <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noreferrer">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/appstore.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </div>

    {/* Sub Footer */}
    <div className="sub-footer section-small-space">
      <div className="reserve">
        <h6 className="text-content">©2022 Fastkart All rights reserved</h6>
      </div>

      <div className="payment">
        <img
          src="../assets/images/payment/1.png"
          className="blur-up lazyload"
          alt=""
        />
      </div>

      <div className="social-link">
        <h6 className="text-content">Stay connected :</h6>
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://in.pinterest.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</footer>

<div
  className="modal fade theme-modal view-modal"
  id="view"
  tabIndex={-1}
>
  <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
    <div className="modal-content">
      <div className="modal-header p-0">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="row g-sm-4 g-2">

          <div className="col-lg-6">
            <div className="slider-image">
              <img
                src="../assets/images/product/category/1.jpg"
                className="img-fluid blur-up lazyload"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="right-sidebar-modal">

              <h4 className="title-name">
                Peanut Butter Bite Premium Butter Cookies 600 g
              </h4>
              <h4 className="price">$36.99</h4>

              <div className="product-rating">
                <ul className="rating">
                  <li><i data-feather="star" className="fill"></i></li>
                  <li><i data-feather="star" className="fill"></i></li>
                  <li><i data-feather="star" className="fill"></i></li>
                  <li><i data-feather="star" className="fill"></i></li>
                  <li><i data-feather="star"></i></li>
                </ul>
                <span className="ms-2">8 Reviews</span>
                <span className="ms-2 text-danger">
                  6 sold in last 16 hours
                </span>
              </div>

              <div className="product-detail">
                <h4>Product Details :</h4>
                <p>
                  Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love.
                  Caramels marshmallow icing dessert candy canes I love soufflé I love toffee.
                  Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw.
                  Bonbon muffin I love carrot cake sugar plum dessert bonbon.
                </p>
              </div>

              <ul className="brand-list">
                <li>
                  <div className="brand-box">
                    <h5>Brand Name:</h5>
                    <h6>Black Forest</h6>
                  </div>
                </li>

                <li>
                  <div className="brand-box">
                    <h5>Product Code:</h5>
                    <h6>W0690034</h6>
                  </div>
                </li>

                <li>
                  <div className="brand-box">
                    <h5>Product Type:</h5>
                    <h6>White Cream Cake</h6>
                  </div>
                </li>
              </ul>

              <div className="select-size">
                <h4>Cake Size :</h4>
                <select className="form-select select-form-size" defaultValue="">
                  <option value="" disabled>
                    Select Size
                  </option>
                  <option value="0.5">1/2 KG</option>
                  <option value="1">1 KG</option>
                  <option value="1.5">1.5 KG</option>
                  <option value="red">Red Roses</option>
                  <option value="pink">With Pink Roses</option>
                </select>
              </div>

              <div className="modal-button">
                <button
                  className="btn btn-md add-cart-button icon"
                  onClick={() => (window.location.href = "cart.html")}
                >
                  Add To Cart
                </button>

                <button
                  className="btn theme-bg-color view-button icon text-white fw-bold btn-md"
                  onClick={() => (window.location.href = "product-left.html")}
                >
                  View More Details
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<div
  className="modal location-modal fade theme-modal"
  id="locationModal"
  tabIndex={-1}
>
  <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Choose your Delivery Location
        </h5>
        <p className="mt-1 text-content">
          Enter your address and we will specify the offer for your area.
        </p>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="location-list">

          <div className="search-input">
            <input
              type="search"
              className="form-control"
              placeholder="Search Your Area"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="disabled-box">
            <h6>Select a Location</h6>
          </div>

          <ul className="location-select custom-height">
            <li>
              <a href="javascript:void(0)">
                <h6>Alabama</h6>
                <span>Min: $130</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>Arizona</h6>
                <span>Min: $150</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>California</h6>
                <span>Min: $110</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>Colorado</h6>
                <span>Min: $140</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>Florida</h6>
                <span>Min: $160</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>Georgia</h6>
                <span>Min: $120</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>Kansas</h6>
                <span>Min: $170</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>Minnesota</h6>
                <span>Min: $120</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>New York</h6>
                <span>Min: $110</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <h6>Washington</h6>
                <span>Min: $130</span>
              </a>
            </li>
          </ul>

        </div>
      </div>

    </div>
  </div>
</div>

<div className="cookie-bar-box">
  <div className="cookie-box">
    <div className="cookie-image">
      <img
        src="../assets/images/cookie-bar.png"
        className="blur-up lazyload"
        alt=""
      />
      <h2>Cookies!</h2>
    </div>

    <div className="cookie-contain">
      <h5 className="text-content">
        We use cookies to make your experience better
      </h5>
    </div>
  </div>

  <div className="button-group">
    <button className="btn privacy-button">
      Privacy Policy
    </button>
    <button className="btn ok-button">
      OK
    </button>
  </div>
</div>

<div
  className="modal fade theme-modal deal-modal"
  id="deal-box"
  tabIndex={-1}
>
  <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
    <div className="modal-content">

      <div className="modal-header">
        <div>
          <h5 className="modal-title w-100" id="deal_today">
            Deal Today
          </h5>
          <p className="mt-1 text-content">
            Recommended deals for you.
          </p>
        </div>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="deal-offer-box">
          <ul className="deal-offer-list">

            <li className="list-1">
              <div className="deal-offer-contain">
                <a href="shop-left-sidebar.html" className="deal-image">
                  <img
                    src="../assets/images/vegetable/product/10.png"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>

                <a href="shop-left-sidebar.html" className="deal-contain">
                  <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                  <h6>
                    $52.57 <del>57.62</del> <span>500 G</span>
                  </h6>
                </a>
              </div>
            </li>

            <li className="list-2">
              <div className="deal-offer-contain">
                <a href="shop-left-sidebar.html" className="deal-image">
                  <img
                    src="../assets/images/vegetable/product/11.png"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>

                <a href="shop-left-sidebar.html" className="deal-contain">
                  <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                  <h6>
                    $52.57 <del>57.62</del> <span>500 G</span>
                  </h6>
                </a>
              </div>
            </li>

            <li className="list-3">
              <div className="deal-offer-contain">
                <a href="shop-left-sidebar.html" className="deal-image">
                  <img
                    src="../assets/images/vegetable/product/12.png"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>

                <a href="shop-left-sidebar.html" className="deal-contain">
                  <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                  <h6>
                    $52.57 <del>57.62</del> <span>500 G</span>
                  </h6>
                </a>
              </div>
            </li>

            <li className="list-1">
              <div className="deal-offer-contain">
                <a href="shop-left-sidebar.html" className="deal-image">
                  <img
                    src="../assets/images/vegetable/product/13.png"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>

                <a href="shop-left-sidebar.html" className="deal-contain">
                  <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                  <h6>
                    $52.57 <del>57.62</del> <span>500 G</span>
                  </h6>
                </a>
              </div>
            </li>

          </ul>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="theme-option">
  <div className="setting-box">
    <button className="btn setting-button">
      <i className="fa-solid fa-gear"></i>
    </button>

    <div className="theme-setting-2">
      <div className="theme-box">
        <ul>
          <li>
            <div className="setting-name">
              <h4>Color</h4>
            </div>

            <div className="theme-setting-button color-picker">
              <form className="form-control">
                <label
                  htmlFor="colorPick"
                  className="form-label mb-0"
                >
                  Theme Color
                </label>
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="colorPick"
                  defaultValue="#0da487"
                  title="Choose your color"
                />
              </form>
            </div>
          </li>

          <li>
            <div className="setting-name">
              <h4>Dark</h4>
            </div>

            <div className="theme-setting-button">
              <button
                className="btn btn-2 outline"
                id="darkButton"
              >
                Dark
              </button>
              <button
                className="btn btn-2 unline"
                id="lightButton"
              >
                Light
              </button>
            </div>
          </li>

          <li>
            <div className="setting-name">
              <h4>RTL</h4>
            </div>

            <div className="theme-setting-button rtl">
              <button className="btn btn-2 rtl-unline">
                LTR
              </button>
              <button className="btn btn-2 rtl-outline">
                RTL
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="back-to-top">
    <a
      id="back-to-top"
      href="#"
      onClick={(e) => e.preventDefault()}
    >
      <i className="fas fa-chevron-up"></i>
    </a>
  </div>
</div>

    {/* <!-- Bg overlay Start --> */}
    <div className="bg-overlay"></div>
    {/* <!-- Bg overlay End --> */}

    {/* <!-- Bg overlay Start --> */}
    <div className="bg-overlay"></div>
    {/* <!-- Bg overlay End --> */}


    </>
  );
}
