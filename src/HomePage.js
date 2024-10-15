import React from "react";
import CallToAction from "./CallToAction";
 
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="overlay">
          <h1>مرحبا بكم في مطعم <span>Little Lemon</span></h1>
          <p>اكتشف روعة المأكولات المتوسطية في قلب الدار البيضاء، حيث تمتزج نكهات البحر الأبيض المتوسط العريقة مع لمسات عصرية مميزة. نقدم لكم تجربة طهي استثنائية، تجمع بين الطزاجة، والجودة، والتنوع. سواء كنت من عشاق الأسماك الطازجة، أو المقبلات الشهية، أو الأطباق النباتية الغنية بالنكهات، ستجد في مطعمنا ما يرضي ذوقك. انغمس في أجواء دافئة ومريحة، واستمتع بأمسية لا تُنسى مع الأهل والأصدقاء</p>
          <CallToAction />
          
        </div>
        
      </header>
    </div>
  );
};

export default HomePage;
