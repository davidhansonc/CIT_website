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
<Box sx={{"display": ["none", "none", "none", "block"]}}><VStack><Heading sx={{"paddingTop": "90px", "paddingBottom": "40px", "fontWeight": "500"}}>{`Contact Us`}</Heading>
<Box as="iframe"
element="iframe"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.508540129675!2d-110.87638679999999!3d32.2713029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d66e6d79a8b88f%3A0x55f536e342d9ea11!2s3537%20N%20Craycroft%20Rd%2C%20Tucson%2C%20AZ%2085718!5e0!3m2!1sen!2sus!4v1683328337835!5m2!1sen!2sus"
sx={{"width": "600px", "height": "450px", "paddingBottom": "15px"}}/>
<Box sx={{"width": "75%"}}><Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>{`Meeting Information`}</Heading>
<UnorderedList sx={{"paddingBottom": "10px"}}><ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Every Sunday at 10 AM we gather for 
                        the Lord's Table and mutual fellowship 
                        from the Bible at:`}</Text></ListItem>
<UnorderedList sx={{"listStyleType": "none"}}><ListItem><NextLink href="https://www.google.com/maps/search/?api=1&query=the+church+in+tucson&query_place_id=ChIJj7ioeW1u1oYREerZQuM29VU"
passHref={true}><Link isExternal={true}
sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`3537 N. Craycroft Rd. Tucson, AZ 85718`}</Text></Link></NextLink></ListItem></UnorderedList>
<ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Every Tuesday at 7:30 PM we gather in groups 
                        to pray for the Lord’s interests on the earth.`}</Text></ListItem>
<ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Most other evenings we gather in various homes 
                        for small group Bible studies and fellowship.`}</Text></ListItem></UnorderedList>
<Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>{`Contact Us`}</Heading>
<UnorderedList><ListItem><NextLink href="mailto: info@churchintucson.org"
passHref={true}><Link sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`info@churchintucson.org`}</Text></Link></NextLink></ListItem>
<ListItem><NextLink href="tel: 5205487514"
passHref={true}><Link sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`520-548-7514`}</Text></Link></NextLink></ListItem>
<ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Our mailing address is 6091 E Grant Rd, Tucson, AZ 85712`}</Text></ListItem></UnorderedList></Box></VStack></Box>
<Box sx={{"display": ["block", "block", "block", "none"]}}><VStack><Heading sx={{"paddingTop": "90px", "paddingBottom": "40px", "fontWeight": "500"}}>{`Contact Us`}</Heading>
<Box as="iframe"
element="iframe"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.508540129675!2d-110.87638679999999!3d32.2713029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d66e6d79a8b88f%3A0x55f536e342d9ea11!2s3537%20N%20Craycroft%20Rd%2C%20Tucson%2C%20AZ%2085718!5e0!3m2!1sen!2sus!4v1683328337835!5m2!1sen!2sus"
sx={{"width": "85%", "paddingBottom": "15px"}}/>
<Box sx={{"width": "85%"}}><Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>{`Meeting Information`}</Heading>
<UnorderedList sx={{"paddingBottom": "10px"}}><ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Every Sunday at 10 AM we gather for 
                        the Lord's Table and mutual fellowship 
                        from the Bible at:`}</Text></ListItem>
<UnorderedList sx={{"listStyleType": "none"}}><ListItem><NextLink href="https://www.google.com/maps/search/?api=1&query=the+church+in+tucson&query_place_id=ChIJj7ioeW1u1oYREerZQuM29VU"
passHref={true}><Link isExternal={true}
sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`3537 N. Craycroft Rd. Tucson, AZ 85718`}</Text></Link></NextLink></ListItem></UnorderedList>
<ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Every Tuesday at 7:30 PM we gather 
                        to pray for the Lord’s interests on the earth.`}</Text></ListItem>
<ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Most other evenings we gather in various homes 
                        for small group Bible studies and fellowship.`}</Text></ListItem></UnorderedList>
<Heading sx={{"fontSize": "1.35em", "fontWeight": "500"}}>{`Contact Us`}</Heading>
<UnorderedList><ListItem><NextLink href="mailto: info@churchintucson.org"
passHref={true}><Link sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`info@churchintucson.org`}</Text></Link></NextLink></ListItem>
<ListItem><NextLink href="tel: 5205487514"
passHref={true}><Link sx={{"color": "rgb(107,99,246)"}}><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`520-548-7514`}</Text></Link></NextLink></ListItem>
<ListItem><Text sx={{"fontFamily": "Inter", "fontWeight": "200"}}>{`Our mailing address is 6091 E Grant Rd, Tucson, AZ 85712`}</Text></ListItem></UnorderedList></Box></VStack></Box>
<Box sx={{"fontSize": "0.5em", "padding": "50px"}}>{`Copyright © 2023. The Church in Tucson. All Rights Reserved.`}</Box>
<NextHead><title>{`Contact Us`}</title>
<meta content="A Pynecone app."
name="description"/>
<meta content="favicon.ico"
property="og:image"/></NextHead></VStack>
)
}