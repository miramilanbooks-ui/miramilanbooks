(() => {
  const MEASUREMENT_ID = 'G-523008WXW7';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(tag);

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;

    const variant = document.body?.dataset?.campaignVariant || '';
    const href = link.href || '';

    if (href.includes('free-classroom-sample.pdf')) {
      gtag('event', 'sample_click', {
        campaign_variant: variant,
        link_url: href
      });
    }

    if (href.includes('amazon.com')) {
      gtag('event', 'amazon_click', {
        campaign_variant: variant,
        link_url: href
      });
    }
  });
})();
