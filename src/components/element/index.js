import Row from '@element/Row';
import Col from '@element/Col';
import Container from '@element/container';
import Main from '@element/main';
import Header from '@element/header';
import Footer from '@element/footer';
import Aside from '@element/aside';

const components = [Row, Col, Container, Main, Header, Footer, Aside];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,

};

export {
  Row, Col, Container, Main, Header, Footer, Aside,
};
