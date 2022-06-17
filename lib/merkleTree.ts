// NOTE: the below is test merkle tree
const addressToBranch: Record<number, bigint[]> = {
  1355224352695827483975080807178260403365748530407: [
    647318414064271375314578170631427437323096081724n,
    20236520550141562661255685148699579042199650049962373804338367805368772612215n,
    2608676291331703898001792996664445279971068989996154140111888119417558192562n,
    8064694169649927590215032255591269515444616652941651860181393263213625903520n,
    19079917682614308351394416510813306279760323598985558044733385979748477046908n,
    3650146772169561872259446780097025630301655552553256027577828843427872786689n,
    12273971135695056175007266581935758526420058068980136391331614530964616318295n,
  ],
  647318414064271375314578170631427437323096081724: [
    1355224352695827483975080807178260403365748530407n,
    20236520550141562661255685148699579042199650049962373804338367805368772612215n,
    2608676291331703898001792996664445279971068989996154140111888119417558192562n,
    8064694169649927590215032255591269515444616652941651860181393263213625903520n,
    19079917682614308351394416510813306279760323598985558044733385979748477046908n,
    3650146772169561872259446780097025630301655552553256027577828843427872786689n,
    12273971135695056175007266581935758526420058068980136391331614530964616318295n,
  ]
};

const addressToBranchIndices: Record<number, number[]> = {
  1355224352695827483975080807178260403365748530407: [
    0,
    1,
    1,
    1,
    1,
    1,
    1
  ],
  647318414064271375314578170631427437323096081724: [
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ]
};

export const merkleTree = {
  root: 8590733204359026818193197732260974618290642998405184678622598786971437022069n,
  addressToBranch,
  addressToBranchIndices,
};

export function addressInTree(address: string) {
  return parseInt(address) in merkleTree.addressToBranch;
}

