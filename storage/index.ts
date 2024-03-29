import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData=async(key:string,value:string)=>{

    try {
        const stringValue=value;
        await AsyncStorage.setItem(key,stringValue);


    } catch (e:any) {
        console.error(e.message);
    }
}

export const getData=async(key:string)=>{
    try {
        const value=await AsyncStorage.getItem(key);
        if(value!=null){
            const data=value;
            return data;
        }
    } catch (e:any) {
        console.error(e.message);
    }
}

export const containsKey=async(key:string)=>{

    try {
        const keys=await AsyncStorage.getAllKeys();
        return keys.includes(key);
    } catch (error:any) {
        console.error(error.message);
    }
}

export const removeItem=async(key:string)=>{

    try {
        const keys=await AsyncStorage.removeItem(key);
      
    } catch (error:any) {
        console.error(error.message);
    }
}
