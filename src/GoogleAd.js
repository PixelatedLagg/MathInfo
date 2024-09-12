import { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    // Load the Google AdSense script once the component mounts
    const loadAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };
    
    loadAds();
  }, []); // Empty array ensures it only runs once on mount

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2778970750683946" // Replace with your ad-client
        data-ad-slot="7467885487" // Replace with your ad-slot
        data-ad-format="auto"
      />
    </div>
  );
};

export default GoogleAd;