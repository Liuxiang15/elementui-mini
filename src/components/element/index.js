import Row from '@element/Row';
import Col from '@element/Col';
import Container from '@element/container';
import Main from '@element/main';
import Header from '@element/header';
import Footer from '@element/footer';
import Aside from '@element/aside';
import Icon from '@element/icon';
import Button from '@element/button';
import ButtonGroup from '@element/button-group';


const components = [Row, Col, Container, Main, Header, Footer, Aside, Icon, Button, ButtonGroup];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,

};

export {
  Row, Col, Container, Main, Header, Footer, Aside, Icon, Button, ButtonGroup,
};
