import ProjectDetail from '../components/ProjectDetail';

export default function Project2() {
  return (
    <ProjectDetail
      id={2}
      title="Video Advertising"
      category="Contents"
      description="브랜드의 메시지를 효과적으로 전달하는 @@고품질 영상 광고를 제작합니다.
      |@@감성과 스토리텔링으로 고객에게 @@브랜드의 가치를 전달합니다."
      media={[
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763014478/beauty_1_lvjn2l.mov',
          client: '뷰티·스킨케어',
          year: '2025',
          role: 'AI 제품 연출 영상, 채널별 자동 리사이즈',
          challenge: '짧은 시간에 질감과 포인트를 명확히 보여주기',
          solution: '질감·발색을 살린 컷 구성, 9:16·1:1·16:9 자동 변환',
          results: [
            '한 소스로 여러 채널 운영, 제작 시간 단축',
          ],
        },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763001969/A_short_cinematic_202511052021_2_x1dk8d.mp4',
          client: '콘텐츠·애니 스튜디오',
          year: '2025',
          role: '프리비즈, 모션 보정, 하이라이트 편집',
          challenge: '다양한 씬을 리듬감 있게 압축',
          solution: '씬 유사도 기반 템포 설계, 키프레임 보정',
          results: [
            '시청 유지율 상승, 티저→본편 유입 강화',
          ],
        },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763013780/grok-video-d2ee4360-52fc-4d05-8790-9c54a133ed21_cgpiih.mp4',
          client: '패션 커머스',
          year: '2025',
          role: '룩북 컷다운, UGC 스타일 합성, CTA 편집',
          challenge: '무드와 상품 디테일을 함께 전달',
          solution: '무드→제품→오퍼 3단 구성, 브랜드 폰트·컬러 자동 적용',
          results: [
            '상품 페이지 진입률 개선, 시즌별 파생 제작 간편',
              ],
        },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1762693847/A_slow_smooth_202511092209_1_x7y6tx.mp4',
          client: '스타트업·리브랜딩',
          year: '2024',
          role: '스토리보드·카피 보조, 나레이션 합성',
          challenge: '짧게 ‘우리의 이유’를 각인',
          solution: '미션·문제·해결 스크립트, 시각 메타포 제안',
          results: [
            '컨셉 확정 빠름, 다국어·다형식 확장 용이',
          ],
            },
        {
          type: 'video',
          url: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763009913/grok-video-4f7aca2e-7b2c-401c-b687-92a38be1b94c_kac854.mp4',
          client: '패션 캠페인',
          year: '2025',
          role: '시네마틱 편집, 컬러·룩 정보 연동',
          challenge: '감성과 정보의 균형으로 전환 유지',
          solution: '컬러 매칭·안정화 보정, 타임코드에 제품 정보 매핑',
          results: [
            '감상→구매 이탈 감소, 크리에이티브 테스트 효율 향상',
          ],
        },
      ]}
    />
  );
}
