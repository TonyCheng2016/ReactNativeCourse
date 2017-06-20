import React from 'react';
import { ScrollView, Linking, TouchableHighlight, View, Alert } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';
import Message from './Message';
import Star from '../components/Star';
// Make a component
const Details = (props) => {
  const { No,
    Name,
    District,
    Address,
    Tel,
    image,
    Description
  } = props.navigation.state.params;

  const { boldFont, wrapper, button } = styles;

  goToChatPage = () => {
    // this.props.navigation.navigate('Message');
    <Message />
  };

  return (
    <ScrollView>

      <Tile
        imageSrc={{ uri: image }}
        featured
        title={District.toUpperCase()}
        caption={Name.toUpperCase()}
      />
      <TouchableHighlight style={styles.wrapper}
        onPress={() => Alert.alert(
          `${Name}`,
          `${Tel}`,
          [
            { text: 'No', onPress: () => console.log('Cancel Pressed!') },
            { text: 'Call', onPress: () => console.log('OK Pressed!') },
          ]
        )}>
        <View>
        <PricingCard
          color='#dd3333'
          title={`新北市 ${District}`}
          //price={`地址: ${Address}`}
          info={[`Tel: ${Tel}`, `地址: ${Address}`]}
        button={{ title: '電話掛號', icon: 'call' }}
        onButtonPress={() => Linking.openURL()}
        />
        </View>
      </TouchableHighlight>

      <Star />
      <Button
        raised
        icon={{ name: 'message' }}
        backgroundColor='#dd3333'
        title={`Message`}
        //onPress={() => Linking.openURL(url)}
        onPress={() => this.goToChatPage()}
      />
      <Card>
        <Text style={boldFont}>Descriptions:</Text>
        <Text style={{ marginBottom: 10 }}>
          {Description}
        </Text>






      </Card>

    </ScrollView>
  );
};

const styles = {
  boldFont: {
    fontWeight: 'bold'
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#03A9F4',
    padding: 5,
    alignItems: 'center'
  }
};


export default Details;
