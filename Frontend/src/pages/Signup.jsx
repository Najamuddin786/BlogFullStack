import { Flex,Input,VStack ,Text,Center} from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Signup(){

    let [data,setData]=useState({name:'',email:'',password:""})

    function form(e){
        e.preventDefault()
        console.log(data)

    }

    return <>
             <form onSubmit={form} style={{width:"100%"}}>
            <Center h='80vh' >
           
            <VStack  bg='rgba(255, 251, 4, 0.04)' borderRadius={'md'} gap='4' py='10' px='5' my='5' boxShadow={'xl'} w={{base:'95%',sm:"400px"}}>
                <VStack w='100%' gap='1' alignItems={'start'}>
                    <Text>Name</Text>
                    <Input required placeholder="Enter Your Name" onChange={(e)=>setData({...data,name:e.target.value})}/>
                </VStack>
                <VStack w='100%' gap='1' alignItems={'start'}>
                    <Text>Email</Text>
                    <Input required placeholder="Enter Your Email" onChange={(e)=>setData({...data,email:e.target.value})}/>
                </VStack>
                <VStack w='100%' gap='1' alignItems={'start'}>
                    <Text>Password</Text>
                    <Input required placeholder="Enter Your Password" onChange={(e)=>setData({...data,password:e.target.value})}/>
                </VStack>
                <Button type="submit" w='100%' bg='rgb(17, 47, 49)'>Signup</Button>

            </VStack>
           
            </Center>
            </form>
            
    </>
}