import { INodeProperties } from 'n8n-workflow';

// Campo das Eventos
export const eventsFields: INodeProperties[] = [
	// Campos = Webhook
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
			},
		},
	},
	{
		displayName: 'What Do You Want to Do?',
		name: 'resourceForWebhook',
		type: 'options',
		options: [
			{
				name: 'Set Webhook',
				value: 'setWebhook',
			},
			{
				name: 'Check Webhook',
				value: 'findWebhook',
			},
		],
		default: 'setWebhook',
		description: 'Choose to set a new webhook or check the current one',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
			},
		},
	},
	{
		displayName: 'Enable Webhook',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to turn the webhook integration on or off',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Webhook URL',
		name: 'webhookUrl',
		type: 'string',
		default: '',
		description: 'Enter the URL that will receive webhook events',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Webhook by Event',
		name: 'webhookByEvents',
		type: 'boolean',
		default: false,
		description: 'Whether to create a route per event by appending the event name to the URL',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Include Base64 Media',
		name: 'webhookBase64',
		type: 'boolean',
		default: false,
		description: 'Whether to send media as base64 in the webhook',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Events',
		name: 'webhookEvents',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
		default: [],
		options: [
			{
				name: 'CALL',
				value: 'CALL',
			},
			{
				name: 'CHATS_DELETE',
				value: 'CHATS_DELETE',
			},
			{
				name: 'CHATS_SET',
				value: 'CHATS_SET',
			},
			{
				name: 'CHATS_UPDATE',
				value: 'CHATS_UPDATE',
			},
			{
				name: 'CHATS_UPSERT',
				value: 'CHATS_UPSERT',
			},
			{
				name: 'CONNECTION_UPDATE',
				value: 'CONNECTION_UPDATE',
			},
			{
				name: 'CONTACTS_SET',
				value: 'CONTACTS_SET',
			},
			{
				name: 'CONTACTS_UPDATE',
				value: 'CONTACTS_UPDATE',
			},
			{
				name: 'CONTACTS_UPSERT',
				value: 'CONTACTS_UPSERT',
			},
			{
				name: 'GROUP_PARTICIPANTS_UPDATE',
				value: 'GROUP_PARTICIPANTS_UPDATE',
			},
			{
				name: 'GROUP_UPDATE',
				value: 'GROUP_UPDATE',
			},
			{
				name: 'GROUPS_UPSERT',
				value: 'GROUPS_UPSERT',
			},
			{
				name: 'LABELS_ASSOCIATION',
				value: 'LABELS_ASSOCIATION',
			},
			{
				name: 'LABELS_EDIT',
				value: 'LABELS_EDIT',
			},
			{
				name: 'MESSAGES_DELETE',
				value: 'MESSAGES_DELETE',
			},
			{
				name: 'MESSAGES_SET',
				value: 'MESSAGES_SET',
			},
			{
				name: 'MESSAGES_UPDATE',
				value: 'MESSAGES_UPDATE',
			},
			{
				name: 'MESSAGES_UPSERT',
				value: 'MESSAGES_UPSERT',
			},
			{
				name: 'PRESENCE_UPDATE',
				value: 'PRESENCE_UPDATE',
			},
			{
				name: 'QRCODE_UPDATED',
				value: 'QRCODE_UPDATED',
			},
			{
				name: 'SEND_MESSAGE',
				value: 'SEND_MESSAGE',
			},
			{
				name: 'TYPEBOT_CHANGE_STATUS',
				value: 'TYPEBOT_CHANGE_STATUS',
			},
			{
				name: 'TYPEBOT_START',
				value: 'TYPEBOT_START',
			},
		],
	},

	// Campos = RabbitMQ
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['rabbitmq'],
			},
		},
	},
	{
		displayName: 'What Do You Want to Do?',
		name: 'resourceForRabbitMQ',
		type: 'options',
		options: [
			{
				name: 'Set RabbitMQ',
				value: 'setRabbitMQ',
			},
			{
				name: 'Check RabbitMQ',
				value: 'findRabbitMQ',
			},
		],
		default: 'setRabbitMQ',
		description: 'Choose to enable/disable RabbitMQ or check the current status',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['rabbitmq'],
			},
		},
	},
	{
		displayName: 'Enable RabbitMQ',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to turn the RabbitMQ integration on or off',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['rabbitmq'],
				resourceForRabbitMQ: ['setRabbitMQ'],
			},
		},
	},
	{
		displayName: 'Events',
		name: 'rabbitMQEvents',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['events-api'],
				operation: ['rabbitmq'],
				resourceForRabbitMQ: ['setRabbitMQ'],
			},
		},
		default: [],
		options: [
			{
				name: 'CALL',
				value: 'CALL',
			},
			{
				name: 'CHATS_DELETE',
				value: 'CHATS_DELETE',
			},
			{
				name: 'CHATS_SET',
				value: 'CHATS_SET',
			},
			{
				name: 'CHATS_UPDATE',
				value: 'CHATS_UPDATE',
			},
			{
				name: 'CHATS_UPSERT',
				value: 'CHATS_UPSERT',
			},
			{
				name: 'CONNECTION_UPDATE',
				value: 'CONNECTION_UPDATE',
			},
			{
				name: 'CONTACTS_SET',
				value: 'CONTACTS_SET',
			},
			{
				name: 'CONTACTS_UPDATE',
				value: 'CONTACTS_UPDATE',
			},
			{
				name: 'CONTACTS_UPSERT',
				value: 'CONTACTS_UPSERT',
			},
			{
				name: 'GROUP_PARTICIPANTS_UPDATE',
				value: 'GROUP_PARTICIPANTS_UPDATE',
			},
			{
				name: 'GROUP_UPDATE',
				value: 'GROUP_UPDATE',
			},
			{
				name: 'GROUPS_UPSERT',
				value: 'GROUPS_UPSERT',
			},
			{
				name: 'LABELS_ASSOCIATION',
				value: 'LABELS_ASSOCIATION',
			},
			{
				name: 'LABELS_EDIT',
				value: 'LABELS_EDIT',
			},
			{
				name: 'MESSAGES_DELETE',
				value: 'MESSAGES_DELETE',
			},
			{
				name: 'MESSAGES_SET',
				value: 'MESSAGES_SET',
			},
			{
				name: 'MESSAGES_UPDATE',
				value: 'MESSAGES_UPDATE',
			},
			{
				name: 'MESSAGES_UPSERT',
				value: 'MESSAGES_UPSERT',
			},
			{
				name: 'PRESENCE_UPDATE',
				value: 'PRESENCE_UPDATE',
			},
			{
				name: 'QRCODE_UPDATED',
				value: 'QRCODE_UPDATED',
			},
			{
				name: 'SEND_MESSAGE',
				value: 'SEND_MESSAGE',
			},
			{
				name: 'TYPEBOT_CHANGE_STATUS',
				value: 'TYPEBOT_CHANGE_STATUS',
			},
			{
				name: 'TYPEBOT_START',
				value: 'TYPEBOT_START',
			},
		],
	},
];
