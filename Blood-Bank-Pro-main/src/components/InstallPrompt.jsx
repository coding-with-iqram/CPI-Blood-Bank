import React, { useEffect, useState } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    deferredPrompt && (
      <button
  onClick={handleInstallClick}
  style={{
    padding: '6px 14px',
    background: '#d90429',
    color: '#fff',
    border: '1px solid #ffffff',  
    borderRadius: '16px',
    cursor: 'pointer'
  }}
>
  Download App
</button>
    )
  );
};

export default InstallPrompt;
