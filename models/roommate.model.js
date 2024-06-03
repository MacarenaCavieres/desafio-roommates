import { writeFile, readFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import path from "path";
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

        data.results.forEach((item) => {
            nombre = `${item.name.first} ${item.name.last}`;
            email = item.email;
        });

        const newRoommate = {
            id: uuidv4(),
            nombre,
            email,
            debe: 0,
            recibe: 0,
        };

        view.push(newRoommate);

        await writeFile(pathFile, JSON.stringify(view));

        return newRoommate;
    } catch (error) {}
};

const updateOne = async (roommate, monto) => {
    const preview = await readFile(pathFile, "utf-8");
    const view = preview.trim() ? JSON.parse(preview) : [];

    const roomUp = view.find((item) => item.nombre === roommate);

    const owe = monto / view.length;

    view.forEach((item) => {
        if (item.nombre !== roomUp.nombre) {
            item.debe = owe;
        } else {
            item.debe = 0;
            item.recibe = owe * (view.length - 1);
        }
    });

    const newView = await writeFile(pathFile, JSON.stringify(view));

    return newView;
};

export const Roommate = {
    getAll,
    postOne,
    updateOne,
};
