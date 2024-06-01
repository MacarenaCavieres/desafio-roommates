import { writeFile, readFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const __dirname = import.meta.dirname;

const pathFile = path.join(__dirname, "../database/roommates.json");

const getAll = async () => {
    const preview = await readFile(pathFile, "utf-8");
    const next = preview.trim() ? JSON.parse(preview) : [];
    return next;
};

const postOne = async () => {
    const preview = await readFile(pathFile, "utf-8");
    const view = preview.trim() ? JSON.parse(preview) : [];

    try {
        const { data } = await axios.get("https://randomuser.me/api");

        let nombre = "";
        let email = "";

        data.result.forEach((item) => {
            nombre = item.name;
            email = item.email;
        });

        const newRoommate = {
            id: uuidv4(),
            nombre,
            email,
        };

        view.push(newRoommate);

        await writeFile(pathFile, JSON.stringify(view));

        return newRoommate;
    } catch (error) {}
};

export const Roommate = {
    getAll,
    postOne,
};
