import { Roommate } from "../models/roommate.model.js";

const getAllRoom = async (req, res) => {
    try {
        const data = await Roommate.getAll();

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error controlador ==> ", error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

const postOneRoom = async (req, res) => {
    try {
        const data = await Roommate.postOne();

        return res.status(201).json(data);
    } catch (error) {
        console.error("Error controlador ==> ", error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

export const rommMethod = {
    getAllRoom,
    postOneRoom,
};
