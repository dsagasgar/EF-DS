import { findAll, findByContinente } from "../repository/extranjeroRepository.js";
import { AppError } from "../error/AppError.js";

export const getTotal = async () => {
    const totalExtranjero = await findAll();
    const total = {};
    let totalActas = 0;
    let votosSanchezTotal = 0;
    let votosFujimoriTotal = 0;
    for (const reg of totalExtranjero) {
        votosSanchezTotal += Number(reg.votosSanchez);
        votosFujimoriTotal += Number(reg.votosFujimori);
        totalActas += Number(reg.actas);
    }
    const votosTotales = votosFujimoriTotal + votosSanchezTotal;
    total.actas = totalActas;
    total.sanchez = {};
    total.fujimori = {};
    total.sanchez.votos = votosSanchezTotal;
    total.fujimori.votos = votosFujimoriTotal;
    total.sanchez.porcentaje = (votosSanchezTotal*100/votosTotales).toFixed(3);
    total.fujimori.porcentaje = (votosFujimoriTotal*100/votosTotales).toFixed(3);
    return total;
}

export const getContinente = async (continente) => {
    const continenteData = await findByContinente(continente);
    if (!continenteData) {
        throw new AppError("Continente no encontrado", 404);
    }
    const total = {};
    total.continente = continente;
    const votosTotales = continenteData.votosFujimori + continenteData.votosSanchez;
    total.actas = continenteData.actas;
    total.sanchez = {};
    total.fujimori = {};
    total.sanchez.votos = continenteData.votosSanchez;
    total.fujimori.votos = continenteData.votosFujimori;
    total.sanchez.porcentaje = (continenteData.votosSanchez*100/votosTotales).toFixed(3);
    total.fujimori.porcentaje = (continenteData.votosFujimori*100/votosTotales).toFixed(3);
    return total;
}
