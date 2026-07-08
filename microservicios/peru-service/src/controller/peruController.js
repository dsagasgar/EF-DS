import { AppError } from "../error/AppError.js";
import { getRegion, getTotal } from "../service/peruService.js";

export const totalController = async (req, res) => {
    const total = await getTotal();
    res.status(200).json(total);
}
export const regionController = async (req, res) => {
    const region = req.params.region;
    if (!region) {
        throw new AppError("Incluir region", 400);
    }
    const data = await getRegion(region);

    return res.status(200).json(data);
}
