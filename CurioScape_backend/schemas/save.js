export default{
    name:'save',
    title:'Save',
    type:'document',
    fields:[
        {
            name:'postedBy',
            title:'PostedBy',
            type:'postedBy',//custom data type called 'postedBy'
        },
        {
            name:'userId',
            title:'UserId',
            type:'string',
        },

    ]
}