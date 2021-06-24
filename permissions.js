const permissions = {
  type: "service_account",
  project_id: "clone-f3dc3",
  private_key_id: "f811a6ca0f20cbbdd0b9187a96010936ce1f20bf",
  private_key: process.env.PRIVATE_KEY,
  client_email: "firebase-adminsdk-5o7a3@clone-f3dc3.iam.gserviceaccount.com",
  client_id: "105057801786040835725",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5o7a3%40clone-f3dc3.iam.gserviceaccount.com",
};

export default permissions;
