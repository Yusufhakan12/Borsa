import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native'

interface MyComponentProps {
    myBooleanProp: boolean;
  }
const ModalScreen=({visible,onpress}:any)=>{


    return(
        <View>

<Modal animationType="slide" transparent={true} visible={visible}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                   
                <LottieView 
                source={require("../../assets/Lottie/success.json")}
                autoPlay
                style={{height:140,width:140}}
                />


                    <View
                  style={{
                    marginTop:25,
                    height: 39,
                    backgroundColor: '#009B8D',
                    width: 133,
                    borderRadius: 28,
                  }}>
                  <TouchableOpacity  onPress={onpress} >
                    <Text
                      style={{
                        fontSize: 15,
                        margin: 8,
                        marginLeft: 50,
                        color: 'white',
                      }}>
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
                    </View>
                </View>


            </Modal>

        </View>
    );
}
  

const styles=StyleSheet.create({
    centeredView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor:"white" ,
        borderRadius: 20,
        width: '87%',
        padding: 35,
        alignItems: 'center',
      },
})
export default ModalScreen