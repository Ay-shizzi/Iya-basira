"use client";

import { useRouter } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Link from "next/link";

const BackLink = () => {
  const router = useRouter();

  return (
    <Link
      href=""
      className="flex items-center gap-2 mb-4"
      onClick={() => router.back()}
    >
      <FaLongArrowAltLeft /> back
    </Link>
  );
};

export default BackLink;
