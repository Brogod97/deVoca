<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/src/main/webapp/resources/css/main.css" />
    <link
      rel="stylesheet"
      href="/src/main/webapp/resources/css/word-category.css"
    />
    <link
      rel="stylesheet"
      href="/src/main/webapp/resources/css/common/template-2.css"
    />
    <link rel="stylesheet" href="/src/main/webapp/resources/css/loading.css" />

    <script
      src="https://code.jquery.com/jquery-3.6.0.js"
      integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
      crossorigin="anonymous"
    ></script>

    <script
      src="https://kit.fontawesome.com/5d7e6e936d.js"
      crossorigin="anonymous"
    ></script>

    <!-- 태그추가 부분 -->
    <script src="https://unpkg.com/@yaireo/tagify"></script>
    <!-- 폴리필 (구버젼 브라우저 지원) -->
    <script src="https://unpkg.com/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
    <link
      href="https://unpkg.com/@yaireo/tagify/dist/tagify.css"
      rel="stylesheet"
      type="text/css"
    />

    <title>단어장 조회 추가</title>
  </head>
  <body>
    <main>
      <!-- 헤더 -->
      <header>
        <!-- 로고 -->
        <div>
          <a href="mainPage.html">
            <img src="/assets/deVoca-logo.svg" />
          </a>
        </div>
        <!-- 공백 -->
        <div></div>
        <!-- 헤더 우측 영역 -->
        <div>
          <!-- 구글-검색창 -->
          <div class="google-search">
            <fieldset>
              <img src="/assets/google-logo.png" class="google-img" />
              <input
                type="search"
                id="google-search-input"
                name="google-search-input"
                autocomplete="off"
                placeholder="Google Search"
              />
            </fieldset>
            <button
              type="button"
              class="google-search-btn"
              id="google-search-btn"
            >
              <img src="/assets/search.svg" class="google-search-img" />
            </button>
          </div>
          <!-- FAQ / 로그인 / 회원가입 -->
          <div class="faq-login-signup">
            <a href="#">FAQ</a>
            <a href="#">로그인</a>
            <a href="/pages/signup.html">
              <button class="btn-primary-fill">회원가입</button>
            </a>
          </div>
        </div>
      </header>

      <!-- 바디 -->
      <!-- nav + sidebar 컨테이너 -->
      <section class="container">
        <!-- 로딩 -->
        <div class="wrap">
          <div class="loading">
            <div class="bounceball"></div>
            <div class="text">NOW LOADING</div>
          </div>
        </div>

        <!-- nav바 -->
        <nav class="nav-bar">
          <section>
            <a href="member-profile.html">
              <img id="profile-icon" src="/assets/profile.svg" />
            </a>
            <a href="word-category.html">
              <img src="/assets/voca.svg" />
            </a>
            <a href="quiz-main.html">
              <img src="/assets/quiz.svg" />
            </a>
            <a href="#">
              <img src="/assets/shared.svg" />
            </a>
          </section>
          <section>
            <a href="#">
              <img src="/assets/logout.svg" />
            </a>
          </section>
        </nav>

        <!-- 서치&카테고리 -->
        <section class="side-bar">
          <!-- 단어장 서치바 -->
          <section class="sidebar-search-area">
            <div class="sidebar-search">
              <form action="#" name="voca-search-form">
                <input
                  type="search"
                  id="voca-search-input"
                  name="voca-search-input"
                  placeholder="검색어 입력"
                  autocomplete="off"
                />
                <button>
                  <img src="/assets/search.svg" class="voca-search-img" />
                </button>
              </form>
            </div>
            <!-- 선1 -->
            <div class="line"></div>
          </section>
          <!-- 카테고리 -->
          <section class="category-container">
            <div class="category-header">
              <h3>카테고리</h3>
              <button id="category-btn" type="button">
                <i class="ic-menu-dot"></i>
              </button>
              <!-- 카테고리 메뉴 모달 -->
              <div id="category-menu-wrapper" class="invisible">
                <div id="category-menu-overlay"></div>
                <div class="category-menu-content">
                  <div class="category-add">추가</div>
                  <div class="category-edit">편집</div>
                </div>
              </div>
            </div>

            <div class="category-list">
              <ul></ul>
            </div>
          </section>

          <!-- 태그 -->
          <!-- 선2 -->
          <div class="line"></div>
          <section class="category-footer">
            <div class="tag-area">
              <button class="tag">
                <a href="#">#DB</a>
              </button>
              <button class="tag">
                <a href="#">#Python</a>
              </button>
              <button class="tag">
                <a href="#">#CSS</a>
              </button>
              <button class="tag">
                <a href="#">#Java</a>
              </button>
              <button class="tag">
                <a href="#">#JavaScript</a>
              </button>
              <button class="tag">
                <a href="#">#JavaScript</a>
              </button>
              <button class="tag">
                <a href="#">#JavaScript</a>
              </button>
              <button class="tag">
                <a href="#">#JavaScript</a>
              </button>
            </div>
          </section>
        </section>
      </section>
    </main>

    <!-- 메인 콘텐츠 영역 -->
    <section class="main-content-area"></section>
    <!-- 헤더 그림자용 -->
    <aside class="header-shadow"></aside>

    <script src="/js/mainPage.js"></script>
    <script src="/js/google-search.js"></script>
    <script src="/common/template-2.js"></script>
  </body>
</html>
