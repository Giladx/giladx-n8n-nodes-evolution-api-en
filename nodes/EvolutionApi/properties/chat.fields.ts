import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const chatFields: INodeProperties[] = [
	// Campos comuns para todas as operações
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['chat-api'],
			},
		},
	},

	// Campos para verificar número
	{
		displayName: 'Numbers',
		name: 'numbers',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'List of numbers to check (comma-separated)',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['check-number'],
			},
		},
	},

	// Campos para ler mensagens
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},
	{
		displayName: 'Sent By Me',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Whether the message was sent by this instance',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},

	// Campos para gerenciar arquivo
	{
		displayName: 'Contact',
		name: 'chat',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'archive',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Archive',
				value: true,
			},
			{
				name: 'Unarchive',
				value: false,
			},
		],
		default: true,
		required: true,
		description: 'Choose to archive or unarchive the chat',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Last message ID',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'Sent By Me',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Whether the message was sent by this instance',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},

	// Campos para marcar como não lido
	{
		displayName: 'Contact',
		name: 'chat',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Last message ID',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},
	{
		displayName: 'Sent By Me',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Whether the message was sent by this instance',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},

	// Campos para deletar mensagem
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Message ID to delete',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'Sent By Me',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Whether the message was sent by this instance',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'Participant Number',
		name: 'participant',
		type: 'string',
		default: '',
		required: true,
		description: 'Number of the participant who sent the message',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
				fromMe: [false],
			},
		},
	},

	// Campos para buscar foto do perfil
	{
		displayName: 'Contact',
		name: 'number',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number (e.g., 5511999999999)',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['fetch-profile-picture'],
			},
		},
	},

	// Campos para obter mídia em Base64
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Message ID that contains the media',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['get-media-base64'],
			},
		},
	},
	{
		displayName: 'Convert to MP4',
		name: 'convertToMp4',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Whether to convert the video to MP4 format',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['get-media-base64'],
			},
		},
	},

	// Campos para editar mensagem
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Message ID to edit',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},
	{
		displayName: 'New Message',
		name: 'text',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'New message text',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},

	// Campos para enviar presença
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},
	{
		displayName: 'Presence',
		name: 'presence',
		type: 'options',
		options: [
			{
				name: 'Typing...',
				value: 'composing',
			},
			{
				name: 'Recording...',
				value: 'recording',
			},
		],
		default: 'composing',
		required: true,
		description: 'Presence type to send',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},
	{
		displayName: 'Delay',
		name: 'delay',
		type: 'number' as NodePropertyTypes,
		default: 1200,
		required: true,
		description: 'Time in milliseconds to keep presence active',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},

	// Campos para bloquear contato
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['block-contact'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Block',
				value: 'block',
			},
			{
				name: 'Unblock',
				value: 'unblock',
			},
		],
		default: 'block',
		required: true,
		description: 'Choose whether to block or unblock the contact',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['block-contact'],
			},
		},
	},

	// Campos para listar contatos
	{
		displayName: 'List All',
		name: 'listAll',
		type: 'boolean' as NodePropertyTypes,
		default: true,
		required: true,
		description: 'Whether to list all contacts',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-contacts'],
			},
		},
	},
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Specific contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-contacts'],
				listAll: [false],
			},
		},
	},

	// Campos para procurar mensagens
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,

		description: 'Page number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},
	{
		displayName: 'Items Per Page',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,

		description: 'Messages per page',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},

	// Campos para procurar status de mensagens
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,

		description: 'Page number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'Items Per Page',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,

		description: 'Messages per page',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},

	// Campos para procurar chats
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,

		description: 'Page number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'Items Per Page',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,

		description: 'Chats per page',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
];
