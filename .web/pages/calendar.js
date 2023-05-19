import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, updateState, uploadFiles} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, HStack, Heading, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, VStack, useColorMode} from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"

const PING = "http://0.0.0.0:8000/ping"
const EVENT = "ws://0.0.0.0:8000/event"
const UPLOAD = "http://0.0.0.0:8000/upload"
export default function Component() {
const [state, setState] = useState({"events": [{"name": "state.hydrate"}], "files": []})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const socket = useRef(null)
const { isReady } = router;
const { colorMode, toggleColorMode } = useColorMode()
const Event = events => setState({
  ...state,
  events: [...state.events, ...events],
})
const File = files => setState({
  ...state,
  files,
})
useEffect(() => {
  if(!isReady) {
    return;
  }
  if (!socket.current) {
    connect(socket, state, setState, result, setResult, router, EVENT, ['websocket', 'polling'])
  }
  const update = async () => {
    if (result.state != null) {
      setState({
        ...result.state,
        events: [...state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(state, setState, result, setResult, router, socket.current)
  }
  update()
})
return (
<VStack><Box sx={{"bg": "white", "width": "100%", "position": "fixed", "top": "0px", "zIndex": "20", "borderBottom": "0.05em solid rgba(100, 116, 139, .2)"}}><HStack><NextLink href="/"
passHref={true}><Link><Heading sx={{"padding": "10px", "fontWeight": "500"}}>{`The Church in Tucson`}</Heading></Link></NextLink>
<Spacer/>
<Box sx={{"display": ["none", "none", "none", "block"]}}><NextLink href="/faith"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Our Faith`}</Text></Link></NextLink>
<NextLink href="/resources"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Resources`}</Text></Link></NextLink>
<NextLink href="/contact"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Contact`}</Text></Link></NextLink>
<NextLink href="/give"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Give`}</Text></Link></NextLink></Box>
<Box sx={{"display": ["block", "block", "block", "none"]}}><Menu><MenuButton sx={{"paddingRight": "15px"}}><Text as="u"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Menu`}</Text></MenuButton>
<MenuList><MenuItem><NextLink href="/faith"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Our Faith`}</Text></Link></NextLink></MenuItem>
<MenuItem><NextLink href="/resources"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Resources`}</Text></Link></NextLink></MenuItem>
<MenuItem><NextLink href="/give"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Give`}</Text></Link></NextLink></MenuItem>
<MenuDivider/>
<MenuItem><NextLink href="/contact"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Contact`}</Text></Link></NextLink></MenuItem></MenuList></Menu></Box></HStack></Box>
<Heading sx={{"paddingTop": "90px", "paddingBottom": "20px", "fontWeight": "500"}}>{`Calendar`}</Heading>
<Box sx={{"display": ["none", "block", "block", "block"]}}><Box as="iframe"
element="iframe"
src="https://calendar.google.com/calendar/embed?src=719919b40ab0f748a2249fb5126b156de5f9e3507a86f38b93cafa37c7d27079%40group.calendar.google.com&ctz=America%2FPhoenix"
sx={{"width": "800px", "height": "600px", "frameborder": "0", "scrolling": "no"}}/></Box>
<Box sx={{"display": ["block", "none", "none", "none"]}}><Box as="iframe"
element="iframe"
src="https://calendar.google.com/calendar/embed?src=719919b40ab0f748a2249fb5126b156de5f9e3507a86f38b93cafa37c7d27079%40group.calendar.google.com&ctz=America%2FPhoenix"
sx={{"width": "800px", "height": "600px", "frameborder": "0", "scrolling": "no"}}/></Box>
<Box sx={{"fontSize": "0.5em", "padding": "50px"}}>{`Copyright © 2023. The Church in Tucson. All Rights Reserved.`}</Box>
<NextHead><title>{`The church in Tucson | Calendar`}</title>
<meta content="A Pynecone app."
name="description"/>
<meta content="favicon.ico"
property="og:image"/></NextHead></VStack>
)
}