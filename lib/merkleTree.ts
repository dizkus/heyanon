// NOTE: the below is test merkle tree
const addressToBranch: Record<number, bigint[]> = {
  1355224352695827483975080807178260403365748530407: [
    647318414064271375314578170631427437323096081724n,
    14744269619966411208579211824598458697587494354926760081771325075741142829156n,
    7423237065226347324353380772367382631490014989348495481811164164159255474657n,
    11286972368698509976183087595462810875513684078608517520839298933882497716792n,
    3607627140608796879659380071776844901612302623152076817094415224584923813162n,
    19712377064642672829441595136074946683621277828620209496774504837737984048981n,
    20775607673010627194014556968476266066927294572720319469184847051418138353016n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
  ],
  647318414064271375314578170631427437323096081724: [
    1355224352695827483975080807178260403365748530407n,
    14744269619966411208579211824598458697587494354926760081771325075741142829156n,
    7423237065226347324353380772367382631490014989348495481811164164159255474657n,
    11286972368698509976183087595462810875513684078608517520839298933882497716792n,
    3607627140608796879659380071776844901612302623152076817094415224584923813162n,
    19712377064642672829441595136074946683621277828620209496774504837737984048981n,
    20775607673010627194014556968476266066927294572720319469184847051418138353016n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
  ],
};

const addressToBranchIndices: Record<number, number[]> = {
  1355224352695827483975080807178260403365748530407: [
    0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  647318414064271375314578170631427437323096081724: [
    1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
};

export const merkleTree = {
  root: 5639315299277972720511224035701808171626897690023789965009789544822172928425n,
  addressToBranch,
  addressToBranchIndices,
};

export function addressInTree(address: string) {
  return parseInt(address) in merkleTree.addressToBranch;
}
