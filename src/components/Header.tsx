import {
  Heading,
  Center
} from "@chakra-ui/react";
import { LoginButton } from './LoginButton'
import { login } from "../services/login";

export const Header = () => {
  return (
      <Center padding={7} justifyContent='space-around' >
        <Heading as='h2' size='2xl' color='blue.400'>
          Dio Bank
        </Heading>
        <LoginButton text={ 'Login'} onClick={ login }/>
      </Center>
  )
}