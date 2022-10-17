import utils from '@bigcommerce/stencil-utils';

export default function (context) {
  
  //
	// Home Hero  Widget
	// -----------------------------------------------------------------------------
    document.querySelectorAll('.home-hero-product').forEach(el => {
      const dataId = el.getAttribute('data-prod-id');
      let displayPrice = el.querySelector('h2');
      // update product price based on customer group
      utils.api.product.getById(dataId, { template: 'products/dynamic-product-widget' }, (err, response) => {
        if (err) return false;
        
        let groupPrice = $(response).find('.widget-prod-price').text(); // jQuery crutch to save time
        if(groupPrice != ''){
          displayPrice.innerText = '$' + parseFloat(groupPrice).toFixed(2);
          displayPrice.style.visibility = 'visible';
        }
        
      });
  });

}