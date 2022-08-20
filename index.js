const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//const unit = require('./game/unit.json');

var Prefix = "!";

/*
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
  return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
*/

// Начиная от Дубинщика, поставить иконки персонажей.

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === Prefix + 'help') {
    msg.reply('\nКоманды: !creator !list !quiz !link \nАдмин команды: !say !event !clear\nГифки: !win !nyancat !nice !fuckyou');
  };
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === Prefix + 'link') {
    msg.channel.send('Cсылки:\nКоллекция - \nФорум - \nСайт - \nДонат - \nЮтуб создателя :3 - ');
  };
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === Prefix + 'list') {
    msg.channel.send('Cсылки:\nКоллекция - \nФорум - \nСайт - \nДонат - \nЮтуб создателя :3 - ');
  };
});

//Ополченец
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Ополченец') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Ополченец')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Ополченец становится рекрут, которому дали в руки копье и научили ходить строем.')
      .setThumbnail('https://i.imgur.com/cIzxWhT.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 60' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '50', inline: true },
        { name: 'Атака рукопашная', value: '25', inline: true },
        { name: 'Инициатива', value: '9', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '6', true)
      .setImage('https://i.imgur.com/AXzHF7t.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Стражник
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Стражник') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Стражник')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Воин достигший некоторых искуств в разных делах, получает лучшую экипировку.')
      .setThumbnail('https://i.imgur.com/FTYSTfg.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 140' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '60', inline: true },
        { name: 'Атака рукопашная', value: '40', inline: true },
        { name: 'Защита рукопашная', value: '5', inline: true },
        { name: 'Инициатива', value: '8', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '21', true)
      .addField('Длинное оружие', 'На первом ходу в битве персонаж получает утроенную защиту.', true)
      .setImage('https://i.imgur.com/erxbT4M.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Алебардист
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Алебардист') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Алебардист')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Преуспев в воинской службе, алебардист изучил все хитрости своего страшного оружия и прекрасно владеет им.')
      .setThumbnail('https://i.imgur.com/cbrsOj4.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 280' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '75', inline: true },
        { name: 'Атака рукопашная', value: '55', inline: true },
        { name: 'Защита рукопашная', value: '10', inline: true },
        { name: 'Защита стрелковая', value: '5', inline: true },
        { name: 'Инициатива', value: '7', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '52', true)
      .addField('Длинное оружие', 'На первом ходу в битве персонаж получает утроенную защиту.', true)
      .setImage('https://i.imgur.com/y5n8vlE.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Гвардеец
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Гвардеец') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Гвардеец')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Воин, прославившийся своим ратным умением, заслужил почетное призвание служить в императорской гвардии.')
      .setThumbnail('https://i.imgur.com/RHnUfAH.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 480' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '90', inline: true },
        { name: 'Атака рукопашная', value: '70', inline: true },
        { name: 'Защита рукопашная', value: '15', inline: true },
        { name: 'Защита стрелковая', value: '10', inline: true },
        { name: 'Инициатива', value: '6', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '120', true)
      .addField('Длинное оружие', 'На первом ходу в битве персонаж получает утроенную защиту.', true)
      .setImage('https://i.imgur.com/haOIBiZ.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

/*
//Пехотинец
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Пехотинец') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Пехотинец')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Пехотинец, вооруженный топором и щитом, является стартовой основой любого войска.')
      .setThumbnail('https://i.imgur.com/YF36ZHk.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 130' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '60', inline: true },
        { name: 'Атака рукопашная', value: '35', inline: true },
        { name: 'Защита рукопашная', value: '5', inline: true },
        { name: 'Защита стрелковая', value: '10', inline: true },
        { name: 'Инициатива', value: '9', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '19', true)
      //.addField('Длинное оружие', 'На первом ходу в битве персонаж получает утроенную защиту.', true)
      .setImage('https://i.imgur.com/S6Xlppp.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Оруженосец
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Оруженосец') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Оруженосец')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Оруженосец обучается воинскому искусству у рыцаря. Щит и меч - вот все, что нужно оруженосцу для победы.')
      .setThumbnail('https://i.imgur.com/MODWdjb.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 220' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '70', inline: true },
        { name: 'Атака рукопашная', value: '45', inline: true },
        { name: 'Защита рукопашная', value: '10', inline: true },
        { name: 'Защита стрелковая', value: '5', inline: true },
        { name: 'Инициатива', value: '12', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '45', true)
      //.addField('Длинное оружие', 'На первом ходу в битве персонаж получает утроенную защиту.', true)
      .setImage('https://i.imgur.com/O13jvxO.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Мечник
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Мечник') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Мечник')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Оруженосец, завершивший обучение у рыцаря, и стремящийся приобрести дальнейший опыт на службе в армии.')
      .setThumbnail('https://i.imgur.com/G2dk8KJ.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 460' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '80', inline: true },
        { name: 'Атака рукопашная', value: '45', inline: true },
        { name: 'Защита рукопашная', value: '10', inline: true },
        { name: 'Защита стрелковая', value: '5', inline: true },
        { name: 'Инициатива', value: '14', inline: true },
        { name: 'Количество действий', value: '2', inline: true }
      )
      .addField('Ежедневная выплата', '115', true)
      //.addField('Длинное оружие', 'На первом ходу в битве персонаж получает утроенную защиту.', true)
      .setImage('https://i.imgur.com/zYcKGSh.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Мастер меча
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Мастер меча') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Мастер меча')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Мастер меча виртуозно владеет своим оружием, в готовности с немыслимой скоростью парировать любой удар врага.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 680' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '90', inline: true },
        { name: 'Атака рукопашная', value: '50', inline: true },
        { name: 'Защита рукопашная', value: '15', inline: true },
        { name: 'Защита стрелковая', value: '10', inline: true },
        { name: 'Инициатива', value: '16', inline: true },
        { name: 'Количество действий', value: '2', inline: true }
      )
      .addField('Ежедневная выплата', '160', true)
      //.addField('Длинное оружие', 'На первом ходу в битве персонаж получает утроенную защиту.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Дубинщик
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Дубинщик') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Дубинщик')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Вместо меча дубинщик предпочитает булаву, которая наносит тяжелые удары даже сквозь броню врага.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 220' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '70', inline: true },
        { name: 'Атака рукопашная', value: '40', inline: true },
        { name: 'Защита рукопашная', value: '5', inline: true },
        { name: 'Защита стрелковая', value: '10', inline: true },
        { name: 'Инициатива', value: '9', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '49', true)
      .addField('Проникающий удар', 'Персонаж наносит повреждения, игнорируя защиту противника.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Булавщик
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Булавщик') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Булавщик')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Виртуозно владея булавой, этот воин не страшится сражаться без щита, причиняя врагу большой ущерб.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 280' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '85', inline: true },
        { name: 'Атака рукопашная', value: '45', inline: true },
        { name: 'Защита рукопашная', value: '5', inline: true },
        { name: 'Защита стрелковая', value: '5', inline: true },
        { name: 'Инициатива', value: '10', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '75', true)
      .addField('Проникающий удар', 'Персонаж наносит повреждения, игнорируя защиту противника.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Молотоборец
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Молотоборец') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Молотоборец')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Достигнув высот боевого мастертва, молотоборец берет в руки огромный шипастый молот.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 390' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '100', inline: true },
        { name: 'Атака рукопашная', value: '50', inline: true },
        { name: 'Защита рукопашная', value: '10', inline: true },
        { name: 'Защита стрелковая', value: '5', inline: true },
        { name: 'Инициатива', value: '11', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '105', true)
      .addField('Проникающий удар', 'Персонаж наносит повреждения, игнорируя защиту противника.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Воин-пилигрим
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Воин-пилигрим') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Воин-пилигрим')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Воин-пилигрим - образец доблести и отваги. Он скитается по свету в поисках возможности ратного подвига.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 390' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '85', inline: true },
        { name: 'Атака рукопашная', value: '55', inline: true },
        { name: 'Защита рукопашная', value: '15', inline: true },
        { name: 'Защита стрелковая', value: '20', inline: true },
        { name: 'Инициатива', value: '13', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '95', true)
      //.addField('Проникающий удар', 'Персонаж наносит повреждения, игнорируя защиту противника.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Паладин
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Паладин') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Паладин')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Паладин - посвященный богом рыцарь, избранный для служения и защиты веры.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 780' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '100', inline: true },
        { name: 'Атака рукопашная', value: '65', inline: true },
        { name: 'Защита рукопашная', value: '20', inline: true },
        { name: 'Защита стрелковая', value: '20', inline: true },
        { name: 'Иммунитет к магии', value: '15%', inline: true },
        { name: 'Регенерация', value: '5%', inline: true },
        { name: 'Инициатива', value: '14', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '180', true)
      //.addField('Проникающий удар', 'Персонаж наносит повреждения, игнорируя защиту противника.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Кирасир
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Кирасир') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Кирасир')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Кирасир - это элитный воин, избравший огромный двуручный меч своим любимым оружием.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 400' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '90', inline: true },
        { name: 'Атака рукопашная', value: '60', inline: true },
        { name: 'Защита рукопашная', value: '15', inline: true },
        { name: 'Защита стрелковая', value: '10', inline: true },
        //{ name: 'Иммунитет к магии', value: '15%', inline: true },
        //{ name: 'Регенерация', value: '5%', inline: true },
        { name: 'Инициатива', value: '12', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '100', true)
      //.addField('Проникающий удар', 'Персонаж наносит повреждения, игнорируя защиту противника.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Рыцарь
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Рыцарь') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Рыцарь')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Участник множества жестоких битв, Рыцарь обладает превосходным опытом ведения боя.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 800' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '110', inline: true },
        { name: 'Атака рукопашная', value: '75', inline: true },
        { name: 'Защита рукопашная', value: '20', inline: true },
        { name: 'Защита стрелковая', value: '15', inline: true },
        { name: 'Иммунитет к магии', value: '20%', inline: true },
        //{ name: 'Регенерация', value: '5%', inline: true },
        { name: 'Инициатива', value: '13', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '190', true)
      //.addField('Проникающий удар', 'Персонаж наносит повреждения, игнорируя защиту противника.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Кавалерист
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Кавалерист') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Кавалерист')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Стремительный всадник, перед атакой которого невозможно устоять, является основой любого конного войска.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 560' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '120', inline: true },
        { name: 'Атака рукопашная', value: '40', inline: true },
        { name: 'Защита рукопашная', value: '5', inline: true },
        { name: 'Защита стрелковая', value: '5', inline: true },
        //{ name: 'Иммунитет к магии', value: '20%', inline: true },
        //{ name: 'Регенерация', value: '5%', inline: true },
        { name: 'Инициатива', value: '20', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '85', true)
      .addField('Быстрая атака', 'На первом ходу в битве персонаж получает +1 маневр.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Конный Сержант
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Конный Сержант') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Конный Сержант')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Конный сержант несется в битву вслед за Конным Рыцарем, глубоко врезаясь в ряды противника.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 930' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '140', inline: true },
        { name: 'Атака рукопашная', value: '65', inline: true },
        { name: 'Защита рукопашная', value: '10', inline: true },
        { name: 'Защита стрелковая', value: '10', inline: true },
        //{ name: 'Иммунитет к магии', value: '20%', inline: true },
        //{ name: 'Регенерация', value: '5%', inline: true },
        { name: 'Инициатива', value: '18', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '170', true)
      .addField('Быстрая атака', 'На первом ходу в битве персонаж получает +1 маневр.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Конный Рыцарь
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Конный Рыцарь') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Конный Рыцарь')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Конный рыцарь является универсальной ударной силой любого самого современного и оснащенного войска.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 1470' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '160', inline: true },
        { name: 'Атака рукопашная', value: '90', inline: true },
        { name: 'Защита рукопашная', value: '20', inline: true },
        { name: 'Защита стрелковая', value: '15', inline: true },
        //{ name: 'Иммунитет к магии', value: '20%', inline: true },
        //{ name: 'Регенерация', value: '5%', inline: true },
        { name: 'Инициатива', value: '18', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '325', true)
      .addField('Быстрая атака', 'На первом ходу в битве персонаж получает +1 маневр.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});

//Конный Рыцарь
client.on('message', message => {
  if (message.content.toLowerCase() === Prefix + 'Конный Рыцарь') {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Конный Рыцарь')
      //.setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('Конный рыцарь является универсальной ударной силой любого самого современного и оснащенного войска.')
      .setThumbnail('https://i.imgur.com/EqSEa2V.png')
      .addFields(
        { name: 'Уровень 1', value: '0 / 1470' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Жизнь (хиты)', value: '160', inline: true },
        { name: 'Атака рукопашная', value: '90', inline: true },
        { name: 'Защита рукопашная', value: '20', inline: true },
        { name: 'Защита стрелковая', value: '15', inline: true },
        //{ name: 'Иммунитет к магии', value: '20%', inline: true },
        //{ name: 'Регенерация', value: '5%', inline: true },
        { name: 'Инициатива', value: '18', inline: true },
        { name: 'Количество действий', value: '1', inline: true }
      )
      .addField('Ежедневная выплата', '325', true)
      .addField('Быстрая атака', 'На первом ходу в битве персонаж получает +1 маневр.', true)
      .setImage('https://i.imgur.com/w39L1yf.png')
      .setTimestamp()
      .setFooter('Воин ближнего боя');
    message.channel.send(embed);
  }
});
*/

client.on('message', msg => {
  if (msg.content.toLowerCase() === Prefix + 'event') {
    if (msg.member.hasPermission("MANAGE_MESSAGES")) {
      msg.channel.send('Внимание вопрос!\nХотите ли вы ивент?')
        .then(function(message) {
          message.react('⭕');
          message.react('❌');
        }).catch(function() {
        });
    }
    else {
      msg.channel.send("У вас нету прав на выполнение данного действия.")
      msg.delete(5000);
    }
  }
});

client.on('message', function(message) {
  if (message.content.toLowerCase() == Prefix + "clear") {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send('Через 30 хвилин буде очищено чат.');
      setTimeout(function() {
        message.channel.fetchMessages()
          .then(function(list) {
            message.channel.bulkDelete(list);
          });
      }, 300000);
    }
    else {
      message.channel.send("Error! Check Permissions")
      message.delete(5000);
    }
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'BotCanSayButHeCanN\'tPromise') {
    message.channel.send('Вот владелец: https://steamcommunity.com/id/RedJoar');
  }
});

client.login(process.env.BOT_TOKEN).then(() => {}).catch(err => console.error(err));
