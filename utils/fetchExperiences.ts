export const fetchExperiences = () => {
  const experiences: Experience[] = [
    {
      key: "1",
      title: "Software Developer",
      contract: "Permanent Employee",
      technologies: [
        {
          key: "1",
          iconUrl: "https://img.icons8.com/color/96/c-sharp-logo.png",
          iconAlt: "c-sharp-icon",
        },
        {
          key: "2",
          iconUrl: "https://img.icons8.com/color/96/microsoft-sql-server.png",
          iconAlt: "microsoft-sql-server",
        },
        {
          key: "3",
          iconUrl: "https://img.icons8.com/color/96/linux--v1.png",
          iconAlt: "linux--v1",
        },
      ],
      fromDate: "2015/04",
      toDate: "2020/06",
      total: "5+ years",
      points: [
        "Basic and advanced concept of programming in C# and SQL",
        "Database tuning and schema design for better performance",
        "Experience in designing, programming and testing in waterfall development",
      ],
    },
    {
      key: "2",
      title: "Web Developer",
      contract: "Freelance",
      technologies: [
        {
          key: "1",
          iconUrl: "https://img.icons8.com/color/96/c-sharp-logo.png",
          iconAlt: "c-sharp-icon",
        },
        {
          key: "2",
          iconUrl: "https://img.icons8.com/color/96/microsoft-sql-server.png",
          iconAlt: "microsoft-sql-server-icon",
        },
        {
          key: "3",
          iconUrl: "https://img.icons8.com/color/96/postgreesql.png",
          iconAlt: "postgre-sql-icon",
        },
        {
          key: "4",
          iconUrl: "https://img.icons8.com/color/96/angularjs.png",
          iconAlt: "angular-icon",
        },
        {
          key: "5",
          iconUrl: "https://img.icons8.com/fluency/48/docker.png",
          iconAlt: "docker-icon",
        },
        {
          key: "6",
          iconUrl: "https://img.icons8.com/color/96/jenkins.png",
          iconAlt: "jenkins-icon",
        },
      ],
      fromDate: "2020/07",
      toDate: "2022/12",
      total: "2+ years",
      points: [
        "Backend and frontend programming in web application",
        "Knowledge in infrastructure and building development, production, CI/CD environment",
        //"Experience in requirement phase",
        "Team management in Agile environment",
        "Full scratch development",
        //"Writing maintainable and less complexity code",
        //"Good communication skills with a team through online",
      ],
    },
  ];

  return experiences;
};
