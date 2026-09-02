import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import { questions, likertOptions } from "@/mocks/questions";
import { saveAnswers } from "@/lib/scoring";

export default function Test() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(() =>
    Array(questions.length).fill(-1)
  );
  const [selected, setSelected] = useState<number>(-1);
  const [transitioning, setTransitioning] = useState(false);

  const question = questions[current];
  const progress = Math.round(((current + 1) / questions.length) * 100);

  const goNext = (nextIndex: number) => {
    if (nextIndex >= questions.length) {
      saveAnswers(answers);
      navigate("/result");
      return;
    }
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setSelected(answers[nextIndex] ?? -1);
      setTransitioning(false);
    }, 250);
  };

  const handleSelect = (value: number) => {
    if (transitioning) return;
    setSelected(value);
    const nextAnswers = [...answers];
    nextAnswers[current] = value;
    setAnswers(nextAnswers);
    setTimeout(() => goNext(current + 1), 300);
  };

  const handlePrev = () => {
    if (current === 0 || transitioning) return;
    setCurrent(current - 1);
    setSelected(answers[current - 1] ?? -1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />

      <main className="flex-1 w-full px-4 md:px-6 py-10 md:py-16 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={current === 0 || transitioning}
                className="flex items-center gap-1 text-sm font-medium text-foreground-600 hover:text-foreground-950 disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
              >
                <i className="ri-arrow-left-line" />
                이전
              </button>
              <span className="text-sm font-semibold text-foreground-700">
                <span className="text-primary-600">{current + 1}</span> / {questions.length}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-background-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div
            key={current}
            className={`${transitioning ? "opacity-0 translate-y-2" : "opacity-100"} transition-all duration-200`}
          >
            <div className="mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-100 text-secondary-900 text-xs font-semibold">
                Q{current + 1}
              </span>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl text-foreground-950 leading-snug mb-8">
              {question.text}
            </h1>

            <div className="flex flex-col gap-3">
              {likertOptions.map((opt) => {
                const isSelected = selected === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-lg border text-left transition-all ${
                      isSelected
                        ? "border-primary-500 bg-primary-50 text-foreground-950"
                        : "border-background-200 bg-background-50 hover:border-primary-300 hover:bg-background-100"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? "border-primary-500" : "border-background-300"
                      }`}
                    >
                      {isSelected && (
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                      )}
                    </span>
                    <span className="text-base font-medium">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}