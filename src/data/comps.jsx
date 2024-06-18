import Ashe from "../assets/champions/Ashe.png";
import Garen from "../assets/champions/Garen.png";
import Hwei from "../assets/champions/Hwei.png";
import Alistar from "../assets/champions/Alistar.png";
import Ivern from "../assets/champions/Ivern.png";
import ProtectVector from "../assets/ProtectVector.png";
//
import Aatrox from "../assets/champions/Aatrox.png";
import Brand from "../assets/champions/Brand.png";
import Annie from "../assets/champions/Annie.png";
import Aphelios from "../assets/champions/Aphelios.png";
import Briar from "../assets/champions/Briar.png";
import EngageVector from "../assets/EngageVector.png";
//
import AurelionSol from "../assets/champions/Aurelion Sol.png";
import Azir from "../assets/champions/Azir.png";
import Diana from "../assets/champions/Diana.png";
import Draven from "../assets/champions/Draven.png";
import Elise from "../assets/champions/Elise.png";
import SiegeVector from "../assets/SiegeVector.png";
//
import Blitzcrank from "../assets/champions/Blitzcrank.png";
import Caitlyn from "../assets/champions/Caitlyn.png";
import BelVeth from "../assets/champions/Bel'Veth.png";
import Evelynn from "../assets/champions/Evelynn.png";
import Gangplank from "../assets/champions/Gangplank.png";
import PickVector from "../assets/PickVector.png";
//
import Fizz from "../assets/champions/Fizz.png";
import JarvanIV from "../assets/champions/Jarvan IV.png";
import Gwen from "../assets/champions/Gwen.png";
import SplitVector from "../assets/SplitVector.png";
//
import Anivia from "../assets/champions/Anivia.png";
import Darius from "../assets/champions/Darius.png";
import Ezreal from "../assets/champions/Ezreal.png";
import ChoGath from "../assets/champions/Cho'Gath.png";


export const dataComps = [
  {
    id: 1,
    name: "Ashe Protect",
    images: [
      {
        id : 1,
        name: "Ashe",
        image: Ashe,
      },
       {
        id :2,
        name: "Garen",
        image: Garen,
      },
    {
        id :3,
        name: "Hwei",
        image: Hwei,
      },
      {
        id :4,
        name: "Alistar",
        image: Alistar,
      },
      {
        id :5,
        name: "Ivern",
        image: Ivern,
      },
    ],
    gamestyle: {
      image: ProtectVector,
      type: "Protect",
    },
    scaling: [
      {
        id: 1,
        color_code: "#C24B4b",
        name: "Red",
      },
      {
        id: 2,
        color_code: "#CE6C21",
        name: "Orange",
      },
      {
        id: 3,
        color_code: "#19AB4F",
        name: "Green",
      },
    ],
    added: "2 days ago",
  },
  {
    id: 2,
    name: "Aatrox Attacker",
    images: [
      {
        id:1,
        name: "Aatrox",
        image: Aatrox,
      },
      {
        id:2,
        name: "Brand",
        image: Brand,
      },
      {
        id:3,
        name: "Annie",
        image: Annie,
      },
      {
         id:4,
        name: "Aphelios",
        image: Aphelios,
      },
      {
        id:5,
        name: "Briar",
        image: Briar,
      },
    ],
    gamestyle: {
      image: EngageVector,
      type: "Engage",
    },
    scaling: [
      {
        id: 1,
        color_code: "#C24B4b",
        name: "Red",
      },
      {
        id: 2,
        color_code: "#CE6C21",
        name: "Orange",
      },
      {
        id: 3,
        color_code: "#CE6C21",
        name: "Orange",
      },
    ],
    added: "5 days ago",
  },
  {
    id: 3,
    name: "Early Game",
    images: [
      {
        id:1,
        name: "Aurelion Sol",
        image: AurelionSol,
      },
      {
        id:2,
        name: "Azir",
        image: Azir,
      },
      {
        id:3,
        name: "Diana",
        image: Diana,
      },
      {
         id:4,
        name: "Draven",
        image: Draven,
      },
      {
        id:5,
        name: "Elise",
        image:  Elise,
      },
    ],
    gamestyle: {
      image: SiegeVector,
      type: "Siege",
    },
    scaling: [
      {
        id: 1,
        color_code: "#19AB4F",
        name: "Green",
      },
      {
        id: 2,
        color_code: "#19AB4F",
        name: "Green",
      },
      {
        id: 3,
        color_code: "#CE6C21",
        name: "Orange",
      },
    ],
    added: "1 days ago",
  },
  {
    id: 4,
    name: "Late Game",
    images: [
      {
        id:1,
        name: "Blitzcrank",
        image: Blitzcrank,
      },
      {
        id:2,
        name: "Caitlyn",
        image: Caitlyn,
      },
      {
        id:3,
        name: "Bel'Veth",
        image: BelVeth,
      },
      {
         id:4,
        name: "Evelynn",
        image: Evelynn,
      },
      {
        id:5,
        name: "Gangplank",
        image:  Gangplank,
      },
    ],
    gamestyle: {
      image: PickVector,
      type: "Pick",
    },
    scaling: [
      {
        id: 1,
        color_code: "#CE6C21",
        name: "Orange",
      },
      {
        id: 2,
        color_code: "#CE6C21",
        name: "Orange",
      },
      {
        id: 3,
        color_code: "#CE6C21",
        name: "Orange",
      },
    ],
    added: "9 days ago",
  },
  {
    id: 5,
    name: "Critics & Full Damage",
    images: [
      {
        id:1,
        name: "Draven",
        image: Draven,
      },
      {
        id:2,
        name: "Blitzcrank",
        image: Blitzcrank,
      },
      {
        id:3,
        name: "Jarvan IV",
        image: JarvanIV,
      },
      {
         id:4,
        name: "Fizz",
        image: Fizz,
      },
      {
        id:5,
        name: "Gwen",
        image:  Gwen,
      },
    ],
    gamestyle: {
      image: SplitVector,
      type: "Split",
    },
    scaling: [
      {
        id: 1,
        color_code: "#CE6C21",
        name: "Orange",
      },
      {
        id: 2,
        color_code: "#19AB4F",
        name: "Green",
      },
      {
        id: 3,
        color_code: "#CE6C21",
        name: "Orange",
      },
    ],
    added: "9 days ago",
  },
  {
    id: 6,
    name: "Tank & Support",
    images: [
      {
        id:1,
        name: "Anivia",
        image: Anivia,
      },
      {
        id:2,
        name: "Ezreal",
        image: Ezreal,
      },
      {
        id:3,
        name: "Darius",
        image:  Darius,
      },
      {
         id:4,
        name: "Alistar",
        image: Alistar,
      },
      {
        id:5,
        name: "Cho'Gath",
        image: ChoGath,
      },
    ],
    gamestyle: {
      image: ProtectVector,
      type: "Protect",
    },
    scaling: [
      {
        id: 1,
        color_code: "#C24B4b",
        name: "Red",
      },
      {
        id: 2,
        color_code: "#C24B4b",
        name: "Red",
      },
      {
        id: 3,
        color_code: "#C24B4b",
        name: "Red",
      },
    ],
    added: "3 days ago",
  },
];
