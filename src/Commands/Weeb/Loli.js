const Command = require('../../Structures/Command')
const Message = require('../../Structures/Message')

module.exports = class command extends Command {
    constructor() {
        super('loli', {
            description: 'Sends a random nsfw loli image',
            category: 'weeb',
            usage: 'loli',
            exp: 20,
            cooldown: 5
        })
    }

    /**
     * @param {Message} M
     * @returns {Promise<void>}
     */

    execute = async (M) => {
        const buttons = [{ buttonId: `${this.helper.config.prefix}loli`, buttonText: { displayText: 'NEXT ➡️' }, type: 1 }]
        const buttonMessage = {
            image: { url: 'https://weeb-api.up.railway.app/loli' },
            caption: '*Here, you go!*',
            footer: `${this.helper.config.name}`,
            buttons: buttons,
            headerType: 1
        }
        return void (await this.client.sendMessage(M.from, buttonMessage))
    }
}
