import { Fragment, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { connect, E, getRefValue, isTrue, preventDefault, processEvent, refs, uploadFiles } from "/utils/state"
import "focus-visible/dist/focus-visible"
import { Box, Heading, HStack, Link, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, UnorderedList, useColorMode, VStack } from "@chakra-ui/react"
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
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <VStack>
  <Heading sx={{"paddingTop": "90px", "paddingBottom": "40px", "fontWeight": "500"}}>
  {`Contact Us`}
</Heading>
  <Box as="iframe" element="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.508540129675!2d-110.87638679999999!3d32.2713029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d66e6d79a8b88f%3A0x55f536e342d9ea11!2s3537%20N%20Craycroft%20Rd%2C%20Tucson%2C%20AZ%2085718!5e0!3m2!1sen!2sus!4v1683328337835!5m2!1sen!2sus" sx={{"width": "600px", "height": "450px", "paddingBottom": "15px"}}/>
  <Box sx={{"width": "75%"}}>
  <Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>
  {`Meeting Information`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "10px"}}>
  <ListItem>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Every Sunday at 10:00 AM we gather for 
                        the Lord's Table and mutual fellowship 
                        from the Bible at:`}
</Text>
</ListItem>
  <UnorderedList sx={{"listStyleType": "none"}}>
  <ListItem>
  <Link as={NextLink} href="https://www.google.com/maps/search/?api=1&query=the+church+in+tucson&query_place_id=ChIJj7ioeW1u1oYREerZQuM29VU" isExternal={true} sx={{"color": "rgb(107,99,246)"}}>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`3537 N. Craycroft Rd. Tucson, AZ 85718`}
</Text>
</Link>
</ListItem>
</UnorderedList>
  <ListItem>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Every Tuesday at 7:30 PM we gather to pray for the Lord’s interests on the earth.`}
</Text>
</ListItem>
  <ListItem>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Most other evenings we gather in various homes 
                        for small group Bible studies and fellowship.`}
</Text>
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>
  {`Contact Us`}
</Heading>
  <UnorderedList>
  <ListItem>
  <Link as={NextLink} href="mailto: info@churchintucson.org" sx={{"color": "rgb(107,99,246)"}}>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`info@churchintucson.org`}
</Text>
</Link>
</ListItem>
  <ListItem>
  <Link as={NextLink} href="tel: 5205487514" sx={{"color": "rgb(107,99,246)"}}>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`520-548-7514`}
</Text>
</Link>
</ListItem>
  <ListItem>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Our mailing address is 6091 E Grant Rd, Tucson, AZ 85712`}
</Text>
</ListItem>
</UnorderedList>
</Box>
</VStack>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <VStack>
  <Heading sx={{"paddingTop": "90px", "paddingBottom": "40px", "fontWeight": "500"}}>
  {`Contact Us`}
</Heading>
  <Box as="iframe" element="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.508540129675!2d-110.87638679999999!3d32.2713029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d66e6d79a8b88f%3A0x55f536e342d9ea11!2s3537%20N%20Craycroft%20Rd%2C%20Tucson%2C%20AZ%2085718!5e0!3m2!1sen!2sus!4v1683328337835!5m2!1sen!2sus" sx={{"width": "85%", "paddingBottom": "15px"}}/>
  <Box sx={{"width": "85%"}}>
  <Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>
  {`Meeting Information`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "10px"}}>
  <ListItem>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Every Sunday at 10:00 AM we gather for the Lord's Table and mutual fellowship from the Bible at:`}
</Text>
</ListItem>
  <UnorderedList sx={{"listStyleType": "none"}}>
  <ListItem>
  <Link as={NextLink} href="https://www.google.com/maps/search/?api=1&query=the+church+in+tucson&query_place_id=ChIJj7ioeW1u1oYREerZQuM29VU" isExternal={true} sx={{"color": "rgb(107,99,246)"}}>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`3537 N. Craycroft Rd. Tucson, AZ 85718`}
</Text>
</Link>
</ListItem>
</UnorderedList>
  <ListItem>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Every Tuesday at 7:30 PM we gather to pray for the Lord’s interests on the earth.`}
</Text>
</ListItem>
  <ListItem>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Most other evenings we gather in various homes 
                        for small group Bible studies and fellowship.`}
</Text>
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>
  {`Contact Us`}
</Heading>
  <UnorderedList>
  <ListItem>
  <Link as={NextLink} href="mailto: info@churchintucson.org" sx={{"color": "rgb(107,99,246)"}}>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`info@churchintucson.org`}
</Text>
</Link>
</ListItem>
  <ListItem>
  <Link as={NextLink} href="tel: 5205487514" sx={{"color": "rgb(107,99,246)"}}>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`520-548-7514`}
</Text>
</Link>
</ListItem>
  <ListItem>
  <Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>
  {`Our mailing address is 6091 E Grant Rd, Tucson, AZ 85712`}
</Text>
</ListItem>
</UnorderedList>
</Box>
</VStack>
</Box>
  <Box sx={{"fontSize": "0.5em", "padding": "50px"}}>
  {`Copyright © 2023. The Church in Tucson. All Rights Reserved.`}
</Box>
</VStack>
  <NextHead>
  <title>
  {`Contact us | The church in Tucson`}
</title>
  <meta content="We warmly welcome you. Come meet with us, or reach out with any questions." name="description"/>
  <meta content="favicon.ico" property="og:image"/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
