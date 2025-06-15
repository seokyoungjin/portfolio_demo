import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, MapPin, MessageSquare, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "연락처 - 신제용 포트폴리오",
  description: "신제용에게 연락하고 상담 및 협업 문의를 할 수 있는 페이지입니다.",
};

// 연락처 아이템 컴포넌트
function ContactItem({ icon, title, value, link }: { icon: React.ReactNode; title: string; value: string; link?: string }) {
  const content = (
    <div className="flex items-start gap-4 p-4">
      <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="block hover:bg-muted/50 rounded-lg transition-colors">
        {content}
      </a>
    );
  }

  return <div className="hover:bg-muted/50 rounded-lg transition-colors">{content}</div>;
}

// 이메일 폼 컴포넌트
function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          이름
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-3 rounded-md border border-border bg-background"
          placeholder="홍길동"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          이메일
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 rounded-md border border-border bg-background"
          placeholder="example@email.com"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          제목
        </label>
        <input
          type="text"
          id="subject"
          className="w-full p-3 rounded-md border border-border bg-background"
          placeholder="문의 제목을 입력해주세요"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          메시지
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full p-3 rounded-md border border-border bg-background resize-none"
          placeholder="문의 내용을 상세히 적어주세요"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
      >
        메시지 보내기
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">연락처</h1>
        <p className="text-xl text-muted-foreground">
          개인 또는 기업 교육 문의, 협업 제안은 아래 방법으로 연락해주세요.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">바로 연락하기</h2>
            <div className="space-y-3">
              <ContactItem
                icon={<Mail className="h-5 w-5 text-primary" />}
                title="이메일"
                value="example@email.com"
                link="mailto:example@email.com"
              />
              <ContactItem
                icon={<MessageSquare className="h-5 w-5 text-primary" />}
                title="전화번호"
                value="010-1234-5678"
                link="tel:01012345678"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">SNS</h2>
            <div className="space-y-3">
              <ContactItem
                icon={<Github className="h-5 w-5 text-primary" />}
                title="깃허브"
                value="github.com/username"
                link="https://github.com/username"
              />
              <ContactItem
                icon={<Youtube className="h-5 w-5 text-primary" />}
                title="유튜브"
                value="youtube.com/channel"
                link="https://youtube.com/channel"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">위치</h2>
            <div className="space-y-3">
              <ContactItem
                icon={<MapPin className="h-5 w-5 text-primary" />}
                title="주소"
                value="서울특별시 강남구"
              />
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>메시지 보내기</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 