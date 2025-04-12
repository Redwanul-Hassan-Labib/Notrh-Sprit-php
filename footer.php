<!-- Footer-start-section -->
<footer>
        <div class="container">
            <div class="footer-logo"><img src="media/logo.png" alt="" srcset=""></div>
            <div class="footer-social-links">
                <a href="https://www.instagram.com/northspiritvodka/"><img src="media/icon/instagam.png" alt=""></a>
                <a href="https://www.facebook.com/profile.php?id=61573935817684"><img src="media/icon/Facebook.png" alt=""></a>
                <a href="https://www.youtube.com/@NorthSpiritVodka"><img src="media/icon/Youtube.png" alt=""></a>
            </div>
            <div class="footer-links">
                <a href="/privacy-policy.html">Privacy Policy</a>
                <div>|</div>
                <a href="#">Terms & conditions</a>
                <div>|</div>
                <a href="/contact.html">Contact</a>
                <div>|</div>
                <a href="/cocktails.html">Nutrition</a>
            </div>
        </div>
    </footer>
    <!-- footer-end section -->

    

     <!-- Slider Js Start -->
     <script
     src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
     integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
     crossorigin="anonymous"
     referrerpolicy="no-referrer"
   ></script>
   <script
     src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.5.2/jquery-migrate.min.js"
     integrity="sha512-BzvgYEoHXuphX+g7B/laemJGYFdrq4fTKEo+B3PurSxstMZtwu28FHkPKXu6dSBCzbUWqz/rMv755nUwhjQypw=="
     crossorigin="anonymous"
     referrerpolicy="no-referrer"
   ></script>
   <script
     src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
     integrity="sha512-HGOnQO9+SP1V92SrtZfjqxxtLmVzqZpjFFekvzZVWoiASSQgSr4cw9Kqd2+l8Llp4Gm0G8GIFJ4ddwZilcdb8A=="
     crossorigin="anonymous"
     referrerpolicy="no-referrer"
   ></script>
     <!-- Slider Js End -->

     <!-- Slider Setting Start -->
    <script>
        $(document).ready(function () {
          $(".your-class").slick({
            dots: false,
            infinite: true,
            arrows: false,
            autoplay:true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ],
          });
        });
      </script>
    <!-- Slider Setting End -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="js/script.js"></script>
    
    <?php wp_footer(); ?>
</body>

</html>