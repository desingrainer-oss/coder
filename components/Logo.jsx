import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "h-11", blend = true }) {
  return (
    <Link href="/" className="shrink-0 cursor-pointer inline-flex items-center">
      <Image
        src="/logo-coders.webp"
        alt="Coders Solution Technology"
        width={160}
        height={56}
        priority
        className={`w-auto object-contain ${className} ${blend ? "logo-blend" : ""}`}
      />
    </Link>
  );
}
