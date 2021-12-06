import React, {useState} from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'

import CustomInput from '../../components/CustomInput';








const Homescreen = () => {
    
   
    const [email, setEmail] = useState('');
    
    return (
      

               <View style = {styles.container}>
                     <CustomInput 
            placeholder = "Fast Search"
            
           
             />
            <Image source={require('./search.png')} 
             style ={{height:30, width:30, marginTop:25, position:"absolute", right:30,}}
                />

                   <View style = {styles.box}>
                       <View style = {styles.inner}>
                       <Image source={require('./avengers.png')} 
                               style ={{height:'100%', width:'100%'}}
                />
                       </View>
                      
                     </View>
                     <View style = {styles.box}>
                       <View style = {styles.inner}>
                       <Image source={require('./gladiator.jpg')} 
                         style ={{height:'100%', width:'100%'}} />
                       </View>
                      
                     </View>

                     <View style = {styles.box}>
                       <View style = {styles.inner}>
                       <Image source={require('./dragontattoo.jpg')} 
                           style ={{height:'100%', width:'100%'}} />
                       </View>
                      
                     </View>

                     <View style = {styles.box}>
                       <View style = {styles.inner}>
                       <Image source={require('./jaws.png')} 
                           style ={{height:'100%', width:'100%'}} />
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

               


             




export default Homescreen;