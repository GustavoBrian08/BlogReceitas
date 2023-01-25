<script setup lang="ts">

</script>

<template>
  <section id="hero" class="hero d-flex align-items-center section-bg">
    <div class="container">
      <div class="row justify-content-between gy-5">
        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up">Enjoy Your Healthy<br>Delicious Food</h2>
          <p data-aos="fade-up" data-aos-delay="100">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#book-a-table" class="btn-book-a-table">Book a Table</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src="@/assets/img/hero-img.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300">
        </div>
      </div>
    </div>
  </section><!-- End Hero Section -->

<main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>About Us</h2>
          <p>Learn More <span>About Us</span></p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-7 position-relative about-img" style="background-image: url(https://vemvoar.voeazul.com.br/wp-content/uploads/2018/07/culinaria-paulista-muita-coisa-boa-na-cidade-terra-da-garoa.jpeg); background-attachment: center; background-position: center;" data-aos="fade-up" data-aos-delay="150">
            <div class="call-us position-absolute">
              <h4>Book a Table</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div class="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i class="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i class="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>

              <div class="position-relative mt-4">
                <img src="@/assets/img/about-2.jpg" class="img-fluid" alt="">
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us section-bg">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="why-box">
              <h3>Why Choose Yummy?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div><!-- End Why Box -->

          <div class="col-lg-8 d-flex align-items-center">
            <div class="row gy-4">

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-clipboard-data"></i>
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div><!-- End Icon Box -->

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-gem"></i>
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div><!-- End Icon Box -->

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-inboxes"></i>
                  <h4>Labore consequatur incidid dolore</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div><!-- End Icon Box -->

            </div>
          </div>

        </div>

      </div>
    </section><!-- End Why Us Section -->

    <!-- ======= Stats Counter Section ======= -->
    <section id="stats-counter" class="stats-counter">
      <div class="container" data-aos="zoom-out">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p>Clients</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p>Projects</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
              <p>Workers</p>
            </div>
          </div><!-- End Stats Item -->

        </div>

      </div>
    </section><!-- End Stats Counter Section -->

    <!-- ======= Menu Section ======= -->
    <section id="menu" class="menu">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Menu</h2>
          <p>Check Our <span>Yummy Menu</span></p>
        </div>

        <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

          <li class="nav-item">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
              <h4>Starters</h4>
            </a>
          </li><!-- End tab nav item -->

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
              <h4>Breakfast</h4>
            </a><!-- End tab nav item -->
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
              <h4>Lunch</h4>
            </a>
          </li><!-- End tab nav item -->

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
              <h4>Dinner</h4>
            </a>
          </li><!-- End tab nav item -->

        </ul>

        <div class="tab-content" data-aos="fade-up" data-aos-delay="300">

          <div class="tab-pane fade active show" id="menu-starters">

            <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Starters</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-1.png" class="glightbox"><img src="@/assets/img/menu/menu-item-1.png" class="menu-img img-fluid" alt=""></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-2.png" class="glightbox"><img src="@/assets/img/menu/menu-item-2.png" class="menu-img img-fluid" alt=""></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-3.png" class="glightbox"><img src="@/assets/img/menu/menu-item-3.png" class="menu-img img-fluid" alt=""></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-4.png" class="glightbox"><img src="@/assets/img/menu/menu-item-4.png" class="menu-img img-fluid" alt=""></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-5.png" class="glightbox"><img src="@/assets/img/menu/menu-item-5.png" class="menu-img img-fluid" alt=""></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-6.png" class="glightbox"><img src="@/assets/img/menu/menu-item-6.png" class="menu-img img-fluid" alt=""></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div><!-- Menu Item -->

            </div>
          </div><!-- End Starter Menu Content -->

          <div class="tab-pane fade" id="menu-breakfast">

            <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Breakfast</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-1.png" class="glightbox"><img src="@/assets/img/menu/menu-item-1.png" class="menu-img img-fluid" alt=""></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-2.png" class="glightbox"><img src="@/assets/img/menu/menu-item-2.png" class="menu-img img-fluid" alt=""></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-3.png" class="glightbox"><img src="@/assets/img/menu/menu-item-3.png" class="menu-img img-fluid" alt=""></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-4.png" class="glightbox"><img src="@/assets/img/menu/menu-item-4.png" class="menu-img img-fluid" alt=""></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-5.png" class="glightbox"><img src="@/assets/img/menu/menu-item-5.png" class="menu-img img-fluid" alt=""></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-6.png" class="glightbox"><img src="@/assets/img/menu/menu-item-6.png" class="menu-img img-fluid" alt=""></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div><!-- Menu Item -->

            </div>
          </div><!-- End Breakfast Menu Content -->

          <div class="tab-pane fade" id="menu-lunch">

            <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Lunch</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-1.png" class="glightbox"><img src="@/assets/img/menu/menu-item-1.png" class="menu-img img-fluid" alt=""></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-2.png" class="glightbox"><img src="@/assets/img/menu/menu-item-2.png" class="menu-img img-fluid" alt=""></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-3.png" class="glightbox"><img src="@/assets/img/menu/menu-item-3.png" class="menu-img img-fluid" alt=""></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-4.png" class="glightbox"><img src="@/assets/img/menu/menu-item-4.png" class="menu-img img-fluid" alt=""></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-5.png" class="glightbox"><img src="@/assets/img/menu/menu-item-5.png" class="menu-img img-fluid" alt=""></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-6.png" class="glightbox"><img src="@/assets/img/menu/menu-item-6.png" class="menu-img img-fluid" alt=""></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div><!-- Menu Item -->

            </div>
          </div><!-- End Lunch Menu Content -->

          <div class="tab-pane fade" id="menu-dinner">

            <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Dinner</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-1.png" class="glightbox"><img src="@/assets/img/menu/menu-item-1.png" class="menu-img img-fluid" alt=""></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-2.png" class="glightbox"><img src="@/assets/img/menu/menu-item-2.png" class="menu-img img-fluid" alt=""></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-3.png" class="glightbox"><img src="@/assets/img/menu/menu-item-3.png" class="menu-img img-fluid" alt=""></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-4.png" class="glightbox"><img src="@/assets/img/menu/menu-item-4.png" class="menu-img img-fluid" alt=""></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-5.png" class="glightbox"><img src="@/assets/img/menu/menu-item-5.png" class="menu-img img-fluid" alt=""></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="@/assets/img/menu/menu-item-6.png" class="glightbox"><img src="@/assets/img/menu/menu-item-6.png" class="menu-img img-fluid" alt=""></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div><!-- Menu Item -->

            </div>
          </div><!-- End Dinner Menu Content -->

        </div>

      </div>
    </section><!-- End Menu Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Testimonials</h2>
          <p>What Are They <span>Saying About Us</span></p>
        </div>

        <div class="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="@/assets/img/testimonials/testimonials-1.jpg" class="img-fluid testimonial-img" alt="">
                  </div>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="@/assets/img/testimonials/testimonials-2.jpg" class="img-fluid testimonial-img" alt="">
                  </div>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="assets/img/testimonials/testimonials-3.jpg" class="img-fluid testimonial-img" alt="">
                  </div>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="assets/img/testimonials/testimonials-4.jpg" class="img-fluid testimonial-img" alt="">
                  </div>
                </div>
              </div>
            </div><!-- End testimonial item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->

    <!-- ======= Events Section ======= -->
    <section id="events" class="events">
      <div class="container-fluid" data-aos="fade-up">

        <div class="section-header">
          <h2>Events</h2>
          <p>Share <span>Your Moments</span> In Our Restaurant</p>
        </div>

        <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide event-item d-flex flex-column justify-content-end" style="background-image: url(data:image/jpeg;base64,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)">
              <h3>Custom Parties</h3>
              <div class="price align-self-start">$99</div>
              <p class="description">
                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
              </p>
            </div><!-- End Event item -->

            <div class="swiper-slide event-item d-flex flex-column justify-content-end" style="background-image: url(data:image/jpeg;base64,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)">
              <h3>Private Parties</h3>
              <div class="price align-self-start">$289</div>
              <p class="description">
                In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
              </p>
            </div><!-- End Event item -->

            <div class="swiper-slide event-item d-flex flex-column justify-content-end" style="background-image: url(data:image/jpeg;base64,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)">
              <h3>Birthday Parties</h3>
              <div class="price align-self-start">$499</div>
              <p class="description">
                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
              </p>
            </div><!-- End Event item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Events Section -->

    <!-- ======= Chefs Section ======= -->
    <section id="chefs" class="chefs section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Chefs</h2>
          <p>Our <span>Proffesional</span> Chefs</p>
        </div>

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="chef-member">
              <div class="member-img">
                <img src="@/assets/img/chefs/chefs-1.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Master Chef</span>
                <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
              </div>
            </div>
          </div><!-- End Chefs Member -->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="chef-member">
              <div class="member-img">
                <img src="@/assets/img/chefs/chefs-2.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Patissier</span>
                <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
              </div>
            </div>
          </div><!-- End Chefs Member -->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="chef-member">
              <div class="member-img">
                <img src="@/assets/img/chefs/chefs-3.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>Cook</span>
                <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
              </div>
            </div>
          </div><!-- End Chefs Member -->

        </div>

      </div>
    </section><!-- End Chefs Section -->

    <!-- ======= Book A Table Section ======= -->
    <section id="book-a-table" class="book-a-table">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Book A Table</h2>
          <p>Book <span>Your Stay</span> With Us</p>
        </div>

        <div class="row g-0">

          <div class="col-lg-4 reservation-img" style="background-image: url(https://claudia.abril.com.br/wp-content/uploads/2020/02/pizza-quatro-queijos-comitc3aa-umami.jpg);" data-aos="zoom-out" data-aos-delay="200"></div>

          <div class="col-lg-8 d-flex align-items-center reservation-form-bg">
            <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">
              <div class="row gy-4">
                <div class="col-lg-4 col-md-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="text" name="date" class="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="text" class="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="number" class="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars">
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Book a Table</button></div>
            </form>
          </div><!-- End Reservation Form -->

        </div>

      </div>
    </section><!-- End Book A Table Section -->

    <!-- ======= Gallery Section ======= -->
    <section id="gallery" class="gallery section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>gallery</h2>
          <p>Check <span>Our Gallery</span></p>
        </div>

        <div class="gallery-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="@/assets/img/gallery/gallery-1.jpg"><img src="@/assets/img/gallery/gallery-1.jpg" class="img-fluid" alt=""></a></div>
            <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="@/assets/img/gallery/gallery-2.jpg"><img src="@/assets/img/gallery/gallery-2.jpg" class="img-fluid" alt=""></a></div>
            <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="@/assets/img/gallery/gallery-3.jpg"><img src="@/assets/img/gallery/gallery-3.jpg" class="img-fluid" alt=""></a></div>
            <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="@/assets/img/gallery/gallery-4.jpg"><img src="@/assets/img/gallery/gallery-4.jpg" class="img-fluid" alt=""></a></div>
            <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="@/assets/img/gallery/gallery-5.jpg"><img src="@/assets/img/gallery/gallery-5.jpg" class="img-fluid" alt=""></a></div>
            <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="@/assets/img/gallery/gallery-6.jpg"><img src="@/assets/img/gallery/gallery-6.jpg" class="img-fluid" alt=""></a></div>
            <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="@/assets/img/gallery/gallery-7.jpg"><img src="@/assets/img/gallery/gallery-7.jpg" class="img-fluid" alt=""></a></div>
            <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="@/assets/img/gallery/gallery-8.jpg"><img src="@/assets/img/gallery/gallery-8.jpg" class="img-fluid" alt=""></a></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Gallery Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Contact</h2>
          <p>Need Help? <span>Contact Us</span></p>
        </div>

        <div class="mb-3">
          <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div><!-- End Google Maps -->

        <div class="row gy-4">

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-map flex-shrink-0"></i>
              <div>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item d-flex align-items-center">
              <i class="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-share flex-shrink-0"></i>
              <div>
                <h3>Opening Hours</h3>
                <div><strong>Mon-Sat:</strong> 11AM - 23PM;
                  <strong>Sunday:</strong> Closed
                </div>
              </div>
            </div>
          </div><!-- End Info Item -->

        </div>

        <form action="forms/contact.php" method="post" role="form" class="php-email-form p-3 p-md-4">
          <div class="row">
            <div class="col-xl-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
            </div>
            <div class="col-xl-6 form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
            </div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Send Message</button></div>
        </form>
        <!--End Contact Form -->

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->
</template>
