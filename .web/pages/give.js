import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, updateState, uploadFiles} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, HStack, Heading, Link, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, UnorderedList, VStack, useColorMode} from "@chakra-ui/react"
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
<NextLink href="/calendar"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Calendar`}</Text></Link></NextLink>
<NextLink href="/contact"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Contact`}</Text></Link></NextLink>
<NextLink href="/give"
passHref={true}><Link sx={{"paddingRight": "15px"}}><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Give`}</Text></Link></NextLink></Box>
<Box sx={{"display": ["block", "block", "block", "none"]}}><Menu><MenuButton sx={{"paddingRight": "15px"}}><Text as="u"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Menu`}</Text></MenuButton>
<MenuList><NextLink href="/faith"
passHref={true}><Link><MenuItem><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Our Faith`}</Text></MenuItem></Link></NextLink>
<NextLink href="/resources"
passHref={true}><Link><MenuItem><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Resources`}</Text></MenuItem></Link></NextLink>
<NextLink href="/calendar"
passHref={true}><Link><MenuItem><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Calendar`}</Text></MenuItem></Link></NextLink>
<NextLink href="/give"
passHref={true}><Link><MenuItem><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Give`}</Text></MenuItem></Link></NextLink>
<MenuDivider/>
<NextLink href="/contact"
passHref={true}><Link><MenuItem><Text as="b"
sx={{"color": "#696969", "fontFamily": "Inter", "fontWeight": "200"}}>{`Contact Us`}</Text></MenuItem></Link></NextLink></MenuList></Menu></Box></HStack></Box>
<Box sx={{"display": ["none", "none", "none", "block"]}}><VStack><Heading sx={{"paddingTop": "90px", "paddingBottom": "40px", "fontWeight": "500"}}>{`Give`}</Heading>
<Box sx={{"width": "60%"}}><Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>{`Local Needs`}</Heading>
<UnorderedList sx={{"paddingBottom": "20px"}}><ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Please send any cash or checks to our mailing address: 
                        6091 E Grant Rd Tucson, AZ 85712. Checks should be made out to "The Church in Tucson".`}</Text></ListItem>
<ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`There is also a donation box in our meeting hall.`}</Text></ListItem></UnorderedList>
<Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>{`The Work of the Ministry`}</Heading>
<UnorderedList><ListItem><NextLink href="https://www.lsm.org/donations/index.php"
passHref={true}><Link sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Living Stream Ministry`}</Text></Link></NextLink></ListItem>
<ListItem><NextLink href="https://www.lordsmove.org/"
passHref={true}><Link sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`The Lord's Move to Europe`}</Text></Link></NextLink></ListItem></UnorderedList></Box></VStack></Box>
<Box sx={{"display": ["block", "block", "block", "none"]}}><VStack><Heading sx={{"paddingTop": "90px", "paddingBottom": "40px", "fontWeight": "500"}}>{`Give`}</Heading>
<Box sx={{"width": "85%"}}><Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>{`Local Needs`}</Heading>
<UnorderedList sx={{"paddingBottom": "20px"}}><ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Please send any cash or checks to our mailing address: 
                        6091 E Grant Rd Tucson, AZ 85712. Checks should be made out to "The Church in Tucson".`}</Text></ListItem>
<ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`There is also a donation box in our meeting hall.`}</Text></ListItem></UnorderedList>
<Heading sx={{"fontSize": "1.35em", "paddingBottom": "10px", "fontWeight": "500"}}>{`The Work of the Ministry`}</Heading>
<UnorderedList><ListItem><NextLink href="https://www.lsm.org/donations/index.php"
passHref={true}><Link sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Living Stream Ministry`}</Text></Link></NextLink></ListItem>
<ListItem><NextLink href="https://www.lordsmove.org/"
passHref={true}><Link sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`The Lord's Move to Europe`}</Text></Link></NextLink></ListItem></UnorderedList></Box></VStack></Box>
<Box sx={{"fontSize": "0.5em", "padding": "50px"}}>{`Copyright © 2023. The Church in Tucson. All Rights Reserved.`}</Box>
<NextHead><title>{`Give | The church in Tucson`}</title>
<meta content="If you feel to give to the church or the work of the ministry, here is some guidance."
name="description"/>
<meta content="favicon.ico"
property="og:image"/></NextHead></VStack>
)
}