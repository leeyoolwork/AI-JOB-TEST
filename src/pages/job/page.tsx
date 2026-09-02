import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { jobs } from "@/mocks/jobs";
import { loadAnswers, computeJobScores } from "@/lib/scoring";

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === id);
  const [myScore, setMyScore] = useState<number | null>(null);

  useEffect(() => {
    if (!job) {
      navigate("/", { replace: true });
      return;
    }
    const answers = loadAnswers();
    if (answers) {
      const scores = computeJobScores(answers);
      const mine = scores.find((s) => s.jobId === job.id);
      setMyScore(mine ? mine.score : null);
    }
  }, [job, navigate]);

  if (!job) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />

      <main className="flex-1 w-full px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/result"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground-600 hover:text-foreground-950 transition-colors"
            >
              <i className="ri-arrow-left-line" />
              결과로 돌아가기
            </Link>
          </div>

          {/* Header */}
          <div className="p-8 rounded-lg border border-background-200/70 bg-background-50 mb-8 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-primary-100 text-primary-700 shrink-0">
                <i className={`${job.icon} text-5xl`} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="font-heading text-3xl md:text-4xl text-foreground-950">{job.name}</h1>
                  {myScore !== null && (
                    <span className="px-3 py-1 rounded-full bg-accent-100 text-accent-900 text-sm font-semibold whitespace-nowrap">
                      내 적합도 {myScore}점
                    </span>
                  )}
                </div>
                <p className="text-foreground-600 text-base mb-3">{job.tagline}</p>
                <p className="text-sm text-foreground-700 leading-relaxed">{job.description}</p>
              </div>
            </div>
          </div>

          {/* Key info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="p-6 rounded-lg border border-background-200/70 bg-background-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <i className="ri-line-chart-line text-xl" />
                </div>
                <h2 className="font-heading text-lg text-foreground-950">직업 전망</h2>
              </div>
              <span className="inline-flex px-3 py-1 rounded-full bg-secondary-100 text-secondary-900 text-xs font-bold mb-3">
                {job.outlookLevel}
              </span>
              <p className="text-sm text-foreground-700 leading-relaxed">{job.outlook}</p>
            </div>

            <div className="p-6 rounded-lg border border-background-200/70 bg-background-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                  <i className="ri-money-dollar-circle-line text-xl" />
                </div>
                <h2 className="font-heading text-lg text-foreground-950">평균 연봉</h2>
              </div>
              <p className="font-heading text-2xl text-foreground-950 mb-2">{job.salary}</p>
              <p className="text-sm text-foreground-600">{job.salaryRange}</p>
            </div>

            <div className="p-6 rounded-lg border border-background-200/70 bg-background-50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-100 text-secondary-700">
                  <i className="ri-award-line text-xl" />
                </div>
                <h2 className="font-heading text-lg text-foreground-950">필요한 자격증</h2>
              </div>
              <ul className="space-y-2">
                {job.certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-foreground-700">
                    <i className="ri-checkbox-circle-line text-primary-600 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-background-200/70 bg-background-50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <i className="ri-time-line text-xl" />
                </div>
                <h2 className="font-heading text-lg text-foreground-950">필요한 학습기간</h2>
              </div>
              <p className="font-heading text-3xl text-primary-600 mb-2">{job.learningPeriod}</p>
              <p className="text-sm text-foreground-600">
                기초부터 준비했을 때의 평균적인 기간입니다. 개인의 배경에 따라 달라질 수 있습니다.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="p-6 rounded-lg border border-background-200/70 bg-background-100/60 mb-10">
            <h2 className="font-heading text-lg text-foreground-950 mb-4">필요한 핵심 역량</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-background-50 border border-background-200 text-foreground-700 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/result"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full border border-background-300 text-foreground-800 font-medium text-base hover:bg-background-100 transition-colors whitespace-nowrap"
            >
              결과 보기
            </Link>
            <Link
              to="/test"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary-500 text-background-50 font-bold text-base hover:bg-primary-600 transition-colors whitespace-nowrap"
            >
              <i className="ri-refresh-line mr-2" />
              다시 테스트하기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}