import {createContext, useEffect, useState} from 'react';

const MyAllContext = createContext({
    mainContext:null,
    showContext:function(){},
    hideContext:function(){},
});

export function ContextProvider(props){

    const [allValue,setAllValue] = useState()



    useEffect(()=>{

      const time =  setTimeout(()=>{


            setAllValue(null)

        },3000)

        return () =>{
            clearTimeout(time)
        }

    },[allValue])

    function recShowContext(recData){
        setAllValue(recData)

    }

    function recHideContext(){
        setAllValue(null)

    }

    const context = { mainContext:allValue,showContext:recShowContext,hideContext:recHideContext }

    return (

    <MyAllContext.Provider value={context}>
    {props.children}
    </MyAllContext.Provider>

    )

}

export default MyAllContext;