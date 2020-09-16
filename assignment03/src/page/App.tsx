import React from 'react';
import Header from '../template/Header';
import Content from '../template/Content';
import Footer from '../template/Footer';

import 'antd/dist/antd.css';

interface State {
  ElementArray: Array<{
    id: number;
    left: boolean;
    title: string;
    content: string;
    buttons: Array<string>;
  }>;
  FooterArray: Array<{
    title: string;
    subtitle: Array<string>;
  }>;
}
interface Props {}

class App extends React.Component<Props, State> {
  state: State = {
    ElementArray: [
      {
        id: 1,
        left: true,
        title: '뛰어난 지원자 관리 기능',
        content: '효율적인 지원자 관리를 위한 다양한 기능들이 준비되어있습니다',
        buttons: ['대시보드', '알람기능', '일정관리'],
      },
      {
        id: 2,
        left: false,
        title: '간단한 채용준비',
        content: '적은 비용과 시간으로 채용 준비를 완료 할 수 있습니다',
        buttons: ['지원서, 동의서', '채용공고', '채용 홈페이지'],
      },
      {
        id: 3,
        left: true,
        title: '다양한 지원자 평가 도구',
        content: '지원자 평가를 위한 다양한 도구가 준비되어 있습니다.',
        buttons: ['면접', '과제', '필기, 코멘트'],
      },
      {
        id: 4,
        left: false,
        title: '채용 자동화',
        content:
          '자동화를 통해 반복되는 작업을 줄일 수 있고 지원자에게 빠르게 피드백 할 수 있습니다.',
        buttons: ['지원자 알림 자동화', '필기 준비 자동화'],
      },
      {
        id: 5,
        left: true,
        title: '커스텀 브랜딩',
        content: '지원자에게 보이는 모든 정보는 회사에 맞게 커스텀 가능합니다.',
        buttons: ['채용 홈페이지 제작', '회사로고', '커스텀 도메인'],
      },
      {
        id: 6,
        left: false,
        title: '보안 및 채용 절차법',
        content: '보안 및 채용절차법을 지킵니다.',
        buttons: ['구성원 내 권한 관리', '채용 절차법', '서버, 데이터 보안'],
      },
    ],
    FooterArray: [
      {
        title: '기능소개',
        subtitle: [
          '지원자 관리',
          '채용 준비',
          '지원자 평가 도구',
          '자동화',
          '커스텀 브랜딩',
          '보안 및 채용절차법',
        ],
      },

      {
        title: '요금 안내',
        subtitle: [],
      },

      {
        title: '도입 문의',
        subtitle: [],
      },
    ],
  };
  render() {
    return (
      <div>
        <Header />
        <Content ElementArray={this.state.ElementArray} />
        <Footer FooterArray={this.state.FooterArray} />
      </div>
    );
  }
}

export default App;
