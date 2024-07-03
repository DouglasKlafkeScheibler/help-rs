import { of } from "rxjs";
import { arrayOrientacoesMeusDireitosDialog } from "./arrayOrientacoesMeusDireitosDialog";
import { arrayOrientacoesCuidadosSaudeDialog } from "./arrayOrientacoesCuidadosSaudeDialog";

export const arrayOrientacoes = of([
    {
        description: "⚖ Meus direitos",
        dialog: arrayOrientacoesMeusDireitosDialog,
    },
    {
        description: '😷 Cuidados com a saúde',
        dialog: arrayOrientacoesCuidadosSaudeDialog,
    },
])