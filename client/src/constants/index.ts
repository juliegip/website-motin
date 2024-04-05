// content dynamic

import MotinSTG from "../assets/motin_stg.jpg";
import Normagri from "../assets/normagri.jpg";
import MotinVire from "../assets/motin_vire.jpg";
import AMSValognes from "../assets/ams_valognes.jpeg";

export const bases = [
  {
    lat: 49.13525028981112,
    lng: -1.1490075330979324,
    nom: "Motin Saint Gilles",
    adresse: "Route de Saint Lô 50180 Saint Gilles",
    tel: "+33 (0)2 33 77 46 20",
    fax: "+33 (0)2 33 77 46 20",
    email: "accueil@motin.fr",
    photo: MotinSTG,
    horaires: "",
    agent: false,
    GMapsURL:
      "https://www.google.fr/maps/dir//MOTIN+SAINT+GILLES+(concessionnaire+materiel+agricole),+Saint-Gilles/@49.1025097,-1.2447517,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x480b916fc1ac88a7:0x3fd5362dbe0e2c3d!2m2!1d-1.1623512!2d49.102539?entry=ttu",
  },
  {
    lat: 48.89747563693977,
    lng: -0.8661095979836146,
    nom: "Motin Vire",
    adresse: "ZA La Papillionnière 14500 VIRE",
    tel: "+33 (0)2 31 68 36 04",
    fax: "+33 (0)2 31 68 37 15",
    email: "accueil@motin.fr",
    photo: MotinVire,
    horaires: "",
    agent: false,
    GMapsURL:
      "https://www.google.fr/maps/dir//Motin,+La+Papillonni%C3%A8re,+Vire-Normandie/@48.869111,-0.9535162,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480bdaaf8c5b8e67:0x6857c20b8b2ac599!2m2!1d-0.87104!2d48.8691102?entry=ttu",
  },
  {
    lat: 49.51267603883449,
    lng: -1.4970846242395017,
    nom: "AMS Valognes",
    adresse: "ZA d' Armanville 50700 VALOGNES",
    tel: "+33 (0)2 33 61 23 24",
    email: "ams@motin.fr",
    photo: AMSValognes,
    horaires: "",
    agent: false,
    GMapsURL:
      "https://www.google.fr/maps/dir//AMS+Massey+Ferguson+-+VALOGNES,+Route+de+la+Ferme+(Armanville),+Valognes/@49.5119362,-1.5796997,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480c837617ce8acb:0x635b11fec37dd543!2m2!1d-1.4972992!2d49.5119655?entry=ttu",
  },
  {
    lat: 48.60210703671148,
    lng: -1.2064600891453157,
    nom: "Normagri Isigny-le-Buat",
    adresse: "Les Biards 50540 ISIGNY-LE-BUAT",
    tel: "+33 (0)2 33 89 22 00",
    email: "normagri@normagri.fr",
    photo: Normagri,
    horaires: "",
    agent: false,
    GMapsURL:
      "https://www.google.fr/maps/dir//Normagri,+Route+Nationale+176,+Isigny-le-Buat/@48.6018932,-1.2888285,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4809507814a77aa9:0x615cb4dfb6c6ae4d!2m2!1d-1.2064279!2d48.6019226?entry=ttu",
  },
  {
    lat: 48.87989791434353,
    lng: -1.1054796625690382,
    nom: "Ets Perrard - Montbray",
    adresse: "Le Bourg Neuf, 50410 Montbray",
    tel: "+33 (0)2 33 61 97 45",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//Ets+Perrard+-+Montbray,+Le+Bourg+Neuf,+Montbray/@48.8797557,-1.1885081,11.83z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480be8a1f8200e55:0x3132745d9b498e7a!2m2!1d-1.1055494!2d48.8797568?entry=ttu",
  },
  {
    lat: 48.42823456890982,
    lng: -1.5485970141416145,
    nom: "LP Motoculture",
    adresse: "Vaugarny, 35560 Bazouges-la-Pérouse",
    tel: "+33 (0)2 99 97 44 40",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//LP+Motoculture,+Vaugarny,+Bazouges-la-P%C3%A9rouse/@48.4281055,-1.6307133,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480eb84a580e6c6f:0xdee1971373cbbad6!2m2!1d-1.5484954!2d48.4280977?entry=ttu",
  },
  {
    lat: 48.263364334130394,
    lng: -1.1880943951020273,
    nom: "Garage DESBUISSON",
    adresse: "La haute, La Martinière, 35210 Parce",
    tel: "+33 (0)2 99 97 50 94",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//Garage+DESBUISSON,+La+Martini%C3%A8re,+Parc%C3%A9/@48.2632278,-1.2704038,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480931dd44e68fcf:0xe31274783f212bcf!2m2!1d-1.1880032!2d48.2632572?entry=ttu",
  },
  {
    lat: 48.64016024741723,
    lng: -0.46748480674670123,
    nom: "Lefevre Sarl",
    adresse: "La Tuilerie, 61220 La Coulonche",
    tel: "+33 (0)9 60 04 69 86",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//Lefevre+Sarl,+La+Tuilerie,+La+Coulonche/@48.6399607,-0.5499015,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4809892a86a8776d:0x46a28b5fe2b575e7!2m2!1d-0.4674954!2d48.6400112?entry=ttu",
  },
  {
    lat: 49.66405843806124,
    lng: -1.3177801028361762,
    nom: "Jean Daniel Saillard",
    adresse: "Saint Genevieve (Val de Saire)",
    tel: "",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//Sainte-Genevieve,+Manche,+Normandy/@49.6582471,-1.403372,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480b67146bcd271f:0x40c14484fb96ab0!2m2!1d-1.313455!2d49.656934?entry=ttu",
  },
];

export const Motin_Services = [
  {
    offre: "Vente de machines",
    image: "src/assets/news/Motin_news05.png",
    contenu: [
      {
        details: "Conseil",
        description: "au service d'une agriculture innovante",
      },
      {
        details: "Neufs",
        description: "On a de beaux tracteurs tout neuf",
      },
      {
        details: "Occasions",
        description: "On a beaucoup d'occasions",
      },
    ],
  },
  {
    offre: "Service après-vente",
    image: "src/assets/news/IMG_9602.JPG",
    contenu: [
      {
        details: "Entretien",
        description: "la qualité du service Motin",
      },
      {
        details: "Maintenance",
        description: "On a des supers outils",
      },
    ],
  },
  {
    offre: "Pièces détachées",
    image: "src/assets/news/Motin_news03.png",
    contenu: [
      {
        details: "Réparation",
        description: "Pas de panne chez Motin",
      },
      {
        details: "Innovation",
        description: "Technologie dernier cri",
      },
      {
        details: "Proximité",
        description: "On intervient rapidement",
      },
    ],
  },
];

export const news = [
  {
    image: "src/assets/news/Motin_news01.png",
    alt: "latest news",
    title: "actualité 1",
    date: "Janvier 2024",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis qui delectus porro maxime. Ipsa optio quae corporis iste ea?",
    landing: true,
  },
  {
    image: "src/assets/news/Motin_news02.png",
    alt: "news 1",
    title: "actualité 2",
    date: "Novembre 2023",
    caption: "News 1 electus porro maxime. Ipsa optio quae corporis iste ea?",
    landing: true,
  },
  {
    image: "src/assets/news/Motin_news03.png",
    alt: "news 3",
    title: "actualité 3",
    date: "Octobre 2023",
    caption: "News 2 electus porro maxime. Ipsa optio quae corporis iste ea?",
    landing: false,
  },
  {
    image: "src/assets/news/Motin_news04.png",
    alt: "news 3",
    title: "actualité 4",
    date: "Aout 2023",
    caption: "News 3 porro maxime. Ipsa optio quae corporis iste ea?",
    landing: true,
  },
  {
    image: "src/assets/news/Motin_news05.png",
    alt: "news 4",
    title: "actualité 5",
    date: "Juin 2023",
    caption: "News 4 porro maxime. Ipsa optio quae corporis iste ea?",
    landing: false,
  },
];

export const navLinks = [
  { href: "/", label: "Présentation" },
  { href: "/occasions", label: "Occasions" },
  { href: "/recrutement", label: "Recrutement" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = [
  {
    title: "Plan du site",
    links: [
      { name: "Présentation", link: "/", target: "" },
      { name: "Nos services", link: "#services" },
      { name: "Blog", link: "/actualites" },
      { name: "Occasions", link: "/occasions" },
      { name: "Recrutement", link: "/recrutement" },
      { name: "Contactez-vous", link: "/contact" },
    ],
  },
];

export const partenaires = [
  {
    name: "Massey Ferguson",
    link: "https://www.masseyferguson.com/",
    target: "_blank",
    logo: "src/assets/icons/massey-ferguson.svg",
  },
  {
    name: "AVR",
    link: "https:/avr.be/",
    target: "_blank",
    logo: "src/assets/icons/avr.svg",
  },
  {
    name: "Pottinger",
    link: "https://www.poettinger.at/",
    target: "_blank",
    logo: "src/assets/icons/pottinger.svg",
  },
  {
    name: "Joskin",
    link: "https://www.joskin.com/fr",
    target: "_blank",
    logo: "src/assets/icons/joskin.svg",
  },
  {
    name: "Faresin",
    link: "https://www.faresin.com/fr/",
    target: "_blank",
    logo: "src/assets/icons/faresin.svg",
  },
  {
    name: "Belair",
    link: "https://www.belair-sarl.fr/",
    target: "_blank",
    logo: "src/assets/icons/belair.png",
  },
  {
    name: "SMA Faucheux",
    link: "https://www.smafaucheux.com/",
    target: "_blank",
    logo: "src/assets/icons/sma.png",
  },
  {
    name: "Kverneland",
    link: "https://fr.kvernelandgroup.com/",
    target: "_blank",
    logo: "src/assets/icons/kverneland.svg",
  },
  {
    name: "Arland Pulvérisation",
    link: "https://www.arland-pulverisation.fr/",
    target: "_blank",
    logo: "src/assets/icons/arland.webp",
  },
  {
    name: "Thievin",
    link: "https://www.thievin.fr/",
    target: "_blank",
    logo: "src/assets/icons/thievin.png",
  },
  {
    name: "Weidemann",
    link: "https://www.weidemann.de/fr/",
    target: "_blank",
    logo: "src/assets/icons/weidemann.svg",
  },
  {
    name: "Verhoest",
    link: "https://www.verhoestagro.be/fr",
    target: "_blank",
    logo: "src/assets/icons/verhoest.png",
  },
];
export const socialMedia = [
  {
    src: "src/assets/icons/facebook_white.svg",
    alt: "facebook logo",
    url: "https://www.facebook.com/MotinNormagri/",
  },
  {
    src: "src/assets/icons/instagram_white.svg",
    alt: "instagram logo",
    url: "https://www.instagram.com/motin_normagri/",
  },
  {
    src: "src/assets/icons/tiktok_white.svg",
    alt: "tiktok logo",
    url: "https://www.tiktok.com/@motin_sas",
  },
  {
    src: "src/assets/icons/youtube_white.svg",
    alt: "youtube logo",
    url: "https://www.youtube.com/channel/UCNPLlNE_tG1lYau6Y3vv2WA",
  },
];

export const recrutement_images = [
  {
    src: "src/assets/recrutements/commercial.png",
    alt: "commercial",
  },
  {
    src: "src/assets/recrutements/atelier.png",
    alt: "atelier",
  },
  {
    src: "src/assets/recrutements/magasin.png",
    alt: "magasin",
  },
  {
    src: "src/assets/recrutements/administratif.png",
    alt: "administratif / support ",
  },
];

export const contractTypes = ["CDI", "CDD", "Stage", "Alternance", "Intérim"];

export const headband_contents = [
  {
    title: "MOTIN",
    subtitle: "Concessionnaire Massey Ferguson",
    image: "src/assets/MF.svg",
    link: "",
  },
  {
    title: "Promo Huiles",
    subtitle: "Du XX au XX Mars 2024",
    image: "",
    link: "/actualites",
  },
  {
    title: "Suivez nous sur facebook",
    subtitle: "",
    image: "src/assets/icons/facebook_white.svg",
    link: "https://www.facebook.com/MotinNormagri/",
  },
];

export const newsCategories = [
  "Promotions",
  "Innovations",
  "Massy Ferguson",
  "Autres",
];
