import { Fragment, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { connect, E, getRefValue, isTrue, preventDefault, processEvent, refs, uploadFiles } from "/utils/state"
import "focus-visible/dist/focus-visible"
import { Box, Heading, HStack, Link, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, UnorderedList, useColorMode, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"


export default function Component() {
  const [state, setState] = useState({"is_hydrated": false, "events": [{"name": "state.hydrate"}], "files": []})
  const [result, setResult] = useState({"state": null, "events": [], "final": true, "processing": false})
  const [notConnected, setNotConnected] = useState(false)
  const router = useRouter()
  const socket = useRef(null)
  const { isReady } = router
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Function to add new events to the event queue.
  const Event = (events, _e) => {
      preventDefault(_e);
      setState(state => ({
        ...state,
        events: [...state.events, ...events],
      }))
  }

  // Function to add new files to be uploaded.
  const File = files => setState(state => ({
    ...state,
    files,
  }))

  // Main event loop.
  useEffect(()=> {
    // Skip if the router is not ready.
    if (!isReady) {
      return;
    }

    // Initialize the websocket connection.
    if (!socket.current) {
      connect(socket, state, setState, result, setResult, router, ['websocket', 'polling'], setNotConnected)
    }

    // If we are not processing an event, process the next event.
    if (!result.processing) {
      processEvent(state, setState, result, setResult, router, socket.current)
    }

    // If there is a new result, update the state.
    if (result.state != null) {
      // Apply the new result to the state and the new events to the queue.
      setState(state => ({
        ...result.state,
        events: [...state.events, ...result.events],
      }))

      // Reset the result.
      setResult(result => ({
        state: null,
        events: [],
        final: true,
        processing: !result.final,
      }))

      // Process the next event.
      processEvent(state, setState, result, setResult, router, socket.current)
    }
  })

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => Event([E('state.hydrate', {})])
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
  <Fragment><Fragment>
  <VStack>
  <Box sx={{"bg": "white", "width": "100%", "position": "fixed", "top": "0px", "zIndex": "20", "borderBottom": "0.05em solid rgba(100, 116, 139, .2)"}}>
  <HStack>
  <Link as={NextLink} href="/">
  <Heading sx={{"padding": "10px", "fontWeight": "500"}}>
  {`The Church in Tucson`}
</Heading>
</Link>
  <Spacer/>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <Link as={NextLink} href="/faith" sx={{"paddingRight": "15px"}}>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Our Faith`}
</Text>
</Link>
  <Link as={NextLink} href="/resources" sx={{"paddingRight": "15px"}}>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Resources`}
</Text>
</Link>
  <Link as={NextLink} href="/calendar" sx={{"paddingRight": "15px"}}>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Calendar`}
</Text>
</Link>
  <Link as={NextLink} href="/contact" sx={{"paddingRight": "15px"}}>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Contact`}
</Text>
</Link>
  <Link as={NextLink} href="/give" sx={{"paddingRight": "15px"}}>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Give`}
</Text>
</Link>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <Menu>
  <MenuButton sx={{"paddingRight": "15px"}}>
  <Text as="u" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Menu`}
</Text>
</MenuButton>
  <MenuList>
  <Link as={NextLink} href="/faith">
  <MenuItem>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Our Faith`}
</Text>
</MenuItem>
</Link>
  <Link as={NextLink} href="/resources">
  <MenuItem>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Resources`}
</Text>
</MenuItem>
</Link>
  <Link as={NextLink} href="/announcements">
  <MenuItem>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Announcements`}
</Text>
</MenuItem>
</Link>
  <Link as={NextLink} href="/give">
  <MenuItem>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Give`}
</Text>
</MenuItem>
</Link>
  <MenuDivider/>
  <Link as={NextLink} href="/contact">
  <MenuItem>
  <Text as="b" sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>
  {`Contact Us`}
</Text>
</MenuItem>
</Link>
</MenuList>
</Menu>
</Box>
</HStack>
</Box>
  <Heading sx={{"paddingTop": "90px", "paddingBottom": "40px", "fontWeight": "500"}}>
  {`Resources`}
</Heading>
  <Wrap justify="center" spacingX="5em" spacingY="2em" sx={{"width": "70%"}}>
  <WrapItem>
  <Box>
  <Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>
  {`Ministry`}
</Heading>
  <UnorderedList>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://www.lsm.org" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Living Stream Ministry`}
</Text>
</Link>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://www.ministrybooks.org/" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`LSM Online Publications`}
</Text>
</Link>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://www.lsmwebcast.com/" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`LSM Webcast`}
</Text>
</Link>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://www.livingstream.com/en/" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`LSM Bookstore`}
</Text>
</Link>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://www.hymnal.net/en/home" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Hymnal.net`}
</Text>
</Link>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://shepherdingwords.com/" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Shepherding Words`}
</Text>
</Link>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://www.affcrit.com/" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Affirmation & Critique`}
</Text>
</Link>
</ListItem>
</UnorderedList>
</Box>
</WrapItem>
  <WrapItem>
  <Box>
  <Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>
  {`Neighboring Churches`}
</Heading>
  <UnorderedList>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://www.churchinphoenix.org/" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Phoenix, AZ`}
</Text>
</Link>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Tempe, AZ`}
</Text>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://churchinalbuquerque.org/" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Albuquerque, NM`}
</Text>
</Link>
</ListItem>
  <ListItem sx={{"paddingBottom": "15px"}}>
  <Link as={NextLink} href="https://thechurchinlasvegas.org/" sx={{"color": "rgb(107,99,246)"}}>
  <Text as="b" sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Las Vegas, NV`}
</Text>
</Link>
</ListItem>
</UnorderedList>
</Box>
</WrapItem>
</Wrap>
  <Box sx={{"fontSize": "0.5em", "padding": "50px"}}>
  {`Copyright © 2023. The Church in Tucson. All Rights Reserved.`}
</Box>
</VStack>
  <NextHead>
  <title>
  {`Resources | The church in Tucson`}
</title>
  <meta content="Ministry links and other helpful resources." name="description"/>
  <meta content="favicon.ico" property="og:image"/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
