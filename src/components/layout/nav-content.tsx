import {
  chakra,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import NextChakraLink from "@components/common/NextChakraLink"
import CartDrawer from "@components/drawer/CartDrawer"
import { FaMoon, FaSun } from "react-icons/fa"
import NavMenu from "./nav-menu"

export const sections = [
  { id: "home-link", title: "home", href: "/" },
  { id: "burgers-link", title: "burgers", href: "/shop/burgers" },
  { id: "chicken-link", title: "chicken", href: "/shop/chicken" },
  { id: "pizza-link", title: "pizza", href: "/shop/pizza" },
  { id: "shop-link", title: "shop", href: "/shop/" },
  { id: "sushi-link", title: "sushi", href: "/shop/sushi" },
  { id: "sandwiches-link", title: "sandwiches", href: "/shop/sandwiches" }
]

export default function NavbarContent() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const text = useColorModeValue("dark", "light")

  return (
    <Flex
      aria-label="Primary Navigation"
      as="nav"
      justifyContent="space-evenly"
      alignItems="center"
      p={[1, 2, 3]}
    >
      <NextChakraLink
        textDecoration="mediumslateblue"
        fontSize="x-large"
        letterSpacing="wide"
        fontWeight="bold"
        fontFamily="Anton"
        href="/"
        aria-label="Home Page Link"
      >
        <chakra.span fontStyle="italic" color="mediumorchid">
          QUICK
        </chakra.span>{" "}
        EATS
      </NextChakraLink>
      <NavMenu />

      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        ml={{ base: "0", md: "3" }}
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />

      <CartDrawer />
    </Flex>
  )
}
