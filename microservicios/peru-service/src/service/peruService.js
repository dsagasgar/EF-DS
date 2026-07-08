import { findAll, findByRegion } from "../repository/peruRepository.js";
import { AppError } from "../error/AppError.js";

export const getTotal = async () => {
    const totalPeru = await findAll();
    const total = {};
    let totalActas = 0;
    let votosSanchezTotal = 0;
    let votosFujimoriTotal = 0;
    for (const reg of totalPeru) {
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

export const getRegion = async (region) => {
    const regionData = await findByRegion(region);
    if (!regionData) {
        throw new AppError("Region no encontrada", 404);
    }
    const total = {};
    total.region = region;
    const votosTotales = regionData.votosFujimori + regionData.votosSanchez;
    total.actas = regionData.actas;
    total.sanchez = {};
    total.fujimori = {};
    total.sanchez.votos = regionData.votosSanchez;
    total.fujimori.votos = regionData.votosFujimori;
    total.sanchez.porcentaje = (regionData.votosSanchez*100/votosTotales).toFixed(3);
    total.fujimori.porcentaje = (regionData.votosFujimori*100/votosTotales).toFixed(3);
    return total;
}
