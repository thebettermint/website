import Add from './add.svg';
import AngleSmallRight from './angle-small-right.svg';
import Apps from './apps.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import Bank from './bank.svg';
import Bell from './bell.svg';
import BookAlt from './book-alt.svg';
import Bullseye from './bullseye.svg';
import Check from './check.svg';
import Comment from './comment.svg';
import CreditCard from './credit-card.svg';
import Cross from './cross.svg';
import DiceThree from './dice-three.svg';
import Discord from './discord.svg';
import Envelope from './envelope.svg';
import EnvelopeAdd from './envelope_add.svg';
import EnvelopeOpen from './envelope_open.svg';
import Eye from './eye.svg';
import Facebook from './facebook.svg';
import Github from './github.svg';
import Globe from './globe.svg';
import Home from './home.svg';
import InboxIn from './inbox-in.svg';
import InboxOut from './inbox-out.svg';
import Interrogation from './interrogation.svg';
import Key from './key.svg';
import LifeRing from './life-ring.svg';
import Link from './link.svg';
import List from './list.svg';
import Lock from './lock.svg';
import Map from './map.svg';
import MenuBurger from './menu-burger.svg';
import MenuDotsVertical from './menu-dots-vertical.svg';
import MenuDots from './menu-dots.svg';
import NodeJs from './node-js.svg';
import PaperPlane from './paper-plane.svg';
import Pencil from './pencil.svg';
import Physics from './physics.svg';
import Placeholder from './placeholder.svg';
import Plus from './plus.svg';
import QrIcon from './qr-icon.svg';
import Receipt from './receipt.svg';
import Search from './search.svg';
import SettingsIcon from './settings-icon.svg';
import SettingsSliders from './settings-sliders.svg';
import Share from './share.svg';
import Shield from './shield.svg';
import SignalAlt from './signal-alt-2.svg';
import Snapchat from './snapchat.svg';
import Star from './star.svg';
import Sun from './sun.svg';
import Target from './target.svg';
import Telegram from './telegram.svg';
import TimeOclock from './time-oclock.svg';
import Transform from './transform.svg';
import Trash from './trash.svg';
import Twitter from './twitter.svg';
import User from './user.svg';
import Wallet from './wallet.svg';
import World from './world.svg';

interface IIcon {
[index: string]:React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
title?: string | undefined}>
}

const map:IIcon =  {
"add": Add, 
"angle-small-right": AngleSmallRight, 
"apps": Apps, 
"arrow-left": ArrowLeft, 
"arrow-right": ArrowRight, 
"bank": Bank, 
"bell": Bell, 
"book-alt": BookAlt, 
"bullseye": Bullseye, 
"check": Check, 
"comment": Comment, 
"credit-card": CreditCard, 
"cross": Cross, 
"dice-three": DiceThree, 
"discord": Discord, 
"envelope": Envelope, 
"envelope_add": EnvelopeAdd, 
"envelope_open": EnvelopeOpen, 
"eye": Eye, 
"facebook": Facebook, 
"github": Github, 
"globe": Globe, 
"home": Home, 
"inbox-in": InboxIn, 
"inbox-out": InboxOut, 
"interrogation": Interrogation, 
"key": Key, 
"life-ring": LifeRing, 
"link": Link, 
"list": List, 
"lock": Lock, 
"map": Map, 
"menu-burger": MenuBurger, 
"menu-dots-vertical": MenuDotsVertical, 
"menu-dots": MenuDots, 
"node-js": NodeJs, 
"paper-plane": PaperPlane, 
"pencil": Pencil, 
"physics": Physics, 
"placeholder": Placeholder, 
"plus": Plus, 
"qr-icon": QrIcon, 
"receipt": Receipt, 
"search": Search, 
"settings-icon": SettingsIcon, 
"settings-sliders": SettingsSliders, 
"share": Share, 
"shield": Shield, 
"signal-alt-2": SignalAlt, 
"snapchat": Snapchat, 
"star": Star, 
"sun": Sun, 
"target": Target, 
"telegram": Telegram, 
"time-oclock": TimeOclock, 
"transform": Transform, 
"trash": Trash, 
"twitter": Twitter, 
"user": User, 
"wallet": Wallet, 
"world": World, 
};
export default map