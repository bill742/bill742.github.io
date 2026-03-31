const Analytics = () => {
  return (
    <>
      {/* 100% privacy-first analytics */}
      <script
        data-collect-dnt="true"
        async
        data-hostname="billdean.me"
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
};

export default Analytics;
