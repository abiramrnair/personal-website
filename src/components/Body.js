import m from "mithril";

export const Body = {
  view: () => {
    return m("div.body", [
      m("span.body-heading", m("h3", "About Me")),
      m("span.body-text", [
        m(
          "p",
          `I am a software engineer based in Davis, USA but
          originally from Toronto, CA. I first started learning 
          Python in highschool and in my undergrad became 
          obsessed with JavaScript. I would spend hours designing 
          websites ranging from CRUD apps to games to eventually 
          my own web framework. Since graduating, I have shifted 
          my focus to data science, DevOps and backend technologies.
          In my free time I like playing guitar, reading books and 
          video games.`
        ),
      ]),
      m("span.body-heading", m("h3", "Employment History")),
      m("span.body-text", [
        m(
          "p",
          "Ennetix (Davis CA, USA)",
          m("ul", [
            m("li", "Position: Software Engineer II"),
            m("li", "Work Period: Current Employer"),
          ])
        ),
        m(
          "p",
          "Geotab (Oakville ON, Canada)",
          m("ul", [
            m("li", "Position: Software Developer Intern"),
            m("li", "Work Period: May 2021 - Aug 2022"),
          ])
        ),
        m(
          "p",
          "More details about my work experience, projects, tools and languages can be found in my ",
          m(
            "a",
            {
              href: "https://drive.google.com/file/d/1TlfaIrCJUcG-iDAabrWmdIVu6S_o81cm/view?usp=drive_link",
            },
            "resume"
          ),
          "."
        ),
      ]),
      m("span.body-heading", m("h3", "Contact Me")),
      m("span.body-text", [
        m("p", m("b", "Email: "), "abiramrnair@gmail.com"),
        m(
          "p",
          m("b", "LinkedIn: "),
          m(
            "a",
            {
              href: "https://www.linkedin.com/in/abiram-nair/",
            },
            "https://www.linkedin.com/in/abiram-nair/"
          )
        ),
        m(
          "p",
          m("b", "GitHub: "),
          m(
            "a",
            {
              href: "https://github.com/abiramrnair",
            },
            "https://github.com/abiramrnair"
          )
        ),
      ]),
    ]);
  },
};

export default Body;
