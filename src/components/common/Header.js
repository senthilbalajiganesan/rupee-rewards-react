import React, { Component } from "react";
import { View, Image, Text } from "react-native-web";
import colors from "../../utils/colors";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Popconfirm from "antd/lib/popconfirm";
import Layout from "antd/lib/layout";
import styles from "../Base/style";
const { Header } = Layout;

const logo = require("../../assets/images/logo.png");

class CustomHeader extends Component {
  render() {
    return (
      <Header style={{ background: "#ddd", padding: 0 }}>
        <Row>
          <Col push={10} span={4}>
            <View style={[styles.logoView_sider, { margin: 0 }]}>
              <Image source={logo} style={{ width: 50, height: 50 }} />
              <Text style={[styles.logoText_sider, { color: colors.black }]}>
                Rupee Rewards
              </Text>
            </View>
          </Col>
          <Col span={3} push={17}>
            <Popconfirm
              title="Are you sure, you want to log out?"
              okText="Yes"
              cancelText="No"
            >
              <a>
                <Text style={{ color: colors.red }}>Logout</Text>
              </a>
            </Popconfirm>
          </Col>
        </Row>
      </Header>
    );
  }
}
export default CustomHeader;
