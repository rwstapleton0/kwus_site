
// this might be better as 2 lists one of quests and one of chapters and codes in questlist link to chapterlist
const questList = [
    { 
        name: "Wallet of Fortune: Sets Sail on the Sui.", 
        imgName: 'helmet', 
        questLen: 5,
        chapter: [
            {
                title: 'Chapter 1: Tools of the trade.',
                markup: 'An important feature of web2 was the ability to have accounts links to our person. In most cases these accounts might be tied to an email or our socials.\n\nThese accounts where great an managing our presance online, but they lacked one thing and that is a way to hold value across appilactions. '
            },
            {
                title: 'Chapter 2: Tools of the trade.',
                markup: '',
                completeCode: `module my_first_package::my_module {\n  use sui::object::{Self, UID};\n  use sui::transfer;\n  use sui::tx_context::{Self, TxContext};\n\n  struct Sword has key, store {\n    id: UID,\n    magic: u64,\n  }\n\n  fun init(ctx: &mut TxContext) {\n    let sword = Sword {\n      id: object::new(ctx),\n      swords_created: 0,\n    };\n    transfer::transfer(sword, tx_context::sender(ctx));\n  }\n\n  public fun magic(self: &Sword): u64 {\n    self.magic\n  }\n}\n`
            },
            {
                title: 'Chapter 3: Tools of the trade.',
                markup: ''
            },
            {
                title: 'Chapter 4: Tools of the trade.',
                markup: ''
            },
            {
                title: 'Chapter 5: Tools of the trade.',
                markup: ''
            }
        ]
    },
    { 
        name: 'Ye Brave & Bold!', 
        imgName: 'basic_sword', 
        questLen: 5,
        chapter: [
            {
                title: 'Chapter 1: Tools of the trade.',
                markup: ''
            }
        ]
    },
    { 
        name: 'number3', 
        imgName: 'knight', 
        questLen: 5,
        chapter: [
            {
                title: 'Chapter 1: Tools of the trade.',
                markup: ''
            }
        ]
    }
]

export default questList;