import { Gasto } from "../models/gasto.model.js";
import { Roommate } from "../models/roommate.model.js";

const getAllGastos = async (req, res) => {
    try {
        const data = await Gasto.getAll();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error controlador ==> ", error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

const postOneGasto = async (req, res) => {
    try {
        const { roommate, descripcion, monto } = req.body;

        if (!roommate || !descripcion || !monto)
            return res.status(400).json({ ok: false, msg: "Todos los campos obligatorios" });

        const data = await Gasto.postOne(roommate, descripcion, monto);
        const dataGasto = await Roommate.updateOne(roommate, monto);

        return res.status(201).json(data);
    } catch (error) {
        console.error("Error controlador ==> ", error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

const removeOneGasto = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Gasto.removeOne(id);

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error controlador ==> ", error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

const updateOneGasto = async (req, res) => {
    try {
        const { id } = req.params;
        const { roommate, descripcion, monto } = req.body;

        const data = await Gasto.updateOne(id, roommate, descripcion, monto);
        const dataGasto = await Roommate.updateOne(roommate, monto);

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error controlador ==> ", error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

export const gastoMethod = {
    getAllGastos,
    postOneGasto,
    removeOneGasto,
    updateOneGasto,
};
