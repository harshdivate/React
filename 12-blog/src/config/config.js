const config = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDB_ID: String(import.meta.env.VITE_APPWRITE_DATABAESE_ID),
  appWriteCollection_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucket_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
