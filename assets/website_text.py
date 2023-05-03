import pynecone as pc
from CIT import styles


intro_paragraph = """The church in Tucson isn’t our name – it’s our description. 
As such, it’s an inclusive title, not an exclusive one. 
We gather together simply as believers of the Lord in the city of Tucson, and we receive 
as our brothers and sisters all who believe in Jesus Christ. 
Likewise, we warmly welcome guests and visitors who are not Christians."""


intro = "We hold the faith which is common to all the believers (Titus 1:4, Jude 3):"

Bible = "The Bible is the complete divine revelation inspired word by word by God through the Holy Spirit (2 Pet. 1:21, 2 Tim. 3:16)"

Truine_God = "God is uniquely one, yet Triune: the Father, the Son, and the Spirit (1 Tim. 2:5a, Matt. 28:19)"

Jesus_Christ = "The Son of God, even God Himself, was incarnated to be a man by the name of Jesus Christ (John 1:1, John 1:14)"

Crucifixion = "Christ died on the cross for our sins, shedding His blood for our redemption (1 Pet. 2:24,  Eph. 1:7a)"

Resurrection = "Christ resurrected from among the dead on the third day (1 Cor. 15:4)"

Ascension = "Christ ascended to the right hand of God to be Lord of all (Acts 1:9, Acts 2:33, Acts 2:36)"

Salvation = "Whenever any person repents to God and believes in the Lord Jesus Christ, he is regenerated (born again) and becomes a living member of the one Body of Christ (Acts 20:21, John 3:3, Eph. 1:22-23, Rom. 12:5)"

Christ_Return = "Christ is coming again to receive His believers to Himself (1 Thes. 2:19)"


meeting_hall = "https://www.google.com/maps/place/3537+N+Craycroft+Rd,+Tucson,+AZ+85718/@32.2713029,-110.8789617,17z/data=!3m1!4b1!4m6!3m5!1s0x86d66e6d79a8b88f:0x55f536e342d9ea11!8m2!3d32.2713029!4d-110.8763868!16s%2Fg%2F11c4m1yr77?hl=en"
hall_link = pc.link(
    "3537 N. Craycroft Rd. Tucson, AZ 85718",
    href=meeting_hall,
    color="rgb(107,99,246)",
)

faith = pc.box(
        pc.heading("The Bible", font_size=styles.H3_FONT_SIZE),
        pc.unordered_list(
            pc.list_item(Bible),
            padding_bottom="15px",
        ),
        pc.heading("The Triune God", font_size=styles.H3_FONT_SIZE),
        pc.unordered_list(
            pc.list_item(Truine_God),
            padding_bottom="15px",
        ),
        pc.heading("Jesus Christ", font_size=styles.H3_FONT_SIZE),
        pc.unordered_list(
            pc.list_item(Jesus_Christ),
            padding_bottom="15px",
        ),
        pc.heading("Christ's Crucifixion", font_size=styles.H3_FONT_SIZE),
        pc.unordered_list(
            pc.list_item(Crucifixion),
            padding_bottom="15px",
        ),
        pc.heading("Christ's Resurrection", font_size=styles.H3_FONT_SIZE),
        pc.unordered_list(
            pc.list_item(Resurrection),
            padding_bottom="15px",
        ),
        pc.heading("Christ's Ascension", font_size=styles.H3_FONT_SIZE),
        pc.unordered_list(
            pc.list_item(Ascension),
            padding_bottom="15px",
        ),
        pc.heading("Salvation", font_size=styles.H3_FONT_SIZE),
        pc.unordered_list(
            pc.list_item(Salvation),
            padding_bottom="15px",
        ),
        pc.heading("Christ's Return", font_size=styles.H3_FONT_SIZE),
        pc.unordered_list(
            pc.list_item(Christ_Return),
            padding_bottom="15px",
        ),
        width="100%",
    )