import path from "path";
import { readFile, writeFile } from "fs/promises";

const __dirname = import.meta.dirname;

const pathFile = path.join(__dirname, "../database/gastos.json");

const getAll = async () => {
    const preview = await readFile(pathFile, "utf-8");
    const view = preview.trim() ? JSON.parse(preview) : [];
    return view;
};

const postOne = async (roommate, descripcion, monto) => {
    const preview = await readFile(pathFile, "utf-8");
    const view = preview.trim() ? JSON.parse(preview) : [];

    const newGasto = {
        roommate,
        descripcion,
        monto,
    };

    view.push(newGasto);

    await writeFile(pathFile, JSON.stringify(view));

    return newGasto;
};

export const Gasto = {
    getAll,
    postOne,
};
