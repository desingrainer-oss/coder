import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "h-11", blend = true, blendDesktopOnly = false }) {
  const blendClass = blend
    ? blendDesktopOnly
      ? "logo-blend-lg"
      : "logo-blend"
    : "";

  return (
    <Link href="/" className="shrink-0 cursor-pointer inline-flex items-center relative z-[1]">
      <Image
        src="/logo-coders.webp"
        alt="Coders Solution Technology"
        width={160}
        height={56}
        priority
        className={`w-auto object-contain ${className} ${blendClass}`}
      />
    </Link>
  );
}
