export default{
    name:'user',
    title:'User',
    type:'document',
    fields:[
        {
            name: 'userName',
            title: 'UserName',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,//crop option
            },
        },
    ]
}