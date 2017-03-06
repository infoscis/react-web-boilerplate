import React from 'react';
import LeftMenu from './LeftMenu.react';
import {Col, Row, Jumbotron, Panel, Form, ListGroup, ListGroupItem, PanelBody} from 'react-bootstrap';

export default class Contents extends React.Component {
  constructor (props, context) {
    super(props, context);
    // this.state=null;
  }

  render () {
    return ( 
      <div>
        <Jumbotron>
          <p>이곳은 제가 공부하거나 조사한 자료를 정리하고자 만든 공간입니다.</p>
          <p>개발자 일을 하면서 항상 많은 자료를 인터넷에서 찾곤 했습니다. 대부분 Google에서 영문 자료를 찾고, 몇번씩 읽고 이해를 했지만, 막상 프로그램에 반영할려고 하면 또 집중해서 영문 자료를 읽고 이해를 해야 했습니다.</p>
          <p>어느날인가 문득 내가 이해한 내용을 정리해서 메모를 해둘 곳을 하나 만들어야지 생각했습니다. 계속 맘만 먹고 있다가 React도 공부할겸 Github page를 만들기로 했습니다.</p>
          <p>이 사이트의 목적은 기록 보관과 지식의 전파입니다. 다른 블로거들 처럼 예쁘고 화려하게 만들면 좋겠지만, 크게 신경쓰지 않을 예정입니다. 더해서 다른 개발자에게 도움을 줄수 있으면 좋겠습니다.</p>
        </Jumbotron>
        <Form>
          <Panel collapsible defaultExpanded header="Java">
            <ListGroup fill>
              <ListGroupItem>JDK 9 Preview</ListGroupItem>
              <ListGroupItem>Riding on the Narthorn</ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
            </ListGroup>
          </Panel>
          <Panel collapsible defaultExpanded header="Hadoop">
            <ListGroup fill>
              <ListGroupItem>Yarn Sample</ListGroupItem>
              <ListGroupItem>Map-Reduce</ListGroupItem>
            </ListGroup>
          </Panel>
          
        </Form>
      </div>
    );
  }
  
  

  /*
    마운트 단계 메소드
    두번째로 실행.
    React가 컴포넌트를 DOM에 삽입하기 전에 실행.
    render() 전에 호출 됨.
    컴포넌트 상태 update.
  */
  componentWillMount () {}

  /*
    마운트 단계 메소드
    render() 후에 호출
    React가 컴포넌트를 DOM에 삽입한 직후에 호출
    DOM에 접근하는 다른 자바스크립트 라이브러리를 초기화하는데 최적의 위치.
  */
  componentDidMount () {}

  /*
    마운트 해재 단계 호출
    React가 DOM에서 컴포넌트를 제거하고 소멸시키기 직전에 호출.
    생성된 데이터를 정리, 삭제 하는데 유용.
  */
  componentWillUnmount () {}
  
  /*
    컴포넌트 생명주기의 업데이트 단계에서 가장 먼저 실행됨.
    render() 전에 호출 됨.
    부모 컴포넌트로 부터 새로운 프로퍼티를 받을 때 호출.
  */
  componentWillReceiveProps(nextProps) {}

  /*
    컴포넌트 생명주기의 업데이트 단계에서 두번째로 호출 됨.
    컴포넌트의 재렌더링 여부를 결정할 수 있음.
    render() 전에 호출 됨.
    false를 리턴하면 이후 메소드들은 호출 되지 않음.
  */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  /*
    React가 DOM을 업데이트하기 바로 직전에 호출.
    render() 전에 호출 됨.
  */
  componentWillUpdate (nextProps, nextState) {}

  /*
    React에서 DOM을 업데이트하자마자 호출.
    render() 후에 호출 됨.
  */
  componentDidUpdate (prevProps, prevState) {}

};