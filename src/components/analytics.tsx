import Image from "next/image";
import Script from "next/script";

const Analytics = () => {
  return (
    <>
      {/* 100% privacy-first analytics */}
      <Script
        id="analytics"
        strategy="afterInteractive"
        data-collect-dnt="true"
        async
        data-hostname="billdean.me"
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></Script>

      <noscript>
        <Image
          src={
            "https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
          }
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
};

export default Analytics;
