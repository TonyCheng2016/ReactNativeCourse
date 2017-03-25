// Import libraries for making a component
import React from 'react';
import { Text, View ,Image ,ScrollView} from 'react-native';
import SecBlock from './component/pg2block';
import FourBtn from './component/pg2-3button';
// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, imageStyle ,
      imageBlockLeftStyle, imageBlockRightStyle , 
    textBlockStyle , blockStyle, imgSmallStyle ,
    imageLargeStyle ,searchBlockStyle,lineStyle} = styles;

  return (
    <View style={{flex: 1}}>
      <View style={viewStyle}>
          <View style={[searchBlockStyle,blockStyle]}>
            
                <Image source ={require('./img/icon_search.png')} style={imageBlockLeftStyle} />
        
            
                <Text style={[textStyle, { color: props.textColor }]}>{props.headerText}</Text>
            
          </View>
          <View  style={imageBlockRightStyle}>
              <Image source ={require('./img/btn_cast.png')} style={imageStyle} />
          </View>
      </View>
      <ScrollView>
      <ScrollView directionalLockEnabled={false} horizontal={true}>
      <View style={[{backgroundColor: 'rgb(241,241,241)'},blockStyle]}>
          <Image source ={require('./img/img_leagueoflegends.png')} style={imageLargeStyle} />
          <Image source ={require('./img/img_counterstrike.png')} style={imageLargeStyle} />
          
      </View>
      </ScrollView>
      <ScrollView directionalLockEnabled={false} horizontal={true}>
      <View style={[{backgroundColor: 'rgb(241,241,241)'},blockStyle]}>
          <Image source ={require('./img/img_hearthstone.png')} style={imageLargeStyle} />
          <Image source ={require('./img/img_dota2.png')} style={imageLargeStyle} />
          
      </View>
      </ScrollView>
      <ScrollView directionalLockEnabled={false} horizontal={true}>
      <View style={[{backgroundColor: 'rgb(241,241,241)'},blockStyle]}>
          <Image source ={require('./img/img_h1z1.png')} style={imageLargeStyle} />
          <Image source ={require('./img/img_destiny.png')} style={imageLargeStyle} />
          
      </View>
      </ScrollView>
      </ScrollView>
      <View style={lineStyle}></View>
      <View style={[blockStyle,{marginTop:0}]}>
            <View >
            <Image  source ={require('./img/btn_games_selected.png')} style={imgSmallStyle}/>
            <FourBtn btnName={'Games'} btntextColor={'rgb(100,65,165)'}  />
            </View>
            <View >
            <Image  source ={require('./img/btn_channels.png')} style={imgSmallStyle}/>
            <FourBtn btnName={'Channels'} btntextColor={'rgb(187,187,187)'} />
            </View>
            <View >
            <Image  source ={require('./img/btn_following.png')} style={imgSmallStyle}/>
            <FourBtn btnName={'Following'} btntextColor={'rgb(187,187,187)'} />
            </View>
            <View >
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
    height: 64,
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
    marginTop:5,
    marginLeft: 5.5,
  },
  textBlockStyle: {

    width: 108,
    height: 21.5,
    marginLeft: 92,
    marginTop: 20
  },
  imageStyle: { 
      marginTop: 5,
      justifyContent: 'center',
      height: 33,
      width:  33
  },
  imageBlockLeftStyle: {
      justifyContent: 'center',
    marginTop: 6,
    marginLeft: 8.5,
     height: 18,
      width:  18,
   
  },
  imageBlockRightStyle: {
    marginTop: 5,
    marginLeft: 5,
  },
  blockStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
  },
  imageLargeStyle: {
    marginLeft: 4.5,
    marginTop: 5,
    width:180,
    height:180,
  },
  searchBlockStyle: {
      backgroundColor: 'rgb(49,31,83)',
      width: 320,
      height: 30,
      marginLeft: 8.5,
      marginTop: 6.5,
  },
  lineStyle: {
      width:375,
      height: 0.5,
      backgroundColor: 'rgba(0,0,0,0.2)',
      
  },
  imgSmallStyle: {
      width: 94,
      height: 49,
      
  }
};

// Make the component available to other parts of the app
export default Header;
