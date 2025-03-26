import {createClient, type ClientConfig} from "@sanity/client"

const config: ClientConfig = { 
    projectId: "bumneows",
    dataset: "production",
    useCdn: true,
    apiVersion: '2025-03-26'
}

const sanityClient = createClient(config);
export default sanityClient; 
