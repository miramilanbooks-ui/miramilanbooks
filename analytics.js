(() => {
  const MEASUREMENT_ID = 'G-523008WXW7';
  const CLASSROOM_SAMPLE_URL = '/free-classroom-sample.pdf.pdf';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(tag);

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);

  const bookFromAmazonUrl = (href) => {
    const books = [
      ['8690525009', 'Wild Animals'],
      ['8690525017', 'Domestic Animals'],
      ['B0CGL25866', 'Sea Animals'],
      ['8690525033', 'Insects & Bugs']
    ];
    const match = books.find(([id]) => href.includes(id));
    if (match) return match[1];
    if (href.includes('B0CFTQTJS8')) return 'It’s Guessing Time! series';
    return 'Amazon link';
  };

  const socialPlatform = (href) => {
    if (href.includes('youtube.com') || href.includes('youtu.be')) return 'YouTube';
    if (href.includes('tiktok.com')) return 'TikTok';
    if (href.includes('facebook.com')) return 'Facebook';
    if (href.includes('instagram.com')) return 'Instagram';
    return '';
  };

  document.addEventListener('click', (event) => {
    const pathname = window.location.pathname;
    const variant = document.body?.dataset?.campaignVariant ||
      (pathname.includes('/classroom-a') ? 'A' :
       pathname.includes('/classroom-b') ? 'B' :
       pathname.includes('/classroom-c') ? 'C' : 'Home');

    const sampleButton = event.target.closest('[data-sample-open]');
    if (sampleButton) {
      const absolutePdfUrl = new URL(CLASSROOM_SAMPLE_URL, window.location.origin).href;
      const popup = window.open('about:blank', '_blank');
      if (popup) popup.opener = null;

      let opened = false;
      const openSample = () => {
        if (opened) return;
        opened = true;
        if (popup && !popup.closed) {
          popup.location.replace(absolutePdfUrl);
        } else {
          window.location.assign(absolutePdfUrl);
        }
      };

      gtag('event', 'sample_click', {
        campaign_variant: variant,
        page_path: pathname,
        link_url: absolutePdfUrl,
        download_location: sampleButton.dataset.downloadLocation || 'unknown',
        interaction_trusted: event.isTrusted ? 'yes' : 'no',
        event_callback: openSample,
        event_timeout: 600
      });

      setTimeout(openSample, 250);
      return;
    }

    const link = event.target.closest('a');
    if (!link) return;

    const href = link.href || '';
    const common = {
      campaign_variant: variant,
      page_path: pathname,
      link_url: href
    };

    if (href.includes('amazon.com')) {
      gtag('event', 'amazon_click', {
        ...common,
        book_name: bookFromAmazonUrl(href)
      });
    }

    const platform = socialPlatform(href);
    if (platform) {
      gtag('event', 'social_click', {
        ...common,
        social_platform: platform
      });
    }

    if (href.startsWith('mailto:')) {
      gtag('event', 'email_click', common);
    }
  });
})();
