import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("students_db", "root", "~XuNO{~4&)s*pgPo", {
    dialect: "mysql",
    host: "34.66.174.6"
});

// export const sequelize = new Sequelize("students_db", "root", "supersecurePW-1", {
//     dialect: "mysql",
//     host: "localhost"
// });