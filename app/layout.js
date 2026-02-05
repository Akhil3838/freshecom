import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "On-demand last-mile delivery",
  description: "Fastkart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta */}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Fastkart" />
        <meta name="keywords" content="Fastkart" />
        <meta name="author" content="Fastkart" />

        {/* Favicon */}
        <link
          rel="icon"
          href="/assets/images/favicon/3.png"
          type="image/x-icon"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* CSS Plugins */}
        <link rel="stylesheet" href="/assets/css/vendors/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bulk-style.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="bg-effect">
        {children}

        {/* ================= JS PLUGINS ================= */}

        {/* jQuery */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />

        {/* jQuery UI */}
        <Script src="/assets/js/jquery-ui.min.js" strategy="afterInteractive" />

        {/* Bootstrap */}
        <Script src="/assets/js/bootstrap/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap/bootstrap-notify.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap/popper.min.js" strategy="afterInteractive" />

        {/* Feather Icons */}
        <Script src="/assets/js/feather/feather.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/feather/feather-icon.js" strategy="afterInteractive" />

        {/* Lazyload */}
        <Script src="/assets/js/lazysizes.min.js" strategy="afterInteractive" />

        {/* Slick Slider */}
        <Script src="/assets/js/slick/slick.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick/custom_slick.js" strategy="afterInteractive" />

        {/* Auto Height */}
        <Script src="/assets/js/auto-height.js" strategy="afterInteractive" />

        {/* Timer */}
        <Script src="/assets/js/timer1.js" strategy="afterInteractive" />

        {/* Fly Cart */}
        <Script src="/assets/js/fly-cart.js" strategy="afterInteractive" />

        {/* Quantity */}
        <Script src="/assets/js/quantity-2.js" strategy="afterInteractive" />

        {/* WOW */}
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom-wow.js" strategy="afterInteractive" />

        {/* Main Script */}
        <Script src="/assets/js/script.js" strategy="afterInteractive" />

        {/* Theme Settings */}
        <Script src="/assets/js/theme-setting.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
