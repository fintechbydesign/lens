import AWS from 'aws-sdk';

const apiVersion = '2006-03-01';
const region = 'eu-west-1';
const IdentityPoolId = 'eu-west-1:38d36f69-6926-4e31-9d57-b56861af58b6';
const Bucket = 'mercury-lens-logs';
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

AWS.config.update({
  region,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId
  })
});

const S3 = new AWS.S3({
  apiVersion,
  params: { Bucket }
});

const createFileName = () => {
  const now = new Date();
  const month = months[now.getMonth()];
  return `${month}/${now.getDate()}/${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.json`;
}

const upload = (data) => {
  const ACL = 'public-read';
  const Key = createFileName();
  const Body = JSON.stringify(data);
  const params = { ACL, Key, Body };
  return S3.upload(params).promise();
}

export {
  upload
};

