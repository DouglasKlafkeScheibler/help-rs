import { of } from "rxjs";
import { arrayNecessidadesPrecisoAbrigoDialog } from "./arrayNecessidadesPrecisoAbrigoDialog";
import { arrayNecessidadesReconstruirLarDialog } from "./arrayNecessidadesReconstruirLarDialog";
import { arrayNecessidadesAguaPotavelDialog } from "./arrayNecessidadesAguaPotavelDialog";
import { arrayNecessidadesRefeicaoQuentinhaDialog } from "./arrayNecessidadesRefeicaoQuentinhaDialog";
import { arrayNecessidadesAtendimentoMedicoDialog } from "./arrayNecessidadesAtendimentoMedicoDialog";
import { arrayNecessidadesCuidadosPetDialog } from "./arrayNecessidadesCuidadosPetDialog";
import { arrayNecessidadesApoioPsicologicoDialog } from "./arrayNecessidadesApoioPsicologicoDialog";
import { arrayNecessidadesPrecisoMedicacaoDialog } from "./arrayNecessidadesPrecisoMedicacaoDialog";

export const arrayNecessidades = of([
    {
        description: "🛌🏻 Preciso de Abrigo",
        dialog: arrayNecessidadesPrecisoAbrigoDialog,
    },
    {
        description: '🏡 Reconstruir Meu Lar',
        dialog: arrayNecessidadesReconstruirLarDialog,
    },
    {
        description: "💧 Água potável",
        dialog: arrayNecessidadesAguaPotavelDialog,
    },
    {
        description: '🍲 Refeição quentinha',
        dialog: arrayNecessidadesRefeicaoQuentinhaDialog,
    },
    {
        description: '🩺 Atendimento Médico',
        dialog: arrayNecessidadesAtendimentoMedicoDialog,
    },
    {
        description: '🫂 Apoio Psicológico',
        dialog: arrayNecessidadesApoioPsicologicoDialog,
    },
    {
        description: '🐾 Cuidados Pet',
        dialog: arrayNecessidadesCuidadosPetDialog,
    },
    {
        description: '💊 Preciso de Medicação',
        dialog: arrayNecessidadesPrecisoMedicacaoDialog,
    },
])