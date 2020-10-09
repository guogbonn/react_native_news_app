import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.time;
  }
  render() {
    const time = moment(this.data || moment.now()).fromNow();

    return <Text note>{time}</Text>;
  }
}
export default Time;
