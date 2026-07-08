import { AppError } from "../error/AppError.js";
import { getContinente, getTotal } from "../service/extranjeroService.js";

export const totalController = async (req, res) => {
    const total = await getTotal();
    res.status(200).json(total);
}
export const continenteController = async (req, res) => {
    const continente = req.params.continente;
    if (!continente) {
        throw new AppError("Incluir continente", 400);
    }
    const data = await getContinente(continente);

    return res.status(200).json(data);
}
