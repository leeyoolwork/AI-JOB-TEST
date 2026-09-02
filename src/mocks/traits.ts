export interface Trait {
  id: string;
  label: string;
  description: string;
}

export const traits: Trait[] = [
  { id: "analytical", label: "분석적 사고", description: "데이터를 논리적으로 분석하고 인사이트를 도출하는 능력" },
  { id: "numerical", label: "수리·논리", description: "숫자와 계산, 논리적 추론을 다루는 능력" },
  { id: "curiosity", label: "학습·호기심", description: "새로운 지식과 변화를 탐구하려는 성향" },
  { id: "independence", label: "독립성", description: "혼자 깊이 몰입해 일하는 성향" },
  { id: "interpersonal", label: "소통·협업", description: "사람과 대화하고 함께 일하는 능력" },
  { id: "creativity", label: "창의성", description: "새로운 아이디어를 구상하는 능력" },
  { id: "leadership", label: "리더십", description: "팀을 이끌고 방향을 제시하는 능력" },
  { id: "detail", label: "꼼꼼함", description: "세부사항까지 정확하게 챙기는 성향" },
  { id: "tech", label: "기술 관심", description: "컴퓨터와 최신 기술에 대한 관심" },
  { id: "empathy", label: "공감·도움", description: "타인의 마음을 이해하고 돕는 성향" },
];