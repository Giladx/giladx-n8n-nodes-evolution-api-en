import { INodeProperties } from 'n8n-workflow';

// Opções da events-api (Eventos)
export const eventsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['events-api'], // Value do Resource
		},
	},
	options: [
		// Opção = Enviar mensagem de Texto
		{
			// Set/find Webhook
			name: 'Webhook',
			action: 'Webhook',
			description: 'Set or check Webhook integration',
			value: 'webhook',
		},
		{
			// Set/find Rabbitmq
			name: 'RabbitMQ',
			action: 'Rabbitmq',
			description: 'Set or check RabbitMQ integration',
			value: 'rabbitmq',
		},
	],
	// Definindo como padrão a opção "Enviar Texto"
	default: 'webhook',
};
