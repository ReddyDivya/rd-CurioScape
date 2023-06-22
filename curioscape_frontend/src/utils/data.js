export const categories = [
    {
        name : 'Before the coffee gets old',
        image: 'https://i.pinimg.com/564x/30/52/ac/3052ac669b8a093b11f0f4d568599c85.jpg',
    },
    {
        name : 'Ikigai',
        image: 'https://i.pinimg.com/564x/a2/1e/45/a21e454898b68cfdd5fd2d300187c6e2.jpg',
    },
    {
        name : 'The Subtle Art of Not Giving a F*ck',
        image: 'https://i.pinimg.com/564x/5b/23/15/5b23155a6d414a645faf4986ada07b3f.jpg',
    },
    {
        name : 'Quiet',
        image: 'https://i.pinimg.com/564x/64/b3/d6/64b3d673ce1babb34b411048588c2dad.jpg',
    },
    {
        name : 'The Kite Runner',
        image: 'https://i.pinimg.com/564x/4b/71/c2/4b71c245fc9f7ff020d848d53c857060.jpg',
    },
    {
        name : 'Master Your Emotions',
        image: 'https://i.pinimg.com/564x/5b/b2/4e/5bb24ed3717f51b6ea6f89fc528501f3.jpg',
    },
    {
        name : 'The Power of Habits',
        image: 'https://i.pinimg.com/564x/58/ed/62/58ed6250e9f2e090499923f034bb2859.jpg',
    },
    {
        name : 'Atomic Habits',
        image: 'https://i.pinimg.com/564x/c3/a1/87/c3a187af3fba68e492dfed07001fd81d.jpg',
    },
    {
        name : 'Zero to One',
        image: 'https://i.pinimg.com/564x/4e/63/1f/4e631ff10006b9f265f074c2a7878412.jpg',
    },
    {
        name : '21 Lessons for the 21st Century',
        image: 'https://i.pinimg.com/564x/11/c8/7e/11c87e759e65eed5cb888d13de678f25.jpg',
    },
    {
        name : 'The Alchemist',
        image: 'https://i.pinimg.com/564x/b9/03/f7/b903f7175add67ba0f7d216e12cf2057.jpg',
    },
    {
        name : 'The light we cannot see',
        image: 'https://i.pinimg.com/564x/26/57/2a/26572ac6538a5eaa769f91bd5f1062a7.jpg',
    },

]
export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
}