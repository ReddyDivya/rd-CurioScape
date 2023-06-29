export const categories = [
    {
      name: 'Freedom Fighters',
      image: 'https://i.pinimg.com/564x/fc/13/e5/fc13e51e67084921b255e82df206b5e5.jpg',
    },  
    {
      name: 'Tourism',
      image: 'https://i.pinimg.com/564x/ec/b7/2b/ecb72bd7bf5985ac769405f5bf081d7b.jpg',
    },
    {
      name: 'Dance',
      image: 'https://i.pinimg.com/236x/ef/98/10/ef98100fb8bccef8e41a7af65627e4e2.jpg',
    },
    {
      name: 'Monuments',
      image: 'https://i.pinimg.com/564x/c3/9a/e8/c39ae87fbb0a2b1c1b291469bb167042.jpg',
    },
    {
      name: 'Temples',
      image: 'https://i.pinimg.com/236x/04/45/39/044539199bc3773a552334150791d76d.jpg',
    },
    {
      name: 'Yoga',
      image: 'https://i.pinimg.com/564x/aa/7d/d0/aa7dd00b758e0b7ad3ee6dfad0c760c1.jpg',
    },
    {
      name: 'Science and Technology',
      image: 'https://i.pinimg.com/564x/83/c9/2d/83c92d8f2cc3fcdc7a7bb681ace37edc.jpg',
    },
    {
      name: 'Festivals',
      image: 'https://i.pinimg.com/736x/1d/7e/05/1d7e05fabea82487d07f98f435de1d21.jpg',
    },
    {
      name: 'Economy',
      image: 'https://i.pinimg.com/564x/96/6f/45/966f452cf497949fc488efea4201c508.jpg',
    },
    {
      name: 'Cuisine',
      image: 'https://i.pinimg.com/564x/10/64/ae/1064ae327eb43857d07816c0760f3f91.jpg',
    },
    {
      name: 'others',
      image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
    },
];

/*
GROQ (Graph-Relational Object Queries)
- This query starts with the * symbol, indicating that we want to retrieve any document from the dataset.
- [_type == "user" && _id == '${userId}'] is the filter condition for selecting the documents we are interested in.
- _type == "user" checks if the document's _type field is equal to "user", selecting only user documents.
- _id == '${userId}' checks if the document's _id field is equal to the value of the userId variable.
*/
export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
}

/*
GROQ (Graph-Relational Object Queries)
- query written in the GROQ (Graph-Relational Object Queries) language.
- GROQ is a query language used by the Sanity.io CMS (Content Management System) for querying structured data.
- The * symbol represents any document in the dataset.
- [_type == "pin"] is a filter condition that selects only documents whose _type field is equal to "pin".
----------------------------
| order(_createdAt desc)
- The pipe symbol (|) is used to chain additional operations to the query.
- order(_createdAt desc) is an ordering operation that sorts the selected documents based on the _createdAt field in descending order. 
- This means the most recent pins will appear first.
- save[]{ _key, postedBy -> { _id, userName, image } } retrieves the save field, which likely represents an array of references to other documents.
    -> Inside each referenced document, we retrieve the _key field.
    -> Additionally, we retrieve the postedBy field from the referenced document, which likely represents the user who saved the pin.
    -> Inside the postedBy referenced document, we retrieve the _id, userName, and image fields.

*/
export const feedQuery = `*[_type == "pin"] | order(_createdAt desc)
{
  image{
    asset -> {
      url
    }
  },
  _id,
  destination,
  postedBy -> {
    _id,
    userName,
    image
  },
  save[]{
    _key,
    postedBy -> {
      _id,
      userName,
      image
    },
  },
}`;

/*
GROQ (Graph-Relational Object Queries)
- This query starts with the * symbol, indicating that we want to retrieve any document from the dataset.
- [_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*'] is the filter condition for selecting the documents.
- title match '${searchTerm}*'" checks if the title field of the document matches the value of the searchTerm variable followed by any characters (* is a wildcard).
- category match '${searchTerm}*'" checks if the category field of the document matches the value of the searchTerm variable followed by any characters.
- about match '${searchTerm}*'" checks if the about field of the document matches the value of the searchTerm variable followed by any characters.
- save[]{ _key, postedBy -> { _id, userName, image } } retrieves the save field, which likely represents an array of references to other documents.
    -> Inside each referenced document, we retrieve the _key field.
    -> Additionally, we retrieve the postedBy field from the referenced document, which likely represents the user who saved the pin.
    -> Inside the postedBy referenced document, we retrieve the _id, userName, and image fields.
*/
export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']
  {
    image{
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`

  return query;
};//searchQuery

//pin details query
export const pinDetailQuery = (pinId) => {
  const query = `*[_type == 'pin' && _id == '${pinId}']
  {
    image {
      asset -> {
        url
      }
    },
    _id,
    title,
    about,
    category,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[]{
      postedBy -> {
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      key,
      postedBy -> {
        _id,
        userName,
        image
      },
    }
  }`

  return query;
}; //pinDetailQuery

export const pinDetailMorePinQuery  = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;

  return query;
};//pinDetailMorePinQuery

export const userCreatedPinsQuery  = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
}; //userCreatedPinsQuery 

//save pin query
export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};//userSavedPinsQuery