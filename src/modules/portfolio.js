import { ref } from 'vue';
import maliceImage from '@/assets/img/clouds/malice.webp';
import arkivarenImage from '@/assets/img/clouds/arkivaren.webp';

export const cards = ref([
    {  
        image: maliceImage,
        title: 'Malice',
        about: 'A website for a fictional character',
        button: 'See character',
        modal: {
            title: 'Malice',
            description: 'For my first semester exam, I got to work on my biggest project until now. It was a team project, which means that each one of us had it\'s own area of expertise. I, fortunately, got to do a little bit of everything by helping with the design of the logo, printables and report and working together with my colleague on the UX research. But the main area I worked in was definitely the coding of the website. Below, I invite you to experience the website.',
        },
    },
    {  
        image: arkivarenImage,
        title: 'Arkivaren',
        about: 'A website for a fictional character',
        button: 'See character',
        modal: {
            title: 'Arkivaren',
            description: 'For my first semester exam, I got to work on my biggest project until now. It was a team project, which means that each one of us had it\'s own area of expertise. I, fortunately, got to do a little bit of everything by helping with the design of the logo, printables and report and working together with my colleague on the UX research. But the main area I worked in was definitely the coding of the website. Below, I invite you to experience the website.',
        },
    },
]);
