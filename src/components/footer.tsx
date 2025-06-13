import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-screen-xl py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-bold text-xl">
              신제용
            </Link>
            <p className="mt-3 text-muted-foreground text-sm">
              개발자 겸 프리랜서 강사
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">바로가기</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/tech-stack" className="text-muted-foreground hover:text-foreground transition-colors">
                  기술 스택
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  연락처
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">연락처</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-muted-foreground">
                이메일: example@email.com
              </li>
              <li className="text-muted-foreground">
                깃허브: github.com/username
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">팔로우</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                블로그
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                유튜브
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 flex items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 신제용. All rights reserved.</p>
          <p>
            <Link href="#" className="hover:text-foreground">
              개인정보처리방침
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 