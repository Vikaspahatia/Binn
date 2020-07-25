import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  PanResponder,
  Animated,
  LayoutAnimation,
  UIManager,
  ScrollView,
  Dimensions,
  View,
  Text,
  StatusBar,
} from 'react-native';
const SCREEN_WIDTH=Dimensions.get('window').width;
const SWIPE_LIMIT=SCREEN_WIDTH/2;
export default class Binn extends Component
{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
        const position  =new Animated.ValueXY();
        this.panResponder=PanResponder.create({
          onStartShouldSetPanResponder:()=>true,
          onPanResponderMove:(e,gesture)=>{
  position.setValue({x:gesture.dx,y:gesture.dy})  
          },
          onPanResponderRelease:(e,gesture)=>{
              if(gesture.dx>SWIPE_LIMIT)
              {
                  
                  this.swiped("right")
              }else if(gesture.dx<(-SWIPE_LIMIT))
              {
                
                  this.swiped("left")
              }
              else{
                  this.resetPosition()
              }
             // this.resetPosition()
          }
    
        })
        this.position = position;
      }
      componentDidUpdate()
      {
          UIManager.setLayoutAnimationEnabledExperimental
          &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
          LayoutAnimation.spring();
      }
      swiped(direction)
      {
          const p=direction ==="right"? SCREEN_WIDTH*3 :-SCREEN_WIDTH*3
Animated.timing(this.position,{
    
toValue:{x:p,y:0}
}).start(()=>{
    this.position.setValue({x:0,y:0}),
    this.setState({index:this.state.index+1})
})
      }
      resetPosition()
      {
          Animated.spring(this.position,
            {
                toValue:{x:0,y:0},
                stiffness:200
            }).start()
      }
    mycardStyle()
      {
          const rotat=this.position.x.interpolate({
              inputRange:[-SCREEN_WIDTH,0,SCREEN_WIDTH],
              outputRange:['-80deg','0deg','80deg']
          });
         
               
                   return {
                              ...(this.position.getLayout()),
        transform : [{rotate:rotat}]
                   }
                
      }
    rendercard()
    {
        if(this.state.index>=this.props.data.length)
        {
            return this.props.rendernomorecards()
        }
        return this.props.data.map((item,i)=>{
            if(i<this.state.index)
            {
                return null
            }
            if(i===this.state.index)
            {
                return (
                    <Animated.View 
                    key={item.id}
                    style={[this.mycardStyle(),styles.cardStyle]}
                    {...this.panResponder.panHandlers}
                    >
                    {this.props.renderCards(item)}
                   </Animated.View>
                )
             
            }
        return (
            <Animated.View key={item.id} style={[styles.cardStyle,{top:10*(i)}] } >
                {this.props.renderCards(item)}
                
            </Animated.View>
        )
        }).reverse()
    }
    render()
    {
        return (
            <View>
             {this.rendercard()}
            </View>
        )
    }
}

const styles =StyleSheet.create({
    cardStyle:
    {
        position:"absolute",
        zIndex:1,
        width:SCREEN_WIDTH
    }
}) 