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
import backpack from '../../Assets/backpack.webp'
import tshirt from '../../Assets/tshirt.jpg'
import jacket from '../../Assets/jacket.jpg'
import casual from '../../Assets/casual.webp'
import bracelet from '../../Assets/bracelet.webp'
import goldpetite from '../../Assets/goldpetite.jpg'
import whitegold from '../../Assets/whitegold.jfif'
import rosegold from '../../Assets/rosegold.webp'
import siliconpower from '../../Assets/siliconpower.jpg'
import internalssd from '../../Assets/Internalssd.webp'
import gamingdrive from '../../Assets/gamingdrive.jpg'
import playstation from '../../Assets/playstation.jfif'
import necklace from '../../Assets/necklace.webp'
import jenas from '../../Assets/jenas.jpg'
import handbag from '../../Assets/handbag.webp'
import dress from '../../Assets/dress.webp'

function Offerlist(){
    const offer=[
        {
            id:1,
            title:"Welcome to shopaholic| Your savings corner",
            image:[
                dress,
                handbag,
                jenas,
                necklace
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
             internalssd,
             gamingdrive,
             siliconpower,
             playstation
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
             bracelet,
             goldpetite,
             whitegold,
             rosegold
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
            backpack,
            tshirt,
            jacket,
            casual
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