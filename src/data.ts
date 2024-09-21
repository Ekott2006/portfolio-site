import AmazonCloneImage from "./assets/image/amazon-clone-screenshot-Di3D2JEo.jpeg";
import BattleshipGameImage from "./assets/image/battleship-game-screenshot-DsgmdMVQ.jpeg";
import TypescriptImage from "./assets/svg/typescript.svg";
import JavascriptImage from "./assets/svg/javascript.svg";
import CsharpImage from "./assets/svg/csharp.svg";
import RustImage from "./assets/svg/rust.svg";
import RubyImage from "./assets/svg/ruby.svg";
import PHPImage from "./assets/image/php.png";
import GitImage from "./assets/svg/git.svg";
import DartImage from "./assets/svg/dart.svg";
import NodeJsImage from "./assets/svg/nodejs.svg";
import CSSImage from "./assets/svg/css.svg";
import ReactImage from "./assets/svg/react.svg";
import FlaskImage from "./assets/svg/flask.svg";
import BootstrapImage from "./assets/svg/boostrap.svg";
import MongoDbImage from "./assets/svg/mongodb.svg";
import GithubImage from "./assets/svg/github.svg";
import TelegramImage from "./assets/svg/telegram.svg";
import ReplitImage from "./assets/image/replit.png";
import GraphQlImage from "./assets/svg/GraphQL Logo (Rhodamine).svg";
import LinkedInImage from "./assets/svg/linkedin.svg";
import EmailImage from "./assets/svg/gmail.svg";
import TwitterImage from "./assets/svg/twitter.svg";
import RestaurantImage from "./assets/image/restaurant-screenshot.jpeg"
import { Skills } from "./types";

export const skills: Skills = {
  Frontend: [
    { src: CSSImage, title: "CSS" },
    { src: JavascriptImage, title: "Javascript" },
    { src: TypescriptImage, title: "Typescript" },
    { src: ReactImage, title: "React" },
    { src: BootstrapImage, title: "Bootstrap" },
  ],
  Backend: [
    { src: FlaskImage, title: "Flask" },
    { src: CsharpImage, title: "ASP.NET" },
    { src: NodeJsImage, title: "Express" },
    { src: MongoDbImage, title: "MongoDB" },
    { src: GraphQlImage, title: "GraphQL" },
  ],
  Others: [
    { src: DartImage, title: "Flutter/Dart" },
    { src: RubyImage, title: "Ruby" },
    { src: RustImage, title: "Rust" },
    { src: GitImage, title: "Git" },
    { src: PHPImage, title: "PHP" },
  ],
};
export const socials: { link: string; src: string; alt: string }[] = [
  {
    link: "https://github.com/Ekott2006",
    src: GithubImage,
    alt: "Github Icon",
  },
  { link: "https://t.me/ekott2006", src: TelegramImage, alt: "Telegram Icon" },
  {
    link: "https://replit.com/@Ekott2006",
    src: ReplitImage,
    alt: "Replit Icon",
  },
  {
    link: "https://www.linkedin.com/in/ekott-nsikak-59471223a",
    src: LinkedInImage,
    alt: "LinkedIn Icon",
  },
  {
    link: "mailto:nsikakekott2006@gmail.com",
    src: EmailImage,
    alt: "Gmail Icon",
  },
  {
    link: "https://x.com/NsikakEkott?t=LJOpcdNCeXESBRMNryRoKA&s=09",
    alt: "X Icon",
    src: TwitterImage,
  },
];

// Ruby Final Project-- Reddit Clone
// Battleship
// Shopping Cart -- Amazon Clone
// Restaurant
// Aurora-JS
// Mastermind
export const projects = {
  Main: [

      {src: RestaurantImage,
        title: "Restaurant",
      details:
        "This project involves dynamically rendering a restaurant website using JavaScript for DOM manipulation",
      tags: ["HTML", "CSS", "JS"],
      links: {
        website: "https://ekott2006.github.io/odin-js-restaurant",
        code: "https://github.com/Ekott2006/odin-js-restaurant",
      },
    },
    // {
    //   src: "",
    //   title: "Reddit Clone",
    //   details:
    //     "This project involves building a clone of Reddit, focusing on core features like users, profiles, posts, following, and liking. You’ll also implement authentication using ASP.NET Identity",
    //   tags: ["ASP.NET", "Razor", "JS"],
    //   links: { website: "", code: "" },
    // },
    {
      src: BattleshipGameImage,
      title: "Battleship",
      details:
        "Battleship is a classic strategy game where two players take turns guessing the location of their opponent's ships on a hidden grid. ",
      links: {
        website: "https://ekott2006.github.io/odin-js-battleship",
        code: "https://github.com/Ekott2006/odin-js-battleship",
      },
      tags: ["HTML", "CSS", "JS"],
    },
    {
      src: AmazonCloneImage,
      title: "Shopping Cart",
      details:
        "This project is a mock shopping cart using React, fetching shop items with an API, allowing users to navigate between a home page and shop page, add items to the cart, and dynamically update the cart based on user input",
      tags: ["React", "Vitest", "API"],
      links: {
        website: "https://odin-react-shopping-cart-lime.vercel.app/products",
        code: "https://github.com/Ekott2006/odin-react-shopping-cart",
      },
    },
  ],
  Other: [
    {
      title: "Aurora-JS",
      details:
        "Aurora is a powerful utility for enhancing HTTP requests in JS applications, providing an easy-to-use interface for making HTTP calls with advanced features like concurrency control, common headers",
      tags: ["Axios", "Typescript"],
      links: { code: "https://github.com/Ekott2006/aurora-js" },
    },
    {
      title: "Mastermind",
      details:
        "Mastermind is a logic-based game where players must guess a hidden sequence of colored pegs by using clues from each attempt.",
      tags: ["Ruby"],
      links: { code: "https://github.com/Ekott2006/odin-ruby-mastermind-game" },
    },
    // {
    //   title: "Restaurant",
    //   details:
    //     "This project involves dynamically rendering a restaurant website using JavaScript for DOM manipulation",
    //   tags: ["HTML", "CSS", "JS"],
    //   links: {
    //     website: "https://ekott2006.github.io/odin-js-restaurant",
    //     code: "https://github.com/Ekott2006/odin-js-restaurant",
    //   },
    // },
    {
      title: "Url Shortener",
      details:
        "A simple link shortener allows users to input a long URL and generate a shorter, more manageable link for easy sharing and tracking.",
      tags: ["Express", "NodeJS"],
      links: {
        code: "https://github.com/Ekott2006/boilerplate-project-urlshortener",
      },
    },
  ],
};
