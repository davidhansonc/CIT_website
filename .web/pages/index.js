import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, updateState, uploadFiles} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, HStack, Heading, Image, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, VStack, useColorMode} from "@chakra-ui/react"
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
<Box sx={{"display": ["none", "none", "none", "block"]}}><Box><Image src="/AZ_desert_scape2.png"
sx={{"width": "100%", "height": "auto"}}/></Box>
<Box sx={{"paddingTop": "75px", "paddingBottom": "75px", "paddingRight": "150px", "paddingLeft": "150px", "width": "100%"}}><Text sx={{"fontSize": "1.25em", "fontFamily": "Inter", "fontWeight": "200"}}>{`The church in Tucson isn’t our name – it’s our description. 
As such, it’s an inclusive title, not an exclusive one. 
We gather together simply as believers of the Lord in the city of Tucson, and we receive 
as our brothers and sisters all who believe in Jesus Christ. 
Likewise, we warmly welcome guests and visitors who are not Christians.`}</Text></Box></Box>
<Box sx={{"display": ["none", "block", "block", "none"]}}><Box><Image src="/AZ_desert_scape3.png"
sx={{"width": "100%", "height": "auto"}}/></Box>
<Heading sx={{"fontSize": "3em", "padding": "15px", "fontWeight": "500"}}>{`Welcome.`}</Heading>
<Box sx={{"paddingLeft": "50px", "paddingRight": "50px", "width": "100%"}}><Text sx={{"fontSize": "1.25em", "fontFamily": "Inter", "fontWeight": "200"}}>{`The church in Tucson isn’t our name – it’s our description. 
As such, it’s an inclusive title, not an exclusive one. 
We gather together simply as believers of the Lord in the city of Tucson, and we receive 
as our brothers and sisters all who believe in Jesus Christ. 
Likewise, we warmly welcome guests and visitors who are not Christians.`}</Text></Box></Box>
<Box sx={{"display": ["block", "none", "none", "none"]}}><Box><Image src="/AZ_desert_scape4.png"
sx={{"width": "100%", "height": "auto"}}/></Box>
<Heading sx={{"fontSize": "3em", "padding": "15px", "fontWeight": "500"}}>{`Welcome.`}</Heading>
<Box sx={{"paddingLeft": "25px", "paddingRight": "25px", "width": "100%"}}><Text sx={{"fontSize": "1.25em", "fontFamily": "Inter", "fontWeight": "200"}}>{`The church in Tucson isn’t our name – it’s our description. 
As such, it’s an inclusive title, not an exclusive one. 
We gather together simply as believers of the Lord in the city of Tucson, and we receive 
as our brothers and sisters all who believe in Jesus Christ. 
Likewise, we warmly welcome guests and visitors who are not Christians.`}</Text></Box></Box>
<Box sx={{"fontSize": "0.5em", "padding": "50px"}}>{`Copyright © 2023. The Church in Tucson. All Rights Reserved.`}</Box>
<NextHead><title>{`The Church in Tucson`}</title>
<meta content="A local church, the church in Tucson warmly welcomes you."
name="description"/>
<meta content="favicon.ico"
property="og:image"/></NextHead></VStack>
)
}