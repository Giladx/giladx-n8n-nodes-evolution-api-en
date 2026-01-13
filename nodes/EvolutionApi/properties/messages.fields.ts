import { INodeProperties } from 'n8n-workflow';

export const messagesFields: INodeProperties[] = [
	// Campos = Enviar mensagem de texto
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',

		description: 'Enter the instance name that will send the message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Recipient RemoteJid',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'messageText',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the text message to send',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter the delay in milliseconds before sending the message',
			},
			{
				displayName: 'Reply to Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID to reply to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all group participants',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Numbers to mention (comma-separated)',
							},
						],
					},
				],
			},
			{
				displayName: 'Link Preview',
				name: 'linkPreview',
				type: 'boolean',
				default: true,
				description: 'Whether to show link preview in the message',
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},

	// Campos = Enviar Image
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Image',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'Image URL or base64',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to send with the image',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter the delay in milliseconds before sending the message',
			},
			{
				displayName: 'Reply to Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID to reply to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all group participants',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Numbers to mention (comma-separated)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},

	// Campos = Enviar Video
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Video',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'Video URL or base64',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to send with the video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter the delay in milliseconds before sending the message',
			},
			{
				displayName: 'Reply to Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID to reply to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all group participants',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter numbers to mention, comma-separated (e.g., 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},

	// Campos = Enviar Audio
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the audio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Audio',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'Audio URL or base64',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter the delay in milliseconds before sending the message',
			},
			//{
			//	displayName: 'Reply to Message',
			//	name: 'quoted',
			//	type: 'fixedCollection',
			//	typeOptions: {
			//		multipleValues: false,
			//	},
			//	default: {
			//		messageQuoted: {
			//			messageId: '',
			//		},
			//	},
			//	options: [
			//		{
			//			name: 'messageQuoted',
			//			displayName: 'Message',
			//			values: [
			//				{
			//					displayName: 'Message ID',
			//					name: 'messageId',
			//					type: 'string',
			//					default: '',
			//					description: 'Message ID to reply to',
			//				},
			//			],
			//		},
			//	],
			//},

			//{
			//	displayName: 'Mentions',
			//	name: 'mentions',
			//	type: 'fixedCollection',
			//	typeOptions: {
			//		multipleValues: false,
			//	},
			//	default: {
			//		mentionsSettings: {
			//			mentionsEveryOne: false,
			//			mentioned: '',
			//		},
			//	},
			//	options: [
			//		{
			//			name: 'mentionsSettings',
			//			displayName: 'Settings',
			//			values: [
			//				{
			//					displayName: 'Mention Everyone',
			//					name: 'mentionsEveryOne',
			//					type: 'boolean',
			//					default: false,
			//					description: 'Whether to mention all group participants',
			//				},
			//				{
			//					displayName: 'Numbers to Mention',
			//					name: 'mentioned',
			//					type: 'string',
			//					default: '',
			//					displayOptions: {
			//						show: {
			//							mentionsEveryOne: [false],
			//						},
			//					},
			//					description: 'Enter numbers to mention, comma-separated (e.g., 5511999999999,5511888888888)',
			//				},
			//			],
			//		},
			//	],
			//},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},

	// Campos = Enviar Document
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Document',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'Document URL or base64',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to send with the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',

		description: 'Document file name',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter the delay in milliseconds before sending the message',
			},
			{
				displayName: 'Reply to Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID to reply to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all group participants',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter numbers to mention, comma-separated (e.g., 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},

	// Campos = Enviar Enquete
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the poll',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Poll Title',
		name: 'caption',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the poll title',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Min 2 Options, Max 12. Each Option Must Be Unique.',
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Poll Options',
		name: 'options_display',
		type: 'fixedCollection',
		default: { metadataValues: [] },
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		description: 'Enter poll options (min 2, max 12). Each option must be unique.',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Option',
						name: 'optionValue',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter the delay in milliseconds before sending the message',
			},
			{
				displayName: 'Reply to Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID to reply to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all group participants',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter numbers to mention, comma-separated (e.g., 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},

	// Campos = Enviar Status
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the status',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Status Type',
		name: 'type',
		type: 'options',
		description: 'Choose the status type to post',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
		options: [
			{
				name: 'Text Status',
				value: 'text',
			},
			{
				name: 'Image Status',
				value: 'image',
			},
			{
				name: 'Video Status',
				value: 'video',
			},
			{
				name: 'Audio Status',
				value: 'audio',
			},
		],
		default: 'text',
	},
	{
		displayName: 'Content or URL',
		name: 'content',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the content or URL for the image/video/audio to post',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Text for Image/Video Status',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Enter the text for image/video status',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Background Color',
		name: 'backgroundColor',
		type: 'color',
		default: '#000000',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Text Font',
		name: 'font',
		type: 'options',
		description: 'Choose the font type for your text',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
		options: [
			{
				name: 'SERIF',
				value: 1,
			},
			{
				name: 'NORICAN REGULAR',
				value: 2,
			},
			{
				name: 'BRYNDAN WRITE',
				value: 3,
			},
			{
				name: 'BEBASNEUE REGULAR',
				value: 4,
			},
			{
				name: 'OSWALD HEAVY',
				value: 5,
			},
		],
		default: 1,
	},

	// Campos = Enviar Document
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Document',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'Document URL or base64',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to send with the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',

		description: 'Document file name',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter the delay in milliseconds before sending the message',
			},
			{
				displayName: 'Reply to Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID to reply to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all group participants',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter numbers to mention, comma-separated (e.g., 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},

	// Campos = Enviar Contact
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the contact',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Contacts',
		name: 'contacts',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: { contactValues: [] },
		options: [
			{
				name: 'contactValues',
				displayName: 'Contact',
				values: [
					{
						displayName: 'Full Name',
						name: 'fullName',
						type: 'string',
						default: '',
						required: true,
						description: 'Contact full name',
					},
					{
						displayName: 'WhatsApp Number',
						name: 'wuid',
						type: 'string',
						default: '',
						required: true,
						description: 'WhatsApp number (digits only, e.g., 559999999999)',
					},
					{
						displayName: 'Formatted Number',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						description: 'Formatted number (e.g., +55 99 9 9999-9999)',
					},
					{
						displayName: 'Organization',
						name: 'organization',
						type: 'string',
						default: '',
						description: 'Organization/company name',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						placeholder: 'name@example.com',
						default: '',
						description: 'Contact email address',
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description: 'Contact page URL',
					},
				],
			},
		],
		description: 'Contact list to send',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},

	// Campos = Enviar Lista
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'List Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Title shown at the top of the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'List description',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Button Text',
		name: 'buttonText',
		type: 'string',
		default: 'View Options',
		required: true,
		description: 'Text shown on the list button',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Footer Text',
		name: 'footerText',
		type: 'string',
		default: '',
		required: true,
		description: 'Text shown in the list footer',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Sections',
		name: 'sections',
		placeholder: 'Add Section',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'sectionValues',
				displayName: 'Section',
				values: [
					{
						displayName: 'Section Title',
						name: 'title',
						type: 'string',
						default: '',

					},
					{
						displayName: 'Rows',
						name: 'rows',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								name: 'rowValues',
								displayName: 'Row',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										required: true,
										description: 'Row title',
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Row description (optional)',
									},
									{
										displayName: 'Row ID',
										name: 'rowId',
										type: 'string',
										default: '',
										description: 'Unique option ID',
									}
								]
							}
						]
					}
				]
			}
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		}
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter the delay in milliseconds before sending the message',
			},
			{
				displayName: 'Reply to Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID to reply to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all group participants',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter numbers to mention, comma-separated (e.g., 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},

	// Campos = Enviar Buttons
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the buttons',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Button message title',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Button message description',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		default: '',
		//required: false,
		description: 'Footer text for the message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Buttons',
		name: 'buttons',
		placeholder: 'Add Button',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
			maxValue: 3,
		},
		default: {},
		options: [
			{
				name: 'buttonValues',
				displayName: 'Button',
				values: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Reply',
								value: 'reply',
							},
							{
								name: 'Copy',
								value: 'copy',
							},
							{
								name: 'URL',
								value: 'url',
							},
							{
								name: 'Call',
								value: 'call',
							},
						],
						default: 'reply',
					},
					{
						displayName: 'Button Text',
						name: 'displayText',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['reply'],
							},
						},
					},
					{
						displayName: 'Copy Code',
						name: 'copyCode',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['copy'],
							},
						},
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['url'],
							},
						},
					},
					{
						displayName: 'Phone Number',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['call'],
							},
						},
					},
				],
			},
		],
		description: 'Message buttons (max 3)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},

	// Campos = Enviar PIX
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name that will send the PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Beneficiary Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'PIX beneficiary name',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'PIX Key Type',
		name: 'keyType',
		type: 'options',
		options: [
			{
				name: 'Phone',
				value: 'phone',
			},
			{
				name: 'Email',
				value: 'email',
			},
			{
				name: 'CPF',
				value: 'cpf',
			},
			{
				name: 'CNPJ',
				value: 'cnpj',
			},
			{
				name: 'Random',
				value: 'random',
			},
		],
		default: 'email',
		required: true,
		description: 'Type of PIX key for the beneficiary',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'PIX Key',
		name: 'key',
		type: 'string',
		default: '',
		required: true,
		description: 'Beneficiary PIX key',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Send to All',
		name: 'allContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to send status to all contacts',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Contact List',
		name: 'statusJidList',
		type: 'string',
		default: '',
		required: true,
		description: 'Contact list to receive the status (comma-separated)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
				allContacts: [false],
			},
		},
	},

	// Campos = Reagir Message
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Chat Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Chat number where the message is',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'Message ID to react to',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Sent By Me',
		name: 'fromMe',
		type: 'boolean',
		default: true,
		description: 'Whether the message was sent by this instance',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Reaction Emoji',
		name: 'reaction',
		type: 'string',
		default: '👍',
		required: true,
		description: 'Emoji to use for the reaction',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	}
];
