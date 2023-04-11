import axios from "axios";

export const Data = () => {
  const initial = {
    id: "1",
    name: "Alptuğ",
    surname: "Kızılay",
    birthDate: "17.05.1996",
    city: "İstanbul",
    mail: "alptugkizilay@gmail.com",
    education: "Bogazici Univercity Primary Mathematics Education - 2021",
    role: "Frontend, UI",
    skills: [
      {
        skill: "JAVASCRIPT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png",
      },
      {
        skill: "REACT",
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqBa3-9_TwndDR0vij3HkEGgdfjo63zZTxsVAXL4GARYd88FK6",
      },
      {
        skill: "REDUX",
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDEloBxKKl24-n9r7t49AVgc5ZiG-zXmT6D-P3auXiowYVVhK_",
      },
      {
        skill: "NODE",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrq0hkyWEOrgYuMUVyK-Y_LrDzyOOGCjH4aFfWudiEPEPF-itc",
      },
      {
        skill: "VS CODE",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZWp2fpYRDquic10QBjoGoUYLtO4_XtKMkQQvz5S2SzBI4JqZ",
      },
      {
        skill: "FIGMA",
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMczCXPXMZ-8tVEUt2FpT4uJxz7HEXgjBy0_qGSr4NLbAE5Y1C",
      },
    ],
    links: [
      {
        git: "https://github.com/AlptugKizilay",
        linkedin: "https://www.linkedin.com/in/alptugkizilay/",
        blog: "",
        email: "mailto:alptugkizilay@gmail.com",
      }
    ],
    projects: [
      {
        name: "Task Manager",
        description: "You can manage your tasks by using Task Manager",
        url: "http://task-manager-project.great-site.net",
        git: "https://github.com/AlptugKizilay/fsweb-s9g2-task-yonetimi-2",
        content: ["react", "vercel" ,"axios", "router"],
        img1: "https://s3-alpha-sig.figma.com/img/4925/c0fe/0dd6fa4b81a4386c44fc6cd6fffb11d4?Expires=1681689600&Signature=H2vTnE1dvUHpQpHpAZ-c4ioCMt9LYKi5-B1nziHJu~zZk6RcgFbv~d6afubvVCkghynTNcGJOlaABBHvYTjDy3yOXTGPthy~JxxPN~GfLn1s9cWzkjdn16RcqWB5MzzeZTI7yZUP9BYdjfK-Jq25x0CSddts2~tSY6bzSo0~BsudsTZ80eAPRQC7i-BNUxAk8Cz-58UfOFynksN3fVryrb90QbXjcFeAFCkOqjkpvZIbHIDqdMExqyscH5Q3pXemIZmh6cEvn7~m4s7Jfn4EsBRB2OfaPe94n3pEfmH814hinU6zp2VitwP2o9dF-T-IUUxrKLm6wAsVJcTVoXLRXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        img2: "https://s3-alpha-sig.figma.com/img/600f/f411/f246155782db0594c00c688cdbf27f80?Expires=1681689600&Signature=l1~WDrXQU4Mtw~jDceH1K9MLeUQ5Cb2SeECmfhpvls2O54pcVgfU5ff4IpW6Xo4ZA-s1vdvMyn~TypQ3cEBBkvq4NLYhSG1bCSTR6IcQ6p6IIqV2TsT6gC0g5IQ5Hh~XcDD~~gKKb1LolVCPT8zS~3bvcztnmajUOvwMc4ODZ0XJYKOKuonqCewmCltYtwcXAOWAZQVzpag11tlY29pHUllSU2OyhcLqb36OckIztfMyzRpymsk302fOcY6eUFDZu-idaVbnfSsa9X~sKUzzvbH6jve46xp2nTkhqa14FF4MbIglAWUD22CAlmqjun54-B1YVtG1flPPqlLH15S1uA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
      {
        name: "e-Commerce site For Books",
        description: "You can add books to cart",
        url: "http://myfirstproject.great-site.net",
        git: "https://github.com/AlptugKizilay/fsweb-s11g1-shopping-cart",
        content: ["react", "redux", "vercel" ,"axios", "router"],
        img1: "https://s3-alpha-sig.figma.com/img/36bd/8a30/ecc54a92ea4c67cfd6f14ce412bbc06b?Expires=1682294400&Signature=Nx~3Wr6VvnBeKDvwRwwXOMsl4kUXkPgZ1VavktUUDKV1qEsmvSJvz~3yX8Q4kt5mVZu1T3V2uPLcaDwaZppWSDckM8rmCKWXC8MyUhDN9n8mJqtW~wPKLkfQPD9Bgrntdc2phQjQ14mmdRVakcbYqHPCJU3284Vu2v0JfWWJ7Q9b9aJ4KRshvPiqEjlWlQbayQi-NPOvxkctnhw7N1zjSphZBbEZQB8ZewFbDEloo4QqQiZfwuFRNCawkVzhGY2i6y4UUjp4Kggo-JMQV4V7WLSRvIy5fDuKP0l3ln1PfgI4mnS4MJ69E1rcNoI0Od-Tp9xvHKiTEkYYmIEo5Yf1Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        img2: "https://s3-alpha-sig.figma.com/img/600f/f411/f246155782db0594c00c688cdbf27f80?Expires=1681689600&Signature=l1~WDrXQU4Mtw~jDceH1K9MLeUQ5Cb2SeECmfhpvls2O54pcVgfU5ff4IpW6Xo4ZA-s1vdvMyn~TypQ3cEBBkvq4NLYhSG1bCSTR6IcQ6p6IIqV2TsT6gC0g5IQ5Hh~XcDD~~gKKb1LolVCPT8zS~3bvcztnmajUOvwMc4ODZ0XJYKOKuonqCewmCltYtwcXAOWAZQVzpag11tlY29pHUllSU2OyhcLqb36OckIztfMyzRpymsk302fOcY6eUFDZu-idaVbnfSsa9X~sKUzzvbH6jve46xp2nTkhqa14FF4MbIglAWUD22CAlmqjun54-B1YVtG1flPPqlLH15S1uA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
  };
  axios
    .post("https://64306329c26d69edc890f23b.mockapi.io/user", initial)
    .then((res) => {
      console.log(res.data);
    });
};
