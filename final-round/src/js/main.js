import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";

const elements = {
  slideMenuButtons: Array.from(
    document.getElementsByClassName("sevices__slide-menu-list-button")
  ),
  navLinks: Array.from(
    document.getElementsByClassName("modal__nav-menu-list-item")
  ),
  langLinks: Array.from(
    document.getElementsByClassName("modal__contacts-lang-list-item")
  ),
  textButtons: Array.from(
    document.getElementsByClassName("services__info-button")
  ),
  brandButtons: Array.from(
    document.getElementsByClassName("slider__info-button")
  ),
  hiddenText: Array.from(
    document.getElementsByClassName("services__info-text-more")
  ),
  hiddenBrands: Array.from(
    document.getElementsByClassName("slider__slides-slide_tablethide")
  ),
  repairButtons: Array.from(
    document.getElementsByClassName("slider-repair__info-button")
  ),
  hiddenRepair: Array.from(
    document.getElementsByClassName("slider-repair__slides-slide_hidden")
  ),
  modalMainOpenButton: Array.from(
    document.getElementsByClassName("header__menu-button")
  ),
  modalMainWindowElement: Array.from(
    document.getElementsByClassName("modal-main")
  )[0],
  modalMainCloseButton: Array.from(
    document.getElementsByClassName("modal-main__close-button")
  ),
  modalCallbackOpenButton: Array.from(
    document.getElementsByClassName("modal-callback__button")
  ),
  modalCallbackWindowElement: Array.from(
    document.getElementsByClassName("modal-callback")
  )[0],
  modalCallbackCloseButton: Array.from(
    document.getElementsByClassName("modal-callback__close-button")
  ),
  modalContactsOpenButton: Array.from(
    document.getElementsByClassName("modal-contacts__button")
  ),
  modalContactsWindowElement: Array.from(
    document.getElementsByClassName("modal-contacts")
  )[0],
  modalContactsCloseButton: Array.from(
    document.getElementsByClassName("modal-contacts__close-button")
  ),
};

// навешивает класс на нажатую кнопку

let activeClassAdder = function (arr, activeClass) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
      arr.map((e) => {
        if (e.classList.contains(activeClass)) e.classList.remove(activeClass);
      });
      this.classList.add(activeClass);
    });
  }
};

// прячет контент тоггля классы

let contentHidder = function (
  array,
  hiddenContentArray,
  className,
  activeClassName
) {
  array.map((e) => {
    e.addEventListener("click", () => {
      hiddenContentArray.map((e) => {
        e.classList.toggle(className);
        e.classList.toggle(activeClassName);
      });
    });
  });
};

// навешивает классы на модалки

let modalClass = function (
  button,
  modal,
  classNameVisible,
  classNameNotVisible
) {
  button.map((e) => {
    e.addEventListener("click", () => {
      modal.classList.toggle(classNameVisible);
      modal.classList.toggle(classNameNotVisible);
    });
  });
};

modalClass(
  elements.modalMainOpenButton,
  elements.modalMainWindowElement,
  "modal__visible",
  "modal__not-visible"
);
modalClass(
  elements.modalMainCloseButton,
  elements.modalMainWindowElement,
  "modal__visible",
  "modal__not-visible"
);
modalClass(
  elements.modalCallbackOpenButton,
  elements.modalCallbackWindowElement,
  "modal__visible",
  "modal__not-visible"
);
modalClass(
  elements.modalCallbackCloseButton,
  elements.modalCallbackWindowElement,
  "modal__visible",
  "modal__not-visible"
);
modalClass(
  elements.modalContactsOpenButton,
  elements.modalContactsWindowElement,
  "modal__visible",
  "modal__not-visible"
);
modalClass(
  elements.modalContactsCloseButton,
  elements.modalContactsWindowElement,
  "modal__visible",
  "modal__not-visible"
);

activeClassAdder(
  elements.slideMenuButtons,
  "sevices__slide-menu-list-button_active"
);
activeClassAdder(elements.navLinks, "modal__active");
activeClassAdder(elements.langLinks, "modal__contacts-lang-list-item_active");
activeClassAdder(elements.textButtons, "services__info-button_hidden");
activeClassAdder(elements.brandButtons, "slider__info-button_hidden");
activeClassAdder(elements.repairButtons, "slider-repair__info-button_hidden");

contentHidder(
  elements.textButtons,
  elements.hiddenText,
  "services__info-text_hidden",
  "services__info-text_active"
);
contentHidder(
  elements.brandButtons,
  elements.hiddenBrands,
  "slider__slides-slide_tablethide",
  "slider__slides-slide_active"
);

contentHidder(
  elements.repairButtons,
  elements.hiddenRepair,
  "slider-repair__slides-slide_hidden",
  "slider-repair__slides-slide_active"
);

//  swiper lib
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const repairSwiper = new Swiper(".repairSwiper", {
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-repair-pagination",
    clickable: true,
  },
});

const pricesSwiper = new Swiper(".pricesSwiper", {
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-prices-pagination",
    clickable: true,
  },
});
