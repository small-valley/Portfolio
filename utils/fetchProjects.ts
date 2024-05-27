export const fetchProjects = () => {
  const projects: Project[] = [
    {
      //   iconUrl: "project2Image",
      //   alt: "",
      title: "MRY",
      summary: `School programs manager\n
      Deployed on AWS with serverless architecture using CDK.\n
      Email: manager.rodrigo@gmail.com  Password: password`,
      links: [
        {
          text: "project repository",
          url: "https://github.com/small-valley/MRY",
        },
        {
          text: "demo",
          url: "https://mry-ciccc.me",
        },
      ],
      technologies: [
        {
          key: "1",
          iconUrl: "https://img.icons8.com/fluency/48/nextjs.png",
          iconAlt: "next-icon",
        },
        {
          key: "2",
          iconUrl: "https://img.icons8.com/color/48/nestjs.png",
          iconAlt: "nest-icon",
        },
        {
          key: "3",
          iconUrl: "https://img.icons8.com/color/96/postgreesql.png",
          iconAlt: "postgre-icon",
        },
        {
          key: "4",
          iconUrl: "https://img.icons8.com/nolan/64/amazon-web-services.png",
          iconAlt: "aws-icon",
        },
      ],
    },
    {
      // iconUrl: "",
      // alt: "ProjectIcon",
      title: "Books Management System",
      summary: `Listing books one have read and searching data.\n
      Integrated with AWS Cognito and deployed on AWS with serverless architecture using CDK.\n
      Username: test  Password: Test1234!`,
      links: [
        {
          text: "frontend repository",
          url: "https://github.com/small-valley/BookClient",
        },
        {
          text: "backend repository",
          url: "https://github.com/small-valley/BookAPI",
        },
        {
          text: "demo",
          url: "https://d156kak9mkyj4s.cloudfront.net/auth",
        },
      ],
      technologies: [
        {
          key: "1",
          iconUrl: "https://img.icons8.com/color/96/c-sharp-logo.png",
          iconAlt: "c-sharp-icon",
        },
        {
          key: "2",
          iconUrl: "https://img.icons8.com/color/96/angularjs.png",
          iconAlt: "angular-icon",
        },
        {
          key: "3",
          iconUrl: "https://img.icons8.com/color/96/my-sql.png",
          iconAlt: "my-sql-icon",
        },
        {
          key: "4",
          iconUrl: "https://img.icons8.com/fluency/48/docker.png",
          iconAlt: "docker-icon",
        },
        {
          key: "5",
          iconUrl: "https://img.icons8.com/nolan/64/amazon-web-services.png",
          iconAlt: "aws-icon",
        },
      ],
    },
    // {
    // //   iconUrl: "",
    // //   alt: "",
    //   title: "Passport Ranking",
    //   summary: "Visualize Passport Ranking",
    //   links: [],
    //   technologies: [
    //     {
    //       key: "1",
    //       iconUrl: "https://img.icons8.com/color/96/c-sharp-logo.png",
    //       iconAlt: "c-sharp-icon",
    //     },
    //     {
    //       key: "2",
    //       iconUrl: "https://img.icons8.com/color/96/microsoft-sql-server.png",
    //       iconAlt: "microsoft-sql-server",
    //     },
    //     {
    //       key: "3",
    //       iconUrl: "https://img.icons8.com/color/96/linux--v1.png",
    //       iconAlt: "linux--v1",
    //     },
    //   ],
    // },
  ];

  return projects;
};
