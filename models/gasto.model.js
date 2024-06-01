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

const removeOne = async (id) => {
    const preview = await readFile(pathFile, "utf-8");
    const view = preview.trim() ? JSON.parse(preview) : [];

    const dataPreview = view.find((item) => item.id === +id);
    if (!dataPreview) return "Gasto no encontrado";

    const data = view.filter((item) => item.id !== +id);

    await writeFile(pathFile, JSON.stringify(data));

    return data;
};

const updateOne = async (id, roommate, descripcion, monto) => {
    const preview = await readFile(pathFile, "utf-8");
    const view = preview.trim() ? JSON.parse(preview) : [];

    const gasto = view.find((item) => item.id === +id);
    if (!gasto) return "Gasto no encontrado";

    gasto.roommate = roommate;
    gasto.descripcion = descripcion;
    gasto.monto = monto;

    await writeFile(pathFile, JSON.stringify(view));

    return gasto;
};

export const Gasto = {
    getAll,
    postOne,
    removeOne,
    updateOne,
};
