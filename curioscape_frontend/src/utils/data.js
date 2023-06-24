export const categories = [
    {
      name: 'cars',
      image: 'https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg',
    },
    {
      name: 'fitness',
      image: 'https://i.pinimg.com/236x/25/14/29/251429345940a47490cc3d47dfe0a8eb.jpg',
    },
    {
      name: 'wallpaper',
      image: 'https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg',
    },
    {
      name: 'websites',
      image: 'https://i.pinimg.com/750x/66/b1/29/66b1296d36598122e6a4c5452b5a7149.jpg',
    },
    {
      name: 'photo',
      image: 'https://i.pinimg.com/236x/72/8c/b4/728cb43f48ca762a75da645c121e5c57.jpg',
    },
    {
      name: 'food',
      image: 'https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg',
    },
    {
      name: 'nature',
      image: 'https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg',
    },
    {
      name: 'art',
      image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg',
    }, {
      name: 'travel',
      image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
    },
    {
      name: 'quotes',
      image: 'https://i.pinimg.com/236x/46/7c/17/467c17277badb00b638f8ec4da89a358.jpg',
    }, {
      name: 'cats',
      image: 'https://i.pinimg.com/236x/6c/3c/52/6c3c529e8dadc7cffc4fddedd4caabe1.jpg',
    }, {
      name: 'dogs',
      image: 'https://i.pinimg.com/236x/1b/c8/30/1bc83077e363db1a394bf6a64b071e9f.jpg',
    },
    {
      name: 'others',
      image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
    },
];

// export const categories = [
//     {
//         name : 'Before the coffee gets old',
//         image: 'https://i.pinimg.com/564x/30/52/ac/3052ac669b8a093b11f0f4d568599c85.jpg',
//     },
//     {
//         name : 'Ikigai',
//         image: 'https://i.pinimg.com/564x/a2/1e/45/a21e454898b68cfdd5fd2d300187c6e2.jpg',
//     },
//     {
//         name : 'The Subtle Art of Not Giving a F*ck',
//         image: 'https://i.pinimg.com/564x/5b/23/15/5b23155a6d414a645faf4986ada07b3f.jpg',
//     },
//     {
//         name : 'Quiet',
//         image: 'https://i.pinimg.com/564x/64/b3/d6/64b3d673ce1babb34b411048588c2dad.jpg',
//     },
//     {
//         name : 'The Kite Runner',
//         image: 'https://i.pinimg.com/564x/4b/71/c2/4b71c245fc9f7ff020d848d53c857060.jpg',
//     },
//     {
//         name : 'Master Your Emotions',
//         image: 'https://i.pinimg.com/564x/5b/b2/4e/5bb24ed3717f51b6ea6f89fc528501f3.jpg',
//     },
//     {
//         name : 'The Power of Habits',
//         image: 'https://i.pinimg.com/564x/58/ed/62/58ed6250e9f2e090499923f034bb2859.jpg',
//     },
//     {
//         name : 'Atomic Habits',
//         image: 'https://i.pinimg.com/564x/c3/a1/87/c3a187af3fba68e492dfed07001fd81d.jpg',
//     },
//     {
//         name : 'Zero to One',
//         image: 'https://i.pinimg.com/564x/4e/63/1f/4e631ff10006b9f265f074c2a7878412.jpg',
//     },
//     {
//         name : '21 Lessons for the 21st Century',
//         image: 'https://i.pinimg.com/564x/11/c8/7e/11c87e759e65eed5cb888d13de678f25.jpg',
//     },
//     {
//         name : 'The Alchemist',
//         image: 'https://i.pinimg.com/564x/b9/03/f7/b903f7175add67ba0f7d216e12cf2057.jpg',
//     },
//     {
//         name : 'The light we cannot see',
//         image: 'https://i.pinimg.com/564x/26/57/2a/26572ac6538a5eaa769f91bd5f1062a7.jpg',
//     },

// ]
export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
}