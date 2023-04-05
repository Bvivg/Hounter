const thumbnails = document.querySelectorAll('.slider-thumbnails img');
const mainImage = document.querySelector('.slider-main img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const index = thumbnail.getAttribute('data-index');
    const imagePath = `./assets/img/img/room${index}.png`;

    mainImage.setAttribute('src', imagePath);
  });
});

function printText1() {
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = myHtmlBlock1;
};
const myHtmlBlock1 = `
    <div class="house-sell-block">
      <span class="house-sell-block-author-pc house-sell-block-author">
        <img src="./assets/img/img/DianneRussell.png" alt="">
        Dianne Russell
      </span>
      <p class="house-sell-block-title">
        The things we need to check when we want to buy a house
      </p>
      <p class="house-sell-block-desc">Want to buy a house but are unsure about what we should know, here I
        will try to explain what we should know and check
        when we want to buy a house
      </p>
      <span class="house-sell-block-date house-sell-block-date-main">
       <svg>
                  <use href="./assets/img/icons/svg-sprites.svg#clock"></use>
                </svg>
      4 min read | 25 Apr 2021
      </span>
    </div>
`;

function printText2() {
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = myHtmlBlock2;
};
const myHtmlBlock2 = `
    <div class="house-sell-block">
      <span class="house-sell-block-author-pc house-sell-block-author">
        <img src="./assets/img/img/CourtneyHenry.png" alt="">
        Courtney Henry
      </span>
      <p class="house-sell-block-title">
        7 Ways to distinguish the quality of the house we want to buy
      </p>
      <p class="house-sell-block-desc">Want to buy a house but are unsure about what we should know, here I
        will try to explain what we should know and check
        when we want to buy a house
      </p>
      <span class="house-sell-block-date house-sell-block-date-main">
         <svg>
                  <use href="./assets/img/icons/svg-sprites.svg#clock"></use>
                </svg>
        6 min read | 24 Apr 2021
      </span>
    </div>
`;

function printText3() {
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = myHtmlBlock3;
};
const myHtmlBlock3 = `
    <div class="house-sell-block">
      <span class="house-sell-block-author-pc house-sell-block-author">
        <img src="./assets/img/img/DarleneRobertson.png" alt="">
        Darlene Robertson
      </span>
      <p class="house-sell-block-title">
        The best way to know the quality of the house we want to buy
      </p>
      <p class="house-sell-block-desc">Want to buy a house but are unsure about what we should know, here I
        will try to explain what we should know and check
        when we want to buy a house
      </p>
      <span class="house-sell-block-date house-sell-block-date-main">
         <svg>
                  <use href="./assets/img/icons/svg-sprites.svg#clock"></use>
                </svg>
        2 min read | 24 Apr 2021
      </span>
    </div>
`;

function printText4() {
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = myHtmlBlock4;
};
const myHtmlBlock4 = `
  <div class="house-sell-block">
    <span class="house-sell-block-author-pc house-sell-block-author">
      <img src="./assets/img/img/CameronWilliamson.png" alt="">
      Cameron Williamson
    </span>
    <p class="house-sell-block-title">
      12 Things to know before buying a house
    </p>
    <p class="house-sell-block-desc">Want to buy a house but are unsure about what we should know, here I
      will try to explain what we should know and check
      when we want to buy a house
    </p>
    <span class="house-sell-block-date house-sell-block-date-main">
    <svg>
      <use href="./assets/img/icons/svg-sprites.svg#clock"></use>
    </svg>
    8 min read | 25 Apr 2021
    </span>
  </div>
`;


function outputBlock1() {
  var outputElement = document.getElementById("outputBlock");
  outputElement.innerHTML = swiperWrapperBox1;
};
const swiperWrapperBox1 = `
   <div class="swiper mySwiper" id="swiperWrapperBox1">
     <div class="swiper-wrapper">

            
          
            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/roselands.png" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Roselands House</p>
                  <p class="house-list-content-card-info-price">$ 35.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/DianneRussell.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Dianne Russell</p>
                      <span>Manchester, Kentucky</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/woodlandside.png" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Woodlandside</p>
                  <p class="house-list-content-card-info-price">$ 20.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/RobertFox.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Robert Fox</p>
                      <span>Dr. San Jose, South Dakota</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/theoldlighthouse.png" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">The Old Lighthouse</p>
                  <p class="house-list-content-card-info-price">$ 44.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/RonaldRichards.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Ronald Richards</p>
                      <span>Santa Ana, Illinois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/cosmoshouse.png" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Roselands House</p>
                  <p class="house-list-content-card-info-price">$ 22.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/JennyWilson.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Jenny Wilson</p>
                      <span>Preston Rd. Inglewood, Maine 98380</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </div>
`;
function outputBlock2() {
  var outputElement = document.getElementById("outputBlock");
  outputElement.innerHTML = swiperWrapperBox2;
};
const swiperWrapperBox2 = `
   <div class="swiper mySwiper" id="swiperWrapperBox2">
     <div class="swiper-wrapper" >

            
         

            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/villa2.jpg" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Woodlandside</p>
                  <p class="house-list-content-card-info-price">$ 20.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/RobertFox.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Robert Fox</p>
                      <span>Dr. San Jose, South Dakota</span>
                    </div>
                  </div>
                </div>
              </div>


            </div> 
            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/villa1.jpeg" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Roselands House</p>
                  <p class="house-list-content-card-info-price">$ 35.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/DianneRussell.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Dianne Russell</p>
                      <span>Manchester, Kentucky</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/villa4.jpeg" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Roselands House</p>
                  <p class="house-list-content-card-info-price">$ 22.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/JennyWilson.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Jenny Wilson</p>
                      <span>Preston Rd. Inglewood, Maine 98380</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/villa3.jpeg" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">The Old Lighthouse</p>
                  <p class="house-list-content-card-info-price">$ 44.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/RonaldRichards.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Ronald Richards</p>
                      <span>Santa Ana, Illinois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          

          </div>
</div>
`;
function outputBlock3() {
  var outputElement = document.getElementById("outputBlock");
  outputElement.innerHTML = swiperWrapperBox3;
};
const swiperWrapperBox3 = `
   <div class="swiper mySwiper" id="swiperWrapperBox3">
       <div class="swiper-wrapper">

            
          
           

            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/apartament2.jpeg" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Woodlandside</p>
                  <p class="house-list-content-card-info-price">$ 20.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/RobertFox.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Robert Fox</p>
                      <span>Dr. San Jose, South Dakota</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
 <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/apartament4.jpg" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Roselands House</p>
                  <p class="house-list-content-card-info-price">$ 22.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/JennyWilson.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Jenny Wilson</p>
                      <span>Preston Rd. Inglewood, Maine 98380</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/apartament3.jpg" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">The Old Lighthouse</p>
                  <p class="house-list-content-card-info-price">$ 44.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/RonaldRichards.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Ronald Richards</p>
                      <span>Santa Ana, Illinois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="house-list-content-card">
                <div class="house-list-content-card-img">
                  <img class="card-image" src="./assets/img/img/apartament1.jpg" alt="">

                </div>
                <div class="house-list-content-card-info">
                  <p class="house-list-content-card-info-title">Roselands House</p>
                  <p class="house-list-content-card-info-price">$ 35.000.000</p>
                  <div class="house-list-content-card-info-author">
                    <img src="./assets/img/img/DianneRussell.png" alt="">
                    <div class="house-list-content-card-info-author-block">
                      <p>Dianne Russell</p>
                      <span>Manchester, Kentucky</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
  </div>
          `;
