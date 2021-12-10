/**
 * @generated SignedSource<<d5d7e9ed6204487294fc1619b8020d69>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PingQuery$variables = {};
export type PingQuery$data = {
  readonly ping: boolean | null;
};
export type PingQuery = {
  variables: PingQuery$variables;
  response: PingQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "ping",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PingQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PingQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bdda44fc499cdb5713f81817a4765ed9",
    "id": null,
    "metadata": {},
    "name": "PingQuery",
    "operationKind": "query",
    "text": "query PingQuery {\n  ping\n}\n"
  }
};
})();

(node as any).hash = "b4e65a63e39b01887ae44115524e176d";

export default node;
