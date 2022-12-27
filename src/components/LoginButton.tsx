import { Button } from "@chakra-ui/react";

interface ILoginButton {
  text: string
  onClick: () => void
}

export const LoginButton = (props: ILoginButton) => {
  return (
    <Button onClick={ props.onClick } colorScheme={'blue'} variant={'solid'}>
      { props.text }
    </Button>
  )
}