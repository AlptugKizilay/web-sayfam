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
        img1: '../assets/photo-2.png',
        img2: '../assets/pc.png'
        },
      {
        name: "e-Commerce site For Books",
        description: "You can add books to cart",
        url: "https://fsweb-s11g1-shopping-cart-murex.vercel.app",
        git: "https://github.com/AlptugKizilay/fsweb-s11g1-shopping-cart",
        content: ["react", "redux", "vercel" ,"axios", "router"],
        img1: '../assets/photo-1.png',
        img2: '../assets/pc.png'
      },
    ],
  };
  axios
    .post("https://64306329c26d69edc890f23b.mockapi.io/user", initial)
    .then((res) => {
      console.log(res.data);
    });
};
