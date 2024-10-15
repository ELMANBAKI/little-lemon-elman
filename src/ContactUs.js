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
        <p><strong>الهاتف:</strong> +212 123 456 789</p>
        <p><strong>البريد الإلكتروني:</strong> info@restaurant.com</p>
        <p><strong>ساعات العمل:</strong></p>
        <ul>
          <li>الإثنين - الجمعة: 12:00 ظهرًا - 10:00 مساءً</li>
          <li>السبت - الأحد: 1:00 ظهرًا - 11:00 مساءً</li>
        </ul>
      </div>

      <div className="social-media">
        <h3>تابعنا على وسائل التواصل الاجتماعي:</h3>
        <p>ابقَ على اطلاع بأحدث عروضنا وفعالياتنا من خلال متابعة صفحاتنا على فيسبوك وإنستغرام.</p>
      </div>
    </div>
  );
};

export default ContactUs;
