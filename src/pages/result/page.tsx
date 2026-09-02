import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { jobs } from "@/mocks/jobs";
import { traits } from "@/mocks/traits";
import { loadAnswers, computeJobScores, computeTraitScores } from "@/lib/scoring";

const rankStyles: Record<number, { badge: string; ring: string }> = {
  0: { badge: "bg-accent-500 text-foreground-950", ring: "ring-2 ring-accent-500" },
  1: { badge: "bg-secondary-500 text-background-50", ring: "ring-2 ring-secondary-500" },
  2: { badge: "bg-primary-500 text-background-50", ring: "ring-2 ring-primary-500" },
};

const rankLabel = ["1위", "2위", "3위"];

export default function Result() {
  const navigate = useNavigate();
  const [answers] = useState(() => loadAnswers());

  useEffect(() => {
    if (!answers) {
      navigate("/test", { replace: true });
    }
  }, [answers, navigate]);

  const scores = useMemo(() => (answers ? computeJobScores(answers) : []), [answers]);
  const traitScores = useMemo(() => (answers ? computeTraitScores(answers) : []), [answers]);

  if (!answers || scores.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-50">
        <p className="text-foreground-600">결과를 불러오는 중...</p>
      </div>
    );
  }

  const jobMap = new Map(jobs.map((j) => [j.id, j]));
  const traitMap = new Map(traits.map((t) => [t.id, t]));

  const top3 = scores.slice(0, 3);
  const topTraits = traitScores.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />

      <main className="flex-1 w-full px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <i className="ri-award-line" />
              분석 완료
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground-950 mb-3">
              당신에게 가장 적합한 직업
            </h1>
            <p className="text-foreground-600 text-base">
              20개 문항을 바탕으로 당신의 성향과 가장 잘 맞는 직업을 선별했습니다.
            </p>
          </div>

          {/* Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {top3.map((s, idx) => {
              const job = jobMap.get(s.jobId)!;
              const style = rankStyles[idx];
              return (
                <Link
                  key={s.jobId}
                  to={`/job/${s.jobId}`}
                  className={`${idx === 0 ? "md:-mt-4" : ""} p-6 rounded-lg bg-background-50 border border-background-200/70 ${style.ring} hover:shadow-sm transition-all animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${style.badge}`}>
                      {rankLabel[idx]}
                    </span>
                    <span className="font-heading text-2xl text-foreground-950">
                      {s.score}
                      <span className="text-sm text-foreground-500">점</span>
                    </span>
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 mb-4">
                    <i className={`${job.icon} text-3xl`} />
                  </div>
                  <h2 className="font-heading text-xl text-foreground-950 mb-1">{job.name}</h2>
                  <p className="text-sm text-foreground-600 mb-4">{job.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
                    자세히 보기
                    <i className="ri-arrow-right-line" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Traits */}
          <div className="mb-12 rounded-lg border border-background-200/70 bg-background-100/60 p-6">
            <h2 className="font-heading text-xl text-foreground-950 mb-4">나의 강점 성향</h2>
            <div className="flex flex-wrap gap-2">
              {topTraits.map((t) => {
                const trait = traitMap.get(t.traitId);
                return (
                  <span
                    key={t.traitId}
                    className="px-4 py-2 rounded-full bg-accent-100 text-accent-900 text-sm font-medium"
                  >
                    {trait?.label ?? t.traitId}
                  </span>
                );
              })}
            </div>
            <p className="text-xs text-foreground-500 mt-4">
              위 성향이 당신의 적성과 가장 밀접하게 연결되어 있습니다.
            </p>
          </div>

          {/* Full ranking */}
          <div className="mb-12">
            <h2 className="font-heading text-xl text-foreground-950 mb-5">전체 직업 순위</h2>
            <div className="flex flex-col gap-3">
              {scores.map((s, idx) => {
                const job = jobMap.get(s.jobId)!;
                return (
                  <Link
                    key={s.jobId}
                    to={`/job/${s.jobId}`}
                    className="flex items-center gap-4 p-4 rounded-lg border border-background-200/70 bg-background-50 hover:border-primary-300 transition-colors"
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-background-100 text-foreground-700 text-sm font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-700 shrink-0">
                      <i className={`${job.icon} text-xl`} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground-950 whitespace-nowrap">{job.name}</span>
                        <span className="text-sm font-semibold text-foreground-700 whitespace-nowrap">
                          {s.score}점
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-background-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary-500"
                          style={{ width: `${s.score}%` }}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="text-center">
            <Link
              to="/test"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary-500 text-background-50 font-bold text-base hover:bg-primary-600 transition-colors whitespace-nowrap"
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