import React, { useState } from "react";
import {View,Text, Button, TextInput, ScrollView, StyleSheet, SectionList} from "react-native";

const Styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


const SectionListBasics = () => {
  return (
    <View style={Styles.container}>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ]}
        renderItem={({item}) => <Text style={Styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={Styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View> 
      <Text>
        Hi I am {props.name}, and I am {isHungry ? "Hungry" : "full"}
      </Text>
      <Button onPress={ () => {
        setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "feed me some milk please!" : "I am full thanks"}
        style={{borderRadius:5}}
      />
    </View>
  );
}

const PizzaTransaltor = () =>{
  const [text, setText] = useState('');
  return(
    <View>
      <TextInput
        style={{height: 40, borderRadius:1, borderWidth:0.5, borderRadius:5}}
        placeholder="Type here to translate"
        onChangeText={text=>setText(text)}
        defaultValue={text}
      />
      <Text style={{padding:10, fontSize:42}}>
        {text.split(' ').map((word)=> word && '🍕').join('')}
      </Text>
    </View>
  );
}

const Cofe = () =>{
  return (
    <View>
      <PizzaTransaltor/>
      <Cat name="walee"/>
      <Cat name="ashraf"/>
    </View>
  );
}

export default App=()=> (
  <ScrollView style={{backgroundColor:"#fefefe"}}>
    <Cofe/>
    <Text style={{fontSize:50}}>TEst ScrollView</Text>
    <Text style={{fontSize:50}}>TEst ScrollView</Text>
    <Text style={{fontSize:50}}>TEst ScrollView</Text>
    <Text style={{fontSize:50}}>TEst ScrollView</Text>
    <SectionListBasics/>
  </ScrollView>
);