import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <h2>اتصل بنا</h2>
      <p>نحن هنا لخدمتك! إذا كان لديك أي استفسار أو طلب أو ترغب في الحصول على المزيد من المعلومات حول خدماتنا وأطباقنا المتوسطية الشهية، لا تتردد في التواصل معنا. فريقنا سيكون سعيدًا بمساعدتك.</p>
      
      <div className="contact-details">
        <h3>طرق التواصل:</h3>
        <p><strong>العنوان:</strong>   123 شارع المأكولات، كازابلانكا  .casablanca.</p>
        <p><strong>الهاتف:</strong>    789 456 123  212 +</p>
        <p><strong>البريد الإلكتروني:</strong> info@restaurant.com</p>
        <p><strong>ساعات العمل:</strong></p>
        <ul>
          <li>الإثنين - الجمعة: 12:00 ظهرًا - 10:00 مساءً</li>
          <li>السبت - الأحد: 1:00 ظهرًا - 11:00 مساءً</li>
        </ul>
      </div>

      <div className="social-media">
  <h3>تابعنا على وسائل التواصل الاجتماعي:</h3>
  <p>ابقَ على اطلاع بأحدث عروضنا وفعالياتنا من خلال متابعة صفحاتنا على:</p>
  <div className="social-icons">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src='/images/fac.png' alt="Facebook" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src='/images/you.png' alt="Facebook" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src='/images/wha.png' alt="Facebook" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/images/inst.png" alt="Instagram" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="/images/tw.png" alt="Twitter" />
    </a>
  </div>
</div>
    </div>
  );
};

export default ContactUs;
