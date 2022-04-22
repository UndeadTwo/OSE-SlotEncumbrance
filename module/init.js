import { log } from './module.js';

Hooks.on('preUpdateItem', (item, changes, options, ...args) => {
	log.debug('Pre-Update Item', item, changes, options)
});

Hooks.on('createItem', (item, options, userId, ...args) => {
	log.debug('Create Item', item, options, userId)
});

Hooks.on('deleteItem', (item, options, userId, ...args) => {
	log.debug('Delete Item', item, options, userId)
});

Hooks.on('updateItem', (item, changes, options, userId) => {
	log.debug('Update Item', item, changes, options, userId)
});

Hooks.on('renderActorSheet', (actorSheet) => {
	log.debug('Render Actor Sheet', actorSheet)
});