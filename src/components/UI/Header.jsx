import { Button, Card, Typography, Row, Col } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const Header = () => {
  const { Title } = Typography;

  return (
    <header>
      <Card className="header__card">
        <Row justify="space-between" align="middle">
          <Col>
            <Title type="primary" className="logo">
              Todos Advanced
            </Title>
          </Col>
          <Col>
            <Button
              type="primary"
              target="_blank"
              href="https://github.com/amirabasidev"
              className="github__btn"
            >
              <GithubOutlined className="github__icon"/> My Github
            </Button>
          </Col>
        </Row>
      </Card>
    </header>
  );
};

export default Header;
