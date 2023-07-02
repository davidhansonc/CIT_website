import { Fragment, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { connect, E, getRefValue, isTrue, preventDefault, processEvent, refs, uploadFiles } from "/utils/state"
import "focus-visible/dist/focus-visible"
import { Box, Heading, HStack, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
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
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Heading sx={{"paddingTop": "90px", "paddingBottom": "20px", "fontWeight": "500"}}>
  {`Calendar`}
</Heading>
  <Box as="iframe" element="iframe" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FPhoenix&showTitle=0&src=NzE5OTE5YjQwYWIwZjc0OGEyMjQ5ZmI1MTI2YjE1NmRlNWY5ZTM1MDdhODZmMzhiOTNjYWZhMzdjN2QyNzA3OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB" sx={{"width": "800px", "height": "600px", "frameborder": "0", "scrolling": "no"}}/>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <Heading sx={{"paddingTop": "90px", "paddingBottom": "20px", "fontWeight": "500"}}>
  {`Calendar`}
</Heading>
  <Box as="iframe" element="iframe" src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%2FPhoenix&mode=AGENDA&showTitle=0&src=NzE5OTE5YjQwYWIwZjc0OGEyMjQ5ZmI1MTI2YjE1NmRlNWY5ZTM1MDdhODZmMzhiOTNjYWZhMzdjN2QyNzA3OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB" sx={{"width": "100%", "height": "400px", "frameborder": "0", "scrolling": "no"}}/>
</Box>
  <Box sx={{"fontSize": "0.5em", "padding": "50px"}}>
  {`Copyright © 2023. The Church in Tucson. All Rights Reserved.`}
</Box>
</VStack>
  <NextHead>
  <title>
  {`Calendar | The church in Tucson`}
</title>
  <meta content="A Pynecone app." name="description"/>
  <meta content="favicon.ico" property="og:image"/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
