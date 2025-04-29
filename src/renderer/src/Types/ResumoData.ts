export interface Tarefa {
    id: number;
    materia: string;       // Matéria
    aula: string;       // Título da aula
    dias7: string;      // Data de revisão em 7 dias (formato ISO ou dd/mm/yyyy)
    dias15: string;     // Data de revisão em 15 dias
    mensal: string;     // Data de revisão mensal
    status: 'p' | 'f' | 'a';  // 'a' = ativo, 'c' = concluído (ou outro que você definir)
  }
  