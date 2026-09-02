import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-background-100">
      <div className="w-full px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-500 text-background-50">
              <i className="ri-compass-3-line text-lg" />
            </span>
            <span className="font-heading text-lg text-background-50">AI 직업 적성 테스트</span>
          </div>
          <p className="text-sm text-background-300 leading-relaxed">
            AI 시대에 맞는 나만의 직업을 발견하고,
            진로에 필요한 정보까지 한 번에 확인해보세요.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-background-50 mb-3">바로가기</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/test" className="text-sm text-background-300 hover:text-background-50 transition-colors">
                테스트 시작하기
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm text-background-300 hover:text-background-50 transition-colors">
                홈으로
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-background-50 mb-3">알아두세요</h4>
          <p className="text-sm text-background-300 leading-relaxed">
            본 테스트 결과는 참고용으로 제공되며,
            실제 진로 결정의 절대적인 기준이 될 수 없습니다.
            더 정확한 진단은 전문 상담을 권장합니다.
          </p>
        </div>
      </div>

      <div className="border-t border-background-100/10">
        <div className="w-full px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-background-400">© 2026 AI 직업 적성 테스트. All rights reserved.</p>
          <p className="text-xs text-background-400">약 3분이면 충분합니다</p>
        </div>
      </div>
    </footer>
  );
}