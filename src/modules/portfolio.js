import { ref } from 'vue';
import malice from '@/assets/img/clouds/malice.webp';
import gygaz from '@/assets/img/clouds/gygaz.webp';
import arkivaren from '@/assets/img/clouds/arkivaren.webp';
import gnist from '@/assets/img/clouds/gnist.webp';
import mermaid from '@/assets/img/clouds/mermaid.webp';

export const cards = ref([
    {  
        image: malice,
        title: 'Malice',
        about: '',
        button: 'See character',
        modal: {
            title: 'Malice',
            description: 'Emerging from a dark portal in Esbjerg, Malice is a being of pure malevolence, driven by a burning desire to annihilate everything in its path. With sinister powers fueled by hatred and chaos, this malevolent force threatens to engulf the world in darkness, leaving nothing but destruction in its wake. Can anyone stand against such evil?',
        },
    },
    {  
        image: arkivaren,
        title: 'Arkivaren',
        about: '',
        button: 'See character',
        modal: {
            title: 'Arkivaren',
            description: "Keeper of ancient knowledge and master of the archives, Arkivaren is one of the last guardians of humanity's forgotten history. With a mind sharpened by centuries of wisdom, he tirelessly searches for heroes and hidden solutions to combat the rising threat of Malice. As one of the few who still remembers the past battles against darkness, Arkivaren carries the heavy burden of ensuring the world does not fall into oblivion once more.",
        },
    },

    {  
        image: gygaz,
        title: 'Gygaz',
        about: '',
        button: 'See character',
        modal: {
            title: 'Gygaz',
            description: "A young but gifted wizard apprentice, Gygaz serves as the Arkivaren of the magic world, entrusted with the knowledge of arcane secrets. Despite his youth, Gygaz possesses a fierce determination to combat the looming threat of Malice. With a heart full of courage and a mind eager to learn, he stands ready to unlock ancient spells and summon hidden powers to protect his world from the encroaching darkness. Will his growing mastery of magic be enough to turn the tide?",
        },
    },
    {  
        image: gnist,
        title: 'Gnist',
        about: '',
        button: 'See character',
        modal: {
            title: 'Gnist',
            description: "Gnist, the legendary green dragon, is the hero destined to stand against Malice’s dark forces. In his human form, Gnist retains his draconic essence, with vibrant green skin, dark green hair, and sharp fangs that hint at the powerful beast within. Whether soaring through the skies as a dragon or walking among mortals with his unique, otherworldly appearance, Gnist embodies a blend of raw strength and ancient wisdom. As both dragon and man, he stands as a fierce and versatile protector in the battle against the rising darkness.",
        },
    },

    {  
        image: mermaid,
        title: 'Mermaid Queen',
        about: '',
        button: 'See character',
        modal: {
            title: 'Mermaid Queen',
            description: "Ruler of the vast and mysterious seas, the Siren Queen commands the ocean's power with grace and authority. As Malice threatens to consume the world, she rises from the depths, leading her aquatic forces into battle. With the song of the ocean on her lips and the strength of the tides at her command, the Siren Queen is a formidable ally in the fight against darkness. Her resolve is as deep as the sea itself—unwavering and relentless.",
        },
    }
]);
