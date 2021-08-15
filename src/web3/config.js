import erc20 from "../abis/erc20.json";
import tokenprovider from "../abis/tokenprovider.json";
import managerFactory from "../abis/manager-factory.json";
import uniSwap from "../abis/IUniswapV2Router02.json";
import uniswapFactory from "../abis/uniswap-factory.json";

export const addresses = {
  MANAGER_FACTORY: "0x0dc9bfB05997E89f06d6C680764f8c46A4EbA0dc",
}

export const abis = {
  ERC20: erc20,
  MANAGER_ABI: tokenprovider,
  MANAGER_FACTORY_ABI: managerFactory,
  UNI_SWAP_ABI: uniSwap,
  UNISWAP_FACTORY_ABI: uniswapFactory
}
