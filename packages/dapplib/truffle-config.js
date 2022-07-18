require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remain solid hover arctic tail tiger'; 
let testAccounts = [
"0xc5c84db821e4a6339434bb9b2ea28bb899adbf51769bcff3d5093f1050fc5bbc",
"0x1ee7bdcefaf380f66350265cb3f03d3f4e113b8f1ad30515891223786798d53e",
"0x10f4768de2555459ea1454cfd83802e93acc52eb4e58b3092d98d2e21d4d9bb3",
"0x28f019bbf574fd5c0af40b60e4bd952dc11a55deabcfc888f81c82033fcae402",
"0x7acaf7eec20209423a11bf91935d0e475bc1fb8d3a041d463c72ee8dc21688be",
"0x23727f9a271bbf8a13e3d66d1c95c1142d99c92fa09c5f82583a03ea38e1e105",
"0x943fd69954765b0ed4fa7e167244de0bad0db524c6d19f5f6ddefb1f919c0777",
"0x15da9e6f71a5ddc036424dede57b0122c840d2ce2fe27e24dfe04f7d9ced8593",
"0xab7d5933939a645eb33cc4c346b6c3e79a314a3df9cd3499c44c7130e107e23f",
"0xea16f260f79fa8eb15b67ab6cd711df4fb1e204565858c2676868ada21484d11"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

