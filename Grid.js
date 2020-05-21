import React, { PureComponent } from 'react';
import { View, StyleSheet, Image ,Text} from 'react-native';

import GridList from 'react-native-grid-list';

const items = [
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } },
  { thumbnail: { uri: 'https://www.jagranjosh.com/imported/images/E/Articles/cbse-board-exam-2020-12th-maths-paper-last-month-tips-updates.webp' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } },
  { thumbnail: { uri: 'https://www.jagranjosh.com/imported/images/E/Articles/cbse-board-exam-2020-12th-maths-paper-last-month-tips-updates.webp' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } }, 
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } },
  { thumbnail: { uri: 'https://www.jagranjosh.com/imported/images/E/Articles/cbse-board-exam-2020-12th-maths-paper-last-month-tips-updates.webp' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } },
  { thumbnail: { uri: 'https://www.jagranjosh.com/imported/images/E/Articles/cbse-board-exam-2020-12th-maths-paper-last-month-tips-updates.webp' } }, 
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } }, 
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } }, 
  { thumbnail: { uri: 'https://miro.medium.com/max/1400/1*Nvhe7mchQmJBgyVx-uOBrA.png' } },
  { thumbnail: { uri: 'https://www.jagranjosh.com/imported/images/E/Articles/cbse-board-exam-2020-12th-maths-paper-last-month-tips-updates.webp' } }, ];

const names = [name="dkd",
        name=";wke",name="wjdwqjd",name="wewioe",name="ldkl;kd",name="dkd",
        name=";wke",name="wjdwqjd",name="wewioe",name="ldkl;kd",name="dkd",
        name=";wke",name="wjdwqjd",name="wewioe",name="ldkl;kd"];

export default class Grid extends PureComponent {
  renderItem = ({ item, index }) => (
    <View style={styles.backg}    >
    <Image style={styles.image} source={item.thumbnail} />
    <Text style={styles.textstyle} key={index}>Subject</Text>
    </View>
  );

render() {
    return (
      <View style={styles.container}>
        <GridList
          showSeparator
          data={items}
          numColumns={3}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin:5,
    padding:5

  },
  image: {
    width: 80,
    height:80,
    borderRadius: 50,
    alignSelf:"center"
  },
  textstyle:{
    alignSelf:"center",
    margin:5
  },
  backg:{
    margin:5,
    padding:5
  }
});