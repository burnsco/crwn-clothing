import { Text } from "@chakra-ui/react"
import Container from "@components/common/container"
import NextChakraLink from "@components/common/NextChakraLink"
import { useAuth } from "@hooks/auth"

export default function IndexPage() {
  const { user } = useAuth()

  return (
    <Container p={4} mt={5}>
      <Text>{`User ID: ${user ? user.uid : "no user signed in"}`}</Text>

      <p>
        <NextChakraLink href="/authenticated">
          Go to authenticated route
        </NextChakraLink>
      </p>
      <p>
        <NextChakraLink href="/user/login">Login</NextChakraLink>
      </p>
    </Container>
  )
}
