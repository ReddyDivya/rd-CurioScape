export default{
    name: 'comment',
    title: 'Comment',
    type:'document',
    fields: [
        {
            name:'postedBy',
            title:'PostedBy',
            type:'postedBy',//custom data type called 'postedBy'
        },
        {
            name:'comment',
            title:'Comment',
            type:'string',
        },

    ]
}