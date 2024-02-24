import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  inha,
  lion,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Computer Vision Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Inha University Student',
    companyName: 'Inha Univ',
    icon: inha,
    iconBg: '#383E56',
    date: 'March 2020 - February 2026',
    points: [
      '정보통신공학과 재학',
      '인하대학교 SW-Innovation Academy 1기 회장',
      '인하대학교 정보통신공학과 Wearable Lab 학부연구생 23.07 ~ 23.12',
      '인하대학교 전자공학과 CVIP Lab 학부연구생 2023.12 ~ ING.',
    ],
  },
  {
    title: 'Like Lion - Inha Univ',
    companyName: 'Like Lion',
    icon: lion,
    iconBg: '#E6DEDD',
    date: 'March 2023 - Feb 2025',
    points: [
      '인하대학교 멋쟁이 사자처럼 11기 아기사자 수료',
      '중앙 해커톤 및 아이디어톤 참가',
      '인하대학교 멋쟁이 사자처럼 12기 회장',
      '타 대학교와의 연합 프로젝트 기획 및 12기 활동 총괄',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Focus',
    icon: inha,
    iconBg: '#383E56',
    date: 'Sep 2023 - Feb 2024',
    points: [
      '인하대학교 SW Innovation Academy 개발 및 참가',
      'Front end Developer',
      '다수의 서비스 에서 Front end로 참가',
      '헤헤 신난다.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Innothink Makerton',
    description:
      '공유 킥보드 문제해결 - 헬로킥티, 킥보드 주차 시 킥보드 군집에 붙여 주차하도록 주차 권장 구역을 계산, 제시 주차 권장 구역은 군집을 이룬 킥보드를 기준으로 형성됨 견인 다발 구역은 제외,주차 금지 구역, 견인 다발 구역에 주차된 전동 킥보드를 사용자가 견인하도록 유도',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'kakao api',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink:
      'https://mirror-product-be5.notion.site/Innothink-c37e7524632d4a9eb1a8a38c2177ed7a?pvs=74',
  },
  {
    name: 'POP CON',
    description:
      '팝업 소셜 플랫폼, POPCON은 온라인을 통하지 않으면 구매하기 힘든, 경험하기 힘든 것들을 팝업의 형태로 오프라인으로 구현하여 모두에게 기회를 부여하고자 한다. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink:
      'https://mirror-product-be5.notion.site/POPCON-dccc20e37f7440ac8900c76cfa99953b',
  },
  {
    name: 'Mohamed',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react & Flask',
        color: 'blue-text-gradient',
      },
      {
        name: 'jetson Nano',
        color: 'green-text-gradient',
      },
      {
        name: 'moblienet & arduino',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink:
      'https://mirror-product-be5.notion.site/Advantech-Alot-Project-433f3f771ae34afeb3aea574d9b44b64?pvs=74',
  },
];

export { services, technologies, experiences, testimonials, projects };
