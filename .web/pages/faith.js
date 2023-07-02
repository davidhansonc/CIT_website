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
  {`Our Faith`}
</Heading>
  <Box sx={{"width": "55%"}}>
  <Heading sx={{"paddingBottom": "15px", "fontSize": "1.1em", "fontWeight": "500"}}>
  {`We hold the faith which is common to all the believers (Titus 1:4, Jude 3):`}
</Heading>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`The Bible`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`The Bible is the complete divine revelation inspired word by word by God through the Holy Spirit (2 Pet. 1:21, 2 Tim. 3:16)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`The Triune God`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`God is uniquely one, yet Triune: the Father, the Son, and the Spirit (1 Tim. 2:5a, Matt. 28:19)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Jesus Christ`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`The Son of God, even God Himself, was incarnated to be a man by the name of Jesus Christ (John 1:1, John 1:14)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Christ's Crucifixion`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Christ died on the cross for our sins, shedding His blood for our redemption (1 Pet. 2:24,  Eph. 1:7a)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Christ's Resurrection`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Christ resurrected from among the dead on the third day (1 Cor. 15:4)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Christ's Ascension`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Christ ascended to the right hand of God to be Lord of all (Acts 1:9, Acts 2:33, Acts 2:36)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Salvation`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Whenever any person repents to God and believes in the Lord Jesus Christ, he is regenerated (born again) and becomes a living member of the one Body of Christ (Acts 20:21, John 3:3, Eph. 1:22-23, Rom. 12:5)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Christ's Return`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Christ is coming again to receive His believers to Himself (1 Thes. 2:19)`}
</ListItem>
</UnorderedList>
</Box>
</VStack>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <VStack>
  <Heading sx={{"paddingTop": "90px", "paddingBottom": "40px", "fontWeight": "500"}}>
  {`Our Faith`}
</Heading>
  <Box sx={{"width": "85%"}}>
  <Heading sx={{"paddingBottom": "15px", "fontSize": "1.1em", "fontWeight": "500"}}>
  {`We hold the faith which is common to all the believers (Titus 1:4, Jude 3):`}
</Heading>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`The Bible`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`The Bible is the complete divine revelation inspired word by word by God through the Holy Spirit (2 Pet. 1:21, 2 Tim. 3:16)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`The Triune God`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`God is uniquely one, yet Triune: the Father, the Son, and the Spirit (1 Tim. 2:5a, Matt. 28:19)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Jesus Christ`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`The Son of God, even God Himself, was incarnated to be a man by the name of Jesus Christ (John 1:1, John 1:14)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Christ's Crucifixion`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Christ died on the cross for our sins, shedding His blood for our redemption (1 Pet. 2:24,  Eph. 1:7a)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Christ's Resurrection`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Christ resurrected from among the dead on the third day (1 Cor. 15:4)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Christ's Ascension`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Christ ascended to the right hand of God to be Lord of all (Acts 1:9, Acts 2:33, Acts 2:36)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Salvation`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Whenever any person repents to God and believes in the Lord Jesus Christ, he is regenerated (born again) and becomes a living member of the one Body of Christ (Acts 20:21, John 3:3, Eph. 1:22-23, Rom. 12:5)`}
</ListItem>
</UnorderedList>
  <Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>
  {`Christ's Return`}
</Heading>
  <UnorderedList sx={{"paddingBottom": "15px"}}>
  <ListItem>
  {`Christ is coming again to receive His believers to Himself (1 Thes. 2:19)`}
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
  {`Faith | The church in Tucson`}
</title>
  <meta content="We hold the faith which is common to all the believers (Titus 1:4, Jude 3)." name="description"/>
  <meta content="favicon.ico" property="og:image"/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
