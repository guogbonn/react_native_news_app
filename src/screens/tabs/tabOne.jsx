import React, { Component } from "react";
import { Alert, View, ActivityIndicator } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { getArticles } from "../../service/news";

import DataItem from "../../component/dataItem";
import ModalDisplay from "../../component/modal";

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }
  componentDidMount() {
    getArticles("general").then(
      (data) => {
        this.setState({
          isLoading: false,
          data,
        });
      },
      (error) => {
        Alert.alert("Error", "Something Went wrong on our end");
      }
    );
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  render() {
    const data =
      this.state.isLoading == false ? (
        this.state.data.map((item, id) => {
          return (
            <DataItem
              onPress={this.handleItemDataOnPress}
              key={id}
              data={item}
            />
          );
        })
      ) : (
        <View>
          <ActivityIndicator animating={this.state.data == null} />
          <Text style={{ marginTop: 10 }}>Please Wait..</Text>
        </View>
      );

    return (
      <Container>
        <Content>
          <List>{data}</List>
          <ModalDisplay
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this.handleModalClose}
          />
        </Content>
      </Container>
    );
  }
}
