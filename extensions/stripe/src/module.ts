import { createExtension } from "@cognigy/extension-tools";

import { stripeConnection } from "./connections/stripeConnection";
import { createCardTokenNode, onSuccesCreateCardToken, onErrorCreateCardToken } from "./nodes/createCardToken";
import { createOrderNode, onErrorCreateOrder, onSuccesCreateOrder } from "./nodes/createOrder";
import { createSKUNode, onSuccesCreateSKU, onErrorCreateSKU } from "./nodes/createSKU";
import { createCustomerNode } from "./nodes/customers/createCustomer";
import { getCustomerNode, onFoundCustomer, onNotFoundCustomer } from "./nodes/customers/getCustomer";
import { onErrorPayOrder, onSuccessPayOrder, payOrderNode } from "./nodes/payOrder";
import { getProductsNode } from "./nodes/products/getProducts";


export default createExtension({
	nodes: [
		createCardTokenNode,
		onSuccesCreateCardToken,
		onErrorCreateCardToken,

		createSKUNode,
		onSuccesCreateSKU,
		onErrorCreateSKU,

		createOrderNode,
		onSuccesCreateOrder,
		onErrorCreateOrder,

		payOrderNode,
		onSuccessPayOrder,
		onErrorPayOrder,

		getProductsNode,

		getCustomerNode,
		onFoundCustomer,
		onNotFoundCustomer,

		createCustomerNode
	],

	connections: [
		stripeConnection
	]
});