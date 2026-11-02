const translations = {
  pt: {
    navAbout:"Sobre",navSkills:"Tecnologias",navProjects:"Projetos",navJourney:"Jornada",navContact:"Contato",
    availability:"Construindo minha carreira em tecnologia",hello:"Olá, eu sou",role:"Desenvolvedor Backend Java em formação",
    heroText:"Estou no início da minha jornada em programação, estudando Java e construindo projetos para transformar conhecimento em soluções práticas.",
    seeProjects:"Ver projetos",contactMe:"Fale comigo",openTo:"Aberto a oportunidades de aprendizado",addPhoto:"Adicione sua foto",
    aboutTitle:"Sobre mim",aboutLead:"Curiosidade, consistência e vontade de construir.",
    aboutText:"Sou estudante de programação com foco em Backend Java. Estou desenvolvendo minha base em lógica, orientação a objetos e ferramentas usadas no dia a dia de desenvolvimento. Meu objetivo é evoluir por meio de projetos práticos e conquistar minha primeira oportunidade na área.",
    aboutNote:"Este portfólio acompanha minha evolução: vou atualizar habilidades e projetos conforme aprender e construir coisas novas.",
    skillsTitle:"Tecnologias & estudos",skillsSubtitle:"Minha trilha atual de aprendizado. Os níveis representam o estágio de estudo, não certificações.",
    javaLevel:"Estudando fundamentos",gitLevel:"Praticando versionamento",sqlLevel:"Em aprendizagem",webLevel:"Construindo interfaces",jsLevel:"Fundamentos planejados",futureLevel:"Próxima etapa da trilha",comingSoon:"A estudar",
    projectsTitle:"Projetos selecionados",projectsSubtitle:"Projetos reais, feitos durante meus estudos. Abra o código para acompanhar a evolução.",
    consoleProject:"PRIMEIRO PROJETO • CONSOLE",projectOneTitle:"Apresentação em Java",projectOneText:"Programa que recebe nome e idade, apresenta uma saudação e pratica operações simples com os dados informados.",
    viewCode:"Ver código",nextProject:"PRÓXIMO PROJETO",projectTwoTitle:"API REST com Spring Boot",projectTwoText:"Espaço reservado para um projeto futuro. Publique aqui quando estiver desenvolvido e testado.",inProgress:"Planejado",
    projectFootnote:"Dica: substitua o link de exemplo pelo endereço real do seu repositório no GitHub.",
    journeyTitle:"Minha jornada",current:"ATUAL",journeyOneTitle:"Início na programação",journeyOneText:"Estudando lógica de programação e fundamentos de Java, com prática em pequenos projetos.",
    nextStep:"PRÓXIMA ETAPA",journeyTwoTitle:"Backend e banco de dados",journeyTwoText:"Aprofundar orientação a objetos, SQL, APIs, testes e Spring Boot.",
    longTerm:"OBJETIVO",journeyThreeTitle:"Primeira oportunidade em tecnologia",journeyThreeText:"Contribuir com uma equipe, aprender com profissionais e evoluir como desenvolvedor backend.",
    contactLabel:"CONTATO",contactTitle:"Vamos conversar?",contactText:"Estou aberto a conexões, troca de conhecimento e oportunidades de entrada na área de tecnologia.",
    sendEmail:"Enviar e-mail",footer:"Feito com dedicação e muitas linhas de código.",backTop:"Voltar ao topo ↑"
  },
  en: {
    navAbout:"About",navSkills:"Technologies",navProjects:"Projects",navJourney:"Journey",navContact:"Contact",
    availability:"Building my career in technology",hello:"Hello, I'm",role:"Backend Java Developer in training",
    heroText:"I'm at the beginning of my programming journey, studying Java and building projects to turn knowledge into practical solutions.",
    seeProjects:"View projects",contactMe:"Get in touch",openTo:"Open to learning opportunities",addPhoto:"Add your photo",
    aboutTitle:"About me",aboutLead:"Curiosity, consistency, and a drive to build.",
    aboutText:"I'm a programming student focused on Backend Java. I'm building my foundations in programming logic, object-oriented programming, and tools used in everyday software development. My goal is to grow through hands-on projects and earn my first opportunity in tech.",
    aboutNote:"This portfolio follows my progress: I'll update my skills and projects as I learn and build new things.",
    skillsTitle:"Technologies & learning",skillsSubtitle:"My current learning path. Progress bars represent study stage, not certifications.",
    javaLevel:"Learning the fundamentals",gitLevel:"Practicing version control",sqlLevel:"Currently learning",webLevel:"Building interfaces",jsLevel:"Fundamentals planned",futureLevel:"Next step in my path",comingSoon:"To learn",
    projectsTitle:"Selected projects",projectsSubtitle:"Real projects built during my studies. Explore the code and follow my progress.",
    consoleProject:"FIRST PROJECT • CONSOLE",projectOneTitle:"Java introduction app",projectOneText:"A program that receives a name and age, displays a greeting, and practices simple operations with the provided data.",
    viewCode:"View code",nextProject:"UPCOMING PROJECT",projectTwoTitle:"REST API with Spring Boot",projectTwoText:"Reserved for a future project. Add it here once it has been built and tested.",inProgress:"Planned",
    projectFootnote:"Tip: replace the example link with the actual URL of your GitHub repository.",
    journeyTitle:"My journey",current:"CURRENT",journeyOneTitle:"Starting in programming",journeyOneText:"Studying programming logic and Java fundamentals while practicing with small projects.",
    nextStep:"NEXT STEP",journeyTwoTitle:"Backend and databases",journeyTwoText:"Deepen object-oriented programming, SQL, APIs, testing, and Spring Boot.",
    longTerm:"GOAL",journeyThreeTitle:"First opportunity in tech",journeyThreeText:"Contribute to a team, learn from experienced professionals, and grow as a backend developer.",
    contactLabel:"CONTACT",contactTitle:"Let's talk.",contactText:"I'm open to connections, knowledge sharing, and entry-level opportunities in technology.",
    sendEmail:"Send an email",footer:"Built with dedication and many lines of code.",backTop:"Back to top ↑"
  }
};
let currentLanguage = "pt";
const languageSwitch = document.getElementById("languageSwitch");
languageSwitch.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) element.textContent = translations[currentLanguage][key];
  });
  languageSwitch.innerHTML = currentLanguage === "pt" ? 'EN <span>↗</span>' : 'PT <span>↗</span>';
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
const photo = document.getElementById("profilePhoto");
photo.addEventListener("load", () => {
  document.getElementById("photoPlaceholder").style.display = "none";
});
