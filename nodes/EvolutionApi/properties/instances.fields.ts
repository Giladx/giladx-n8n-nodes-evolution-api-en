import { INodeProperties } from 'n8n-workflow';

// Campos das instancias
export const instancesFields: INodeProperties[] = [
	// Campos = Criar Instancia
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'API Key for Instance',
		name: 'token',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',

		description: 'Optional: enter a token for the instance',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'WhatsApp Number',
		name: 'number',
		type: 'string',
		default: '',

		description: 'Optional: number to connect and receive the pairing code',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_Create_instance',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Behavior',
				name: 'instanceSettings',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Instance Behavior',
						name: 'settings',
						values: [
							{
								displayName: 'Reject Calls',
								name: 'rejectCall',
								type: 'boolean',
								default: false,
								description: 'Whether to automatically reject incoming calls',
							},
							{
								displayName: 'Message When Rejected',
								name: 'msgCall',
								type: 'string',
								default: '',
								description: 'Message to send when a call is rejected',
							},
							{
								displayName: 'Ignore Groups',
								name: 'groupsIgnore',
								type: 'boolean',
								default: false,
								description: 'Whether to ignore messages from groups',
							},
							{
								displayName: 'Always Online',
								name: 'alwaysOnline',
								type: 'boolean',
								default: false,
								description: 'Whether to keep the status always online',
							},
							{
								displayName: 'Read Messages',
								name: 'readMessages',
								type: 'boolean',
								default: false,
								description: 'Whether to mark messages as read automatically',
							},
							{
								displayName: 'Read Status',
								name: 'readStatus',
								type: 'boolean',
								default: false,
								description: 'Whether to allow the API to view contact status updates',
							},
							{
								displayName: 'Sync History',
								name: 'syncFullHistory',
								type: 'boolean',
								default: false,
								description: 'Whether to sync full message history with the API',
							},
						],
					},
				],
				description: 'Instance behavior',
			},
			{
				displayName: 'Chatwoot',
				name: 'chatwoot',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Chatwoot Settings',
						name: 'chatwootSettings',
						values: [
							{
								displayName: 'Chatwoot Account ID',
								name: 'chatwootAccountId',
								type: 'string',
								default: '',
								description: 'Enter the Chatwoot account ID',
							},
							{
								displayName: 'Chatwoot Admin Token',
								name: 'chatwootToken',
								type: 'string',
								typeOptions: {
									password: true,
								},
								default: '',
								description: 'Enter the Chatwoot admin token',
							},
							{
								displayName: 'Chatwoot URL',
								name: 'chatwootUrl',
								type: 'string',
								default: '',
								description: 'Enter the Chatwoot URL',
							},
							{
								displayName: 'Chatwoot Agent Signature',
								name: 'chatwootSignMsg',
								type: 'boolean',
								default: false,
								description: 'Whether to add the agent signature in Chatwoot',
							},
							{
								displayName: 'Reopen Messages in Chatwoot',
								name: 'chatwootReopenConversation',
								type: 'boolean',
								default: false,
								description: 'Whether to reopen conversations in Chatwoot',
							},
							{
								displayName: 'Start Conversations as Pending',
								name: 'chatwootConversationPending',
								type: 'boolean',
								default: false,
								description: 'Whether to start conversations as pending in Chatwoot',
							},
							{
								displayName: 'Import Contacts to Chatwoot',
								name: 'chatwootImportContacts',
								type: 'boolean',
								default: false,
								description: 'Whether to import contacts to Chatwoot',
							},
							{
								displayName: 'Chatwoot Inbox Name',
								name: 'chatwootNameInbox',
								type: 'string',
								default: '',
								description: 'Enter the Chatwoot inbox name',
							},
							{
								displayName: 'Merge Brazilian Contacts',
								name: 'chatwootMergeBrazilContacts',
								type: 'boolean',
								default: false,
								description: 'Whether to merge Brazilian contacts in Chatwoot',
							},
							{
								displayName: 'Import Messages to Chatwoot',
								name: 'chatwootImportMessages',
								type: 'boolean',
								default: false,
								description: 'Whether to import messages to Chatwoot',
							},
							{
								displayName: 'Import Messages (Days)',
								name: 'chatwootDaysLimitImportMessages',
								type: 'number',
								default: 0,
								description: 'Optional: number of days of messages to import into Chatwoot',
							},
							{
								displayName: 'Chatwoot QR Code Contact Name',
								name: 'chatwootOrganization',
								type: 'string',
								default: '',
								description: 'Enter the QR code contact name in Chatwoot',
							},
							{
								displayName: 'Chatwoot Contact Logo URL',
								name: 'chatwootLogo',
								type: 'string',
								default:
									'https://github.com/user-attachments/assets/4d1e9cd6-377a-4383-820a-9a97e6cfbb63',
								description: 'Enter the logo URL for the Chatwoot contact',
							},
						],
					},
				],
				description: 'Chatwoot settings',
			},
			{
				displayName: 'Proxy',
				name: 'proxy',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Proxy Settings',
						name: 'proxySettings',
						values: [
							{
								displayName: 'Proxy Host',
								name: 'proxyHost',
								type: 'string',
								default: '',
								description: 'Enter the proxy host',
							},
							{
								displayName: 'Proxy Port',
								name: 'proxyPort',
								type: 'string',
								default: '1234',
								description: 'Enter the proxy port',
							},
							{
								displayName: 'Proxy Protocol',
								name: 'proxyProtocol',
								type: 'options',
								options: [
									{
										name: 'HTTP',
										value: 'http',
									},
									{
										name: 'HTTPS',
										value: 'https',
									},
								],
								default: 'http',
								description: 'Choose the proxy protocol',
							},
							{
								displayName: 'Proxy Username',
								name: 'proxyUsername',
								type: 'string',
								default: '',
								description: 'Enter the proxy username',
							},
							{
								displayName: 'Proxy Password',
								name: 'proxyPassword',
								type: 'string',
								typeOptions: {
									password: true,
								},
								default: '',
								description: 'Enter the proxy password',
							},
						],
					},
				],
				description: 'Proxy settings',
			},
			{
				displayName: 'RabbitMQ',
				name: 'rabbitmq',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'RabbitMQ Settings',
						name: 'rabbitmqSettings',
						values: [
							{
								displayName: 'Enable RabbitMQ',
								name: 'rabbitmqEnabled',
								type: 'boolean',
								default: false,
								description: 'Whether to turn RabbitMQ on or off',
							},
							{
								displayName: 'Events',
								name: 'rabbitmqEvents',
								type: 'multiOptions',
								default: [], // Adicionado para resolver o erro
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
						],
					},
				],
				description: 'Events to monitor',
			},
			{
				displayName: 'Webhook',
				name: 'webhook',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Webhook Settings',
						name: 'webhookSettings',
						values: [
							{
								displayName: 'Webhook URL',
								name: 'webhookUrl',
								type: 'string',
								default: '',
								description: 'Enter the URL that will receive webhook events',
							},
							{
								displayName: 'Webhook by Event',
								name: 'webhookByEvents',
								type: 'boolean',
								default: false,
								description: 'Whether to create a route per event by appending the event name to the URL', // Atualizado
							},
							{
								displayName: 'Include Base64 Media',
								name: 'webhookBase64',
								type: 'boolean',
								default: false,
								description: 'Whether to send media as base64 in the webhook', // Atualizado
							},
							{
								displayName: 'Events',
								name: 'webhookEvents',
								type: 'multiOptions',
								default: [], // Adicionado para resolver o erro
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
						],
					},
				],
				description: 'Events to monitor',
			},
		],
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},

	// Campos = Conectar Instância
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name to search',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-connect'],
			},
		},
	},

	// Campos = Buscar Instancia
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',

		description: 'Enter the instance name to search',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['fetch-instances'],
			},
		},
	},

	// Campos = Definir Comportamento
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Reject Calls',
		name: 'rejectCall',
		type: 'boolean',
		default: false,
		description: 'Whether to reject incoming calls',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Call Reject Message',
		name: 'msgCall',
		type: 'string',
		default: 'We do not accept calls.',

		description: 'Message to send when calls are rejected',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Ignore Groups',
		name: 'groupsIgnore',
		type: 'boolean',
		default: false,
		description: 'Whether to ignore messages from groups',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Always Online',
		name: 'alwaysOnline',
		type: 'boolean',
		default: false,
		description: 'Whether to keep the instance online',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Read Messages',
		name: 'readMessages',
		type: 'boolean',
		default: false,
		description: 'Whether to mark messages as read automatically',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Sync Full History',
		name: 'syncFullHistory',
		type: 'boolean',
		default: false,
		description: 'Whether to sync full message history',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Read Status',
		name: 'readStatus',
		type: 'boolean',
		default: false,
		description: 'Whether to allow reading status updates',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},

	// Campos = Definir presença
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-presence'],
			},
		},
	},
	{
		displayName: 'Presence',
		name: 'presence',
		type: 'options',
		options: [
			{
				name: 'Available',
				value: 'available',
			},
			{
				name: 'Unavailable',
				value: 'unavailable',
			},
		],
		default: 'available',
		required: true,
		description: 'Instance presence status',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-presence'],
			},
		},
	},

	// Campos = Proxy
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
			},
		},
	},

	{
		displayName: 'What Do You Want to Do?',
		name: 'resourceForProxy',
		type: 'options',
		options: [
			{
				name: 'Set Proxy',
				value: 'setProxy',
			},
			{
				name: 'Check Proxy',
				value: 'findProxy',
			},
		],
		default: 'setProxy',
		description: 'Choose to set or check the proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
			},
		},
	},
	{
		displayName: 'Enable Proxy',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to turn proxy on or off',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Proxy Protocol',
		name: 'proxyProtocol',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'HTTP',
				value: 'http',
			},
			{
				name: 'HTTPS',
				value: 'https',
			},
		],
		default: 'http',
		description: 'Choose the proxy protocol',
	},
	{
		displayName: 'Proxy Host',
		name: 'proxyHost',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the proxy host',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Proxy Port',
		name: 'proxyPort',
		type: 'string',
		default: '1234',
		required: true,
		description: 'Enter the proxy port',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Proxy Username',
		name: 'proxyUsername',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the proxy username',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Proxy Password',
		name: 'proxyPassword',
		type: 'string',
		required: true,
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Enter the proxy password',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},

	// Campos = Reiniciar instancia
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['restart-instance'],
			},
		},
	},

	// Campos = Desconectar instancia
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['logout-instance'],
			},
		},
	},

	// Campos = Deletar instancia
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name to delete',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['delete-instance'],
			},
		},
	},
];
