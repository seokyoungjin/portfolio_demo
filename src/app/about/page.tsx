import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "소개 - 신제용 포트폴리오",
  description: "개발자 겸 프리랜서 강사 신제용의 경력과 교육 철학을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">소개</h1>
        <p className="text-xl text-muted-foreground">
          개발자 겸 프리랜서 강사로서의 제 이야기를 소개합니다.
        </p>
      </div>

      <Separator className="my-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">개발자로서의 여정</h2>
            <p className="text-muted-foreground">
              10년 이상의 소프트웨어 개발 경험을 갖고 있으며, 주로 머신러닝과 데이터 과학 분야에서
              전문성을 쌓아왔습니다. 실무에서는 데이터 기반 의사결정 시스템 구축, 자연어 처리 모델,
              컴퓨터 비전 프로젝트 등을 다수 수행했습니다.
            </p>
            <p className="text-muted-foreground">
              또한 풀스택 개발자로서 모던 웹 기술을 활용하여 사용자 중심의 애플리케이션을
              구축해왔으며, 확장 가능한 백엔드 아키텍처 설계에도 전문성을 보유하고 있습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">교육 철학</h2>
            <p className="text-muted-foreground">
              복잡한 기술 개념을 쉽고 직관적으로 설명하는 것이 제 강의의 핵심입니다.
              실무 경험을 바탕으로 한 실전 예제와 체계적인 커리큘럼을 통해
              수강생들이 실질적인 개발 역량을 키울 수 있도록 돕고 있습니다.
            </p>
            <p className="text-muted-foreground">
              특히 1:1 맞춤형 멘토링을 통해 각 학습자의 수준과 목표에 맞는
              커리큘럼을 제공하며, 실무 프로젝트 경험을 통해 이론과 실무를 모두 익힐 수 있는
              기회를 제공합니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">주요 경력</h2>
            <div className="space-y-6">
              {[
                {
                  period: "2020년 - 현재",
                  title: "프리랜서 개발자 및 강사",
                  description:
                    "머신러닝, 딥러닝 및 풀스택 웹 개발 강의를 진행하며, 기업과 개인을 위한 맞춤형 솔루션 개발",
                },
                {
                  period: "2017년 - 2020년",
                  title: "ABC 기술연구소 선임 연구원",
                  description:
                    "자연어 처리와 컴퓨터 비전 모델 연구 개발 및 기술팀 리드",
                },
                {
                  period: "2015년 - 2017년",
                  title: "XYZ 스타트업 백엔드 개발자",
                  description:
                    "확장성 높은 API 서버 구축 및 데이터베이스 최적화",
                },
              ].map((job, index) => (
                <div key={index} className="border-l-2 border-primary/50 pl-4 py-2">
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                  <h3 className="font-medium text-lg">{job.title}</h3>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">기술 역량</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">머신러닝 / 딥러닝</h3>
                <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, scikit-learn, NLP, CV</p>
              </div>
              <div>
                <h3 className="font-medium">백엔드</h3>
                <p className="text-sm text-muted-foreground">Python, Node.js, Django, Flask, Express, FastAPI</p>
              </div>
              <div>
                <h3 className="font-medium">프론트엔드</h3>
                <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-medium">데이터베이스</h3>
                <p className="text-sm text-muted-foreground">PostgreSQL, MongoDB, Redis, Elasticsearch</p>
              </div>
              <div>
                <h3 className="font-medium">클라우드 및 인프라</h3>
                <p className="text-sm text-muted-foreground">AWS, Docker, Kubernetes, CI/CD</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">교육</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">2015</p>
                <h3 className="font-medium">한국공과대학교</h3>
                <p className="text-sm text-muted-foreground">컴퓨터공학 석사</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">2013</p>
                <h3 className="font-medium">한국공과대학교</h3>
                <p className="text-sm text-muted-foreground">컴퓨터공학 학사</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 