import React from 'react';
import { ScrollView, Linking, TouchableHighlight, View, Alert } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';

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

  return (
    <ScrollView>

      <Tile
        imageSrc={{ uri: image }}
        featured
        title={District.toUpperCase()}
        caption={Name.toUpperCase()}
      />

      <PricingCard
        color='#4f9deb'
        title={`新北市 ${District}`}
        //price={`地址: ${Address}`}
        info={[`Tel: ${Tel}`, `地址: ${Address}`]}
        button={{ title: '電話掛號', icon: 'call' }}
        onButtonPress={() => Linking.openURL(url)}
      />

      <Card>
        <Text style={boldFont}>Descriptions:</Text>
        <Text style={{ marginBottom: 10 }}>
          {Description}
        </Text>

        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            `${Name}`,
            `${Tel}`,
            [
              { text: 'No', onPress: () => console.log('Cancel Pressed!') },
              { text: 'Call', onPress: () => console.log('OK Pressed!') },
            ]
          )}>

          <View style={styles.button}>
            <Button
              raised
              icon={{ name: 'call' }}
              backgroundColor='#03A9F4'
              title={`${Tel}`}
            //onPress={() => Linking.openURL(url)}
            />
          </View>

        </TouchableHighlight>

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
    padding: 10,
    alignItems: 'center'
  }
};


export default Details;
