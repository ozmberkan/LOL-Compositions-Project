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
];
