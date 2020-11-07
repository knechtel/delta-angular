const proxy = [
{
context: ‘/’,
target: ‘http://ec2-18-231-107-181.sa-east-1.compute.amazonaws.com:8080’,
pathRewrite: { ‘^/’: ” }
}
];
module.exports = proxy;
