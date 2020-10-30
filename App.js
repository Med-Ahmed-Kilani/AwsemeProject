import React, { useState } from "react";
import {View,Text, Button} from "react-native";


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
      />
    </View>
  );
}

const Cofe = () =>{
  return (
    <View>
      <Cat name="walee"/>
      <Cat name="ashraf"/>
    </View>
  );
}

export default Cofe;