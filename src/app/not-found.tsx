import Link from "next/link";
import Image from "next/image";

const NotFound = ({ params }: { params: any }) => {
  return (
    <div className="my-center not-found">
      <Image src={"/error.png"} width={400} height={400} alt="404 error page" />
      <Link href="/">Anasayfaya Dön</Link>
    </div>
  );
};

export default NotFound;
