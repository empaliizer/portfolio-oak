import GGImage from "../assets/dev/number-guessing-game.png";
import Resume from "../assets/dev/cv.png";
import RockScisPap from "../assets/dev/rock-paper-scissors.png";
import FantBeauty from "../assets/dev/fantastic-beauty.png";
import FullScreen from "../assets/dev/fullscreen.png";
import Piggy from "../assets/dev/piggy.png";
import Todo from "../assets/dev/port-todo.png";
import Redesign from "../assets/dev/konstnars.png";
import Hangman from "../assets/dev/hangman.png";
import Cookwise from "../assets/design/portfolioImg.png";
import Spotify from "../assets/design/spotify.png";
import PlantaMera from "../assets/design/plantamera.png";
import PlantTastic from "../assets/design/bsg-plant.png";

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
            cat: "Dev",
            code: "https://github.com/empaliizer/guessing-game", 
            link: " https://6362af7fb58cff45bf8b3dbd--idyllic-chaja-f20318.netlify.app/",
            title: 'Guessing game',
            description: 'Welcome to my guessing game. You have 5 chances to guess the correct number between 0-100. If you guess too high or too low, you will receive a notice if you have guessed too high or too low.'
    },
    {
            id: 2,
            name: "Cookwise",
            img: Cookwise,
            cat: "Design",
            link: "https://www.figma.com/proto/WRYR7RQAEwfdR8rdUEWFXl/CookWise?page-id=0%3A1&node-id=2-4418&viewport=627%2C478%2C0.09&scaling=min-zoom&starting-point-node-id=2%3A4945",
            title: 'Cookwise',
            description: 'A design proposal for a smart owen app.'
    },
    {
            id: 3,
            name: "Rock, paper, scissor",
            img: RockScisPap,
            cat: "Dev",
            code: "https://github.com/empaliizer/rock-paper-scissor",
            link: "https://6362b62d9cc3203c94f25f11--dapper-kangaroo-2986c4.netlify.app/",
            title: 'Rock, paper, scissor',
            description: 'The classic game rock, scissor, paper. You will play against the computer, you will se what you choose and what the computer choose. You can collect points ang the first to 5 wins.'
    },
    {
            id: 4,
            name: "Spotify",
            img: Spotify,
            cat: "Design",
            link: "https://www.figma.com/proto/CeskuRNShai9RiT2nn4De6/Spotify-Sprint?page-id=291%3A12039&type=design&node-id=291-12706&viewport=630%2C237%2C0.05&scaling=scale-down&starting-point-node-id=291%3A14579&mode=design",
            title: 'Spotify',
            description: 'A design proposal for spotify and make the accesibility better.'
    },
    {
            id: 5,    
            name: "Resume",
            img: Resume,
            cat: "Dev",
            code: "https://github.com/empaliizer/cv-page",
            link: "https://empaliizer.netlify.app/",
            title: 'Resume',
            description: 'This is my resume and I have worked with HTML, SCSS and Javascript to create this resume. Hope you will like it.'
        },
        {
            id: 6,
            name: "Brand Style Guide",
            img: PlantTastic,
            cat: "Design",
            link: "https://www.figma.com/proto/0NyU985ng3VwJ98pzzCvrq/BrandGudieLine?page-id=7%3A144&type=design&node-id=12-827&viewport=804%2C1837%2C0.31&scaling=min-zoom&starting-point-node-id=12%3A827&mode=design",
            title: 'Brand Style Guide',
            description: 'Brand style guide for PlantTastic.'
        },
        {
            id: 7,
            name: "Fantastic Beauty",
            img: FantBeauty,
            cat: "Dev",
            code: "https://github.com/empaliizer/fantastic-beauty",
            link: "https://6362a12ce8082d2f4b0f763c--magical-gnome-2b4724.netlify.app/",
            title: 'Fantastic Beauty',
            description: 'Nail and lash saloon that needed a new website for the costumers då book a new appointment, se the pricelists and get contactinfo to the saloon.'
        },
        {
            id: 8,
            name: "PlantaMera",
            img: PlantaMera,
            cat: "Design",
            link: "https://www.figma.com/proto/fZKRbZp5C1Dv3uH09A6zDH/Green-Tech---Designfil?page-id=1%3A4&type=design&node-id=473-5722&viewport=670%2C330%2C0.19&scaling=scale-down&starting-point-node-id=473%3A5722&mode=design",
            title: 'PlantaMera',
            description: 'Tanken bakom Planta mera är att bygga vidare på Sveriges redan existerande pantkultur. Idén är att människor kan uppmanas till att panta via en app som låter användare samla poäng genom att scanna pantkvitton där du får 1 poäng per krona. För varje 200 poäng kan användarna lösa in sina poäng för att plantera två träd på valfri plats. Appen använder en kamera-komponent i kombination med en bild-analyserande API från google (Cloud Vision AI) som tar uppladdade kvitton, analyserar dom och extraherar antalet kronor för att sedan konvertera det till poäng som sätts in på användarens konto. Sparad CO2 per pantad krona kalkyleras och adderas också till kontot, så användaren kan se hur mycket koldioxid-utsläpp deras pantning sparat. Det finns också en leaderboard där man kan se hur mycket andra pantat för, och vem som sparat mest koldioxidutsläpp samt en karta som visar närmsta pantstationer, och ett träd som växer i takt med hur mycket poäng användaren har på kontot. Med denna app uppmanar vi till goda miljögärningar via ett gameifierat belöningssystem med hjälp av AI.',
        },
        {
            id: 9,
            name: "Fullscreen Menu",
            img: FullScreen,
            cat: "Dev",
            code: "https://github.com/empaliizer/fullscreen-menu",
            link: "https://6362abe49cc32033aaf25c51--bucolic-cat-25e33e.netlify.app/",
            title: 'Fullscreen Menu',
            description: 'A fullscreen menu with a hamburger button. It is also responsive.'
        },
        {
            id: 10,
            name: "The pig game",
            img: Piggy,
            cat: "Dev",
            code: "https://github.com/empaliizer/the-pig-game",
            link: "https://6362ab4f48363a3fda64b275--incandescent-pony-597e6f.netlify.app/",
            title: 'The pig game',
            description: 'The pig game! The first person that gets 100 points will win. You can stop whenever you want and save you points but if you get 1 on the dice you will loose all your points.'
        },
        {
            id: 11,
            name: "Todo app",
            img: Todo,
            cat: "Dev",
            code: "https://github.com/empaliizer/todo-app",
            link: "https://6362b969408b8149a58f8f8d--gorgeous-shortbread-ecad98.netlify.app/",
            title: 'Todo app',
            description: 'Created a Todo-list with HTML, SCSS and Javascript. You can write your own todo list, print it and remove items. '
        }, 
        {
            id: 12,
            name: "Redesign",
            img: Redesign,
            cat: "Dev",
            code: "https://github.com/empaliizer/redesign",
            link: "https://6362b0879a6f914126e9c080--unique-pothos-20e91e.netlify.app/",
            title: 'Redesign',
            description: 'We did a redesign on Konstnärsnämdens website and create a new design for the website'
        },
        {
            id: 13,
            name: "Hangman",
            img: Hangman,
            cat: "Dev",
            code: "https://github.com/empaliizer/hangman",
            link: "https://6362affceddc7c4140b63e19--calm-clafoutis-f39aa8.netlify.app/",
            title: 'Hangman',
            description: 'A classic game. Hangman, guess on letters and try not to kill your man.'
        }
]

export { links, infos, icons, dev }