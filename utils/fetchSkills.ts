export const fetchSkills = () => {
    let skills: Skill[] = [
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/c-sharp-logo.png",
            progress: "90",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/html-5--v1.png",
            progress: "70",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/css3.png",
            progress: "60",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/javascript--v1.png",
            progress: "70",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/typescript.png",
            progress: "60",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/angularjs.png",
            progress: "50",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/plasticine/100/react.png",
            progress: "50",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/nodejs.png",
            progress: "40",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/microsoft-sql-server.png",
            progress: "90",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/my-sql.png",
            progress: "50",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/color/96/postgreesql.png",
            progress: "70",
        },
        {
            key: "",
            iconUrl: "https://img.icons8.com/fluency/48/docker.png",
            progress: "70",
        },
    ];

    skills.forEach((skill, i) => {
        skill.key = `${i}`;
    });

    return skills;
}