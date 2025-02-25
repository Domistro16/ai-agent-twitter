import { Character, ModelProviderName, defaultCharacter, Clients } from '@elizaos/core';

export const mainCharacter: Character = {
    ...defaultCharacter,
    clients: [Clients.TWITTER],
    modelProvider: ModelProviderName.OPENAI,
    name: "Domistro19",
}
