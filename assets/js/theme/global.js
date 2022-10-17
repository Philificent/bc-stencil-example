import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import carousel from './common/carousel';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import widget from './global/widget';

export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        loadingProgressBar();
        svgInjector();
        widget();
    }
}

// check page type for nested components
const pageType = document.getElementById('category-page-check');
if(pageType){
    const swatches = document.querySelectorAll('.card-swatch--section');
    for(const swatch of swatches)
    {
        swatch.style.display = "flex";
    }
}

// split meganav category list into two columns if more than 5 items
document.querySelectorAll('.navPages-item .navPage-subMenu-list').forEach(function(element) {
    if (element.children.length > 5) {
        element.classList.add('subMenu-list-twoColumn');
    }
});