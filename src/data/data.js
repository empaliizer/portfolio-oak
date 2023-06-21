import GGImage from "../assets/dev/number-guessing-game.png";
import Resume from "../assets/dev/cv.png";
import RockScisPap from "../assets/dev/rock-paper-scissors.png";
import FantBeauty from "../assets/dev/fantastic-beauty.png";
import FullScreen from "../assets/dev/fullscreen.png";
import Piggy from "../assets/dev/piggy.png";
import Todo from "../assets/dev/port-todo.png";
import Redesign from "../assets/dev/konstnars.png";
import Hangman from "../assets/dev/hangman.png";
// import ComingSoon from "../assets/dev/coming-soon-1.png";

const links = [
    {
        id: 1,
        to: "/",
        text: "Home"
    },
    {
        id: 2,
        to: "/portfolio",
        text: "Latest work"
    },
    {
        id: 3,
        to: "/about",
        text: "About"
    },
    {
        id: 4,
        to: "/contact",
        text: "Contact"
    },
    ]

const infos = [
    {
        id: 1,
        contact: "+46 (0)704869074"
    },
    {
        id: 2,
        contact: "emelie.ek@chasacademy.se",
    }
]

const icons = [
    {
        id: 1,
        href: "https://github.com/empaliizer",
        name: "Github",
        alt: "Github",
        className: "github"
    },
    {
        id: 2,
        href: "https://www.figma.com/file/xi2DdIpf3UZ699MqhIlu7G/Untitled?node-id=19%3A77&t=nOmDLDjFhp4rBiN7-1",
        name: "Dribble",
        alt: "Figma",
        className: "figma"

    },
    {
        id: 3,
        href: "https://www.linkedin.com/in/emelie-ek-5215901ba/",
        name: "LinkedIn",
        alt:"LinkedIn",
        className: "linkedin"

    }
]

const dev = [
    {
            id: 1,    
            name: "Guessing game",
            img: GGImage,
            link: " https://6362af7fb58cff45bf8b3dbd--idyllic-chaja-f20318.netlify.app/",
            title: 'Guessing game',
            description: 'abc...'
    },
    {
            id: 2,
            name: "Rock, paper, scissor",
            img: RockScisPap,
            link: "https://6362b62d9cc3203c94f25f11--dapper-kangaroo-2986c4.netlify.app/",
            title: 'Rock, paper, scissor',
            description: 'abc...'
    },
    {
            id: 3,    
            name: "Resume",
            img: Resume,
            link: "https://empaliizer.netlify.app/",
            title: 'Resume',
            description: 'I have worked with HTML, SCSS and Javascript to create this resume. Hope you will like it.'
        },
        {
            id: 4,
            name: "Fantastic Beauty",
            img: FantBeauty,
            link: "https://6362a12ce8082d2f4b0f763c--magical-gnome-2b4724.netlify.app/",
            title: 'Fantastic Beauty',
            description: 'abc...'
        },
        {
            id: 5,
            name: "Fullscreen Menu",
            img: FullScreen,
            link: "https://6362abe49cc32033aaf25c51--bucolic-cat-25e33e.netlify.app/",
            title: 'Fullscreen Menu',
            description: 'abc...'
        },
        {
            id: 6,
            name: "The pig game",
            img: Piggy,
            link: "https://6362ab4f48363a3fda64b275--incandescent-pony-597e6f.netlify.app/",
            title: 'The pig game',
            description: 'abc...'
        },
        {
            id: 7,
            name: "Todo app",
            img: Todo,
            link: "https://6362b969408b8149a58f8f8d--gorgeous-shortbread-ecad98.netlify.app/",
            title: 'Todo app',
            description: 'abc...'
    
        }, 
        {
            id: 8,
            name: "Redesign",
            img: Redesign,
            link: "https://6362b0879a6f914126e9c080--unique-pothos-20e91e.netlify.app/",
            title: 'Redesign',
            description: 'abc...'
        },
        {
            id: 9,
            name: "Hangman",
            img: Hangman,
            link: "https://6362affceddc7c4140b63e19--calm-clafoutis-f39aa8.netlify.app/",
            title: 'Hangman',
            description: 'abc...'
        }
        // {
        //     id: 10,
        //     name: "Coming soon ",
        //     img: ComingSoon,
        //     link: "https://6362affceddc7c4140b63e19--calm-clafoutis-f39aa8.netlify.app/",
        //     title: 'Coming soon',
        //     description: 'abc...'
        // } 
]

export { links, infos, icons, dev }