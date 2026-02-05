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
{/* Poster Section Start */}
<section>
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-12">
        <div className="slider-1 slider-animate product-wrapper no-arrow">
          
          <div>
            <div className="banner-contain-2 hover-effect">
              <img
                src="../assets/images/shop/1.jpg"
                className="bg-img rounded-3 blur-up lazyload"
                alt=""
              />
              <div className="banner-detail p-center-right position-relative shop-banner ms-auto banner-small">
                <div>
                  <h2>Healthy, nutritious &amp; Tasty Fruits &amp; Veggies</h2>
                  <h3>Save upto 50%</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="banner-contain-2 hover-effect">
              <img
                src="../assets/images/shop/1.jpg"
                className="bg-img rounded-3 blur-up lazyload"
                alt=""
              />
              <div className="banner-detail p-center-right position-relative shop-banner ms-auto banner-small">
                <div>
                  <h2>Healthy, nutritious &amp; Tasty Fruits &amp; Veggies</h2>
                  <h3>Save upto 50%</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="banner-contain-2 hover-effect">
              <img
                src="../assets/images/shop/1.jpg"
                className="bg-img rounded-3 blur-up lazyload"
                alt=""
              />
              <div className="banner-detail p-center-right position-relative shop-banner ms-auto banner-small">
                <div>
                  <h2>Healthy, nutritious &amp; Tasty Fruits &amp; Veggies</h2>
                  <h3>Save upto 50%</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
{/* Poster Section End */}

    {/* <!-- Shop Section Start --> */}
    <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
            <div className="row">

                <div className="col-custom-3">
                    <div className="left-box wow fadeInUp">
                        <div className="shop-left-sidebar">
                            <div className="back-button">
                                <h3><i className="fa-solid fa-arrow-left"></i> Back</h3>
                            </div>
                             <div className="filter-category">
  <div className="filter-title">
    <h2>Filters</h2>
    <a href="javascript:void(0)">Clear All</a>
  </div>
  <ul>
    <li>
      <a href="javascript:void(0)">Vegetable</a>
    </li>
    <li>
      <a href="javascript:void(0)">Fruit</a>
    </li>
    <li>
      <a href="javascript:void(0)">Fresh</a>
    </li>
    <li>
      <a href="javascript:void(0)">Milk</a>
    </li>
    <li>
      <a href="javascript:void(0)">Meat</a>
    </li>
  </ul>
                            </div>

                            <div className="accordion custom-accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
      >
        <span>Categories</span>
      </button>
    </h2>

    <div id="collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <div className="form-floating theme-form-floating-2 search-box">
          <input
            type="search"
            className="form-control"
            id="search"
            placeholder="Search .."
          />
          <label htmlFor="search">Search</label>
        </div>

        <ul className="category-list custom-padding custom-height">
          {[
            ["fruit", "Fruits & Vegetables", 15],
            ["cake", "Bakery, Cake & Dairy", 12],
            ["behe", "Beverages", 20],
            ["snacks", "Snacks & Branded Foods", "05"],
            ["beauty", "Beauty & Household", 30],
            ["pets", "Kitchen, Garden & Pets", 50],
            ["egg", "Eggs, Meat & Fish", 19],
            ["food", "Gourment & World Food", 30],
            ["care", "Baby Care", 20],
            ["fish", "Fish & Seafood", 10],
            ["marinades", "Marinades", "05"],
            ["lamb", "Mutton & Lamb", "09"],
            ["other", "Port & other Meats", "06"],
            ["pour", "Pourltry", "01"],
            ["salami", "Sausages, bacon & Salami", "03"],
          ].map(([id, name, count]) => (
            <li key={id}>
              <div className="form-check ps-0 m-0 category-list-box">
                <input
                  className="checkbox_animated"
                  type="checkbox"
                  id={id}
                />
                <label className="form-check-label" htmlFor={id}>
                  <span className="name">{name}</span>
                  <span className="number">({count})</span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Food Preference */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
      >
        <span>Food Preference</span>
      </button>
    </h2>

    <div id="collapseTwo" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <ul className="category-list custom-padding">
          {[
            ["veget", "Vegetarian", "08"],
            ["non", "Non Vegetarian", "09"],
          ].map(([id, name, count]) => (
            <li key={id}>
              <div className="form-check ps-0 m-0 category-list-box">
                <input
                  className="checkbox_animated"
                  type="checkbox"
                  id={id}
                />
                <label className="form-check-label" htmlFor={id}>
                  <span className="name">{name}</span>
                  <span className="number">({count})</span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Price */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
      >
        <span>Price</span>
      </button>
    </h2>

    <div id="collapseThree" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <div className="range-slider">
          <input type="text" className="js-range-slider" />
        </div>
      </div>
    </div>
  </div>

  {/* Rating */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSix"
      >
        <span>Rating</span>
      </button>
    </h2>

    <div id="collapseSix" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <ul className="category-list custom-padding">
          {[5, 4, 3, 2, 1].map((star) => (
            <li key={star}>
              <div className="form-check ps-0 m-0 category-list-box">
                <input className="checkbox_animated" type="checkbox" />
                <div className="form-check-label">
                  <ul className="rating">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i
                          data-feather="star"
                          className={i < star ? "fill" : ""}
                        ></i>
                      </li>
                    ))}
                  </ul>
                  <span className="text-content">({star} Star)</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
                            </div>

                     </div>
                  </div>
               </div>

                <div className="col-custom-">

                 <div className="show-button">
  <div className="filter-button-group mt-0">
    <div className="filter-button d-inline-block d-lg-none">
      <a href="#">
        <i className="fa-solid fa-filter"></i> Filter Menu
      </a>
    </div>
  </div>

  <div className="top-filter-menu">
    <div className="category-dropdown">
      <h5 className="text-content">Sort By :</h5>

      <div className="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
        >
          <span>Most Popular</span>
          <i className="fa-solid fa-angle-down"></i>
        </button>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" id="pop" href="#">
              Popularity
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="low" href="#">
              Low - High Price
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="high" href="#">
              High - Low Price
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="rating" href="#">
              Average Rating
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="aToz" href="#">
              A - Z Order
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="zToa" href="#">
              Z - A Order
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="off" href="#">
              % Off - High To Low
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="grid-option d-none d-md-block">
      <ul>
        <li className="three-grid">
          <a href="#">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-3.svg"
              className="blur-up lazyload"
              alt=""
            />
          </a>
        </li>

        <li className="grid-btn d-xxl-inline-block d-none active">
          <a href="#">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-4.svg"
              className="blur-up lazyload d-lg-inline-block d-none"
              alt=""
            />
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/svg/grid.svg"
              className="blur-up lazyload img-fluid d-lg-none d-inline-block"
              alt=""
            />
          </a>
        </li>

        <li className="list-btn">
          <a href="#">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/svg/list.svg"
              className="blur-up lazyload"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
                 </div>

                  <div
                        className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                          <div>
  <div className="product-box-3 h-100 wow fadeInUp">
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/2.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a
              href="#"
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Cheesy feet cheesy grin brie. Mascarpone cheese and wine hard cheese
          the big cheese everyone loves smelly cheese macaroni cheese croque monsieur.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i data-feather="star" className={i < 4 ? "fill" : ""}></i>
              </li>
            ))}
          </ul>
          <span>(4.0)</span>
        </div>

        <h6 className="unit">250 ml</h6>

        <h5 className="price">
          <span className="theme-color">$08.02</span> <del>$15.15</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.05s">
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/3.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">
            Peanut Butter Bite Premium Butter Cookies 600 g
          </h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Feta taleggio croque monsieur swiss manchego cheesecake dolcelatte
          jarlsberg. Hard cheese danish fontina boursin melted cheese fondue.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i data-feather="star" className={i < 2 ? "fill" : ""}></i>
              </li>
            ))}
          </ul>
          <span>(2.4)</span>
        </div>

        <h6 className="unit">350 G</h6>

        <h5 className="price">
          <span className="theme-color">$04.33</span> <del>$10.36</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/4.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Snacks</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">
            SnackAmor Combo Pack of Jowar Stick and Jowar Chips
          </h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Lancashire hard cheese parmesan. Danish fontina mozzarella cream cheese
          smelly cheese cheese and wine cheesecake dolcelatte stilton. Cream cheese
          parmesan who moved my cheese when the cheese comes out everybody's happy
          cream cheese red leicester ricotta edam.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i data-feather="star" className="fill"></i>
              </li>
            ))}
          </ul>
          <span>(5.0)</span>
        </div>

        <h6 className="unit">570 G</h6>

        <h5 className="price">
          <span className="theme-color">$12.52</span> <del>$13.62</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.15s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/5.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Snacks</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">
            Yumitos Chilli Sprinkled Potato Chips 100 g
          </h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Cheddar cheddar pecorino hard cheese hard cheese cheese and biscuits
          bocconcini babybel. Cow goat paneer cream cheese fromage cottage cheese
          cauliflower cheese jarlsberg.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 3 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(3.8)</span>
        </div>

        <h6 className="unit">100 G</h6>

        <h5 className="price">
          <span className="theme-color">$10.25</span> <del>$12.36</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.2s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/6.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Bavarian bergkase smelly cheese swiss cut the cheese lancashire who moved
          my cheese manchego melted cheese. Red leicester paneer cow when the cheese
          comes out everybody&apos;s happy croque monsieur goat melted cheese
          port-salut.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 4 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(4.0)</span>
        </div>

        <h6 className="unit">550 G</h6>

        <h5 className="price">
          <span className="theme-color">$14.25</span> <del>$16.57</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.25s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/7.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Melted cheese babybel chalk and cheese. Port-salut port-salut cream cheese
          when the cheese comes out everybody&apos;s happy cream cheese hard cheese
          cream cheese red leicester.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 3 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(3.8)</span>
        </div>

        <h6 className="unit">1 Kg</h6>

        <h5 className="price">
          <span className="theme-color">$12.68</span> <del>$14.69</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.3s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/2.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Squirty cheese cottage cheese cheese strings. Red leicester paneer
          danish fontina queso lancashire when the cheese comes out
          everybody&apos;s happy cottage cheese paneer.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 4 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(4.0)</span>
        </div>

        <h6 className="unit">250 ml</h6>

        <h5 className="price">
          <span className="theme-color">$08.02</span> <del>$15.15</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.35s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/3.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">
            Peanut Butter Bite Premium Butter Cookies 600 g
          </h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Swiss ricotta cauliflower cheese squirty cheese cheesy grin
          camembert de normandie airedale edam. Squirty cheese babybel
          cheesecake the big cheese cauliflower cheese hard cheese cheese
          and biscuits cheese and wine.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 2 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(2.4)</span>
        </div>

        <h6 className="unit">350 G</h6>

        <h5 className="price">
          <span className="theme-color">$04.33</span> <del>$10.36</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.4s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/4.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Snacks</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">
            SnackAmor Combo Pack of Jowar Stick and Jowar Chips
          </h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Boursin the big cheese cheeseburger. Jarlsberg smelly cheese chalk and
          cheese gouda blue castello monterey jack swiss boursin. Halloumi cheesy
          feet mozzarella red leicester paneer boursin who moved my cheese croque
          monsieur.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i data-feather="star" className="fill"></i>
              </li>
            ))}
          </ul>
          <span>(5.0)</span>
        </div>

        <h6 className="unit">570 G</h6>

        <h5 className="price">
          <span className="theme-color">$12.52</span> <del>$13.62</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.45s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/5.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Snacks</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">
            Yumitos Chilli Sprinkled Potato Chips 100 g
          </h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Halloumi mozzarella monterey jack smelly cheese emmental bocconcini when
          the cheese comes out everybody&apos;s happy pecorino. Cut the cheese
          stilton danish fontina cheesy grin rubber cheese smelly cheese roquefort
          paneer.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 3 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(3.8)</span>
        </div>

        <h6 className="unit">100 G</h6>

        <h5 className="price">
          <span className="theme-color">$10.25</span> <del>$12.36</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.5s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/6.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Manchego cow cheddar. Port-salut roquefort hard cheese babybel when the
          cheese comes out everybody&apos;s happy brie dolcelatte croque monsieur.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 4 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(4.0)</span>
        </div>

        <h6 className="unit">550 G</h6>

        <h5 className="price">
          <span className="theme-color">$14.25</span> <del>$16.57</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.55s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/7.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Roquefort say cheese the big cheese ricotta chalk and cheese when the
          cheese comes out everybody&apos;s happy brie lancashire.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 3 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(3.8)</span>
        </div>

        <h6 className="unit">1 Kg</h6>

        <h5 className="price">
          <span className="theme-color">$12.68</span> <del>$14.69</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.6s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/2.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Lancashire when the cheese comes out everybody&apos;s happy blue castello
          halloumi boursin stinking bishop pecorino fromage frais.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 4 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(4.0)</span>
        </div>

        <h6 className="unit">250 ml</h6>

        <h5 className="price">
          <span className="theme-color">$08.02</span> <del>$15.15</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div
    className="product-box-3 h-100 wow fadeInUp"
    data-wow-delay="0.65s"
  >
    <div className="product-header">
      <div className="product-image">
        <a href="product-left-thumbnail.html">
          <img
            src="../assets/images/cake/product/3.png"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </a>

        <ul className="product-option">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            <a href="#" data-bs-toggle="modal" data-bs-target="#view">
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
    </div>

    <div className="product-footer">
      <div className="product-detail">
        <span className="span-name">Vegetable</span>

        <a href="product-left-thumbnail.html">
          <h5 className="name">
            Peanut Butter Bite Premium Butter Cookies 600 g
          </h5>
        </a>

        <p className="text-content mt-1 mb-2 product-content">
          Say cheese cheese and biscuits feta. Queso bocconcini danish fontina
          camembert de normandie brie airedale ricotta feta. Pecorino edam gouda
          caerphilly croque monsieur red leicester cheese triangles caerphilly.
        </p>

        <div className="product-rating mt-2">
          <ul className="rating">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  data-feather="star"
                  className={i < 2 ? "fill" : ""}
                ></i>
              </li>
            ))}
          </ul>
          <span>(2.4)</span>
        </div>

        <h6 className="unit">350 G</h6>

        <h5 className="price">
          <span className="theme-color">$04.33</span> <del>$10.36</del>
        </h5>

        <div className="add-to-cart-box bg-white">
          <button className="btn btn-add-cart addcart-button">
            Add
            <span className="add-icon bg-light-gray">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>

          <div className="cart_qty qty-box">
            <div className="input-group bg-white">
              <button type="button" className="qty-left-minus bg-gray">
                <i className="fa fa-minus"></i>
              </button>

              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue="0"
              />

              <button type="button" className="qty-right-plus bg-gray">
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

                  <nav className="custom-pagination">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex={-1}>
        <i className="fa-solid fa-angles-left"></i>
      </a>
    </li>

    <li className="page-item active">
      <a className="page-link" href="#">
        1
      </a>
    </li>

    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>

    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>

    <li className="page-item">
      <a className="page-link" href="#">
        <i className="fa-solid fa-angles-right"></i>
      </a>
    </li>
  </ul>
               </nav>


               </div>

            </div>
        </div>
    </section>
    {/* <!-- Shop Section End --> */}
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

{/* Deal Box Modal Start */}
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
          aria-label="Close"
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
                    $52.57 <del>$57.62</del> <span>500 G</span>
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
                    $52.57 <del>$57.62</del> <span>500 G</span>
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
                    $52.57 <del>$57.62</del> <span>500 G</span>
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
                    $52.57 <del>$57.62</del> <span>500 G</span>
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
{/* Deal Box Modal End */}

{/* Add to cart Modal Start */}
<div className="add-cart-box">
  <div className="add-image">
    <img
      src="../assets/images/cake/pro/1.jpg"
      className="img-fluid blur-up lazyload"
      alt=""
    />
  </div>

  <div className="add-contain">
    <h6>Added to Cart</h6>
  </div>
</div>
{/* Add to cart Modal End */}


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