import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { jobs } from "@/mocks/jobs";

const features = [
  {
    icon: "ri-questionnaire-line",
    title: "20문항으로 간단하게",
    desc: "5점 척도의 쉬운 질문 20개로 당신의 성향을 빠르게 파악합니다.",
  },
  {
    icon: "ri-timer-line",
    title: "약 3분이면 충분",
    desc: "부담 없이 직관적으로 답하다 보면 어느새 결과가 나옵니다.",
  },
  {
    icon: "ri-ai-generate",
    title: "AI 시대 맞춤 분석",
    desc: "데이터·AI·금융 등 미래 유망 직업까지 성향 기반으로 매칭합니다.",
  },
  {
    icon: "ri-lock-2-line",
    title: "회원가입 없이 무료",
    desc: "로그인 없이 바로 테스트하고 결과를 확인할 수 있습니다.",
  },
];

const steps = [
  { num: "1", title: "테스트 시작", desc: "20문항의 질문에 솔직하게 답해주세요." },
  { num: "2", title: "결과 확인", desc: "나에게 맞는 직업을 점수 순위로 확인합니다." },
  { num: "3", title: "진로 탐색", desc: "전망·연봉·자격증·학습기간까지 자세히 살펴봅니다." },
];

export default function Home() {
  const previewJobs = jobs.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full h-[520px] md:h-[640px] flex items-center justify-center overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Abstract%20digital%20illustration%20symbolizing%20career%20discovery%20and%20artificial%20intelligence%2C%20smooth%20flowing%20geometric%20ribbons%20and%20floating%20data%20nodes%20in%20emerald%20teal%20green%20and%20warm%20amber%20orange%20against%20a%20soft%20cream%20background%2C%20gentle%20gradients%2C%20subtle%20grid%20lines%2C%20modern%20minimal%20editorial%20style%2C%20clean%20composition%20with%20depth%2C%20premium%20tech%20aesthetic&width=1600&height=900&seq=career-hero-01&orientation=landscape"
            alt="AI 직업 적성 테스트 - 커리어 발견과 인공지능을 상징하는 추상 일러스트"
            title="AI 직업 적성 테스트 커리어 발견"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40" />

          <div className="relative z-10 w-full px-4 md:px-6 text-center text-white">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-5">
                <i className="ri-sparkling-2-line" />
                AI 시대 나만의 진로 찾기
              </span>
              <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-5">
                당신에게 가장 잘 맞는
                <br />
                직업을 찾아드립니다
              </h1>
              <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-8">
                20개의 질문으로 당신의 성향을 분석하고,
                데이터 애널리스트부터 AI 트레이너까지
                미래 유망 직업을 점수로 추천합니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/test"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent-500 text-foreground-950 font-bold text-base hover:bg-accent-400 transition-colors whitespace-nowrap"
                >
                  무료 테스트 시작하기
                  <i className="ri-arrow-right-line ml-2" />
                </Link>
                <a
                  href="#preview"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-medium text-base hover:bg-white/25 transition-colors whitespace-nowrap"
                >
                  어떤 직업이 있나요?
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground-950 mb-3">
                왜 이 테스트인가요?
              </h2>
              <p className="text-foreground-600 text-base">
                복잡한 진단 없이, 나에게 맞는 직업을 가장 빠르게
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-lg border border-background-200/70 bg-background-50 hover:border-primary-300 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 mb-4">
                    <i className={`${f.icon} text-2xl`} />
                  </div>
                  <h3 className="font-heading text-lg text-foreground-950 mb-2">{f.title}</h3>
                  <p className="text-sm text-foreground-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job preview */}
        <section id="preview" className="w-full px-4 md:px-6 py-16 md:py-20 bg-background-100/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground-950 mb-3">
                만나볼 수 있는 직업
              </h2>
              <p className="text-foreground-600 text-base">
                총 10개의 미래 유망 직업을 분석해드립니다
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {previewJobs.map((job) => (
                <Link
                  key={job.id}
                  to={`/job/${job.id}`}
                  className="group p-6 rounded-lg border border-background-200/70 bg-background-50 hover:border-primary-300 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700 mb-4">
                    <i className={`${job.icon} text-2xl`} />
                  </div>
                  <h3 className="font-heading text-lg text-foreground-950 mb-1">{job.name}</h3>
                  <p className="text-sm text-foreground-600 mb-3">{job.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-700 group-hover:gap-2 transition-all">
                    자세히 보기
                    <i className="ri-arrow-right-line" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground-950 mb-3">
                이렇게 진행됩니다
              </h2>
              <p className="text-foreground-600 text-base">3단계로 간단하게</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s) => (
                <div key={s.num} className="relative p-6 rounded-lg border border-background-200/70 bg-background-50">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-background-50 font-heading text-lg mb-4">
                    {s.num}
                  </div>
                  <h3 className="font-heading text-lg text-foreground-950 mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-lg bg-primary-600 px-6 py-14 md:px-12 text-center text-background-50">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                지금 나의 적성 직업을 확인해보세요
              </h2>
              <p className="text-background-100 text-base mb-8 max-w-xl mx-auto">
                회원가입도, 결제도 없이 약 3분이면 결과를 확인할 수 있습니다.
              </p>
              <Link
                to="/test"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-accent-500 text-foreground-950 font-bold text-base hover:bg-accent-400 transition-colors whitespace-nowrap"
              >
                테스트 시작하기
                <i className="ri-arrow-right-line ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}