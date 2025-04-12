<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="North Spirit Vodka delivers premium Swedish vodka crafted with purity and tradition. Experience authentic flavors in every sip.">
    <meta name="keywords"
        content="North Spirit Vodka, premium Swedish vodka, luxury vodka, unique vodka bottle, Swedish spirits, bold cocktails">
        <link rel="icon" type="image/x-icon" href="/media/Favicon/favicon.ico">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"> -->
    <!-- Slider Css start -->
    <!-- <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
    integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  /> -->
  <!-- <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
    integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  /> -->

  <!-- Font CDN -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
    <!-- Slider Css End -->
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <!-- <link rel="stylesheet" href="css/responsive.css"> -->
    <link rel="stylesheet" href="./css/popup.css">
    <link rel="stylesheet" href="./css/imageREsizer.css">
    <!-- <link rel="stylesheet" href="./css/megamenu.css"> -->
    <title>"North Spirit Vodka | Premium Swedish Vodka Brand"</title>


    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9LY6BEKVFB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9LY6BEKVFB');
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        $.getJSON("https://ipapi.co/json/", function(data) {
            var countryCode = data.country_code;
            var currentDomain = window.location.hostname;
            var redirectUrl = '';
            var domainMap = {
                'SE': 'http://northspiritvodka.se',
                'ES': 'northspiritvodka.es',
                'CH': 'northspiritvodka.ch',
                'DE': 'northspiritvodka.de',
                'NL': 'northspiritvodka.nl',
                'FI': 'https://northspiritvodka.fi'
            };
            if (domainMap[countryCode]) {
                redirectUrl = domainMap[countryCode];
                if (currentDomain !== redirectUrl.replace(/^https?:\/\//, '')) {
                    window.location.href = redirectUrl;
                }
            }
        });
    });
</script>
<!-- chating Option Create  -->
<script src="//code.tidio.co/vvkc1dwpoocyfyx9kefsbnhkl26mmxkr.js" async></script>

<?php wp_head(); ?>

</head>

<body <?php body_class(""); ?>>
    <!-- popup Image start -->
        <!-- Add this at the very top of your body tag in index.html (before any other content) -->
<!-- <div id="ageVerificationModal" class="age-verification-modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>NORTH SPIRIT VODKA</h2>
        </div>
        <div class="modal-body">
            <img src="media/logo.png" alt="Cocktail Glass logo_img" class="cocktail-image">
            <h3>DATE OF BIRTH:</h3>
            <input type="date" id="dob" required>
            <h3>COUNTRY/REGION:</h3>
            <select id="country" required>
                <option value="" disabled selected>Select Country/Region</option>
                <option value="usa">USA</option>
                <option value="sweden">Sweden</option>
                <option value="uk">United Kingdom</option>
                <option value="other">Other</option>
            </select>
            <p>You must be of legal drinking and purchasing age in your location to enter this site. If no such laws exist in your location, you must be 21 to enter this site. Do not forward these materials to anyone below the legal drinking age.</p>
            <button id="enterButton">ENTER</button>
        </div>
        <div class="modal-footer">
            <a href="coktails.html" class="more-cocktails">MORE COCKTAIL IDEAS</a>
        </div>
    </div>
</div> -->

<!-- WhatsApp Chat Button -->
<div class="whatsapp-chat" id="whatsappChat">
    <a href="https://wa.me/46739471156?text=Hello!%20Welcome%20to%20North%20Spirit%20Vodka.%20How%20can%20I%20assist%20you%20today?" 
       class="whatsapp-btn" 
       target="_blank" 
       rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" class="whatsapp-icon">
        Chat with us
    </a>
</div>

    <!-- popup Image End -->
    <header>
        <div class="logo">
            <a href="https://northspirit.vodka/"> <img src="<?php echo get_template_directory_uri(); ?>/media/logo.png" alt=""></a>
        </div>
           <menu>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <!-- <li><a href="#">Our Products</a></li> -->
                <li><a href="cocktails.html">Cocktails</a></li>
                <li><a href="investment.html">Investment</a></li>
                <li><a href="our-story.html">Our Story</a></li>
                <li><a href="our-pack.html">Our Pack</a></li>
                <li class="hover"><a href="contact.html">Contact</a></li>
            </ul>
           </menu>

       <!-- <menu>
            <ul>
                <li><a href="index.html">Home</a></li>
                 <li class="mega-menu-inner"><a href="single-product.html">Products</a>
                    <ul class="mega-menu">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <h2 class="section-subtitle text-light mb-4">NORTH SPIRIT 10 x Future</h2>
                                <img src="media/hero-vodka-bg.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-4 text-center">
                                <h2 class="section-subtitle text-light mb-4">NORTH SPIRIT 10 x Future</h2>
                                <img src="media/hero-vodka-bg.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-4 text-center">
                                <h2 class="section-subtitle text-light mb-4">NORTH SPIRIT 10 x Future</h2>
                                <img src="media/hero-vodka-bg.png" class="img-fluid" alt="">
                            </div>
                        </div>
                    </ul>
                </li> 
                <li class="mega-menu-inner"><a href="products.html">Our Products</a>
                    <ul class="mega-menu">
                        <div class="row">
                            <div class="col-md-2 text-center ">
                                <div class="border-end">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img  " alt="" srcset="">
                                </div>
                                <b class="text-uppercase text-light text-center">NORTH SPIRIT Organic</b>

                            </div>
                            <div class="col-md-2 text-center ">
                                <div class="border-end">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img  " alt="" srcset="">
                                </div>
                                <b class="text-uppercase text-light">NORTH SPIRIT Organic</b>

                            </div>
                            <div class="col-md-4">
                                <div class="border-end">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img" alt="">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img" alt="">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img" alt="">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img" alt="">
                                </div>
                                <b class="text-uppercase text-light">NORTH SPIRIT Organic</b>
                            </div>
                            <div class="col-md-2 text-center ">
                                <div class="border-end">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img  " alt="" srcset="">
                                </div>
                                <b class="text-uppercase text-light">NORTH SPIRIT Organic</b>

                            </div>
                            <div class="col-md-2 text-center ">
                                <div class="">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img  " alt="" srcset="">
                                    <img src="media/lion-tr-bottle.png" class="bottle-img  " alt="" srcset="">
                                </div>
                                <b class="text-uppercase text-light">NORTH SPIRIT Organic</b>

                            </div>
                        </div>
                    </ul>
                </li>
                <li class="mega-menu-inner"><a href="coktails.html">Cocktails</a>
                    <ul class="mega-menu">
                        <div class="row">
                            <div class="col-md-4 text-center">

                            </div>
                            <div class="col-md-4 text-center">
                                <h2 class="section-subtitle text-light mb-4">NORTH SPIRIT 10 x Future</h2>
                                <img src="media/hero-vodka-bg.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-4 text-center">

                            </div>
                        </div>
                    </ul>
                </li>
                <li class="mega-menu-inner"><a href="investment.html">Investment</a>
                    <ul class="mega-menu">
                        <div class="row">
                            <div class="col-md-4 text-center">

                            </div>
                            <div class="col-md-4 text-center">
                                <h2 class="section-subtitle text-light mb-4">NORTH SPIRIT 10 x Future</h2>
                                <img src="media/hero-vodka-bg.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-4 text-center">

                            </div>
                        </div>
                    </ul>
                </li>
                <li class="hover"><a href="about.html">About Us</a>
                    <ul>
                        <li class="our_story">
                            <a href="our_story.html">Our Story</a>
                        </li>
                    </ul>
                </li>
                 <li><a href="contact.html">Contact</a></li> 
            </ul>


            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="coktails.html">Cocktails</a></li>
                <li><a href="investment.html">Investment</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </menu>  -->
        <div>
            <div class="header-cta-btn d-none d-lg-flex justify-content-center align-items-center gap-3">
                <a class="cta-btn" href="products.html">Order</a>
                <div class="dropdown">
                    <button class="dropdown-btn cta-btn">Language <span class="arrow"><i class="fa-solid fa-chevron-down"></i></span></button>
                    <div class="dropdown-content">
                        <a class="cta-btn" href="http://northspiritvodka.se">Sweden</a>
                        <a class="cta-btn" href="http://northspiritvodka.es">Spain</a> 
                        <a class="cta-btn" href="http://northspiritvodka.ch ">Switzerland</a>
                        <a class="cta-btn" href="http://northspiritvodka.de ">Germany</a>
                        <a class="cta-btn" href="http://northspiritvodka.dk "> Denmark</a>
                        <a class="cta-btn" href="http://northspiritvodka.nl">Netherlands</a>
                        <a class="cta-btn" href="http://northspiritvodka.fi/">Finland</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-none  menu-toggle-btn" >
            <div class="i-one"></div>
            <div class="i-two"></div>
            <div class="i-three"></div>
            <!-- type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" -->
            <!-- <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
               <i class="fa-solid fa-bars-staggered"></i>
             </a>  -->
        </div>
    </header>