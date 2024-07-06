import { of } from "rxjs";
import { arrayQueroDoarPeloBrasilDialog } from "./arrayQueroDoarPeloBrasilDialog";
import { arrayQueroDoarRSDialog } from "./arrayQueroDoarRSDialog";

export const arrayAjudarImediato = of([
    {
        description: "🚨 Criança sozinha?",
        dialog: arrayQueroDoarRSDialog,
    },
    {
        description: "🐴🐶😺 Achou um Pet?",
        dialog: arrayQueroDoarPeloBrasilDialog,
    },
])