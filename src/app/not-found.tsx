import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        이 페이지는 존재하지 않습니다. 다른 페이지를 검색해보세요.
      </p>
      <Link href="/search" className="text-blue-500 hover:underline">
        검색
      </Link>
    </div>
  );
};
export default NotFound;
