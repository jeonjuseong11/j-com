'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react"; // useEffect 추가
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/i/flow/login');
    }, [router]); // router가 준비된 후 실행

    return <Main />;
}