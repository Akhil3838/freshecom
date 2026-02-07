'use client'
import React from 'react'

function page() {
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

{/* Breadcrumb Section Start */}
<section className="breadcrumb-section pt-0">
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-12">
        <div className="breadcrumb-contain">
          <h2>Shop Left Sidebar</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="fa-solid fa-house"></i>
                </a>
              </li>
              <li className="breadcrumb-item active">
                Shop Left Sidebar
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Breadcrumb Section End */}

{/* Fresh Vegetable Section Start */}
<section className="fresh-vegetable-section section-lg-space">
    <div className="container-fluid-lg">
        <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
            <div className="col-xl-6 col-12">
                <div className="row g-sm-4 g-2">
                    <div className="col-6">
                        <div className="fresh-image-2">
                            <div>
                                <img
                                    src="../assets/images/inner-page/about-us/1.jpg"
                                    className="bg-img blur-up lazyload"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="fresh-image">
                            <div>
                                <img
                                    src="../assets/images/inner-page/about-us/2.jpg"
                                    className="bg-img blur-up lazyload"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6 col-12">
                <div className="fresh-contain p-center-left">
                    <div>
                        <div className="review-title">
                            <h4>About Us</h4>
                            <h2>We make Organic Food In Market</h2>
                        </div>

                        <div className="delivery-list">
                            <p className="text-content">
                                Just a few seconds to measure your body temperature. Up to 5
                                users! The battery lasts up to 2 years. There are many variations
                                of passages of Lorem Ipsum available. We started in 2019 and
                                haven't stopped smashing it since. A global brand that doesn't
                                sleep, we are 24/7 and always bringing something new with over
                                100 new products dropping on the monthly, bringing you the
                                latest looks for less.
                            </p>

                            <ul className="delivery-box">
                                <li>
                                    <div className="delivery-box">
                                        <div className="delivery-icon">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg"
                                                className="blur-up lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="delivery-detail">
                                            <h5 className="text">Free delivery for all orders</h5>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="delivery-box">
                                        <div className="delivery-icon">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg"
                                                className="blur-up lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="delivery-detail">
                                            <h5 className="text">Only fresh foods</h5>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="delivery-box">
                                        <div className="delivery-icon">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg"
                                                className="blur-up lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="delivery-detail">
                                            <h5 className="text">Free delivery for all orders</h5>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="delivery-box">
                                        <div className="delivery-icon">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg"
                                                className="blur-up lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="delivery-detail">
                                            <h5 className="text">Only fresh foods</h5>
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
</section>
{/* Fresh Vegetable Section End */}

{/* Client Section Start */}
<section className="client-section section-lg-space">
    <div className="container-fluid-lg">
        <div className="row">
            <div className="col-12">
                <div className="about-us-title text-center">
                    <h4>What We Do</h4>
                    <h2 className="center">We are Trusted by Clients</h2>
                </div>

                <div className="slider-3_1 product-wrapper">
                    <div>
                        <div className="clint-contain">
                            <div className="client-icon">
                                <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/svg/3/work.svg"
                                    className="blur-up lazyload"
                                    alt=""
                                />
                            </div>
                            <h2>10</h2>
                            <h4>Business Years</h4>
                            <p>
                                A coffee shop is a small business that sells coffee, pastries,
                                and other morning goods. There are many different types of
                                coffee shops around the world.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="clint-contain">
                            <div className="client-icon">
                                <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/svg/3/buy.svg"
                                    className="blur-up lazyload"
                                    alt=""
                                />
                            </div>
                            <h2>80 K+</h2>
                            <h4>Products Sales</h4>
                            <p>
                                Some coffee shops have a seating area, while some just have a
                                spot to order and then go somewhere else to sit down. The coffee
                                shop that I am going to.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="clint-contain">
                            <div className="client-icon">
                                <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/svg/3/user.svg"
                                    className="blur-up lazyload"
                                    alt=""
                                />
                            </div>
                            <h2>90%</h2>
                            <h4>Happy Customers</h4>
                            <p>
                                My goal for this coffee shop is to be able to get a coffee and
                                get on with my day. It's a Thursday morning and I am rushing
                                between meetings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* Client Section End */}

{/* Team Section Start */}
<section className="team-section section-lg-space">
    <div className="container-fluid-lg">
        <div className="about-us-title text-center">
            <h4 className="text-content">Our Creative Team</h4>
            <h2 className="center">fastkart team member</h2>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="slider-user product-wrapper">
                    <div>
                        <div className="team-box">
                            <div className="team-image">
                                <img
                                    src="../assets/images/inner-page/user/1.jpg"
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </div>

                            <div className="team-name">
                                <h3>Anna Baranov</h3>
                                <h5>Marketing</h5>
                                <p>cheeseburger airedale mozzarella the big cheese fondue.</p>
                                <ul className="team-media">
                                    <li>
                                        <a href="https://www.facebook.com/" className="fb-bg">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://in.pinterest.com/" className="pint-bg">
                                            <i className="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter-bg">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="insta-bg">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="team-box">
                            <div className="team-image">
                                <img
                                    src="../assets/images/inner-page/user/2.jpg"
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </div>

                            <div className="team-name">
                                <h3>Anna Baranov</h3>
                                <h5>Marketing</h5>
                                <p>cheese on toast mozzarella bavarian bergkase smelly cheese cheesy feet.</p>
                                <ul className="team-media">
                                    <li>
                                        <a href="https://www.facebook.com/" className="fb-bg">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://in.pinterest.com/" className="pint-bg">
                                            <i className="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter-bg">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="insta-bg">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="team-box">
                            <div className="team-image">
                                <img
                                    src="../assets/images/inner-page/user/3.jpg"
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </div>

                            <div className="team-name">
                                <h3>Anna Baranov</h3>
                                <h5>Marketing</h5>
                                <p>camembert de normandie. Bocconcini rubber cheese fromage frais port-salut.</p>
                                <ul className="team-media">
                                    <li>
                                        <a href="https://www.facebook.com/" className="fb-bg">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://in.pinterest.com/" className="pint-bg">
                                            <i className="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter-bg">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="insta-bg">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="team-box">
                            <div className="team-image">
                                <img
                                    src="../assets/images/inner-page/user/4.jpg"
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </div>

                            <div className="team-name">
                                <h3>Anna Baranov</h3>
                                <h5>Marketing</h5>
                                <p>Fondue stinking bishop goat. Macaroni cheese croque monsieur cottage cheese.</p>
                                <ul className="team-media">
                                    <li>
                                        <a href="https://www.facebook.com/" className="fb-bg">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://in.pinterest.com/" className="pint-bg">
                                            <i className="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter-bg">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="insta-bg">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="team-box">
                            <div className="team-image">
                                <img
                                    src="../assets/images/inner-page/user/1.jpg"
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </div>

                            <div className="team-name">
                                <h3>Anna Baranov</h3>
                                <h5>Marketing</h5>
                                <p>squirty cheese cheddar macaroni cheese airedale cheese triangles.</p>
                                <ul className="team-media">
                                    <li>
                                        <a href="https://www.facebook.com/" className="fb-bg">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://in.pinterest.com/" className="pint-bg">
                                            <i className="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter-bg">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="insta-bg">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
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
{/* Team Section End */}

{/* Review Section Start */}
<section className="review-section section-lg-space">
    <div className="container-fluid">
        <div className="about-us-title text-center">
            <h4 className="text-content">Latest Testimonials</h4>
            <h2 className="center">What people say</h2>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="slider-4-half product-wrapper">
                    <div>
                        <div className="reviewer-box">
                            <i className="fa-solid fa-quote-right"></i>

                            <div className="product-rating">
                                <ul className="rating">
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star"></i></li>
                                </ul>
                            </div>

                            <h3>Top Quality, Beautiful Location</h3>

                            <p>
                                "I usually try to keep my sadness pent up inside where it can fester quietly as a
                                mental illness. There, now he's trapped in a book I wrote: a crummy world of plot
                                holes and spelling errors! As an interesting side note."
                            </p>

                            <div className="reviewer-profile">
                                <div className="reviewer-image">
                                    <img
                                        src="../assets/images/inner-page/user/1.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </div>

                                <div className="reviewer-name">
                                    <h4>Betty J. Turner</h4>
                                    <h6>CTO, Company</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="reviewer-box">
                            <i className="fa-solid fa-quote-right"></i>

                            <div className="product-rating">
                                <ul className="rating">
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star"></i></li>
                                </ul>
                            </div>

                            <h3>Top Quality, Beautiful Location</h3>

                            <p>
                                "My busy schedule leaves little, if any, time for blogging and social media.
                                The Lorem Ipsum Company has been a huge part of helping me grow my business through
                                organic search and content marketing."
                            </p>

                            <div className="reviewer-profile">
                                <div className="reviewer-image">
                                    <img
                                        src="../assets/images/inner-page/user/2.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </div>

                                <div className="reviewer-name">
                                    <h4>Alfredo S. Rocha</h4>
                                    <h6>Project Manager</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="reviewer-box">
                            <i className="fa-solid fa-quote-right"></i>

                            <div className="product-rating">
                                <ul className="rating">
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star"></i></li>
                                </ul>
                            </div>

                            <h3>Top Quality, Beautiful Location</h3>

                            <p>
                                "Professional, responsive, and able to keep up with ever-changing demand and tight
                                deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company."
                            </p>

                            <div className="reviewer-profile">
                                <div className="reviewer-image">
                                    <img
                                        src="../assets/images/inner-page/user/3.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </div>

                                <div className="reviewer-name">
                                    <h4>Donald C. Spurr</h4>
                                    <h6>Sale Agents</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="reviewer-box">
                            <i className="fa-solid fa-quote-right"></i>

                            <div className="product-rating">
                                <ul className="rating">
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star" className="fill"></i></li>
                                    <li><i data-feather="star"></i></li>
                                </ul>
                            </div>

                            <h3>Top Quality, Beautiful Location</h3>

                            <p>
                                "After being forced to move twice within five years, our customers had a hard time
                                finding us and our sales plummeted. The Lorem Ipsum Co. not only revitalized our brand."
                            </p>

                            <div className="reviewer-profile">
                                <div className="reviewer-image">
                                    <img
                                        src="../assets/images/inner-page/user/4.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </div>

                                <div className="reviewer-name">
                                    <h4>Terry G. Fain</h4>
                                    <h6>Photographer</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Remaining review cards follow the same JSX pattern */}
                </div>
            </div>
        </div>
    </div>
</section>
{/* Review Section End */}
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

{/* Tap to top and theme setting button start */}
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
                <label htmlFor="colorPick" className="form-label mb-0">
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
              <button className="btn btn-2 outline" id="darkButton">
                Dark
              </button>
              <button className="btn btn-2 unline" id="lightButton">
                Light
              </button>
            </div>
          </li>

          <li>
            <div className="setting-name">
              <h4>RTL</h4>
            </div>

            <div className="theme-setting-button rtl">
              <button className="btn btn-2 rtl-unline">LTR</button>
              <button className="btn btn-2 rtl-outline">RTL</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="back-to-top">
    <a id="back-to-top" href="#">
      <i className="fas fa-chevron-up"></i>
    </a>
  </div>
</div>
{/* Tap to top and theme setting button end */}


{/* Bg overlay Start */}
<div className="bg-overlay"></div>
{/* Bg overlay End */}

    </>
  )
}

export default page