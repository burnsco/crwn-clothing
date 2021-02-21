import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { FaShoppingBag } from "react-icons/fa"

export const sections = [
  {
    id: "burgers-link",
    title: "burgers",
    href: "/shop/burgers",
    pathname: "/shop/[category]"
  },
  {
    id: "chicken-link",
    title: "chicken",
    href: "/shop/chicken",
    pathname: "/shop/[category]"
  },
  {
    id: "pizza-link",
    title: "pizza",
    href: "/shop/pizza",
    pathname: "/shop/[category]"
  },
  {
    id: "sushi-link",
    title: "sushi",
    href: "/shop/sushi",
    pathname: "/shop/[category]"
  },
  {
    id: "sandwiches-link",
    title: "sandwiches",
    href: "/shop/sandwiches",
    pathname: "/shop/[category]"
  }
]

export default function NavMenu() {
  const router = useRouter()

  const navCat = () => {
    const route = router.query.category as string
    if (route) {
      return route[0].toUpperCase() + route.substring(1)
    }
    return "MENU"
  }

  return (
    <Menu matchWidth aria-label="Mobile Navigation">
      <MenuButton
        as={Button}
        rightIcon={<FaShoppingBag />}
        flexGrow={2}
        maxW="md"
      >
        {navCat()}
      </MenuButton>
      <MenuList>
        {sections.map(sec => (
          <NextLink
            key={`nav-dropdown-${sec.title}`}
            href={{
              pathname: `${sec.pathname}`,
              query: { category: `${sec.title}` }
            }}
            passHref
          >
            <MenuItem as="a" href={sec.href} key={`nav-menu-${sec.id}`}>
              {sec.title}
            </MenuItem>
          </NextLink>
        ))}
      </MenuList>
    </Menu>
  )
}
