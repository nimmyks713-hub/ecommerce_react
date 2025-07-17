import Offercard from "./Offercard"
import '../../Styles/Offerlist.css'
import headsets from '../../Assets/headsets.jpg'
import earbuds from '../../Assets/earbuds.jpg'
import speakers from '../../Assets/speakers.webp'
import soundbars from '../../Assets/soundbars.jpg'
import digitalcontent from '../../Assets/digitalcontent.jfif'
import pcgaming from '../../Assets/pcgaming.jpg'
import gamingaccessories from '../../Assets/gamingaccessories.avif'
import gamingconsole from '../../Assets/gamingconsole.jpg'
import sofa from '../../Assets/sofa.webp'
import bed from '../../Assets/bed.webp'
import chair from '../../Assets/chair.webp'
import tableset from '../../Assets/tableset.webp'
import plush from '../../Assets/plush.avif'
import scooter from '../../Assets/scooter.jpg'
import toys from '../../Assets/toys.webp'
import pushpop from '../../Assets/pushpop.jpg'

function Offerlist(){
    const offer=[
        {
            id:1,
            title:"Welcome to shopaholic| Your savings corner",
            image:[
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            ],
            subtitle:[
                 "Coupons and Benefits",
                 "Bestsellers",
                 "Today's Deals",
                 "Budget Store"
            ]
        },
        {
            id:2,
            title:"Upto 20% off - Electronics",
            image:[
             "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
             "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
             "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
             "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
            ],
            subtitle:[
                "Internal SSD",
                 "Gaming Drive",
                 "Silicon Power",
                 "Playstation"
            ]
        },
        {
            id:3,
            title:"New arrivals|Watches and Jwellery|Upto 50% off",
            image:[
             "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
             "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
             "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
             "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
            ],
            subtitle:[
            "Bracelet",
            "Gold Petite",
            "White Gold",
            "Rose Gold"
            ]
       },
       {
            id:4,
            title:"Just landed for men|Upto 40% off",
            image:[
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            ],
            subtitle:[
               "Backpack",
               "T-Shirts",
               "Jacket",
               "Casual"
            ]
        },
        {
            id:5,
            title:"Upto 30% off - Headsets and Speakers",
            image:[
             headsets,
             earbuds,
            speakers,
            soundbars
            ],
            subtitle:[
             "Headsets",
             "Earbuds",
             "Speakers",
             "Soundbars"
            ]
        },
        
        {
            id:6,
            title:"Upto 20% off-Gaming corner",
            image:[
            gamingconsole,
            gamingaccessories,
            pcgaming,
            digitalcontent
            ],
            subtitle:[
            "Gaming Console",
            "Gaming Accessories",
            "PC Gaming",
            "Digital Content"
            ]
        },
        {
            id:7,
            title:"Get your furniture assembled for free",
            image:[
             sofa,
             bed,
             chair,
             tableset
            ],
            subtitle:[
             "Sofa",
             "Bed",
             "Chair",
             "Table set"
            ]
       },
        {
            id:8,
            title:"Frequently purchased toys| From AED 12",
            image:[
              pushpop,
              toys,
              plush,
              scooter
            ],
            subtitle:[
             "Push Pop",
             "Toys",
             "Plush Toy",
             "Scooter"
            ]
        }
    ]

    
    return (
        <div className="list">
            {
          offer.map((p)=>{
            return <Offercard title={p.title} image={p.image} subtitle={p.subtitle}/>
          })
        }
        </div>
    )
}
export default Offerlist;