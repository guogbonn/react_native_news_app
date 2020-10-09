import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  List,
  ListItem,
  Thumbnail,
  Button,
  Body,
  Right,
  Title,
  ScrollableTab,
} from "native-base";
import Tab1 from "./tabs/tabOne";
import Tab2 from "./tabs/tabTwo";
import Tab3 from "./tabs/tabThree";

export default class TabContainer extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "black" }} hasTabs>
          <Left />
          <Body>
            <Title style={{ color: "white" }}>Header</Title>
          </Body>
          <Right />
        </Header>
        <Tabs
          tabBarUnderlineStyle={{ backgroundColor: "black" }}
          renderTabBar={() => <ScrollableTab />}
        >
          <Tab tabStyle={{}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{}} heading="Buisness">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
