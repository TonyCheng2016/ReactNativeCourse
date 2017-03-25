// Import libraries for making a component
import React from 'react';
import { Text, View ,Image ,ScrollView} from 'react-native';
import SecBlock from './component/pg2block';
import FourBtn from './component/pg2-3button';
// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, imageStyle ,imageBlockLeftStyle, imageBlockRightStyle , 
    textBlockStyle ,blockStyle, lineStyle, imageLargeStyle,imgSmallStyle} = styles;

  return (
    <View style={{flex:1}}>
      <View style={viewStyle}>
          <View  style={imageBlockLeftStyle}>
              <Image source ={require('./img/btn_back.png')} style={imageStyle} />
          </View>
          <View style={textBlockStyle}>

            <Text style={[textStyle, { color: props.textColor }]}>{props.headerText}</Text>
          </View>
          <View  style={imageBlockRightStyle}>
              <Image source ={require('./img/btn_like.png')} style={imageStyle} />
          </View>
      </View>
      <View style={blockStyle}>
        <SecBlock secBlockText={'LIVE'} textColor={'rgb(100,65,165)'}/>
        <SecBlock secBlockText={'RECENT'} textColor={'rgb(187,187,187)'}/>
        
      </View>
      <View style={lineStyle}></View>
      <ScrollView>
      <View style={[{backgroundColor: 'rgb(241,241,241)'}]}>
          <Image source ={require('./img/img_firebat.png')} style={imageLargeStyle} />
          <Image source ={require('./img/img_forsen.png')} style={imageLargeStyle} />
          <Image source ={require('./img/img_kolento.png')} style={imageLargeStyle} />
      </View>
      </ScrollView>
      <View style={[blockStyle,{marginTop:-105}]}>
          
          <View style={{backgroundColor: 'white'}}>
            <Image  source ={require('./img/btn_games_selected.png')} style={imgSmallStyle}/>
            <FourBtn btnName={'Games'} btntextColor={'rgb(100,65,165)'}  />
            </View>
            <View style={{backgroundColor: 'white'}}>
            <Image  source ={require('./img/btn_channels.png')} style={imgSmallStyle}/>
            <FourBtn btnName={'Channels'} btntextColor={'rgb(187,187,187)'} />
            </View>
            <View style={{backgroundColor: 'white'}}>
            <Image  source ={require('./img/btn_following.png')} style={imgSmallStyle}/>
            <FourBtn btnName={'Following'} btntextColor={'rgb(187,187,187)'} />
            </View>
            <View style={{backgroundColor: 'white'}}>
            <Image  source ={require('./img/btn_me.png')} style={imgSmallStyle}/>
            <FourBtn btnName={'Me'} btntextColor={'rgb(187,187,187)'} />
            </View>

          
      </View>
      
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(100,65,165)',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    //marginTop: 20,
    height: 64,
    //paddingTop: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  textStyle: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  textBlockStyle: {
    //flexDirection: 'column',
    //backgroundColor: 'yellow',
    width: 108,
    height: 21.5,
    marginLeft: 92,
    marginTop: 20
  },
  imageStyle: { 
      marginTop: 5,
      //backgroundColor: 'gray',
      justifyContent: 'center',
      height: 33,
      width:  33
  },
  imageBlockLeftStyle: {
    marginTop: 20,
    marginLeft: 8.5,
   
  },
  imageBlockRightStyle: {
    marginTop: 20,
    marginLeft: 92,
  },
  blockStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
  },
  lineStyle: {

    height:5,
    width: 187.5,
    backgroundColor: 'rgb(100,65,165)',
    marginTop: -5,
  },
  imageLargeStyle: {
    marginLeft: 4.5,
    marginTop: 5,
    width:365,
    height:200,
  },
  imgSmallStyle: {
    width: 94,
    height:49,
  },
};

// Make the component available to other parts of the app
export default Header;
