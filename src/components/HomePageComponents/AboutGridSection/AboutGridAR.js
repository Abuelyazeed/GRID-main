import React from "react";
import bannerimg from "../../../assets/images/sec2-image.webp";

const AboutGridAr = () => {
  return (
    <div className="row about-grid g-0">
      <img
        className="col-xl-6 grid-column"
        src={bannerimg}
        alt="Section 2"
      ></img>
      <div className="col-xl-6 grid-column">
        <div className="section-grid-about">
          <h3 className="subtitle-magenta">عن جريد</h3>
          <h2 className="secondary-title-black">
            تعزيز تدابير التباعد الاجتماعي
          </h2>
          <div className="section-content">
            <p>
              سواء كنت مؤسسة راسخة أو شركة ناشئة ، اكتشف المساحات والحلول المرنة
              لدفع عملك إلى الأمام.
            </p>
            <p>
              أصبحت التكنولوجيا المالية المبتكرة أحد أهم الصناعات الواعدة على
              مستوى العالم، وذلك لقدرتها على استخدام الأليات والتقنيات
              التكنولوجية الحديثة
            </p>
          </div>
          <a
            className="button-purple"
            href="src/components/HomePageComponents/AboutGridSection/AboutGrid#"
          >
            اقرأ المزيد
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutGridAr;
