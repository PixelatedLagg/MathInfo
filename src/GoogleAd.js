import { useEffect } from 'react';

function GoogleAd() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="YOUR-AD-CLIENT-ID" // Replace with your AdSense Client ID
      data-ad-slot="YOUR-AD-SLOT-ID"    // Replace with your AdSense Slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default GoogleAd;