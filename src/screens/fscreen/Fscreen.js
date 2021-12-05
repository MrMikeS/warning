import React, {useState} from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import CustomInput from '../../components/CustomInput';

const Fscreen = () => {
    
   
    const [email, setEmail] = useState('');
    
    return (
      

               <View style = {styles.container}>
              

                   <View style = {styles.box}>
                       <View style = {styles.inner}>
                     <Text>Box1</Text>
                
                       </View>
                      
                     </View>
                     <View style = {styles.box}>
                       <View style = {styles.inner}>
                       <Text>Box 2</Text>
                       </View>
                      
                     </View>

                     <View style = {styles.box}>
                       <View style = {styles.inner}>
                         <Text>Box 3</Text>
                       </View>
                      
                     </View>

                     <View style = {styles.box}>
                       <View style = {styles.inner}>
                         <Text>Box 4</Text>
                       </View>
                      
                     </View>


               </View>

    );

}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    box: {
        width:'50%',
        height: '50%',
        padding: 5,

    },
    inner: { flex:1,
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent:'center'
           
    }
});

export default Fscreen;