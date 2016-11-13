
export function showElement(element) {
	$(element).css('display','inline')
}

export function removeScroll() {
	$('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
}

export function dimBackground() {
	$('#Blanket').css('display','inline')
}

export function hideElement(element) {
	$(element).css('display','none')
}

export function addScroll() {
	$('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
}

export function undimBackground() {
	$('#Blanket').css('display','none')
}

export function populateItemDisplayData(product) {
	$('#ItemDisplayHeader').text(product.name);
	// $('#ItemDisplayDescription').text('') No Description yet for products
	$('#ItemDisplayPricing').text('Price - ' + product.price);
}