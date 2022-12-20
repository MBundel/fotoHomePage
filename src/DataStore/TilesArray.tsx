interface TileMainMap {
    id: number
      category: string,
      header:   string,   
      imgSrc:   string,
      link:     string 
}

export const TileMainMap = [
    {
      id: 1,
      category: "FAQ",
      header: "Wie geht Akt?",
      imgSrc: "./img/HintergrundPilz.jpg",
      link: "/WieGehtAkt"
    },
    {
      id: 2,
      category: "FAQ",
      header: "Fototipps",
      imgSrc: "./img/HintergrundPilz.jpg",
      link: "/Fototipps",
    },
    {
      id: 3,
      category: "FAQ",
      header: "Allgemeines",
      imgSrc: "./img/HintergrundPilz.jpg",
      link: "/AllgemeineFAQ",
    },
  ];