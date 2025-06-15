import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { 
  Card,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "기술 스택 - 신제용 포트폴리오",
  description: "보유한 기술 스택과 개발 도구에 관한 상세 정보입니다.",
};

interface TechCategory {
  title: string;
  description: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  description: string;
  level: "초급" | "중급" | "고급" | "전문가";
}

export default function TechStackPage() {
  const techCategories: TechCategory[] = [
    {
      title: "머신러닝 / 딥러닝",
      description: "데이터 기반 모델링과 인공지능 관련 기술",
      technologies: [
        {
          name: "TensorFlow",
          description: "딥러닝 모델 학습 및 배포를 위한 오픈소스 라이브러리",
          level: "전문가",
        },
        {
          name: "PyTorch",
          description: "동적 계산 그래프를 지원하는 딥러닝 프레임워크",
          level: "고급",
        },
        {
          name: "scikit-learn",
          description: "머신러닝 알고리즘 및 데이터 전처리 도구",
          level: "전문가",
        },
        {
          name: "자연어 처리",
          description: "BERT, GPT 모델을 활용한 텍스트 데이터 분석",
          level: "고급",
        },
        {
          name: "컴퓨터 비전",
          description: "CNN, YOLO 등을 활용한 이미지 및 영상 처리",
          level: "고급",
        },
      ],
    },
    {
      title: "백엔드",
      description: "서버 측 애플리케이션 및 인프라 개발",
      technologies: [
        {
          name: "Python",
          description: "주요 백엔드 및 데이터 분석 언어",
          level: "전문가",
        },
        {
          name: "Node.js",
          description: "확장 가능한 네트워크 애플리케이션을 위한 런타임",
          level: "고급",
        },
        {
          name: "Django",
          description: "Python 기반 풀스택 웹 프레임워크",
          level: "고급",
        },
        {
          name: "FastAPI",
          description: "고성능 API 개발을 위한 현대적인 프레임워크",
          level: "전문가",
        },
        {
          name: "데이터베이스",
          description: "PostgreSQL, MongoDB, Redis, Elasticsearch",
          level: "고급",
        },
      ],
    },
    {
      title: "프론트엔드",
      description: "사용자 인터페이스 및 웹 애플리케이션 개발",
      technologies: [
        {
          name: "TypeScript",
          description: "정적 타입을 지원하는 JavaScript 수퍼셋",
          level: "고급",
        },
        {
          name: "React",
          description: "사용자 인터페이스 구축을 위한 JavaScript 라이브러리",
          level: "고급",
        },
        {
          name: "Next.js",
          description: "서버 사이드 렌더링을 지원하는 React 프레임워크",
          level: "고급",
        },
        {
          name: "Tailwind CSS",
          description: "유틸리티 우선 CSS 프레임워크",
          level: "고급",
        },
        {
          name: "UI/UX",
          description: "사용자 경험 설계 및 인터페이스 디자인",
          level: "중급",
        },
      ],
    },
    {
      title: "도구 및 인프라",
      description: "개발 환경 및 배포 인프라 관련 기술",
      technologies: [
        {
          name: "Git",
          description: "분산형 버전 관리 시스템",
          level: "전문가",
        },
        {
          name: "Docker",
          description: "애플리케이션 컨테이너화 도구",
          level: "고급",
        },
        {
          name: "Kubernetes",
          description: "컨테이너 오케스트레이션 플랫폼",
          level: "중급",
        },
        {
          name: "AWS",
          description: "클라우드 인프라 서비스",
          level: "고급",
        },
        {
          name: "CI/CD",
          description: "지속적 통합 및 배포 파이프라인",
          level: "고급",
        },
      ],
    },
  ];

  // 기술 레벨에 따른 스타일 결정
  function getLevelStyle(level: string) {
    switch (level) {
      case "전문가":
        return "bg-primary/20 text-primary";
      case "고급":
        return "bg-blue-500/20 text-blue-500 dark:bg-blue-400/20 dark:text-blue-400";
      case "중급":
        return "bg-yellow-500/20 text-yellow-600 dark:bg-yellow-400/20 dark:text-yellow-400";
      case "초급":
        return "bg-gray-200/20 text-gray-600 dark:bg-gray-400/20 dark:text-gray-400";
      default:
        return "bg-gray-200/20 text-gray-600 dark:bg-gray-400/20 dark:text-gray-400";
    }
  }

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">기술 스택</h1>
        <p className="text-xl text-muted-foreground">
          현재 활용하고 있는 기술과 도구들을 소개합니다.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-16">
        {techCategories.map((category, index) => (
          <div key={index} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.technologies.map((tech, techIndex) => (
                <Card key={techIndex} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{tech.name}</CardTitle>
                      <span className={`text-xs px-2 py-1 rounded-full ${getLevelStyle(tech.level)}`}>
                        {tech.level}
                      </span>
                    </div>
                    <CardDescription className="mt-2">{tech.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 