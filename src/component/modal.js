import React from "react";
import { Dimensions, Modal, Share, View, Text, StyleSheet } from "react-native";
import WebView from "react-native-webview";
import moment from "moment";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";
import Time from "./time";

const webViewHeight = Dimensions.get("window").height - 56;

class ModalDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };
  handleShare = () => {
    const { url, title } = this.props.articleData;
    const message = `${title}\n\n ReadMore @${url}\n\n Shared via RN New App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };

  render() {
    const { showModal, articleData } = this.props;
    const { url } = articleData;
    const webview = url == "" ? null : null;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container
            style={{ margin: 15, marginBottom: 0, backgroundColor: "white" }}
          >
            <Header style={{ backgroundColor: "black" }}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{ color: "white", fontSize: 38 }} />
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{ color: "white" }}
                />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{ color: "white", fontSize: 38 }} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{ height: webViewHeight }}>
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={this.handleClose}
                startInLoadingState
                scalesPageToFit
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
export default ModalDisplay;
