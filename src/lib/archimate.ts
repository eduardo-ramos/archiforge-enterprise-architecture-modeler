import { ArchiElementType, ArchiRelationshipType } from '@/types';

// Esta é uma matriz de validação conceitual simplificada.
// Uma aplicação real teria uma matriz abrangente.
// Chave: "SourceElementType|TargetElementType"
// Valor: Array de ArchiRelationshipType permitidos
const validationMatrix: Record<string, ArchiRelationshipType[]> = {
  [`${ArchiElementType.APPLICATION_COMPONENT}|${ArchiElementType.BUSINESS_PROCESS}`]: [ArchiRelationshipType.SERVING],
  [`${ArchiElementType.BUSINESS_ACTOR}|${ArchiElementType.BUSINESS_ROLE}`]: [ArchiRelationshipType.ASSIGNMENT],
  // Adicione mais regras aqui conforme necessário
};

/**
 * Verifica se um relacionamento é permitido entre dois tipos de elemento.
 * Para esta versão apenas de frontend, retorna o primeiro tipo de relacionamento válido, se existir.
 * Uma UI mais complexa permitiria ao usuário escolher da lista de tipos válidos.
 * @param sourceType O tipo do elemento de origem.
 * @param targetType O tipo do elemento de destino.
 * @returns O primeiro tipo de relacionamento válido, ou nulo se nenhum for permitido.
 */
export const getValidRelationshipType = (sourceType: ArchiElementType, targetType: ArchiElementType): ArchiRelationshipType | null => {
  const key = `${sourceType}|${targetType}`;
  const allowedRelationships = validationMatrix[key];
  if (allowedRelationships && allowedRelationships.length > 0) {
    return allowedRelationships[0]; // Retorna o primeiro tipo válido para simplicidade
  }
  // Tente também a direção inversa para alguns relacionamentos (ex: Associação)
  // Para este exemplo, mantemos simples e direcional.
  return null;
};
