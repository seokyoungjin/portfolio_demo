import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Mail, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="container max-w-screen-xl">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              안녕하세요, <br />
              <span className="text-primary">개발자 겸 강사</span> <br />
              신제용입니다
            </h1>
            <p className="text-xl text-muted-foreground">
              머신러닝, 딥러닝 전문 강사이자 풀스택 개발자로 활동하고 있습니다.
              복잡한 기술을 쉽게 이해시키는 강의 노하우를 통해 다양한 기업과 개인에게
              양질의 교육을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  연락하기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">자세히 보기</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Github size={24} />
              </Link>
              <Link href="mailto:example@email.com" className="text-muted-foreground hover:text-foreground">
                <Mail size={24} />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-background bg-muted">
            {/* 프로필 이미지 - 실제 이미지로 교체 필요 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/10" />
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">전문 분야</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            머신러닝, 딥러닝부터 백엔드, 프론트엔드까지 다양한 개발 기술을 다룹니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "머신러닝",
              description: "통계 기반 머신러닝 모델링 및 데이터 분석",
            },
            {
              title: "딥러닝",
              description: "컴퓨터 비전, 자연어 처리 등의 신경망 모델 개발",
            },
            {
              title: "백엔드",
              description: "확장 가능한 서버 아키텍처 및 API 설계",
            },
            {
              title: "프론트엔드",
              description: "반응형 웹 인터페이스 및 사용자 경험 최적화",
            },
          ].map((skill, index) => (
            <Card key={index}>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-bold text-xl">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">프로젝트를 시작할 준비가 되셨나요?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            개인이나 기업을 위한 맞춤형 교육을 제공합니다. 지금 바로 연락하여 상담받아보세요.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">연락하기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
