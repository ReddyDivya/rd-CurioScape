//createClient function is used to create a client instance that can interact with the Sanity.io API
import { createClient } from '@sanity/client';

//imageUrlBuilder function is used to create an image URL builder instance, which helps in constructing URLs for images stored in your Sanity.io project
import imageUrlBuilder from '@sanity/image-url';

/*
- creates a client instance using the createClient function. 
- The createClient function takes an object with various configuration options as an argument.
*/
export const client = createClient({

  //options
  //process.env => environment variables
  //projectId : process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId : 'x8qy9fhj',
  dataset:'production',
  apiVersion:'2023-06-08',
  useCdn:true,
  token:'skrjNorV7RfBxgvfXg8pJ6ERkDllg1CY1bcZIVclN5MiXAM12n0t2ujRql0Ucjc5gNISay0v9gKVGWvU34REczhqrcs3jR0LKCOV42h20KWS4aZb1B2sGWOL704u40eiHQAJNOLYlnO9jC1l3SasoYKMGdW6tflMpGNFENekAEzYK57uyWdP',  
})

//creates an image URL builder instance by invoking the imageUrlBuilder function and passing in the client instance created in the previous step.
const builder = imageUrlBuilder(client);

//named export 'urlFor', which is a function that takes a source argument representing the image asset or reference in your Sanity.io project
export const urlFor = (source) => builder.image(source);

/*
Note:
When called, the urlFor function utilizes the builder instance to generate the URL for the specified image source. 
The generated URL can be used to display or manipulate the image in your React application.
*/
