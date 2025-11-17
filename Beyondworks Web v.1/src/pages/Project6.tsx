import ProjectDetail from '../components/ProjectDetail';

export default function Project6() {
  return (
    <ProjectDetail
      id={6}
      title="Product Landing Page"
      category="Product Page"
      description="제품의 핵심 가치를 강렬하게 전달하는 상세 페이지 작업.
      |@@전환율을 목표로 고객이 상품에 대한 가치와 @@장점을 이해하기 쉽도록 기획합니다."
      media={[
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025661/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%82%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3_2k_zyl8us.mov',
          client: 'Nine Comfort Pillow',
          year: '2024',
          role: '펀딩 전략, 구조 시각화, 디자인',
          challenge: '･ 불신 비용 최소화: "베개 유목민" 소비자들의 깊은 불신과 피로감 해소. |･ 과학적 설득: 감성적 편안함이 아닌, 통증 완화에 대한 논리적, 구조적 근거 제시',
          solution: '･ 공학적 접근: 9가지 지지 포인트와 해부학적 설계를 분해해 단순 침구가 아닌 "잠잘 때 쓰는 과학 도구"로 느끼게 만들기 |･ 공감과 위로: 만성 통증에 시달리는 현대인에게 "고생한 나를 위한 가장 편안한 보상"이라는 감성적 가치 전달. ',
          results: [
            '펀딩 1,600% 달성.',
            '고관여 제품임에도 높은 전환율 기록하며 목이 편한 베개 키워드 선점',
          ],
        },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025764/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5_d4w2vl.mov',
          client: 'Bodyluv Bluecleaner',
          year: '2024',
          role: '브랜딩,인포그래픽, 논리 설계',
          challenge: '･ 레드오션 차별화: 저가 유사품이 많은 시장에서 고가 제품의 설득력 확보.|･ 프리미엄 인식: 단순 소모품이 아닌 기술력이 집약된 위생 용품으로 인식 전환',
          solution: '･ Pain Point 격파: 타사 제품의 단점(찌꺼기, 이염, 손에 묻음)을 시각적으로 대조하여 기술력 부각.|･ 가치 판매: 변기 청소 그 이상, "우리 가족의 보이지 않는 위생까지 책임지는 안심"을 판매.',
          results: [
            '기존 경쟁품 대비 높은 가격 저항선 돌파.',
            '시장 점유율 1위 기술력 이미지 구축',
          ],
        },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025686/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%AE%E1%84%8B%E1%85%A1_oupbgg.mov',
          client: 'Aqua Cool Comforter',
          year: '2024',
          role: '시즌 기획, 비주얼 편집, 카피라이팅',
          challenge: '･ 촉감의 시각화: 온라인에서 만져볼 수 없는 "시원함"과 "부드러움"을 시각적으로 전달.|･ 시즌성 한계 돌파: 한 철 쓰고 버리는 침구와 차별화된 지속 가능한 가치 전달',
          solution: '･ 데이터 시각화: 열화상 카메라 테스트(적색 vs 청색)로 쿨링 기능을 데이터로 증명.|･ 냉감 기능 그 이상, 열대야 속 온 가족의 "쾌적한 숙면 환경"을 제공하는 수면 질 개선 가치 소구.',
          results: [
            '기술 용어(Q-MAX)를 쉽게 시각화해 소비자 이해도 제고',
            '시즌 초도 물량 완판',
          ],
        },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025795/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%91%E1%85%B5%E1%86%B7%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6_sblem3.mov',
          client: '0100 Pim Spray',
          year: '2024',
          role: '기획, 카피라이팅',
          challenge: '･ 효능 불신 해소: \"뿌려서 펴진다\"라는 낯선 개념에 대한 소비자 의구심 해소.|･ 구매 전환: 기존 다리미 대비 확연한 이점과 필수품으로 느껴질 상황 제안.',
          solution: '･ 직관적인 증명: 무편집 GIF와 비포/에프터 컷으로 3초 만에 주름이 펴지는 즉각적 효능 검증.|･ 상황적 가치 부여: 단순 주름 제거가 아닌, 여행지, 출장지에서 품위를 지켜주는 "센스 있는 여행 필수품"으로 포지셔닝.',
          results: [
            '체류 시간 증대 및 전환율 상승',
            '여행 전 필수 체크리스트 아이템으로 포지셔닝',
          ],
        },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025743/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%91%E1%85%A9%E1%84%80%E1%85%B3%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%A5_jpqj7r.mov',
          client: 'Pogeun Air Comporter',
          year: '2024',
          role: '프리미엄 브랜딩, 기획',
          challenge: '･ 시장 편견 해소: "겨울 이불 = 구스"라는 공식과 "폴리에스터=저가"라는 인식 개선 |･ 프리미엄 포지셔닝: 고가 구스 이불 구매를 고려하는 타겟층을 흡수할 고급화 브랜드 이미지 구축',
          solution: '･ 신소재 브랜딩: "자가발열 그래핀" 기술을 강조, 구스보다 편하고 따뜻한 "상위 호환 대체제"로 포지셔닝|･ 가치 전달: 알러지, 비염, 민감한 아이들을 위한 "먼지 없는 이불" 강조',
          results: [
            '무겁고 답답한 이불의 대안으로 포지셔닝',
            '세트 판매로 객단가 형성 및 매출 증대',
          ],
        },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025826/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%8C%E1%85%B5%E1%84%82%E1%85%A9_rqqfbz.mov',
          client: 'Digital Product',
          year: '2024',
          role: '기획, 카피라이팅, 디자인',
          challenge: '･ 무형 상품의 가치 입증: 만질 수 없는 디지털 템플릿의 구매 당위성 확보|･ 진입 장벽 해소: 고가 제품과 복잡한 사용법에 지친 고객에게 "쉬운 대안"임을 증명',
          solution: '･ 난이도 시각화: "연락처 저장만큼 쉽다"는 카피와 GIF로 어렵다는 심리적 장벽 개선|･ 가치 재정의: 단순 기록 도구가 아닌, 복잡한 삶을 정리하고 관리하는 "성공한 N잡러 파트너"로 포지셔닝',
          results: [
            '와디즈 펀딩 목표 600% 초과 달성',
          ],
        },
      ]}
    />
  );
}