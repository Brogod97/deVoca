<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

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
          <img
            src="${contextPath}/resources/assets/icon/search.svg"
            class="voca-search-img"
          />
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
</section>

<script src="${contextPath}/resources/js/common/sidebar.js"></script>
