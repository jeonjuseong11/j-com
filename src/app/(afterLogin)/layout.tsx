import {ReactNode} from "react";

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      에프터로그인레이아웃
      {children}
    </div>
  );
}
