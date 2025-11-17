import ProjectDetail from '../components/ProjectDetail';

export default function Project5() {
  return (
    <ProjectDetail
      id={5}
      title="Corporate Website"
      category="Web Design"
      description="브랜드 가치를 효과적으로 전달하는 웹사이트 제작.
      |브랜드를 방문하는 사용자 경험을 최우선으로 고려합니다."
      media={[
        {
          type: 'image',
          url: 'https://cdn.imweb.me/thumbnail/20251113/b8e57e217d391.png',
          client: 'artiwave',
          year: '2023',
          role: 'UX 기획, 반응형 UI 디자인, 이커머스 구조 설계',
          challenge: '작품·사이즈·프레임 옵션이 섞여 첫 방문자가 어디서 시작해야 할지 헷갈림',
          solution: '좌측 카테고리와 우선 동선 단순화. ‘베스트·프레임·전 상품’ 우선 노출. 상세를 ‘보고→고르기→담기’ 3단으로 정리',
          results: [
            '탐색 시작이 명확해지고 상담 의존도와 이탈이 줄어 전환 가능성 상승',
          ],
        },
        {
          type: 'image',
          url: 'https://cdn.imweb.me/thumbnail/20251113/2ea37a19512b4.png',
          client: '서울시 인재개발원',
          year: '2024',
          role: '정보구조 재설계, 접근성 고려 UI, 반응형 디자인',
          challenge: '메뉴·대상이 다양해 첫 진입에서 혼란',
          solution: '공지·교육안내·채용·자료실을 첫 화면에서 탭처럼 구분. 아이콘+명확 라벨로 모바일 동등 경험 제공',
          results: [
            '목적별 빠른 진입과 간단한 공지·강좌 확인으로 재방문 용이',
          ],
        },
        {
          type: 'image',
          url: 'https://cdn.imweb.me/thumbnail/20251113/eea8c82e07565.png',
          client: 'Atl',
          year: '2023',
          role: '브랜드 아이덴티티 기반 비주얼 UI, 제품 디렉토리 UX, 프로모션 레이아웃',
          challenge: '이야기·상품·세일 정보가 경쟁해 구매 동선이 흐려짐',
          solution: '다크 톤 배경 + 세로형 제품 카드로 시선 고정. 쿠폰·혜택 상단 배치, 컬렉션·스토리는 한 스크롤 아래',
          results: [
            '무드와 구매 동선이 함께 보이며 이벤트 참여와 상품 비교가 쉬움',
          ],
        },
        {
          type: 'image',
          url: 'https://cdn.imweb.me/thumbnail/20251113/fe86950525587.png',
          client: 'Sevenplus',
          year: '2023',
          role: '작품 아카이브 UX, 카드형 그리드 UI, 반응형 최적화',
          challenge: '실적이 많아도 규격 불일치로 임팩트 약화',
          solution: '동일 규격 카드에 타이틀·크레딧·연도 통일. 다크 블루 배경으로 포스터 색감 강조',
          results: [
            '한눈에 전문성과 작업 폭이 전달되어 제안·섭외에 유리',
          ],
        },
        {
          type: 'image',
          url: 'https://cdn.imweb.me/thumbnail/20251113/5aff9e19acb52.png',
          client: 'Jin & Food',
          year: '2023',
          role: '톤앤매너 정의, 메뉴·주문 UX, 반응형 웹 디자인',
          challenge: '메뉴·옵션이 많아 주문이 복잡해 보이고 문의만 증가',
          solution: '대표 메뉴 한 컷 + 가치 한 줄로 신뢰 선 전달. 구성 사진·설명을 같은 눈높이에 정렬. FAQ는 아코디언으로 즉시 확인',
          results: [
            ' 선택 기준이 화면 안에서 바로 형성되어 주문 장벽이 낮아짐',
          ],
        },
        {
          type: 'image',
          url: 'https://cdn.imweb.me/thumbnail/20251117/95b747e891c3f.jpg',
          client: 'Film Minon',
          year: '2023',
          role: '카피라이팅 가이드, 미니멀 UI, 문의 전환 UX',
          challenge: '감성과 전환을 동시에 잡기 어려움. 콘텐츠가 많아지면 느리고 이탈 증가',
          solution: '여백 중심 레이아웃에 대표 영상 1개 집중. ‘왜 필름미뇽인가’를 카드형 요약으로 스크롤 이해화',
          results: [
            '감성과 정보 균형으로 끝까지 읽히고 자연스러운 문의 유도',
          ],
        },
      ]}
    />
  );
}