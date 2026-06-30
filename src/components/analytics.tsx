import Script from "next/script";

const Analytics = () => {
  return (
    // Simple Analytics - 100% privacy-first analytics
    <Script
      src="https://scripts.simpleanalyticscdn.com/latest.js"
      strategy="afterInteractive"
    />
  );
};

export default Analytics;
