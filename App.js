import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
 PanResponder,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Binn from'./components/Binn';

const mydata = [
  { id: 1,text: 'card 1',uri: 'https://source.unsplash.com/RfoISVdKM4U'},
  { id: 2, text: 'card 2', uri: 'https://source.unsplash.com/pJqfhKUpCh8' },
  { id: 3,text: 'card 3',uri:'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  { id: 4, text: 'card 4', uri: 'https://source.unsplash.com/CE9YG0_Mzlw' },
  { id: 5, text: 'card 5', uri: 'https://source.unsplash.com/-_C4UZRpoQc' },
  { id: 6, text: 'card 6', uri: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 7,text: 'card 7',uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  { id: 8, text: 'card 8', uri: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 9,text: 'card 9',uri:'https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  { id: 10, text: 'card 10', uri: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 11, text: 'card 11', uri: 'https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 12, text: 'card 12', uri: 'https://images.unsplash.com/photo-1520512202623-51c5c53957df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 13,text: 'card 13',uri: 'https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  { id: 14, text: 'card 14', uri: 'https://images.unsplash.com/photo-1467632499275-7a693a761056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 15,text: 'card 15',uri:'https://images.unsplash.com/photo-1517800249805-f3d51bd0b07f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  { id: 16, text: 'card 16', uri: 'https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 17, text: 'card 17', uri: 'https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 18,text: 'card 18',uri: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  { id: 19, text: 'card 19', uri: 'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 20,text: 'card 20',uri:'https://images.unsplash.com/photo-1504193902866-27cfb5aafcc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  { id: 21, text: 'card 21', uri: 'https://images.unsplash.com/photo-1502831376-280384d0fbd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 22, text: 'card 22', uri: 'https://images.unsplash.com/photo-1504730030853-eff311f57d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },

];
/*
const mydata = [
  { id: 1, text: 'Card #1', uri: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f28261f0564880c9086a57ee87a68887&auto=format&fit=crop&w=500&q=60' },
  { id: 2, text: 'Card #2', uri: 'https://images.unsplash.com/photo-1535576434247-e0f50b766399?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=232f6dbab45b3f3a6f97e638c27fded2&auto=format&fit=crop&w=500&q=60' },
  { id: 3, text: 'Card #3', uri: 'https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7edfb9bc7d214dbf2c920723cb0ffce2&auto=format&fit=crop&w=500&q=60' },
  { id: 4, text: 'Card #4', uri: 'https://images.unsplash.com/photo-1535546204504-586398ee6677?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7320b162b147a94d4c41377d9035e665&auto=format&fit=crop&w=500&q=60' },
  { id: 5, text: 'Card #5', uri: 'https://images.unsplash.com/photo-1535531298052-7457bcdae809?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f15acb2aedb30131bb287589399185a2&auto=format&fit=crop&w=500&q=60' },
  { id: 6, text: 'Card #6', uri: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebe64b284c0ccffbac6a0d7ce2c8d15a&auto=format&fit=crop&w=500&q=60' },
  { id: 7, text: 'Card #7', uri: 'https://images.unsplash.com/photo-1535540707939-6b4813adb681?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce3177d04728f7d1811e342b47d1e391&auto=format&fit=crop&w=500&q=60' },
  { id: 8, text: 'Card #8', uri: 'https://images.unsplash.com/photo-1535486509975-18366f9825df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea59f63a657824d02872bb907fe85e76&auto=format&fit=crop&w=500&q=60' }
  ];
*/
export default class App extends Component
{
 
  renderCard(item)
  {
    return (
      <View style ={{margin:10}} key={item.id}>
       <Card>
    <Card.Title title={item.text} />
    
    <Image source={{ uri: item.uri }} style={{height:300}}/>
    <Card.Actions>
      <Button>yes</Button>
      <Button>no</Button>
    </Card.Actions>
  </Card>
      </View>
    )
    
  }
  rendernomorecards()
  {
    return (
<View style ={{margin:10}} >
       <Card>
    <Card.Title title="tu single hi maregaa bsdk " />
    
   
  </Card>
      </View>
    )
    
  }
  render()
  {
    return (
      <View style={styles.container}>
       <Binn
       data={mydata}
       renderCards={this.renderCard}
       rendernomorecards={this.rendernomorecards}
       />
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"green",
    //alignContent:"center",
    //alignItems:"center"
   
  }
});


