import React from 'react';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
// import NavDropdown from 'react-bootstrap/lib/NavDropdown';
// import MenuItem from 'react-bootstrap/lib/MenuItem';
// import PageHeader from 'react-bootstrap/lib/PageHeader';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, PageHeader} from 'react-bootstrap'

export default class Header extends React.Component {
  constructor (props, context) {
    super(props, context);
    // this.state=null;
  }

  render () {
    return (
      <PageHeader>Developer &#39;s Record <small>개발자의 기록보관소</small></PageHeader>
      // <section>
      //   <h1>This is Header</h1>
      //   <div>
      //     <Button bsStyle="success" bsSize="big" onClick="{this.click()}">
      //       Something
      //     </Button>
      //   </div>
      // </section>

      // <Navbar inverse collapseOnSelect>
      //   <Navbar.Header>
      //   <Navbar.Brand>
      //     <a href="#">React-Bootstrap</a>
      //     </Navbar.Brand>
      //       <Navbar.Toggle />
      //     </Navbar.Header>
      //   <Navbar.Collapse>
      //     <Nav>
      //       <NavItem eventKey={1} href="#">Link</NavItem>
      //       <NavItem eventKey={2} href="#">Link</NavItem>
      //       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      //       <MenuItem eventKey={3.1}>Action</MenuItem>
      //       <MenuItem eventKey={3.2}>Another action</MenuItem>
      //       <MenuItem eventKey={3.3}>Something else here</MenuItem>
      //       <MenuItem divider />
      //       <MenuItem eventKey={3.3}>Separated link</MenuItem>
      //       </NavDropdown>
      //     </Nav>
      //     <Nav pullRight>
      //       <NavItem eventKey={1} href="#">Link Right</NavItem>
      //       <NavItem eventKey={2} href="#">Link Right</NavItem>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
    );
  }
  
  click() {
    alert('abc');
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