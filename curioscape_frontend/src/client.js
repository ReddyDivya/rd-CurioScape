//createClient function is used to create a client instance that can interact with the Sanity.io API
import { createClient } from "@sanity/client";

//imageUrlBuilder function is used to create an image URL builder instance, which helps in constructing URLs for images stored in your Sanity.io project
import imageUrlBuilder from "@sanity/image-url";

/*
- creates a client instance using the createClient function. 
- The createClient function takes an object with various configuration options as an argument.
*/
export const client = createClient({
  projectId : process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset:'production',
  apiVersion:'2023-06-08',
  useCdn:true,
  token:process.env.REACT_APP_SANITY_TOKEN,  
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);