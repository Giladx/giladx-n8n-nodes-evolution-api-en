import { INodeProperties } from 'n8n-workflow';

// Opções da integrations-api (Integração)
export const integrationsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Value do Resource
		},
	},
	options: [
		{
			// Set/find Chatwoot
			name: 'Chatwoot',
			action: 'Chatwoot',
			description: 'Set or check Chatwoot integration',
			value: 'chatwoot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Evolution Bot
			name: 'Evolution Bot',
			action: 'Evolution bot',
			description: 'Manage the Evolution Bot integration',
			value: 'evolution-bot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions do Typebot
			name: 'Typebot',
			action: 'Typebot',
			description: 'Manage the Typebot integration',
			value: 'typebot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Dify
			name: 'Dify',
			action: 'Dify',
			description: 'Manage the Dify integration',
			value: 'difyBot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Dify
			name: 'Flowise',
			action: 'Flowise',
			description: 'Manage the Flowise integration',
			value: 'flowiseBot',
		},
	],
	// Definindo como padrão a opção "Enviar Texto"
	default: 'chatwoot',
};
