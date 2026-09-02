export interface Question {
  id: number;
  text: string;
  loadings: Record<string, number>;
}

export const questions: Question[] = [
  { id: 1, text: "혼자 조용히 일에 몰입하는 것을 좋아한다", loadings: { independence: 2 } },
  { id: 2, text: "숫자를 다루고 계산하는 것을 좋아한다", loadings: { numerical: 2 } },
  { id: 3, text: "새로운 지식이나 기술을 배우는 것을 즐긴다", loadings: { curiosity: 2 } },
  { id: 4, text: "똑같은 일을 반복하는 것은 지루하게 느껴진다", loadings: { curiosity: 1, independence: 1 } },
  { id: 5, text: "데이터에서 패턴과 인사이트를 찾는 것이 재미있다", loadings: { analytical: 2, numerical: 1 } },
  { id: 6, text: "사람들과 대화하고 협력하는 것을 좋아한다", loadings: { interpersonal: 2 } },
  { id: 7, text: "복잡한 문제를 풀 때 희열을 느낀다", loadings: { analytical: 2 } },
  { id: 8, text: "새로운 아이디어나 디자인을 구상하는 것을 좋아한다", loadings: { creativity: 2 } },
  { id: 9, text: "작은 실수도 놓치지 않을 만큼 꼼꼼한 편이다", loadings: { detail: 2 } },
  { id: 10, text: "팀을 이끌고 방향을 제시하는 것을 좋아한다", loadings: { leadership: 2 } },
  { id: 11, text: "AI, 컴퓨터, 최신 기술에 관심이 많다", loadings: { tech: 2 } },
  { id: 12, text: "다른 사람의 고민을 듣고 돕는 것을 좋아한다", loadings: { empathy: 2 } },
  { id: 13, text: "계획을 세우고 체계적으로 일하는 편이다", loadings: { detail: 1, independence: 1 } },
  { id: 14, text: "예상치 못한 변화에도 빠르게 적응한다", loadings: { curiosity: 2 } },
  { id: 15, text: "숫자와 데이터로 결과를 입증하는 것을 좋아한다", loadings: { numerical: 2, analytical: 1 } },
  { id: 16, text: "기존 방식과 다른 창의적인 해법을 찾는 것을 즐긴다", loadings: { creativity: 2 } },
  { id: 17, text: "리스크를 감수하고 새로운 것을 시도하는 것을 좋아한다", loadings: { leadership: 1, curiosity: 1 } },
  { id: 18, text: "반복적인 데이터 입력 같은 단순 업무는 피하고 싶다", loadings: { curiosity: 1, independence: 1 } },
  { id: 19, text: "사람들 앞에서 발표하거나 설명하는 것을 좋아한다", loadings: { interpersonal: 1, leadership: 1 } },
  { id: 20, text: "트렌드와 새로운 정보를 빠르게 습득하는 편이다", loadings: { curiosity: 1, tech: 1 } },
];

export const likertOptions = [
  { value: 1, label: "매우 아니다" },
  { value: 2, label: "아니다" },
  { value: 3, label: "보통이다" },
  { value: 4, label: "그렇다" },
  { value: 5, label: "매우 그렇다" },
];