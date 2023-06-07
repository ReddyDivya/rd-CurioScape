//'postedBy' takes the reference from 'user'
export default{
    name:'postedBy',
    title:'PostedBy',
    type:'reference',
    /*
    to: An array containing an object 
    type:'user' => This property specifies the type of reference to another object, 
    */
    to:[{type:'user'}],
};