import"../../node_modules/focus-visible/dist/focus-visible";import"../scss/main.scss";import"../index.html";var elements={slideMenuButtons:Array.from(document.getElementsByClassName("sevices__slide-menu-list-button")),navLinks:Array.from(document.getElementsByClassName("modal__nav-menu-list-item")),langLinks:Array.from(document.getElementsByClassName("modal__contacts-lang-list-item")),textButtons:Array.from(document.getElementsByClassName("services__info-button")),brandButtons:Array.from(document.getElementsByClassName("slider__info-button")),hiddenText:Array.from(document.getElementsByClassName("services__info-text-more")),hiddenBrands:Array.from(document.getElementsByClassName("slider__slides-slide_tablethide")),repairButtons:Array.from(document.getElementsByClassName("slider-repair__info-button")),hiddenRepair:Array.from(document.getElementsByClassName("slider-repair__slides-slide_hidden")),modalMainOpenButton:Array.from(document.getElementsByClassName("header__menu-button")),modalMainWindowElement:Array.from(document.getElementsByClassName("modal-main"))[0],modalMainCloseButton:Array.from(document.getElementsByClassName("modal-main__close-button")),modalCallbackOpenButton:Array.from(document.getElementsByClassName("modal-callback__button")),modalCallbackWindowElement:Array.from(document.getElementsByClassName("modal-callback"))[0],modalCallbackCloseButton:Array.from(document.getElementsByClassName("modal-callback__close-button")),modalContactsOpenButton:Array.from(document.getElementsByClassName("modal-contacts__button")),modalContactsWindowElement:Array.from(document.getElementsByClassName("modal-contacts"))[0],modalContactsCloseButton:Array.from(document.getElementsByClassName("modal-contacts__close-button"))},activeClassAdder=function(e,t){for(var s=0;s<e.length;s++)e[s].addEventListener("click",(function(){e.map((function(e){e.classList.contains(t)&&e.classList.remove(t)})),this.classList.add(t)}))},contentHidder=function(e,t,s,l){e.map((function(e){e.addEventListener("click",(function(){t.map((function(e){e.classList.toggle(s),e.classList.toggle(l)}))}))}))},modalClass=function(e,t,s,l){e.map((function(e){e.addEventListener("click",(function(){t.classList.toggle(s),t.classList.toggle(l)}))}))};modalClass(elements.modalMainOpenButton,elements.modalMainWindowElement,"modal__visible","modal__not-visible"),modalClass(elements.modalMainCloseButton,elements.modalMainWindowElement,"modal__visible","modal__not-visible"),modalClass(elements.modalCallbackOpenButton,elements.modalCallbackWindowElement,"modal__visible","modal__not-visible"),modalClass(elements.modalCallbackCloseButton,elements.modalCallbackWindowElement,"modal__visible","modal__not-visible"),modalClass(elements.modalContactsOpenButton,elements.modalContactsWindowElement,"modal__visible","modal__not-visible"),modalClass(elements.modalContactsCloseButton,elements.modalContactsWindowElement,"modal__visible","modal__not-visible"),activeClassAdder(elements.slideMenuButtons,"sevices__slide-menu-list-button_active"),activeClassAdder(elements.navLinks,"modal__active"),activeClassAdder(elements.langLinks,"modal__contacts-lang-list-item_active"),activeClassAdder(elements.textButtons,"services__info-button_hidden"),activeClassAdder(elements.brandButtons,"slider__info-button_hidden"),activeClassAdder(elements.repairButtons,"slider-repair__info-button_hidden"),contentHidder(elements.textButtons,elements.hiddenText,"services__info-text_hidden","services__info-text_active"),contentHidder(elements.brandButtons,elements.hiddenBrands,"slider__slides-slide_tablethide","slider__slides-slide_active"),contentHidder(elements.repairButtons,elements.hiddenRepair,"slider-repair__slides-slide_hidden","slider-repair__slides-slide_active");var swiper=new Swiper(".mySwiper",{slidesPerView:"auto",freeMode:!0,watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0}}),repairSwiper=new Swiper(".repairSwiper",{slidesPerView:"auto",freeMode:!0,watchSlidesProgress:!0,pagination:{el:".swiper-repair-pagination",clickable:!0}}),pricesSwiper=new Swiper(".pricesSwiper",{slidesPerView:"auto",freeMode:!0,watchSlidesProgress:!0,pagination:{el:".swiper-prices-pagination",clickable:!0}});