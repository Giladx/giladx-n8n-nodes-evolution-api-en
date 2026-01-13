import { INodeProperties } from 'n8n-workflow';

export const chatOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['chat-api'],
		},
	},
	options: [
		{
			name: 'Check Number',
			action: 'Check number',
			description: 'Check if a number is registered on WhatsApp',
			value: 'check-number',
		},
		{
			name: 'Read Messages',
			action: 'Mark messages as read',
			description: 'Mark specific messages as read',
			value: 'read-messages',
		},
		{
			name: 'Manage Archive',
			action: 'Manage chat archive',
			description: 'Archive or unarchive a chat',
			value: 'manage-archive',
		},
		{
			name: 'Mark Unread',
			action: 'Mark chat as unread',
			description: 'Mark a specific chat as unread',
			value: 'mark-unread',
		},
		{
			name: 'Delete Message',
			action: 'Delete message',
			description: 'Delete a specific message for everyone',
			value: 'delete-message',
		},
		{
			name: 'Get Profile Photo',
			action: 'Get profile photo',
			description: 'Get the profile photo URL for a contact',
			value: 'fetch-profile-picture',
		},
		{
			name: 'Get Media as Base64',
			action: 'Get media as base64',
			description: 'Get media content as Base64',
			value: 'get-media-base64',
		},
		{
			name: 'Edit Message',
			action: 'Edit message',
			description: 'Edit a previously sent message',
			value: 'update-message',
		},
		{
			name: 'Send Presence',
			action: 'Send presence',
			description: 'Send presence status (typing/recording) to a contact',
			value: 'send-presence',
		},
		{
			name: 'Block Contact',
			action: 'Block contact',
			description: 'Block or unblock a contact',
			value: 'block-contact',
		},
		{
			name: 'List Contacts',
			action: 'List contacts',
			description: 'Whether to list all contacts or search for one contact',
			value: 'find-contacts',
		},
		{
			name: 'Find Messages',
			action: 'Find messages for a contact',
			description: 'Find messages for a specific contact',
			value: 'find-messages',
		},
		{
			name: 'Find Message Status',
			action: 'Find message status',
			description: 'Find message status for a specific contact',
			value: 'find-status-messages',
		},
		{
			name: 'Find Chats',
			action: 'Find chats',
			description: 'Find chats for a specific contact',
			value: 'find-chats',
		},
	],
	default: 'check-number',
};
