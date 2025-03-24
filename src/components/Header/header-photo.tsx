import Image from "next/image";

export default function HeaderPhoto() {
  return (
    <Image
      src="/images/bill-dean.jpg"
      width={80}
      height={80}
      alt="Picture of the author"
      className="rounded-full"
    />
  );
}
