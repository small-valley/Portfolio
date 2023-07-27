export const fetchProjects = () => {
    const projects: Project[] = [
        {
            iconUrl: "",
            alt: "ProjectIcon",
            title: "Books Management System",
            summary: `Listing books one have read and showing summary data of those. 
                (working on)`,
            link: "https://github.com/small-valley/BookDBAPI",
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
            ]
        },
        {
            iconUrl: "",
            alt: "",
            title: "Passport Ranking",
            summary: "Visualizing Passport Ranking data so that one can compare difference between country to country (working on)",
            link: "",
            technologies: [
                {
                    key: "1",
                    iconUrl: "https://img.icons8.com/plasticine/100/react.png",
                    iconAlt: "react-icon",
                },
            ]
        },
        // {
        //     iconUrl: "",
        //     alt: "",
        //     title: "Passport Ranking",
        //     summary: "Visualize Passport Ranking",
        //     technologies: [
        //         {
        //             key: "1",
        //             iconUrl: "https://img.icons8.com/color/96/c-sharp-logo.png",
        //             iconAlt: "c-sharp-icon",
        //         },
        //         {
        //             key: "2",
        //             iconUrl: "https://img.icons8.com/color/96/microsoft-sql-server.png",
        //             iconAlt: "microsoft-sql-server",
        //         },
        //         {
        //             key: "3",
        //             iconUrl: "https://img.icons8.com/color/96/linux--v1.png",
        //             iconAlt: "linux--v1",
        //         },
        //     ]
        // },
    ];

    return projects;
}