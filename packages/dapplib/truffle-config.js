require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture story cruise nominee column harvest globe food gasp'; 
let testAccounts = [
"0x575cd77b6cc7cadac902a06dd2bb1f988718de9c26b38fe7af770b31a4a2a527",
"0x69a32b09b9ff46a554c22ed0f367d925e13b458f33bdb4d72ec624462a62de70",
"0xcd399b47e92b036b88bdaedb1762c2bfbec10ab24cb6029a482fbac72f15abdf",
"0xfbe93b1954ecb4d711aa76e9af5938bb7f0b8cb6b5f126f5ad7e4fc812de00b3",
"0xda3273a3d01a249814d94a8e39553e5c90d55d1ea4222e30fadf33dccd5d90b5",
"0xdd97d1fdf1a6c1e34f013605b7ddd09a438f896bd473b294631a16518d7ea5d4",
"0x8c113e0bdedc19e7a55e4e30ca30c9a796795ecdbd18cbb0166677296f535bc6",
"0xfedc3c31312bdde892a3ca6e2980fd2e9324749c172b8870c735ed1355cf7731",
"0x50ade8a25447398302d65fb323ab9da83fe7ebfa127c4f554493958be01ea2a1",
"0x3145a01726fcfb0b896f9adc6ead2448251a49a497344bdf688f286c80d190ae"
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

