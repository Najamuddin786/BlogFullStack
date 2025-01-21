import { Box,Flex,Text,HStack, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
export default function Navbar(){

    let navbar=[
        {name:"Home",link:"/home"},
        {name:"About",link:"/about"},
        {name:"Login",link:"/login"},
        {name:"Signup",link:"/signup"},
        {name:"MyAllNote",link:"/home"},
        {name:"Create Note",link:"/createNote"},
    ]

    return <>
            <HStack py='1vh' px={{base:'2vw',md:'5vw',xl:'10vw'}} color={'white'} bg='rgb(17, 47, 49)'>
                <Box fontWeight={700} fontSize={'3xl'}>NoteFullStack</Box>
                <Spacer/>
                {navbar.map((e,i)=>{
                  return  <Link key={i} to={e.link}><Text display={{base:'none'}} fontWeight={500}>{e.name}</Text></Link>
                })}

            </HStack>
    </>
}