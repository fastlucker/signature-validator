"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMessage = verifyMessage;
var ethers_1 = require("ethers");
var VALIDATOR_1271_ABI = [
    "function isValidSignature(bytes32 hash, bytes signature) view returns (bytes4)",
];
// Outputted by ./node_modules/solc/solc.js contracts/DeploylessUniversalSigValidator.sol --bin --optimize --optimize-runs=1
var universalValidator = '0x608060405234801561000f575f5ffd5b506040516106fb3803806106fb83398101604081905261002e91610559565b5f61003a848484610045565b9050805f526001601ff35b5f5f846001600160a01b0316803b806020016040519081016040528181525f908060200190933c90507f649264926492649264926492649264926492649264926492649264926492649261009884610470565b036101f9575f606080858060200190518101906100b591906105ae565b865192955090935091505f03610174575f836001600160a01b0316836040516100de919061060f565b5f604051808303815f865af19150503d805f8114610117576040519150601f19603f3d011682016040523d82523d5f602084013e61011c565b606091505b50509050806101725760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e906101a4908b908690600401610625565b602060405180830381865afa1580156101bf573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e39190610661565b6001600160e01b03191614945050505050610469565b8051156102e3575f5f866001600160a01b0316631626ba7e60e01b8787604051602401610227929190610625565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610265919061060f565b5f60405180830381855afa9150503d805f811461029d576040519150601f19603f3d011682016040523d82523d5f602084013e6102a2565b606091505b50915091508180156102b5575080516020145b156102e057630b135d3f60e11b6102cb82610688565b6001600160e01b031916149350505050610469565b50505b82516041146103475760405162461bcd60e51b815260206004820152603a60248201525f5160206106db5f395f51905f5260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610169565b61034f610487565b50602083015160408085015185518693925f918591908110610373576103736106c6565b016020015160f81c9050601b811480159061039257508060ff16601c14155b156103f25760405162461bcd60e51b815260206004820152603b60248201525f5160206106db5f395f51905f5260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610169565b604080515f8152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa15801561044d573d5f5f3e3d5ffd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b5f60208251101561047f575f5ffd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146104b9575f5ffd5b50565b634e487b7160e01b5f52604160045260245ffd5b5f82601f8301126104df575f5ffd5b81516001600160401b038111156104f8576104f86104bc565b604051601f8201601f19908116603f011681016001600160401b0381118282101715610526576105266104bc565b60405281815283820160200185101561053d575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f5f6060848603121561056b575f5ffd5b8351610576816104a5565b6020850151604086015191945092506001600160401b03811115610598575f5ffd5b6105a4868287016104d0565b9150509250925092565b5f5f5f606084860312156105c0575f5ffd5b83516105cb816104a5565b60208501519093506001600160401b038111156105e6575f5ffd5b6105f2868287016104d0565b604086015190935090506001600160401b03811115610598575f5ffd5b5f82518060208501845e5f920191825250919050565b828152604060208201525f82518060408401528060208501606085015e5f606082850101526060601f19601f8301168401019150509392505050565b5f60208284031215610671575f5ffd5b81516001600160e01b031981168114610469575f5ffd5b805160208201516001600160e01b03198116919060048210156106bf576001600160e01b0319600483900360031b81901b82161692505b5050919050565b634e487b7160e01b5f52603260045260245ffdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572';
/**
 * NOTE: you only need to pass one of: typedData, finalDigest, message
 */
function verifyMessage(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var coder, callResult;
        var provider = _b.provider, signer = _b.signer, signature = _b.signature, message = _b.message, typedData = _b.typedData, finalDigest = _b.finalDigest;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (message) {
                        finalDigest = ethers_1.utils.hashMessage(message);
                    }
                    else if (typedData) {
                        finalDigest = ethers_1.utils._TypedDataEncoder.hash(typedData.domain, typedData.types, typedData.message);
                    }
                    else if (!finalDigest) {
                        throw Error("Missing one of the properties: message, unPrefixedMessage, typedData or finalDigest");
                    }
                    coder = new ethers_1.utils.AbiCoder();
                    return [4 /*yield*/, provider.call({
                            data: ethers_1.utils.hexConcat([
                                universalValidator,
                                coder.encode(['address', 'bytes32', 'bytes'], [signer, finalDigest, signature])
                            ]),
                        }).then(function (result) { return (typeof result !== 'string') ? result.data : result; })];
                case 1:
                    callResult = _c.sent();
                    if (callResult === '0x01')
                        return [2 /*return*/, true];
                    if (callResult === '0x00')
                        return [2 /*return*/, false];
                    if (callResult.startsWith('0x08c379a0'))
                        throw new Error(coder.decode(['string'], '0x' + callResult.slice(10))[0]);
                    throw new Error('Unexpected result from UniversalValidator: ' + callResult);
            }
        });
    });
}
