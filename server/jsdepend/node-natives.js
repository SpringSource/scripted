/*******************************************************************************
 * @license
 * Copyright (c) 2012 VMware, Inc. All Rights Reserved.
 * THIS FILE IS PROVIDED UNDER THE TERMS OF THE ECLIPSE PUBLIC LICENSE
 * ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THIS FILE
 * CONSTITUTES RECIPIENTS ACCEPTANCE OF THE AGREEMENT.
 * You can obtain a current copy of the Eclipse Public License from
 * https://www.opensource.org/licenses/eclipse-1.0.php
 *
 * Contributors:
 *     Kris De Volder - initial API and implementation
 ******************************************************************************/

/*global exports process*/
var nodeNatives = (process && process.binding('natives')) || {};

function isNativeNodeModule(name) {
	return nodeNatives.hasOwnProperty(name);
}

//Get the source code for native node module
function getCode(name) {
	var code = nodeNatives[name];
	return typeof(code)==='string' && code;
}

exports.MAGIC_PATH_PREFIX = '/NODE-NATIVES/';
exports.isNativeNodeModule = isNativeNodeModule;
exports.getCode = getCode;