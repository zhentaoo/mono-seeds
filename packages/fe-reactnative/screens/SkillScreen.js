import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SkillScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor(props) {
    super(props);
    this.state = {
      arr: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    // var res = await fetch('https://www.apiopen.top/satinApi?type=1&page=1')
    var res = await fetch('http://127.0.0.1:7001/')
    res = await res.json();

    this.setState({
      arr: res.data
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.state.arr.map((el, i) => {
            return (
              <View key={i} >
                <Text style={styles.welcome}>{el.text}</Text>
                <Image source={{ uri: el.image1 || 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559298854380&di=1001947216ce2209ebfcff98bddd4157&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fca3246479b371619a4aed515ed66ac29ec30404ab0f4-fLpf1D_fw658' }}
                  style={{ width: 300, height: 400 }} />
              </View>
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

