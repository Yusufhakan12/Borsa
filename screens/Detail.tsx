import {useEffect, useState} from "react";
import { StyleSheet, Text, View, Pressable, TextInput,Alert} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../src/store";
import { Bakiye, TiklananPara } from "../src/store/actions";
import { DOVİZ } from "../src/data/data";
import SQLite from 'react-native-sqlite-storage'
import { SelectList } from "react-native-dropdown-select-list";
import ModalScreen from "./component/ModallScreen";
import ModalScreenError from "./component/ModalScreenError";
import { useNavigation } from "@react-navigation/native";
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const db = SQLite.openDatabase(
  {
      name: 'DovizDb',
      
  },
  () => { },
  error => { console.log(error) }
);


const Detail = ({route}: {route: any}) => {
  const navigation=useNavigation()
  const bakiye=useSelector((state:RootState)=>state.bakiye)
  const tiklanan=useSelector((state:RootState)=>state.tiklanan)
  const paraBirimi=useSelector((state:RootState)=>state.paraBirimi)
  const dispatch=useDispatch()
  const [index,setIndex]=useState(Number);
  const [index2,setIndex2]=useState(Number)
  const [updateSatilanBakiye,setUpdateSatilenBakiye]=useState(0);
  const [tutar,setTutar]=useState("");
  const [aktarilanKontrol,setAktarilanKontrol]=useState(true);
  const [paraBirimiKontrol,setParaBirimiKontrol]=useState(true);
  const [secilen,setSecilen]=useState("")
  const [aktarilan,setAktarilan]=useState("")
  const [error, setError]=useState(Boolean);
  const [satimError,setSatimError]=useState(false)
  const [succes,setSucces]=useState(false)
  const id = route.params.id;
  const satis=parseFloat((parseFloat(route.params.satis)/paraBirimi.paraBirimi).toFixed(4));
  const alis= parseFloat((parseFloat(route.params.alis)/paraBirimi.paraBirimi).toFixed(4)); 
  const ifHave=tiklanan.tiklanan.indexOf(id);
  const [satimSayac,setSatimSayac]=useState(0);
  const [alimSayac,setAlimSayac]=useState(0);
  const [satilanBakiye,setSatilanBakiye]=useState("");
  const [ID,setID]=useState(0);
  const [ID2,setID2]=useState(0)
  const [updateAktarilan,setUpdateAktarilan]=useState(0)
 
 const [currentDate,setCurrentDate]=useState('');
var sec=new Date().getSeconds()
  const onPress=()=>{
  
    setSucces(!succes)
    //navigation.navigate('Borsa' as never);
   }

   const satisError=()=>{
    setSatimError(!satimError)
   }



   useEffect(()=>{
    var date=new Date().getDate()
    var month=new Date().getMonth()+1
    var year=new Date().getFullYear()
    setCurrentDate(
      date +'/' +month +'/'+ year
    )
   },[])
useEffect(()=>{

  getData()
  getDataBakiye()
  
  
},[secilen,aktarilan])
 
useEffect(()=>{

updateData()

},[updateSatilanBakiye])
useEffect(()=>{
  
  
  UpdateBuy()
  
},[updateAktarilan])
useEffect(()=>{
  
        getDataBakiye()
        
    
},[index,index2])


const genaretePdf= async(total:any)=>{

  try {
    const html = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Helvetica';
            font-size: 12px;
          }
          header, footer {
            height: 50px;
            background-color: #fff;
            color: #000;
            display: flex;
            justify-content: center;
            padding: 0 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #000;
            padding: 5px;
          }
          th {
            background-color: #ccc;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Rapor</h1>
        </header>
        <h1>Order Details</h1>
        <table>
          <tr>
            <th>Alınan tür</th>
            <td>${id}</td> 
          </tr>
          <tr>
            <th>Tarih</th>
            <td>${currentDate}</td>
          </tr>
          <tr>
            <th>Toplam değer</th>
            <td>${total}</td>
          </tr>
        </table>
        <footer>
          <p>Bizi seçtiğiniz için teşekkür ederiz!</p>
        </footer>
      </body>
    </html>
  `;
  const options = {
    html,
    fileName: `Rapor_${sec}`,
    directory: 'Documents',
  };
  const file = await RNHTMLtoPDF.convert(options);
  
  
}
   catch (error) {
    
  }
}
const getDataBakiye=()=>{
  try  
  {
   
    db.transaction((tx) => {
    
      tx.executeSql(
        "SELECT * FROM Bakiyeler ",
        [],
        (tx, results) => {
          
          var len = results.rows.length;
     
          for (let i = 0; i < index; i++) {
           
            if(i===index-1)
            { console.log("girdi2")
              var kontrolName = results.rows.item(i).Bakiye;   
              console.log(kontrolName+"kotro")
              setID(results.rows.item(i).ID)
              setSatilanBakiye(kontrolName)
             
            }

            

            
          }
          for(let i=0;i<index2;i++)
          {
            if(i===index2-1)
            {
              console.log("girdi")
              var kontrolName = results.rows.item(i).Bakiye;
              setSatilanBakiye(kontrolName);
              setID2(results.rows.item(i).ID)
              
            
            }
          }
         
        },
        
      );
    });
  
} catch (error) {
  console.log(error);
}

}

const UpdateBuy=async()=>{
  if (secilen.length == 0||ID===0) {
     
  } else {
    
      try {
         
         await db.transaction((tx) => {
         
          console.log(updateAktarilan)
          console.log(ID+"iceri")
              tx.executeSql(
                  "UPDATE Bakiyeler SET Bakiye=(?) WHERE ID=(?)",
                  [updateAktarilan,ID],
                  
                  async (tx, result) => {
                    console.log("Güncelleme başarılı(updateBuy)");
                    await tx.executeSql("COMMIT", [], () => {
                      console.log("Commit işlemi başarılı");
                    });
                  },
              )
          })
      } catch (error) {
          console.log(error);
      }
  }
}

const updateData =  async() => {
  if (secilen.length == 0) {
     
  } else {
      try {
          
         await db.transaction((tx) => {
         
        
              tx.executeSql(
                  "UPDATE Bakiyeler SET Bakiye=(?) WHERE ID=(?)",
                  [updateSatilanBakiye,ID2],
                  
                  async (tx, result) => {
                    console.log("Güncelleme başarılı");
                    await tx.executeSql("COMMIT", [], () => {
                      console.log("Commit işlemi başarılı");
                    });
                  },
              )
          })
      } catch (error) {
          console.log(error);
      }
  }
}






const getData = () => {
    try  
    {

      db.transaction((tx) => {
      
        tx.executeSql(
          "SELECT Name FROM DovizTur",
          [],
          (tx, results) => {
      
            var len = results.rows.length;
       
            for (let i = 0; i < len; i++) {
        
              var kontrolName = results.rows.item(i).Name;
              
              if (secilen === kontrolName) {
                setIndex2(i)
                setParaBirimiKontrol(false);
          
              }
              if (aktarilan === kontrolName) {
                setIndex(i)
                setAktarilanKontrol(false);
          
              }
            }
            // Promise'i tamamlandığını belirtmek için resolve çağırılır
          },
          
        );
      });
    
  } catch (error) {
    console.log(error);
  }
}


const setData = async (aktarilanBakiye:number) => {
  
  if (secilen.length == 0 ) {
    console.log("boş")
  } else {
      try {
          console.log("başarılı")
          // var user = {
          //     Name: name,
          //     Age: age
          // }
          // await AsyncStorage.setItem('UserData', JSON.stringify(user));
          await db.transaction(async (tx) => {
              // await tx.executeSql(
              //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
              // );
              await tx.executeSql(
                  "INSERT INTO Bakiyeler (Bakiye) VALUES (?)",
                  [aktarilanBakiye]
              );
          })
          
      } catch (error) {
          console.log(error);
      }
  }
}




  const SellFunction = () => {
    
    if(paraBirimiKontrol||aktarilanKontrol)
    { setSatimSayac(satimSayac+1)
      console.log(satimSayac)
      if(error)
        {
          setError(!error)
        }
        
          setSatimError(!satimError)

        
      }
      else{
        if(error)
        {
          setError(!error)
        }
        if(tutar==="")
        {
          console.log("boş bırakılamaz")
        }
        else
        {
          setSucces(!succes)
          if(parseFloat(tutar)>parseFloat(satilanBakiye))
          {
            console.log("yetersiz")
          }
          else{
            
            const yeniBakiye=parseFloat(satilanBakiye)-parseFloat(tutar)//secilen hesaba
            
            console.log(yeniBakiye+"asdasd")
            
            setUpdateSatilenBakiye(yeniBakiye)
            
            console.log(updateSatilanBakiye)
            
            const updateBakiye=parseFloat(tutar)*satis //aktarilan hesaba
            dispatch(Bakiye(bakiye.bakiye+updateBakiye))
            
            console.log("başarılı")
            
  
          }
          
        }
      
      }

  };

const themeErrorFunction=()=>{
  setError(!error)
  //navigation.navigate('Borsa' as never)

}

  const BuyFunction = (tutar:string) => {
    const intTutar=Number(parseFloat(tutar).toFixed(4))
   
    try {
      
   //getDataBakiye()
     } catch (error) {
      console.log(error);
    } finally{
    

    if(tutar===""||secilen===""||aktarilan==="")
    {
      console.log("boş gecilemez")
    }
    
    else if(paraBirimiKontrol||aktarilanKontrol)
      {
        
        console.log("böyle bir hesabınız bulunmamaktadır ")
      }
   
    else
    {
      
      if(intTutar>bakiye.bakiye)
      {     
        setError(!error)
        console.log("bakiye yetersiz")
      }
     
      else
      {   
        
          genaretePdf(tutar)
          setSucces(!succes)
        const yeni=bakiye.bakiye-intTutar
   
        dispatch(Bakiye(yeni))
        
     
      
       
       const aktarilanBakiye=(parseFloat(tutar)+parseFloat(satilanBakiye))/alis
       setUpdateAktarilan(aktarilanBakiye)
       
      
      }
    }
  

  }
    
      

  };

 
  return (
    <View style={{backgroundColor:"black",position:"relative",flex:1}}>
      <View style={{alignItems:"center"}}>
      <Text style={[styles.text,styles.text2]}>{id}</Text>
       
      </View>
      <View style={{margin:4,position:"relative",marginTop:44}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={[styles.text,styles.text2]}>Satış fiyatı:</Text>
        <Text style={[styles.text,styles.text2]}>{satis}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={[styles.text,styles.text2,{paddingLeft:13}]}>Alış fiyatı:</Text>
        <Text style={[styles.text,styles.text2]}>{alis}</Text>
        </View>

       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:43}}>
       <Text style={[styles.text,styles.text2,{paddingLeft:51}]}>Tutar:</Text>
       <TextInput
       value={tutar}
       onChangeText={setTutar}
       style=  {tutar===""?[styles.Input,{borderColor:"red"}]:[styles.Input,{borderColor:"green"}]} 
       placeholder="0"
       keyboardType="numeric"
            />
       </View>
       <View style={{alignItems:"center",marginTop:25}}>
        {error
        ? <ModalScreenError
          visible={error}
          onpress={themeErrorFunction}
          text='Bakiye yetersiz'
        />:null}
        {succes?<ModalScreen
          visible={succes}
          onpress={onPress}
        />:null}

        {satimError?
        <ModalScreenError
        text="Böyle bir paranız yok "
        visible={satimError}
        onpress={satisError}
        />
        :null}
       </View>
      
       <View style={{alignItems:"center",marginVertical:20,}}>
            <Text style={[styles.text2,{color:"white",paddingBottom:9}]}>Para birimi</Text>
            <SelectList
            data={DOVİZ}
            setSelected={setSecilen}
            save="value"
            search={true}
            placeholder="Bir döviz türü seçinizi"
            dropdownStyles={{backgroundColor:"black"}}
            inputStyles={{color:"black"}}
            boxStyles={    {backgroundColor:"white",width:300,}}
            dropdownTextStyles={{color:"white"}}            
            />

      
       
        <Text style={[styles.text2,{color:"white",paddingBottom:9}]}>Aktarılacak hesap</Text>
            <SelectList
            data={DOVİZ}
            setSelected={setAktarilan}
            save="value"
            search={true}
            placeholder="Bir döviz türü seçinizi"
            dropdownStyles={{backgroundColor:"black"}}
            inputStyles={{color:"black"}}
            boxStyles={{backgroundColor:"white",width:300}}
            dropdownTextStyles={{color:"white"}}            
            />
       </View>

      </View>
       
    
      
      <View style={{flexDirection:"row", justifyContent: "space-around"}}>
      <Pressable style={styles.container}
      onPress={()=>SellFunction()}
      >
          <Text style={styles.text}> Sell</Text>
        </Pressable>
        <Pressable 
        onPress={()=>  BuyFunction(tutar)}
        style={[styles.container, {backgroundColor: "green"}]}>
          <Text style={styles.text}> Buy</Text>
        </Pressable>
      </View>
      
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 190,
    padding: 15,
    marginVertical:5,
    alignItems: "center",
    borderRadius: 5,
    marginTop:98,
    
   
    
   
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "TiltWarp-Regular",
    fontSize:13
    
  },
  Input:{
        borderRadius:5,
        borderWidth:1,
        backgroundColor:"gray",
        paddingHorizontal:10,
        paddingVertical:5,
       
        position:"relative",
        width:90
        
        
  },
  text2:{
    fontSize:21,
    marginTop:5,
   
  }
});
export default Detail;
