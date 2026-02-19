export type ContentBlock =
  | { type: "header"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt?: string }
  | { type: "small-image"; src: string; alt?: string }
  | { type: "youtube"; url: string }
  | { type: "video"; url: string }
  | { type: "gif"; src: string }

export interface Project {
  id: string
  title: string
  previewDescription: string
  previewMedia?: {
    type: "image" | "gif" | "youtube" | "video"
    src: string
  }
  tech: string[]
  startDate: string,
  endDate: string,
  content: ContentBlock[]
}

export const professionalProjects: Project[] = [
  {
    id: "tech-wizards",
    title: "Software Engineer at Tech Wizards, Inc.",
    previewDescription: "I architect and implement real-time 3D training simulations in Unity under government contract constraints, translating complex technical specifications into realistic training scenarios.",
    previewMedia: {
      type: "image",
      src: "/media/twlogo.png"
    },
    tech: ["Unity", "C#"],
    startDate: "11/2023",
    endDate: "Present",
    content: [
        {
            type: "header",
            text: "Overview"
        },
        {
            type: "paragraph",
            text: "As a Unity Software Engineer at Tech Wizards, I maintain an active Secret clearance as I work on developing Virtual Maintenance Trainers (VMTs) under time-constrained government contracts."
        },
        {
            type: "paragraph",
            text: "My work focuses on translating dense technical manuals, schematics, and specifications of complex electronic systems into accurate, deterministic C# simulation models with realistic, interactable training scenarios in Unity."
        },
        {
            type: "paragraph",
            text: "I work cross-functionally with engineers and artists, incorporating subject-matter expert feedback within an Agile workflow to iteratively refine and validate simulation behavior."
        },
        {
            type: "image",
            src: "/media/twlogo.png"
        },
    ]
  },
  {
    id: "age-of-learning",
    title: "Software Engineer Intern at Age of Learning",
    previewDescription: "Contributed to development for Adventure Academy, the educational MMO with millions of downloads.",
    previewMedia: {
      type: "image",
      src: "/media/aollogo.png"
    },
    tech: ["Unity", "C#"],
    startDate: "06/2022",
    endDate: "08/2022",
    content: [
        {
            type: "image",
            src: "/media/aollogo.png"
        },
        {
            type: "header",
            text: "Overview"
        },
        {
            type: "paragraph",
            text: "As a Unity Software Engineer Intern at Age of Learning, I contributed to development efforts for Adventure Academy, an educational MMO serving millions of players. Working within an established production team, I supported feature implementation, stability improvements, and iterative development within a large-scale live codebase."
        },
        {
            type: "image",
            src: "/media/aascreen.png"
        },
        {
            type: "header",
            text: "Intellipet Adventures"
        },
        {
            type: "paragraph",
            text: "During my internship, the team was preparing the new Intellipet Adventures gamemode for its end-of-summer release. I resolved gameplay and stability issues, implemented targeted fixes identified during biweekly playtests, and contributed to iterative feature refinement leading up to launch."
        },
        {
            type: "image",
            src: "/media/iascreen.png"
        },
        {
            type: "header",
            text: "Code Island"
        },
        {
            type: "paragraph",
            text: "For the Code Island minigame, I expanded cross-platform data storage features to improve reliability and consistency across supported devices. In addition to implementing these updates, I addressed gameplay and stability bugs within the live environment to support a smoother player experience."
        },
        {
            type: "image",
            src: "/media/ciscreen.png"
        },
    ]
  },
]

export const personalProjects: Project[] = [
  {
    id: "infinipoker",
    title: "InfiniPoker: Steam Game Coming Soon",
    previewDescription: "InfiniPoker is a poker-night sandbox game where you can play millions of possible poker variants against friends, online players, or bots. Play a classic No-Limit Texas Hold'em game, a mixed rotation like HORSE, or invent your own variants for a wild night of Dealer's Choice.",
    previewMedia: {
      type: "video",
      src: "/media/infinipoker1.mp4"
    },
    tech: ["Unity", "C#"],
    startDate: "2025",
    endDate: "Present",
    content: [
      { type: "header", text: "Overview" },
      { type: "paragraph", text: "This is a game I've been working on in my freetime since Summer 2025. I am currently working with an artist to help get a Steam page set up, which should happen within the next month! InfiniPoker is a poker-night sandbox game where you can play millions of possible poker variants against friends, online players, or bots. Play a classic No-Limit Texas Hold'em game, a mixed rotation like HORSE, or invent your own variants for a wild night of Dealer's Choice." },
      { type: "header", text: "Poker Engine" },
      { type: "paragraph", text: "I built the poker engine for InfiniPoker as a completely separate standalone C# core library from the ground up in order to support all different types of rule sets, hand evaluations, wild cards, and more. The core poker engine is optimized for performance and is thoroughly tested with comprehensive unit testing." },
      { type: "image", src: "/media/infinipokerscreen1.png" },
      { type: "header", text: "Multiplayer" },
      { type: "paragraph", text: "I implemented core multiplayer functionality for the game using the FishNet networking solution for Unity. Players can choose to create private lobbies or join public tables. Multiplayer for InfiniPoker is server-authoritative; all of the logic is run on the server to prevent cheating." },
      { type: "image", src: "/media/infinipokerscreen2.png" },
      { type: "header", text: "Gameplay" },
      { type: "paragraph", text: "Infinipoker is designed as the ultimate poker sandbox. Because the engine is designed to work given a set of rules as input, the player is free to mix and match rulesets and invent any possible poker variant they can think of to play with friends. With the current rulesets as implemented, there are over a quintillion possible unique games. Each game comes with an automatic name generator so that you can infer the rules just from reading the name. So far the longest name I've generated is: Limit (no cap) 5-card Omaha Pen Pineapple Apple Hi-Lo 8 or Better Double Board Bomb Pot, One Eyed Jacks and the Man With the Axe Wild (Unrestricted)." },
      { type: "video", url: "/media/infinipoker1.mp4" }
    ]
  },
  {
    id: "chess-assess",
    title: "ChessAssess: Chess Analysis and Prediction",
    previewDescription: "ChessAssess is a full-stack chess analysis platform featuring machine learning prediction models for top-level tournaments, large-scale data processing, and custom data visualizations and videos.",
    previewMedia: {
      type: "youtube",
      src: "https://www.youtube.com/embed/DHmwbUUOVG4?si=zQ32fZvuW25VBJjg&amp;start=21"
    },
    tech: ["Python", "React", "Node.js", "JavaScript", "Unity", "C#"],
    startDate: "2022",
    endDate: "Present",
    content: [
      { type: "header", text: "Overview" },
      { type: "paragraph", text: "I first created ChessAssess.com in 2022 as a way to follow the 2022 Candidates Tournament, with a model that would determine probabilities for each player's likelihood of winning the tournament, and therefore qualifying for the World Championship. Since then I have tried my hand at several different chess projects, culminating in GM Hikaru Nakamura, famous content creator and the #2 player in the world, posted my data visualization video on his channel with millions of subscribers." },
      { type: "youtube", url: "https://www.youtube.com/embed/DHmwbUUOVG4?si=zQ32fZvuW25VBJjg&amp;start=21" },
      { type: "header", text: "Prediction Models" },
      { type: "paragraph", text: "I have experimented with several different prediction models in python to make my tournament predictions work, including but not limited to Logistic Regressions, Random Forest, and Gradient Boosting. The main unique part of what I've done is the combination of two separate models: one monte-carlo simulator of tournament outcomes that relies on players' Elo ratings to predict game results, and another model that estimates real-time game probabilities move-by-move based on a number of factors. Combining the two allows me to tell a more complete story about a tournament, and even gather interesting stats such as what the most critical moves of the whole tournament were." },
      { type: "image", src: "/media/cascreen1.jpg" },
      { type: "header", text: "Data Visualization" },
      { type: "paragraph", text: "In the past I would create charts and graphs on my website that people could follow as tournaments progressed, but eventually I decided I wanted something more. I created a special Tool in Unity that allows me to input the data that I collect and run through my prediction models, and Unity will produce an animated graph of the data from start to finish, with many custom options. This allowed me to produce the video that GMHikaru reacted to. Below is the original video." },
      { type: "youtube", url: "https://www.youtube.com/embed/vRFL3VB94YY?si=SfxJHF_R0nOCCD8D&amp" },
      { type: "header", text: "Opening Trainer" },
      { type: "paragraph", text: "Another early feature of my website was this unique version of an opening trainer, using the Lichess API to realistically generate opponent moves based on how players have actually played in real games on Lichess.org." },
      { type: "image", src: "/media/cascreen3.png" },
    ]
  },
  {
    id: "leuf",
    title: "Light 'Em Up Football",
    previewDescription: "Light 'Em Up Football is a mobile football management game I released while I was in college. It was released on Google Play and the App Store and received thousands of downloads. The main feature was you could draw your own plays in addition to managing your team.",
    previewMedia: {
      type: "youtube",
      src: "https://www.youtube.com/embed/EcxWRxjut5M?si=zMZEiOtc9c7TFlRA"
    },
    tech: ["Unity", "C#"],
    startDate: "2020",
    endDate: "2021",
    content: [
      { type: "header", text: "Overview" },
      { type: "paragraph", text: "Light 'Em Up Football is a mobile football management game I released while I was in college. The main feature was you could draw your own plays in addition to managing your team. The game received thousands of downloads but is unfortunately no longer available on the app stores due to lack of updates." }
    ]
  },
]
