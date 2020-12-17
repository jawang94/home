import { FC, useEffect } from 'react';

const Calendly: FC = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, [])

  
    return (
      <div>
        <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/wangjason?hide_landing_page_details=1&hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '480px' }} />
        </div>
      </div>
    );
}

export default Calendly