export const fetchExperiences = () => {
    const experiences: Experience[] = [
        {
            key: "1",
            title: "Software Engineer",
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
                "Backend",
                "Database tuning",
            ]
        },
        {
            key: "2",
            title: "Software Engineer",
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
                    iconUrl: "https://img.icons8.com/color/96/angularjs.png",
                    iconAlt: "angularjs",
                },
            ],
            fromDate: "2015/04",
            toDate: "2020/06",
            total: "Total: 5+ years",
            points: [
                "Backend",
                "Database tuning",
            ]
        },
    ];

    return experiences;
}