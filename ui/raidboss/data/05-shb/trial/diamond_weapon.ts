import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const sharedOutputStrings = {
  teleportEast: {
    en: 'Teleport to east platform',
    de: 'Teleport zur östlichen plattform',
    fr: 'Téléportez-vous vers la plateforme est',
    ja: '東の足場へテレポ',
    cn: '传送到右边(东边)平台',
    ko: '동쪽으로 이동',
  },
  teleportWest: {
    en: 'Teleport to west platform',
    de: 'Teleport zur westlichen plattform',
    fr: 'Téléportez-vous vers la plateforme ouest',
    ja: '西の足場へテレポ',
    cn: '传送到左边(西边)平台',
    ko: '서쪽으로 이동',
  },
};

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.TheCloudDeck,
  timelineFile: 'diamond_weapon.txt',
  triggers: [
    {
      id: 'Diamond Diamond Rain',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Diamond Weapon', id: '5FA7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Diamant-Waffe', id: '5FA7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Arme Diamant', id: '5FA7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ダイヤウェポン', id: '5FA7', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '钻石神兵', id: '5FA7', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Diamond Claw Swipe East',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Diamond Weapon', id: '5F9A', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Diamant-Waffe', id: '5F9A', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Arme Diamant', id: '5F9A', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ダイヤウェポン', id: '5F9A', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '钻石神兵', id: '5F9A', capture: false }),
      durationSeconds: 10,
      alertText: (_data, _matches, output) => output.teleportWest!(),
      outputStrings: sharedOutputStrings,
    },
    {
      id: 'Diamond Claw Swipe West',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Diamond Weapon', id: '5F9B', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Diamant-Waffe', id: '5F9B', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Arme Diamant', id: '5F9B', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ダイヤウェポン', id: '5F9B', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '钻石神兵', id: '5F9B', capture: false }),
      durationSeconds: 10,
      alertText: (_data, _matches, output) => output.teleportEast!(),
      outputStrings: sharedOutputStrings,
    },
    {
      id: 'Diamond Photon Burst',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '0057' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Flare on YOU',
          de: 'Flare auf DIR',
          fr: 'Brasier sur VOUS',
          ja: '自分にフレア',
          cn: '核爆点名',
          ko: '플레어 대상자',
        },
      },
    },
    {
      // There is no head marker for this mechanic, instead Unknown_5779 creates the indicator
      id: 'Diamond Diamond Flash',
      type: 'Ability',
      netRegex: NetRegexes.ability({ source: 'The Diamond Weapon', id: '5779' }),
      netRegexDe: NetRegexes.ability({ source: 'Diamant-Waffe', id: '5779' }),
      netRegexFr: NetRegexes.ability({ source: 'Arme Diamant', id: '5779' }),
      netRegexJa: NetRegexes.ability({ source: 'ダイヤウェポン', id: '5779' }),
      netRegexCn: NetRegexes.ability({ source: '钻石神兵', id: '5779' }),
      durationSeconds: 5,
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Diamond Auri Cyclone',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Diamond Weapon', id: '5FE6', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Diamant-Waffe', id: '5FE6', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Arme Diamant', id: '5FE6', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ダイヤウェポン', id: '5FE6', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '钻石神兵', id: '5FE6', capture: false }),
      delaySeconds: 0.5,
      durationSeconds: 6,
      response: Responses.knockback(),
    },
    {
      id: 'Diamond Airship\'s Bane',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Diamond Weapon', id: '5FE8', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Diamant-Waffe', id: '5FE8', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Arme Diamant', id: '5FE8', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ダイヤウェポン', id: '5FE8', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '钻石神兵', id: '5FE8', capture: false }),
      durationSeconds: 5,
      alertText: (_data, _matches, output) => output.teleportEast!(),
      outputStrings: sharedOutputStrings,
    },
    {
      id: 'Diamond Outrage',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Diamond Weapon', id: '5FD7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Diamant-Waffe', id: '5FD7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Arme Diamant', id: '5FD7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ダイヤウェポン', id: '5FD7', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '钻石神兵', id: '5FD7', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Diamond Auri Doomstead',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Diamond Weapon', id: '5FD8' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Diamant-Waffe', id: '5FD8' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Arme Diamant', id: '5FD8' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ダイヤウェポン', id: '5FD8' }),
      netRegexCn: NetRegexes.startsUsing({ source: '钻石神兵', id: '5FD8' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Diamond Vertical Cleave',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Diamond Weapon', id: '5FE5', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Diamant-Waffe', id: '5FE5', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Arme Diamant', id: '5FE5', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ダイヤウェポン', id: '5FE5', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '钻石神兵', id: '5FE5', capture: false }),
      durationSeconds: 5,
      response: Responses.knockback(),
    },
    {
      id: 'Diamond Diamond Shrapnel',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00C5' }),
      condition: Conditions.targetIsYou(),
      durationSeconds: 7,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Diamond Shrapnel on YOU',
          de: 'Diamantschub auf DIR',
          fr: 'Salve adamantine sur VOUS',
          ja: '自分にダイヤバースト',
          cn: '钻石爆发点名',
          ko: '장판 대상자',
        },
      },
    },
    {
      id: 'Diamond Articulated Bits',
      type: 'Ability',
      netRegex: NetRegexes.ability({ source: 'The Diamond Weapon', id: '5FA9', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Diamant-Waffe', id: '5FA9', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Arme Diamant', id: '5FA9', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'ダイヤウェポン', id: '5FA9', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '钻石神兵', id: '5FA9', capture: false }),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid Bits',
          de: 'Weiche den Satelliten aus',
          fr: 'Évitez les bras',
          ja: 'ビームを避ける',
          cn: '躲避浮游炮激光',
          ko: '비트 피하기',
        },
      },
    },
    {
      id: 'Diamond Adamant Sphere',
      type: 'Ability',
      netRegex: NetRegexes.ability({ source: 'The Diamond Weapon', id: '6144', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Diamant-Waffe', id: '6144', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Arme Diamant', id: '6144', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'ダイヤウェポン', id: '6144', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '钻石神兵', id: '6144', capture: false }),
      durationSeconds: 8,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Get Towers',
          de: 'Türme nehmen',
          fr: 'Prenez les tours',
          ja: '塔を踏む',
          cn: '踩塔',
          ko: '장판 하나씩 들어가기',
        },
      },
    },
    {
      // Diamond Weapon starts using this Adamant Purge ~10 seconds before the head markers
      id: 'Diamond Homing Laser',
      type: 'Ability',
      netRegex: NetRegexes.ability({ source: 'The Diamond Weapon', id: '5F9C', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Diamant-Waffe', id: '5F9C', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Arme Diamant', id: '5F9C', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'ダイヤウェポン', id: '5F9C', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '钻石神兵', id: '5F9C', capture: false }),
      delaySeconds: 3,
      durationSeconds: 7,
      response: Responses.spread(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Articulated Bit': 'Satellitenarm',
        'The Diamond Weapon': 'Diamant-Waffe',
      },
      'replaceText': {
        '\\(Jump\\)': '(Sprung)',
        'Adamant Purge': 'Diamantpanzer',
        'Adamant Sphere': 'Diamantsphäre',
        'Aetherial Bullet': 'Ätherreigen',
        'Airship\'s Bane': 'Luftschiffschmerz',
        'Articulated Bits': 'Satellitenarme',
        'Auri Arts': 'Aurische Kunst',
        'Auri Cyclone': 'Aurischer Zyklon',
        'Auri Doomstead': 'Aurisches Verderben',
        '(?<!Photon )Burst': 'Explosion',
        'Claw Swipe': 'Klauensturm',
        'Code Chi-Xi-Stigma': 'Code 666',
        'Diamond Flash': 'Diamantblitz',
        'Diamond Rain': 'Dominanz der Diamanten',
        'Diamond Shrapnel': 'Diamantschub',
        'Homing Laser': 'Leitlaser',
        'Outrage': 'Diamantwut',
        'Photon Burst': 'Photonenknall',
        'Vertical Cleave': 'Vertikalspalter',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Articulated Bit': 'bras autonome',
        'The Diamond Weapon': 'Arme Diamant',
      },
      'replaceText': {
        'Adamant Purge': 'Armure adaptative',
        'Adamant Sphere': 'Sphère de diamant',
        'Aetherial Bullet': 'Rayon éthéré',
        'Airship\'s Bane': 'Fléau aérien',
        'Articulated Bits': 'Bras autonome',
        'Auri Arts': 'Art martial aoran',
        'Auri Cyclone': 'Tornade aoranne',
        'Auri Doomstead': 'Calamité aoranne',
        '(?<!Photon )Burst': 'Explosion',
        'Claw Swipe': 'Ruée de griffes',
        'Code Chi-Xi-Stigma': 'Code Chi-Xi-Stigma',
        'Diamond Flash': 'Éclair de diamant',
        'Diamond Rain': 'Bombardement adamantin',
        'Diamond Shrapnel': 'Salve adamantine',
        'Homing Laser': 'Laser auto-guidé',
        'Outrage': 'Indignation',
        'Photon Burst': 'Salve photonique',
        'Vertical Cleave': 'Fente verticale',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Articulated Bit': 'アームビット',
        'The Diamond Weapon': 'ダイヤウェポン',
      },
      'replaceText': {
        'Adamant Purge': '装甲展開',
        'Adamant Sphere': 'ダイヤスフィア',
        'Aetherial Bullet': 'エーテルバレット',
        'Airship\'s Bane': 'エアシップベイン',
        'Articulated Bits': 'アームビット',
        'Auri Arts': 'アウリアーツ',
        'Auri Cyclone': 'アウリサイクロン',
        'Auri Doomstead': 'アウリドゥーム',
        '(?<!Photon )Burst': '爆発',
        'Claw Swipe': 'クロースラッシュ',
        'Code Chi-Xi-Stigma': 'コード666',
        'Diamond Flash': 'ダイヤフラッシュ',
        'Diamond Rain': 'ダイヤレイン',
        'Diamond Shrapnel': 'ダイヤバースト',
        'Homing Laser': 'ホーミングレーザー',
        'Outrage': 'アウトレイジ',
        'Photon Burst': 'フォトンバースト',
        'Vertical Cleave': 'バーチカルクリーヴ',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Articulated Bit': '飞手浮游炮',
        'The Diamond Weapon': '钻石神兵',
      },
      'replaceText': {
        '\\(Jump\\)': '(跳)',
        '\\(Cleave\\)': '(冲锋)',
        'Adamant Purge': '装甲展开',
        'Adamant Sphere': '钻石球',
        'Aetherial Bullet': '以太炮',
        'Airship\'s Bane': '坠机',
        'Articulated Bits': '飞手浮游炮',
        'Auri Arts': '敖龙技巧',
        'Auri Cyclone': '敖龙旋风',
        'Auri Doomstead': '敖龙厄运',
        '(?<!Photon )Burst': '爆炸',
        'Claw Swipe': '利爪突进',
        'Code Chi-Xi-Stigma': '代号666',
        'Diamond Flash': '钻石闪光',
        'Diamond Rain': '钻石雨',
        'Diamond Shrapnel': '钻石爆发',
        'Homing Laser': '自控导弹',
        'Outrage': '震怒',
        'Photon Burst': '光子爆发',
        'Vertical Cleave': '纵劈',
      },
    },
  ],
};

export default triggerSet;
