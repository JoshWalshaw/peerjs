import { util } from "./util";
import { Peer } from "./peer";

export const peerjs = {
  Peer,
  util
};

export default Peer;

// Removed as React Native doesn't have a window object
// (<any>window).peerjs = peerjs;
// /** @deprecated Should use peerjs namespace */
// (<any>window).Peer = Peer;
