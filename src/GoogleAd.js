import { useEffect } from 'react';

function GoogleAd() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="pub-2778970750683946" // Replace with your AdSense Client ID
      data-ad-slot="7467885487"    // Replace with your AdSense Slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default GoogleAd;