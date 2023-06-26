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