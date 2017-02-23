var React = require('react');
var Header = require('./Header.react');
var Contents = require('./Contents.react');

var Container = React.createClass({
  render: function() {
    return ( 
      <section class='container'>
        <Header />
        <hr/>
        <Contents />
      </section>
    );
  },

	/*
    마운트 단계 메소드.
    가장 먼저 실행.
    React가 컴포넌트를 DOM에 삽입하기 전에 실행.
    render() 전에 호출 됨.
    컴포넌트에 상태를 갖도록 하려면, 이메소드를 사용해 컴포넌트의 상태(this.state)를 반환.
  */
  getInitialState: function () {
    return null;
  },

  /*
    마운트 단계 메소드
    두번째로 실행.
    React가 컴포넌트를 DOM에 삽입하기 전에 실행.
    render() 전에 호출 됨.
    컴포넌트 상태 update.
  */
  componentWillMount: function () {},

  /*
    마운트 단계 메소드
    render() 후에 호출
    React가 컴포넌트를 DOM에 삽입한 직후에 호출
    DOM에 접근하는 다른 자바스크립트 라이브러리를 초기화하는데 최적의 위치.
  */
  componentDidMount: function () {},

  /*
    마운트 해재 단계 호출
    React가 DOM에서 컴포넌트를 제거하고 소멸시키기 직전에 호출.
    생성된 데이터를 정리, 삭제 하는데 유용.
  */
  componentWillUnmount: function () {},
  
  /*
    컴포넌트 생명주기의 업데이트 단계에서 가장 먼저 실행됨.
    render() 전에 호출 됨.
    부모 컴포넌트로 부터 새로운 프로퍼티를 받을 때 호출.
  */
  componentWillReceiveProps: function (nextProps) {},

  /*
    컴포넌트 생명주기의 업데이트 단계에서 두번째로 호출 됨.
    컴포넌트의 재렌더링 여부를 결정할 수 있음.
    render() 전에 호출 됨.
    false를 리턴하면 이후 메소드들은 호출 되지 않음.
  */
  shouldComponentUpdate: function (nextProps, nextState) {
    return true;
  },

  /*
    React가 DOM을 업데이트하기 바로 직전에 호출.
    render() 전에 호출 됨.
  */
  componentWillUpdate: function (nextProps, nextState) {},

  /*
    React에서 DOM을 업데이트하자마자 호출.
    render() 후에 호출 됨.
  */
  componentDidUpdate: function (prevProps, prevState) {}

});

module.exports = Container;