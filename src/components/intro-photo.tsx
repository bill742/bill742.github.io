import Image from "next/image";

const IntroPhoto = () => {
  return (
    <div className="relative shrink-0">
      {/* Glow blob */}
      <div
        className="absolute inset-[-10%] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.19 88 / 0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Decorative ring */}
      <div
        className="border-primary/60 absolute inset-0 scale-[1.06] rounded-full border-4"
        style={{ transform: "scale(1.06) rotate(10deg)" }}
        aria-hidden="true"
      />
      {/* Photo */}
      <div className="relative h-56 w-56 overflow-hidden rounded-full sm:h-64 sm:w-64 lg:h-72 lg:w-72">
        <Image
          src="/images/bill-dean.jpg"
          alt="Bill Dean"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
        />
      </div>
    </div>
  );
};

IntroPhoto.displayName = "IntroPhoto";

export default IntroPhoto;
